type FlameProps = {
  cx: string;
  cy: string;
  showFlame: boolean;
};

export function Flame({ cx, cy, showFlame }: FlameProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="aspect-square h-full w-2/3 transition-all duration-200 sm:w-full"
    >
      <defs>
        <radialGradient
          id="emeraldGradient"
          gradientUnits="userSpaceOnUse"
          r="35%"
          cx={cx}
          cy={cy}
        >
          {showFlame && <stop stopColor="#10b981" />}
          <stop stopColor="#404040" offset={1} />
        </radialGradient>
      </defs>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="url(#emeraldGradient)"
        className="fill-neutral-950/50"
        d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="url(#emeraldGradient)"
        className="fill-neutral-800/50"
        d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
      />
    </svg>
  );
}
