import { useEffect, useState } from "react";

function useMousePointer() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPointer({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return pointer;
}

export function MouseMove() {
  const mousePointer = useMousePointer();

  return (
    <>
      your mouse position is {mousePointer.x}, {mousePointer.y}
    </>
  );
}
