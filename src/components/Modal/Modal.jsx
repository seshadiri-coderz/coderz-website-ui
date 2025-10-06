"use client";

import { useEffect, useRef } from "react";
import Modal from "bootstrap/js/dist/modal";
import './Modal.css';
/**
 * ModalPopup (Next.js + JSX)
 * Reusable Bootstrap 5 modal as a React component.
 * Props:
 *  - id: string (html id)
 *  - title: string
 *  - show: boolean (control visibility)
 *  - onClose: function
 *  - backdrop: 'static' | true | false
 *  - keyboard: boolean
 *  - primaryAction: { text: string, onClick: func, className?: string, dismiss?: boolean }
 *  - children: modal body content
 */

export default function ModalPopup({
  id = "ModalPopup",
  title = "Modal title",
  show = false,
  onClose = () => {},
  backdrop = "static",
  keyboard = false,
  primaryAction = null,
  children,
}) {
  const elRef = useRef(null);
  const instanceRef = useRef(null);

  useEffect(() => {
    if (!elRef.current) return;
    instanceRef.current = new Modal(elRef.current, { backdrop, keyboard });
    return () => instanceRef.current?.dispose();
  }, [backdrop, keyboard]);

  useEffect(() => {
    if (!instanceRef.current) return;
    if (show) instanceRef.current.show();
    else instanceRef.current.hide();
  }, [show]);

  useEffect(() => {
    if (!elRef.current) return;
    const handler = () => onClose();
    elRef.current.addEventListener("hidden.bs.modal", handler);
    return () => elRef.current.removeEventListener("hidden.bs.modal", handler);
  }, [onClose]);

  const handlePrimary = (e) => {
    if (primaryAction?.onClick) primaryAction.onClick(e);
  };

  return (
    <div
      ref={elRef}
      className="modal fade"
      id={id}
      tabIndex={-1}
      aria-labelledby={`${id}Label`}
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`${id}Label`}>
              {title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>

          <div className="modal-body">{children}</div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>

            {primaryAction ? (
              <button
                type="button"
                className={`btn btn-primary ${primaryAction.className || ""}`}
                onClick={(e) => handlePrimary(e)}
                data-bs-dismiss={primaryAction?.dismiss ? "modal" : undefined}
              >
                {primaryAction.text}
              </button>
            ) : (
              <button type="button" className="btn btn-primary">
                Understood
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// --------------------------
// Example usage (Next.js)
// --------------------------
// "use client";
// import { useState } from "react";
// import ModalPopup from "./ModalPopup";
//
// export default function Example() {
//   const [open, setOpen] = useState(false);
//
//   return (
//     <div>
//       <button className="btn btn-primary" onClick={() => setOpen(true)}>
//         Launch static backdrop modal
//       </button>
//
//       <ModalPopup
//         id="staticBackdrop"
//         title="Modal title"
//         show={open}
//         onClose={() => setOpen(false)}
//         backdrop="static"
//         keyboard={false}
//         primaryAction={{
//           text: "Understood",
//           onClick: () => {
//             console.log("Primary clicked");
//             setOpen(false);
//           },
//           dismiss: true,
//         }}
//       >
//         <p>Modal body content goes here.</p>
//       </ModalPopup>
//     </div>
//   );
// }
