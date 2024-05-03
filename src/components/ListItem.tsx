import CheckIcon from "@heroicons/react/24/outline/CheckIcon";
import type { PropsWithChildren } from "react";

type ListItemProps = PropsWithChildren<{
  showFlame: boolean;
}>;

export function ListItem({ showFlame, children }: ListItemProps) {
  return (
    <li className="flex w-fit flex-row items-center gap-2 leading-none">
      <CheckIcon strokeWidth={showFlame ? 3 : 1.5} className="h-5 w-5" />
      {children}
    </li>
  );
}
