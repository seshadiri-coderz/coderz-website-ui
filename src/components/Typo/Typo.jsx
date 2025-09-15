import React from "react";
import PropTypes from "prop-types";

const VARIANT_TO_TAG = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  small: "small",
  span: "span",
  strong: "strong",
  em: "em",
  blockquote: "blockquote",
  code: "code",
  label: "label",
  caption: "figcaption",
};

export default function Typo({
  variant = "p",
  as,
  color,
  weight,
  align,
  className = "",
  children,
  ...props
}) {
  const Tag = as || VARIANT_TO_TAG[variant] || "p";

  const classes = [
    className,
    `typo-${variant}`, // 👈 each variant maps to responsive font-size
    weight ? `fw-${weight}` : "",
    color ? `text-${color}` : "",
    align ? `text-${align}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
}

Typo.propTypes = {
  variant: PropTypes.string,
  as: PropTypes.string,
  color: PropTypes.string, // Bootstrap colors: primary, danger, muted, etc.
  weight: PropTypes.oneOf(["light", "normal", "bold"]),
  align: PropTypes.oneOf(["start", "center", "end"]),
  className: PropTypes.string,
  children: PropTypes.node,
};
