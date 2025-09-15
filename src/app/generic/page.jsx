import React from "react";
import { Typo, Button } from "@/components";

export default function Generic() {
  return (
    <>
      <div className="d-flex flex-column gap-3 p-4">
        <Typo variant="h1" color="primary">
          Page Title
        </Typo>
        <Typo variant="h2" color="danger">
          Section Title
        </Typo>
        <Typo variant="p" color="secondary">
          This is body text with responsive size.
        </Typo>
        <Typo variant="small" color="muted">
          Small muted caption
        </Typo>
        <Typo variant="strong" color="dark">
          Strong / bold text
        </Typo>
        <Typo variant="em" color="warning">
          Italic emphasized text
        </Typo>
        <Typo variant="blockquote">“This is a blockquote example.”</Typo>
        <Typo variant="code">const x = 10;</Typo>
        <Typo variant="label" color="success">
          Form Label
        </Typo>
        <Typo variant="caption" color="info">
          Figure Caption
        </Typo>
      </div>
      <div className="d-flex flex-column gap-3 p-4">
        
      </div>
    </>
  );
}
