const NODES = [
  [80, 120], [220, 55], [340, 175], [500, 85], [640, 195], [780, 105], [920, 175],
  [150, 320], [380, 335], [560, 375], [720, 335], [880, 375],
  [100, 520], [300, 555], [480, 535], [650, 555], [820, 535], [960, 495],
] as const;

const EDGES = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
  [0, 7], [2, 8], [4, 9], [6, 11],
  [7, 8], [8, 9], [9, 10], [10, 11],
  [7, 12], [8, 13], [9, 14], [10, 15], [11, 16],
  [12, 13], [13, 14], [14, 15], [15, 16], [16, 17], [11, 17],
] as const;

export function NetworkBackground({
  className,
  variant = "red-on-dark",
}: {
  className?: string;
  variant?: "red-on-dark" | "black-on-red";
}) {
  const dark = variant === "black-on-red";
  const lineFrom = dark ? "rgba(23,24,28,0.75)" : "var(--color-red-bright)";
  const lineTo = dark ? "rgba(23,24,28,0.15)" : "var(--color-red)";
  const nodeFill = dark ? "var(--color-ink-panel)" : "var(--color-red-bright)";
  const gradientId = dark ? "netLineDark" : "netLine";

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}>
      <div className={dark ? "network-bg-grid-dark absolute inset-0" : "network-bg-grid absolute inset-0"} />
      {dark ? (
        <>
          <div
            className="hero-glow absolute -left-1/4 top-0 h-[60%] w-[60%] rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--color-ink-panel) 0%, transparent 70%)" }}
          />
          <div
            className="hero-glow absolute -right-1/4 bottom-0 h-[55%] w-[55%] rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--color-night) 0%, transparent 70%)", animationDelay: "-7s" }}
          />
        </>
      ) : (
        <>
          <div
            className="hero-glow absolute -left-1/4 top-0 h-[60%] w-[60%] rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--color-red) 0%, transparent 70%)" }}
          />
          <div
            className="hero-glow absolute -right-1/4 bottom-0 h-[55%] w-[55%] rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--color-red-bright) 0%, transparent 70%)", animationDelay: "-7s" }}
          />
        </>
      )}
      <svg
        viewBox="0 0 1000 650"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full opacity-70"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={lineFrom} stopOpacity={dark ? 1 : 0.55} />
            <stop offset="1" stopColor={lineTo} stopOpacity={dark ? 1 : 0.15} />
          </linearGradient>
        </defs>
        {EDGES.map(([a, b], i) => {
          const [x1, y1] = NODES[a];
          const [x2, y2] = NODES[b];
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={`url(#${gradientId})`}
              strokeWidth={dark ? 1.4 : 1}
              className="network-bg-line"
              style={{ animationDelay: `${(i % 6) * -0.6}s` }}
            />
          );
        })}
        {NODES.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={dark ? 3.6 : 3.2}
            fill={nodeFill}
            className="network-bg-node"
            style={{ animationDelay: `${(i % 5) * -0.9}s` }}
          />
        ))}
      </svg>
    </div>
  );
}
