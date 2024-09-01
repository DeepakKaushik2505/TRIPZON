import { LogoWhatsapp } from "react-ionicons";

const Navbar = () => {
  return (
    <div className="absolute z-50 top-5 w-full flex items-center justify-between md:px-16 px-5">
      <div className="flex items-center gap-20">
        <span className="text-white font-bold text-[24px]">Tripzon</span>
        <div className="hidden md:flex items-center gap-10">
          <a href="#" className="text-white font-medium text-lg">
            Destinations
          </a>
          <a href="#" className="text-white font-medium text-lg">
            Services
          </a>
          <a href="#" className="text-white font-medium text-lg">
            Terms of use
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 px-3 rounded-full md:bg-[#0c111fbd] curson-pointer shadow-md">
        <span className="text-white font-medium text-md px-2">
          Connect To Us
        </span>
        <div className="bg-white rounded-full w-11 h-11 flex items-center justify-center ">
          <LogoWhatsapp
           color={"#55cf2a"}
           width="25px" 
           height="25px"
           />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
