// Generated SVG cover art for each project: tiny, crisp at any size, no image requests.
const FG = "#f0f2f0";
const MUTED = "#8b8f8c";
const ACCENT = "#f4ce15";
const GREEN = "#379777";

function rng(seed) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function Monitoring() {
  const screens = [];
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 4; c++) {
      const x = 46 + c * 80;
      const y = 52 + r * 66;
      const live = (r * 4 + c) % 5 === 1;
      screens.push(
        <g key={`${r}-${c}`}>
          <rect x={x} y={y} width="66" height="44" rx="4" fill="none" stroke={live ? ACCENT : MUTED} strokeOpacity={live ? 1 : 0.5} />
          <rect x={x + 6} y={y + 8} width={20 + ((r + c) % 3) * 10} height="3" fill={FG} opacity=".5" />
          <rect x={x + 6} y={y + 16} width={34 - ((r * c) % 3) * 8} height="3" fill={FG} opacity=".3" />
          {live && <circle cx={x + 58} cy={y + 8} r="3" fill={ACCENT} />}
        </g>,
      );
    }
  }
  return (
    <>
      {screens}
      <path d="M40 270 H360" stroke={MUTED} strokeOpacity=".4" />
      <path d="M40 270 L100 262 L150 266 L200 250 L250 258 L300 244 L360 252" fill="none" stroke={GREEN} strokeWidth="2" />
    </>
  );
}

function Ocr() {
  // A rotated medicine strip with oriented boxes around the printed fields.
  const rand = rng(7);
  const pills = [];
  for (let r = 0; r < 2; r++) {
    for (let c = 0; c < 4; c++) {
      pills.push(<rect key={`${r}-${c}`} x={-118 + c * 40} y={-62 + r * 34} width="28" height="18" rx="9" fill={FG} opacity={0.14 + rand() * 0.12} />);
    }
  }
  return (
    <>
      <g transform="translate(200 150) rotate(-14)">
        <rect x="-140" y="-80" width="280" height="160" rx="10" fill="#222124" stroke={FG} strokeOpacity=".4" />
        {pills}
        <rect x="-126" y="16" width="132" height="22" fill="none" stroke={ACCENT} strokeWidth="2" />
        <text x="-120" y="31" fontSize="11" fontFamily="monospace" fill={FG}>B.NO. MX24A7</text>
        <rect x="18" y="16" width="108" height="22" fill="none" stroke={GREEN} strokeWidth="2" strokeDasharray="6 4" />
        <text x="24" y="31" fontSize="11" fontFamily="monospace" fill={FG}>EXP 03/27</text>
        <rect x="-126" y="46" width="70" height="14" fill={ACCENT} />
        <text x="-122" y="56" fontSize="9" fontFamily="monospace" fill="#222124">OBB 0.97</text>
      </g>
      <text x="40" y="276" fontSize="11" fontFamily="monospace" fill={MUTED}>batch ok · expiry ok</text>
      <circle cx="356" cy="272" r="6" fill={GREEN} />
    </>
  );
}

function Vending() {
  const rand = rng(42);
  const cells = [];
  const size = 9;
  for (let r = 0; r < 17; r++) {
    for (let c = 0; c < 17; c++) {
      const finder = (r < 5 && c < 5) || (r < 5 && c > 11) || (r > 11 && c < 5);
      if (finder) continue;
      if (rand() > 0.55) cells.push(<rect key={`${r}-${c}`} x={124 + c * size} y={74 + r * size} width={size - 1} height={size - 1} fill={FG} opacity=".75" />);
    }
  }
  const finder = (x, y) => (
    <g key={`${x}-${y}`}>
      <rect x={x} y={y} width="44" height="44" fill="none" stroke={ACCENT} strokeWidth="5" />
      <rect x={x + 13} y={y + 13} width="18" height="18" fill={ACCENT} />
    </g>
  );
  return (
    <>
      {cells}
      {finder(124, 74)}
      {finder(232, 74)}
      {finder(124, 182)}
      <rect x="100" y="50" width="200" height="200" rx="10" fill="none" stroke={MUTED} strokeOpacity=".5" />
      <path d="M90 276 H310" stroke={GREEN} strokeWidth="3" strokeLinecap="round" />
    </>
  );
}

