import Navbar from "./components/Navbar";
import scrollButton from "../../assets/images/scroll.png"
import Leftside from "./components/Leftside";
import RightSide from "./components/RightSide";
const Header = () => {
  return (
    <div className="w-full h-screen flex md:flex-row flex-col items-center relative">
      <div className="size-28 absolute left-1/2 bottom-4 z-50 -translate-x-1/2 cursor-pointer md:block hidden">
        <img 
         src={scrollButton}
         alt="scrollButton" 
        />
      </div>
      <Navbar />
      <Leftside />
      <RightSide />
    </div>
  )
}

export default Header;
