import { Fragment, useEffect, useRef, useState } from "react";

export function useInView(options = { threshold: 0.2 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        io.disconnect();
      }
    }, options);
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return [ref, inView];
}

// Splits text into words that blur in one after another when scrolled into view.
export default function Reveal({ as: Tag = "p", text, className = "", delay = 0, ...rest }) {
  const [ref, inView] = useInView();
  const words = text.split(" ");

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      data-in={inView}
      style={{ "--delay": `${delay}ms` }}
      {...rest}
    >
      <span className="sr-only">{text}</span>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className="reveal__word" style={{ "--i": i }} aria-hidden="true">
            {word}
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Tag>
  );
}
