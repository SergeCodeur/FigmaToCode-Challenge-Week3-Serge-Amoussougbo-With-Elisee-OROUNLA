import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

function LayoutGlob({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return ( 
        // <div className="flex flex-col justify-between">
        <div className="flex flex-col justify-between h-full">
            <Navbar/>
                <div className="main bg-orange-200">
                     {children}
                </div>
            <Footer/>
        </div>
     );
}

export default LayoutGlob;