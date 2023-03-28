import React from "react";

import useEscapeKey from "../../hooks/useEscapeKey";

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const createToast = ({ message, variant }) => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { id, message, variant }]);
  };

  const dismissToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const dismissAllToasts = () => setToasts([]);

  useEscapeKey(dismissAllToasts);

  const value = { toasts, createToast, dismissToast };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;

const ToastContext = React.createContext();

export const useToastContext = () => {
  const state = React.useContext(ToastContext);

  if (!state) throw new Error("Provider is not used");

  return state;
};
