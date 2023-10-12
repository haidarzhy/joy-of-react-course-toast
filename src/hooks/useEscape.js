import React from "react";
export default function useEscape(callback) {
  React.useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        callback();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });
}
