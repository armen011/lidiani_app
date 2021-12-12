import { useState, useLayoutEffect, useEffect } from "react";

const useWindowDimiisions = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

export const useOutsideClick = (firstRef, secondRef, cb) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        firstRef.current &&
        !firstRef.current.contains(event.target) &&
        secondRef.current &&
        !secondRef.current.contains(event.target)
      ) {
        cb();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [firstRef, secondRef, cb]);
};

export default useWindowDimiisions;
