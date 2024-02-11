import { cn } from "../lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};
const MaxContentWidthWrapper: React.FC<Props> = ({ children, className }) => {
  return (
    // <div className={cn("max-w-[1050px] max-lg:px-5 mx-auto w-full", className)}>
    <div className={cn("max-lg:px-5 mx-auto w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl", className)}>
      {children}
    </div>
  );
};

export default MaxContentWidthWrapper;