function FaceTrack() {
  // Floor plan watched by three cameras, one person's path stitched across them.
  const cams = [
    { x: 40, y: 40, a: 45 },
    { x: 250, y: 40, a: 135 },
    { x: 40, y: 230, a: -45 },
  ];
  const path = [[78, 196], [112, 150], [160, 128], [204, 90], [236, 70]];
  return (
    <>
      <rect x="28" y="28" width="236" height="214" fill="none" stroke={FG} strokeOpacity=".35" />
      <path d="M146 28 V96 M28 150 H96" stroke={FG} strokeOpacity=".2" />
      {cams.map((c, i) => (
        <g key={i} transform={`translate(${c.x} ${c.y}) rotate(${c.a})`}>
          <path d="M0 0 L120 -46 A124 124 0 0 1 120 46 Z" fill={GREEN} opacity=".1" />
          <rect x="-8" y="-6" width="16" height="12" rx="2" fill={GREEN} />
        </g>
      ))}
      <polyline points={path.map((p) => p.join(",")).join(" ")} fill="none" stroke={ACCENT} strokeWidth="2" strokeDasharray="5 5" />
      {path.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === path.length - 1 ? 6 : 3.5} fill={ACCENT} />
      ))}
      <g transform="translate(290 46)">
        <rect width="86" height="98" rx="4" fill="#222124" stroke={FG} strokeOpacity=".4" />
        <ellipse cx="43" cy="46" rx="22" ry="28" fill="none" stroke={FG} strokeOpacity=".5" />
        <rect x="16" y="14" width="54" height="64" fill="none" stroke={ACCENT} strokeWidth="2" />
        {[[35, 40], [51, 40], [43, 52], [36, 62], [50, 62]].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="2.5" fill={ACCENT} />
        ))}
        <text x="43" y="92" textAnchor="middle" fontSize="9" fontFamily="monospace" fill={FG}>ID 0142</text>
      </g>
      <g transform="translate(290 168)">
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={i * 22} y="0" width="16" height="10" fill={FG} opacity={0.2 + i * 0.18} />
        ))}
        <ellipse cx="43" cy="44" rx="34" ry="8" fill="none" stroke={GREEN} strokeWidth="2" />
        <path d="M9 44 V66 A34 8 0 0 0 77 66 V44" fill="none" stroke={GREEN} strokeWidth="2" />
      </g>
      <text x="28" y="272" fontSize="11" fontFamily="monospace" fill={MUTED}>3 cameras, 1 identity, 5 sightings logged</text>
    </>
  );
}

function Checkout() {
  // Top view of the counter: segmented box and strips on the left, the bill on the right.
  return (
    <>
      <rect x="28" y="40" width="214" height="220" rx="8" fill="#222124" stroke={FG} strokeOpacity=".3" />
      <g transform="rotate(-8 92 110)">
        <rect x="52" y="74" width="90" height="62" rx="3" fill={FG} opacity=".16" />
        <rect x="48" y="70" width="98" height="70" fill="none" stroke={ACCENT} strokeWidth="2" />
        <rect x="48" y="56" width="40" height="14" fill={ACCENT} />
        <text x="52" y="66" fontSize="9" fontFamily="monospace" fill="#222124">BOX</text>
      </g>
      {[0, 1].map((i) => (
        <g key={i} transform={`translate(${70 + i * 82} ${168 + i * 12}) rotate(${i ? 12 : -6})`}>
          <rect width="64" height="58" rx="6" fill={FG} opacity=".1" />
          {[0, 1, 2].map((r) => (
            <g key={r}>
              <circle cx="18" cy={12 + r * 17} r="6" fill={FG} opacity=".3" />
              <circle cx="46" cy={12 + r * 17} r="6" fill={FG} opacity={i && r === 2 ? 0.06 : 0.3} />
            </g>
          ))}
          <rect x="-3" y="-3" width="70" height="64" rx="8" fill="none" stroke={GREEN} strokeWidth="2" strokeDasharray="6 4" />
        </g>
      ))}
      <g transform="translate(262 40)">
        <rect width="112" height="220" rx="4" fill={FG} opacity=".92" />
        <rect x="12" y="14" width="56" height="6" fill="#222124" opacity=".7" />
        {[0, 1, 2].map((r) => (
          <g key={r}>
            <rect x="12" y={40 + r * 26} width={r ? 52 : 64} height="5" fill="#222124" opacity=".45" />
            <rect x="12" y={49 + r * 26} width="30" height="4" fill={r ? GREEN : ACCENT} />
            <rect x="80" y={40 + r * 26} width="20" height="5" fill="#222124" opacity=".6" />
          </g>
        ))}
        <path d="M12 134 H100" stroke="#222124" strokeOpacity=".3" strokeDasharray="3 3" />
        <rect x="12" y="146" width="34" height="7" fill="#222124" opacity=".8" />
        <rect x="68" y="146" width="32" height="7" fill="#222124" opacity=".8" />
        <rect x="12" y="186" width="88" height="20" rx="3" fill={ACCENT} />
        <text x="56" y="200" textAnchor="middle" fontSize="10" fontFamily="monospace" fill="#222124">PAY</text>
      </g>
      <text x="28" y="282" fontSize="11" fontFamily="monospace" fill={MUTED}>1 box + 2 strips billed</text>
    </>
  );
}

