import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import "./Button.css";

/**
 * Button component with Bootstrap styles.
 *
 * Props:
 * - variant: Bootstrap color variant (primary, secondary, success, danger, warning, info, light, dark)
 * - size: Bootstrap size (sm, lg, or default)
 * - outline: Boolean (outline style instead of filled)
 * - block: Boolean (full width button)
 * - href: If provided, renders a Next.js <Link> instead of <button>
 * - type: Button type (button | submit | reset)
 * - disabled: Boolean
 * - className: Additional classes
 */
export default function Button({
  children,
  variant = "primary",
  size,
  outline = false,
  block = false,
  href,
  type = "button",
  disabled = false,
  className = "",
  ...props
}) {
  const baseClass = outline ? `btn btn-outline-${variant}` : `btn btn-${variant}`;
  const sizeClass = size ? `btn-${size}` : "";
  const blockClass = block ? "w-100" : "";

  const classes = [baseClass, sizeClass, blockClass, className]
    .filter(Boolean)
    .join(" ");

  // If href exists -> render Link (anchor styled as button)
  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  size: PropTypes.oneOf(["sm", "lg"]),
  outline: PropTypes.bool,
  block: PropTypes.bool,
  href: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
};
