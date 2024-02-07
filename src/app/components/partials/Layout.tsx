import { Footer } from "../../../components/Footer";
// import { Navbar } from "./Navbar";
import Navbar from "@/components/Navbar";
function LayoutGlob({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return ( 
        // <div className="flex flex-col justify-between">
        <div className="flex flex-col justify-between h-full">
            <Navbar/>
                <div className="main">
                     {children}
                </div>
            <Footer/>
        </div>
     );
}

export default LayoutGlob;