function Anpr() {
  // A truck at the gate: plate read by vision, tag read by RFID, both tied to its container.
  return (
    <>
      <path d="M24 236 H376" stroke={MUTED} strokeOpacity=".5" />
      <path d="M24 236 H376" stroke={FG} strokeOpacity=".25" strokeDasharray="14 12" transform="translate(0 14)" />
      <g fill="#222124" stroke={FG} strokeOpacity=".55">
        <rect x="128" y="104" width="178" height="112" rx="3" />
        <path d="M60 216 V156 L76 134 H122 V216 Z" />
      </g>
      {Array.from({ length: 9 }, (_, i) => (
        <line key={i} x1={146 + i * 18} x2={146 + i * 18} y1="114" y2="206" stroke={FG} strokeOpacity=".14" />
      ))}
      <path d="M68 158 L80 142 H112 V158 Z" fill={FG} opacity=".18" />
      {[92, 180, 270].map((x) => (
        <circle key={x} cx={x} cy="222" r="14" fill="#222124" stroke={FG} strokeOpacity=".6" strokeWidth="2" />
      ))}
      <rect x="36" y="186" width="44" height="14" fill={FG} opacity=".85" />
      <rect x="30" y="180" width="56" height="26" fill="none" stroke={ACCENT} strokeWidth="2" />
      <rect x="30" y="160" width="92" height="16" fill={ACCENT} />
      <text x="35" y="172" fontSize="10" fontFamily="monospace" fill="#222124">GJ06 AB 1234</text>
      <rect x="160" y="128" width="112" height="22" fill="none" stroke={GREEN} strokeWidth="2" strokeDasharray="6 4" />
      <text x="168" y="143" fontSize="11" fontFamily="monospace" fill={FG}>MSKU 482193</text>
      <path d="M86 168 C120 100 150 90 160 139" fill="none" stroke={ACCENT} strokeWidth="1.5" strokeDasharray="4 4" />
      <line x1="352" y1="236" x2="352" y2="120" stroke={FG} strokeOpacity=".6" strokeWidth="3" />
      <rect x="340" y="104" width="24" height="18" rx="3" fill={GREEN} />
      {[16, 30, 44].map((r) => (
        <path key={r} d={`M${340 - r * 0.3} ${113 - r} A${r} ${r} 0 0 0 ${340 - r * 0.3} ${113 + r}`} fill="none" stroke={GREEN} strokeOpacity={0.9 - r / 60} strokeWidth="2" />
      ))}
      <text x="24" y="276" fontSize="11" fontFamily="monospace" fill={MUTED}>plate + tag + container matched</text>
    </>
  );
}

function AiScraper() {
  // Two versions of the same page: the layout moves, the extracted fields follow.
  const page = (x, blocks) => (
    <g transform={`translate(${x} 58)`}>
      <rect width="130" height="184" rx="6" fill="#222124" stroke={FG} strokeOpacity=".45" />
      <rect x="0" y="0" width="130" height="18" rx="6" fill={FG} opacity=".12" />
      {blocks.map((b) => (
        <rect key={b.key} x={b.x} y={b.y} width={b.w} height={b.h} rx="2" fill={b.hit ? "none" : FG} opacity={b.hit ? 1 : 0.22} stroke={b.hit ? b.hit : "none"} strokeWidth="2" />
      ))}
    </g>
  );
  return (
    <>
      {page(44, [
        { key: "t", x: 12, y: 30, w: 90, h: 10, hit: ACCENT },
        { key: "a", x: 12, y: 48, w: 106, h: 6 },
        { key: "b", x: 12, y: 60, w: 80, h: 6 },
        { key: "p", x: 12, y: 80, w: 48, h: 16, hit: GREEN },
        { key: "c", x: 12, y: 108, w: 106, h: 54 },
      ])}
      {page(226, [
        { key: "c", x: 12, y: 30, w: 106, h: 50 },
        { key: "p", x: 70, y: 92, w: 48, h: 16, hit: GREEN },
        { key: "a", x: 12, y: 120, w: 106, h: 6 },
        { key: "t", x: 12, y: 138, w: 90, h: 10, hit: ACCENT },
        { key: "b", x: 12, y: 156, w: 70, h: 6 },
      ])}
      <g fill="none" strokeWidth="1.5" strokeDasharray="4 4">
        <path d="M150 93 C200 93 190 201 238 201" stroke={ACCENT} />
        <path d="M108 146 C190 146 210 158 296 158" stroke={GREEN} />
      </g>
      <rect x="148" y="22" width="104" height="20" rx="10" fill={ACCENT} />
      <text x="200" y="36" textAnchor="middle" fontSize="11" fontFamily="monospace" fill="#222124">layout changed</text>
      <text x="44" y="272" fontSize="11" fontFamily="monospace" fill={MUTED}>v1</text>
      <text x="226" y="272" fontSize="11" fontFamily="monospace" fill={MUTED}>v2  fields matched 2/2</text>
    </>
  );
}

const ART = {
  aiscraper: AiScraper,
  monitoring: Monitoring,
  ocr: Ocr,
  anpr: Anpr,
  checkout: Checkout,
  facetrack: FaceTrack,
  vending: Vending,
};

export default function ProjectArt({ id, title }) {
  const Art = ART[id];
  return (
    <svg className="art" viewBox="0 0 400 300" role="img" aria-label={`${title} illustration`}>
      <defs>
        <pattern id={`grid-${id}`} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0 H0 V20" fill="none" stroke={FG} strokeOpacity=".05" />
        </pattern>
        <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill={ACCENT} />
        </marker>
      </defs>
      <rect width="400" height="300" fill="#2b2a2e" />
      <rect width="400" height="300" fill={`url(#grid-${id})`} />
      {Art && <Art />}
    </svg>
  );
}
