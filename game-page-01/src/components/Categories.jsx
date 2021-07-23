import { useEffect, useMemo, useRef, useState } from "react";

export default function Categories({ time = 4250 }) {
  const [index, set] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const interval = setInterval(() => set((index + 1) % 3), time);
    return () => clearInterval(interval);
  }, [index]);

  const categories = useMemo(
    () => [
      { textA: "I'm a", textB: "software developer engineer." },
      {
        textA: "I love to",
        textB: "code using Java, TypeScript, Python and other languages. ",
      },
      {
        textA: "I like to",
        textB: " challenge myself everyday as a full stack developer.",
      },
    ],
    []
  );

  useEffect(() => {
    ref.current.style.animation = "none";
    void ref.current.offsetHeight;
    ref.current.style.animation = `changewidth ${time / 1000}s linear`;
  }, [index]);

  return (
    <p style={{ height: 70 }}>
      <a href="#" onClick={() => set((index + 1) % 3)}>
        
        &nbsp;
        {categories.map(({ textA }, i) => (
          <span
            key={i}
            hidden={i !== index || undefined}
            className="transition vertical"
          >
            {textA}
          </span>
        ))}
      </a>
      <div
          ref={ref}
          className="progress"
          style={{
            
            
            height: 2,
            opacity: 0.5,
            background: "#3D99E9",
          }}
        />
      {categories.map(({ textB }, i) => (
        <span
          key={i}
          hidden={i !== index || undefined}
          className="transition horizontal"
          style={{ width: "100%" }}
        >
          {textB}
        </span>
      ))}
    </p>
  );
}
