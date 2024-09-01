import { Chatbubbles, Star } from "react-ionicons";
import user from "../../assets/images/user.jpg";

const Comments = () => {
  return (
    <div className="w-full flex md:flex-row flex-col items-center justify-center gap-28 px-20 mt-20 bg-[#f7f7f7] md:h-[450px] md:py-0 py-10">
      <Chatbubbles width={"120px"} height={"120px"} color={"#cdcdcd"} />
      <div className="flex flex-col gap-3 relative bg-white shadow-xl rounded-[20px] p-6">
        <div className="absolute left-6 top-[-50px] backdrop-blur flex items-center justify-center">
          <img src={user} alt="user" className="rounded-full w-16"/>
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <span className="font-bold text-[#0C111F] text-[20px]">
            Deepak Kaushik
          </span>
          <div className="flex items-center gap-2">
            <Star width={"20px"} height={"20px"} color="#F6973F" />
            <Star width={"20px"} height={"20px"} color="#F6973F" />
            <Star width={"20px"} height={"20px"} color="#F6973F" />
            <Star width={"20px"} height={"20px"} color="#F6973F" />
            <Star
              width={"20px"}
              height={"20px"}
              color="#F6973F"
              cssClasses={"opacity-30"}
            />
          </div>
        </div>
        <p className="leading-8 text-gray-500 max-w-[450px]">
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          consectetur!"
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <span className="font-bold text-[40px] md:text-left text-center text-[#0C111F] ">
          What People Say About Us ?
        </span>
        <p className="text-gray-500 leading-8 max-w-[650px] md:text-left text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
          nesciunt voluptates aliquam vel. Necessitatibus enim itaque
          consequatur aspernatur architecto cum maiores fugiat!
        </p>
      </div>
    </div>
  );
};

export default Comments;
