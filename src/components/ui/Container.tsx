import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="min-h-screen w-full max-w-7xl mx-auto">{children}</div>
  );
};

export default Container;
