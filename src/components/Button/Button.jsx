
"use client";

import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import "./Button.css";

export default function Button({ label, variant="test",onClick, type = "button" }) {
  return (
    <button
      className={`${variant}`}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
};
