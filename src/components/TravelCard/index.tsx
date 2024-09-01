import { destinationType } from "../../types";
import star from "../../assets/images/star.png"
import play from "../../assets/images/play.png"

interface TravelCardProps extends Omit<destinationType, "id"> {
  shadow?: boolean;
}

const TravelCard = ({
  image,
  title,
  desc,
  price,
  shadow = false,
  location,
  stars,
}: TravelCardProps) => {
  return (
    <div
      className={`w-80  flex flex-col rounded-[30px] ${
        shadow && "shadow-2xl}"
      }`}
    >
      <div className="w-full h-60 rounded-t-[30px] relative overflow-hidden">
        <img
          src={image}
          alt="image"
          className="w-full rounded-t-[30px] mt-[-2px]"
        />
        <div className="absolute top-5 left-5 z-20 backdrop-blur-[8px] rounded-full">
          <div className="flex items-center gap-3 py-1 pl-1 pr-4 w-11 ">
            <img src={star} alt="star" />
            <span className="text-white">{stars}</span>
          </div>
        </div>
        <div className="absolute top-5 right-5 z-50 bg-[#ffffff38] backdrop-blur-[8px] rounded-full">
          <div className="flex items-center gap-3 py-[10px] pl-3 pr-4">
            {/* <Location color={"#fff"} /> */}
            <span className="text-white">{location}</span>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex items-center justify-center cursor-pointer">
          <img src={play} alt="playBtn" className="w-[60px]" />
        </div>
      </div>
      <div className="w-full flex flex-col bg-[#f7f7f7] rounded-b-[30px]">
        <div className="w-full bg-white rounded-b-[30px] p-5 mt-[-15px]">
          <div className="flex flex-col gap-2">
            <span className="font-bold text-[#000000] text-[24px] z-20 ">
              {title}
            </span>
            <p className="text-gray-500 max-w-[80%] leading-7">{desc}</p>
          </div>
        </div>
        <div className="w-full bg-[#f7f7f7] rounded-b-[30px] p-5">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-gray-500">Price</span>
              <span className="font-bold text-[#0C111F]">{price}</span>
            </div>
            <button className="relatuve z-50 rounded-[45px] bg-gradient-to-tl from-[#7723FE] to-[#8482FF] text-center w-[117px] h-[43px]">
              <span className="text-white font-medium texr-[14px]">
                Book Now
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
