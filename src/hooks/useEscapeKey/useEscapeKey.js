import React from "react";

function useEscapeKey(callback) {
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape") callback?.();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [callback]);

  return null;
}

export default useEscapeKey;
