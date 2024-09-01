import { offers } from "../../data";
import offer from '../../assets/images/offer.jpg'

const Offer = () => {
  return (
    <div className="w-full mb-20 mt-20 md:px-20 px-5 flex md:flex-row flex-col items-center justify-between">
      <div className="flex md:w-1/3 w-full flex-col gap-10">
        <div className="flex flex-col gap-4">
          <span className="font-bold text-[40px] text-[#0C111F] max-w-[500px]">
            What We Offer In Our Packages
          </span>
          <p className="leading-7 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad earum
            vitae doloribus optio animi quidem magni eveniet deleniti
            recusandae
          </p>
        </div>
        <img src={offer} alt="offer" className="w-[600px] rounded-[80px]" />
      </div>
      <div className="flex flex-col md:w-1/2 w-full gap-16">
        {offers.map((item) => (
          <div className="flex items-center gap-7" key={item.title}>
            <img src={item.image} alt={item.title} className="w-[80px] " />
            <div className="flex flex-col gap-3">
                <span className="font-bold text-[#0C111F] text-[20px]">{item.title}</span>
                <p className="text-gray-500 leading-7 max-w-[500px]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
