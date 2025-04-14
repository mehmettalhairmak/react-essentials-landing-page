import { JSX, ReactNode } from "react";

export default function Tabs({
  children,
  buttons,
  buttonsContainer = "menu",
}: {
  children: ReactNode;
  buttons: ReactNode;
  buttonsContainer?: keyof JSX.IntrinsicElements;
}) {
  const ButtonsContainer = buttonsContainer;

  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
