import light from "../../assets/images/light.png";

const Footer = () => {
  return (
    <div className="w-full md:h-[400px] bg-[#0C111F] relative overflow-hidden flex flex-col items-center justify-center md:px-20 px-5 md:py-0 py-10">
      <img
        src={light}
        alt="light"
        className="absolute top-0 left-0 z-0 opacity-30 w-1/2"
      />
      <div className="flex md:flex-row flex-col md:items-center items-start justify-between w-full">
        <div className="flex flex-col gap-8">
          <span className="font-bold text-white text-[40px] z-50">
            Travel App
          </span>
          <p className="text-gray-200 leading-8 max-w-[600px] z-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            debitis. Sunt voluptatem, ab sapiente iure rem officiis quidem!
            Eligendi qui incidunt fugit omnis labore voluptatem nobis deserunt
            dolor ipsam consequuntur!
          </p>
        </div>
        <div className="flex md:flex-row flex-col md:items-center items-start md:gap-28 gap-8 md:mt-0 mt-10">
          <div className="flex flex-col md:mb-0 mb-5">
            <span className="font-medium text-[#ffc42a] text-[17px] mb-5">
              Services
            </span>
            <a href="#" className="text-white font-medium text-[15px] mb-4">
              Travel Packages
            </a>
            <a href="#" className="text-white font-medium text-[15px] mb-4">
              Hotels
            </a>
            <a href="#" className="text-white font-medium text-[15px] mb-4">
              Planes
            </a>
          </div>
          <div className="flex flex-col md:mb-0 mb-5">
            <span className="font-medium text-[#ffc42a] text-[17px] mb-5">
              Destinations
            </span>
            <a href="#" className="text-white font-medium text-[15px] mb-4">
              Turkey
            </a>
            <a href="#" className="text-white font-medium text-[15px] mb-4">
              Italy
            </a>
            <a href="#" className="text-white font-medium text-[15px] mb-4">
              Egypt
            </a>
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-[#ffc42a] text-[17px] mb-5">
              Follow Us
            </span>
            <a href="#" className="text-white font-medium text-[15px] mb-4">
              Facebook
            </a>
            <a href="#" className="text-white font-medium text-[15px] mb-4">
              Twitter
            </a>
            <a href="#" className="text-white font-medium text-[15px] mb-4">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
