import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { useToastContext } from "../ToastProvider";

function ToastShelf() {
  const { toasts, dismissToast } = useToastContext();

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast variant={toast.variant} onClose={() => dismissToast(toast.id)}>
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
