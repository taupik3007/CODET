const CardProgram = (props) => {
  return (
    <>
      <div className="w-[300px] h-[450px] bg-white rounded-[50px]">
        <img src={props.img} alt="" className="rounded-tl-[50px] rounded-tr-[50px] shadow" />
        <div className="flex flex-col justify-center items-center space-y-2">
          <h2 className="text-black text-[20px] font-semibold font-['Poppins'] capitalize">{props.title}</h2>
          <p className="text-center text-black text-[12px] font-normal font-['Poppins'] capitalize">{props.desc}</p>
          <button className="p-2 bg-white rounded-[10px] border border-sky-700 text-sky-700 text-md font-medium font-['Inter'] capitalize">View Program</button>
        </div>
      </div>
    </>
  );
};

export default CardProgram;
