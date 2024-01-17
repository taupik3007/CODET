import { Link } from "react-router-dom";

const CardPeople = (props) => {
  return (
    <>
      <div className="w-[300px] h-[400px] bg-white rounded-[19.48px] border border-blue-800">
        <div className="m-6 space-y-6">
          <div className="flex justify-center items-center space-x-5">
            <img src={props.profile} alt="" className="w-20 rounded-full shadow border-2 border-indigo-300" />
            <div>
              <h1 className="text-black text-xl font-normal font-['Poppins'] uppercase ">{props.name}</h1>
              <h2 className="text-black text-xs font-normal font-['Poppins'] capitalize">{props.position}</h2>
            </div>
          </div>
          <p className="text-justify text-black text-md font-normal font-['Poppins']">
            <span className="text-blue-800 text-2xl font-normal font-['Inter'] lowercase">“</span>
            {props.comment}
            <span className="text-blue-800 text-2xl font-normal font-['Inter'] lowercase">“</span>
          </p>
          <Link href="a" className="flex justify-end items-end opacity-80 text-black text-md font-normal font-['Poppins'] lowercase">
            read more
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardPeople;
