import { ReactNode } from "react";

export default function Tabs({
  children,
  buttons,
}: {
  children: ReactNode;
  buttons: ReactNode;
}) {
  return (
    <>
      <menu>{buttons}</menu>
      {children}
    </>
  );
}
