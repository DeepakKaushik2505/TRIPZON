import balloon from "../../../../assets/images/balloon.jpg"
//import d1
import TravelCard from "../../../TravelCard"
const RightSide = () => {
  return (
    <div 
        className="w-1/2 h-full relative bg-cover bg-center md:block hidden"
        style={{ backgroundImage: `url(${balloon})`}}
    >
        <div className="w-full flex h-full items-center justify-center z-50">
           <TravelCard
              image={balloon}
              title="Cappadocia"
              desc="lorem, ipsum door sie dcnk cksdjc kvdjf djsjn dfjsk dnsj sdjn"
              price="$899,999"
              shadow
              location="Turkey"
              stars="5.0"


            />
        </div>
    </div>
  )
}

export default RightSide
