import { CircleStackIcon } from "@heroicons/react/24/outline";
import { Flame } from "./components/Flame";
import { useRef, useState, type MouseEventHandler } from "react";
import { ListItem } from "./components/ListItem";

function App() {
  const cardsRef = useRef<HTMLElement>(null);
  const [gradCenter, setGradCenter] = useState({ cx: "50%", cy: "50%" });
  const [showFlame, setShowFlame] = useState(false);

  const handleMouseMove: MouseEventHandler<HTMLElement> = ({
    clientX,
    clientY,
  }) => {
    if (cardsRef.current != null) {
      const { left, top, width, height } =
        cardsRef.current.getBoundingClientRect();
      const cx = (((clientX - left) / width) * 100 - 24).toPrecision(4);
      const cy = (((clientY - top) / height) * 100).toPrecision(4);
      setGradCenter({
        cx: `${cx}%`,
        cy: `${cy}%`,
      });
    }
  };

  return (
    <main className="flex h-screen w-full place-items-center justify-center">
      <section
        className="card @container"
        tabIndex={0}
        ref={cardsRef}
        onMouseOver={handleMouseMove}
        onMouseEnter={() => setShowFlame(true)}
        onMouseLeave={() => setShowFlame(false)}
      >
        <div className="flex max-w-prose flex-grow flex-col justify-between gap-5 font-poppins tracking-wide sm:basis-2/5">
          <header className="flex flex-row justify-start gap-2">
            <CircleStackIcon className="block h-9 w-9 rounded-lg bg-neutral-950/70 stroke-emerald-500 shadow-inner" />
            <h1 className="leading-none">Database</h1>
          </header>
          <p className="text-neutral-500">
            Every project is a full Postgres database, the world's most trusted
            relational database.
          </p>
          <ul
            role="list"
            className="mb-auto flex basis-1/3 flex-row flex-wrap gap-2 text-neutral-200 transition-all duration-200"
          >
            <ListItem showFlame={showFlame}>100% portable</ListItem>
            <ListItem showFlame={showFlame}>Built-in Auth with RLS</ListItem>
            <ListItem showFlame={showFlame}>Easy to extend</ListItem>
          </ul>
        </div>
        <div className="grid flex-grow place-items-center sm:basis-3/5">
          <Flame cx={gradCenter.cx} cy={gradCenter.cy} showFlame={showFlame} />
        </div>
      </section>
    </main>
  );
}

export default App;
