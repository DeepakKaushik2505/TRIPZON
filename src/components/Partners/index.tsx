import { partners } from "../../data";

const Partners = () => {
  return (
    <div className="w-full md:py-0 py-10 bg-[#f7f7f7] flex md:flex-row flex-col items-center justify-center gap-20 px-44 mb-20">
      {partners.map((partner) => (
        <img
          src={partner.image}
          alt={partner.alt}
          key={partner.alt}
          className="opacity-50 cursor-pointer w-36"
        />
      ))}
    </div>
  );
};

export default Partners;
