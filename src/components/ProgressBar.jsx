import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

export default function ProgressBars() {
  return (
    <ProgressBar
      percent={80}
      filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
    />
  );
}
