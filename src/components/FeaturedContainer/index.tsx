import { destinationType } from "../../types";
import TravelCard from "../TravelCard";

interface FeaturedContainerProps{
    title: string;
    data: destinationType[]; //array of destinationType
}

const FeaturedContainer = ({title,data}:FeaturedContainerProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-center md:px-20 px-5 mb-20">
        <div className="flex w-full flex-col items-center gap-2">
            <span className="font-bold text-[#0C111F] text-[40px] text-center">{title}</span>
            <p className="leading-8 text-gray-500 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, provident.
            </p>
        </div>
        <div className="w-full flex md:flex-row flex-col items-center justify-between gap-20 mt-12">
            {data.map((item) => 
            <TravelCard
                key={item.id}
                image={item.image}
                title={item.title}
                desc={item.desc}
                price={item.price}
                location={item.location}
                stars={item.stars}
            />
        )}
        </div>
    </div>
  )
}

export default FeaturedContainer
