import { ChevronForwardOutline} from "react-ionicons";
import light2 from "../../../../assets/images/light2.png";
import play from "../../../../assets/images/play.png"

const Leftside = () => {
  return (
    <div className="md:w-1/2 w-full h-full bg-[#0c111f] relative">
      <img
        src={light2}
        alt="light"
        className="absolute top-0 left-0 z-20 opacity-30"
      />
      <div className="flex w-full flex-col gap-5 md:absolute left-0 top-1/2 translate-x-0 -translate-y-1/2 md:px-16 z-50 md:mt-0 mt-[450px]">
        <div className="text-white font-bold md:text-[64px] text-[45px] z-50 gap-3 ">
          Best Travel Experiences With{" "}
          <span className="text-[#ffc42a]">Affordable</span> Services
        </div>
        <p className="leading-8 text-[#b6b7bc] text-[17px] max-w-[650px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
          veritatis ratione fugiat rerum nam recusandae sit harum officiis
          commodi. Saepe, maxime in consequuntur nisi voluptate eos repellat quo
          eaque architecto!
        </p>
        <div className="flex md:flex-row flex-col-reverse md:items-center items-start gap-10 mt-5">
          <button className="flex items-center z-50 relative justify-center gap-2 rounded-[100px] bg-gradient-to-tl from-[#F5B100] to-[#F9EC7D] px-5 py-2 w-fit outline-none border-0">
            <div className="font-medium text-[#0C111F] text-[17px]">
              Choose Destination
            </div>
            <div className="flex items-center justify-center bg-[#0c111f] rounded-full p-1 mt-[-1px] shadow-lg">
              <ChevronForwardOutline
                color="#fff"
                width={"19px"}
                height={"19px"}
              />
            </div>
          </button>
          <div className="flex items-center gap-3 cursor-pointer">
                <img src={play} alt="platBtn" className="w-[50px]" />
                <span className="text-white text-[17px]">Watch Introduction Video</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftside;
