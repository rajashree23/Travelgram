import { useEffect } from "react";

export const useClickOutside = (ref, setState) => {
    useEffect(() => {
      const closeOptionsModal = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          setState(false);
        }
      };
      document.addEventListener("mousedown", closeOptionsModal);
      document.addEventListener("touchstart", closeOptionsModal);
  
      return () => {document.removeEventListener("mousedown", closeOptionsModal);
      document.addEventListener("touchstart", closeOptionsModal);}
    }, [setState, ref]);
  };