import Profile from "../assets/Profile.jpeg";
import CardPeople from "./CardPeople";

const People = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center bg-indigo-50 ">
        <div className="flex flex-col justify-center items-center space-y-6 ">
          <h1 className="w-[1021px] text-center text-black text-4xl font-medium font-primary capitalize">get inspired by someone like you</h1>
          <div className="flex space-x-5">
            <CardPeople
              profile={Profile}
              name="akhil reddy"
              position="Software Engineer At Reco"
              comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, reprehenderit vitae delectus quaerat sequi nam perspiciatis dolores amet iure? Voluptatibus aliquid deleniti quis. Beatae voluptas eligendi, sunt voluptatem ipsa ea."
            ></CardPeople>
            <CardPeople
              profile={Profile}
              name="akhil reddy"
              position="Software Engineer At Reco"
              comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, reprehenderit vitae delectus quaerat sequi nam perspiciatis dolores amet iure? Voluptatibus aliquid deleniti quis. Beatae voluptas eligendi, sunt voluptatem ipsa ea."
            ></CardPeople>
            <CardPeople
              profile={Profile}
              name="akhil reddy"
              position="Software Engineer At Reco"
              comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, reprehenderit vitae delectus quaerat sequi nam perspiciatis dolores amet iure? Voluptatibus aliquid deleniti quis. Beatae voluptas eligendi, sunt voluptatem ipsa ea."
            ></CardPeople>
          </div>
          <div className="w-[108px] h-[21px] relative">
            <div className="w-[21px] h-[21px] left-0 top-0 absolute bg-zinc-300 rounded-full"></div>
            <div className="w-[21px] h-[21px] left-[29px] top-0 absolute bg-blue-800 rounded-full"></div>
            <div className="w-[21px] h-[21px] left-[58px] top-0 absolute bg-zinc-300 rounded-full"></div>
            <div className="w-[21px] h-[21px] left-[87px] top-0 absolute bg-zinc-300 rounded-full"></div>
          </div>
          <button className="w-[308px] h-[60px] bg-white rounded-[10px] border border-sky-700 text-center text-sky-700 text-xl font-semibold font-['Inter'] capitalize">Read More Reviews</button>
        </div>
      </div>
    </>
  );
};

export default People;
