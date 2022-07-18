import React from "react";

function Message({ type, message }) {
  return (
    <div
      className={`message ${
        type === "error"
          ? "message-error"
          : type === "warning"
          ? "message-warning"
          : type === "success"
          ? "message-success"
          : ""
      }`}
    >
      <p>
        <span>
          <strong>Atenção: </strong>
        </span>
        <span>{message}</span>
      </p>
    </div>
  );
}

export default Message;
