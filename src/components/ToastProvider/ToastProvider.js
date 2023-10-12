import React from "react";

export const ToastContext = React.createContext();
function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  function removeToast(id) {
    const newToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(newToasts);
  }

  function createToast(toast) {
    setToasts([...toasts, toast]);
  }
  return (
    <ToastContext.Provider value={{ toasts, createToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
