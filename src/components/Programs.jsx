import Programs1 from "../assets/Programs 1.jpeg";
import Programs2 from "../assets/Programs 2.jpeg";
import Programs3 from "../assets/Programs 3.jpeg";
import CardProgram from "./CardProgram";

const Programs = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center bg-sky-700  space-y-8">
        <h1 className="w-[789px] text-center text-white text-3xl font-bold font-['Poppins'] capitalize">Programs</h1>
        <h2 className="w-[789px] text-white text-[15px] text-center font-medium font-['Poppins'] capitalize">100+ Successful Alumni working at top product-Based company penduduk</h2>
        <div className="flex space-x-5">
          <CardProgram img={Programs1} title="Program 1" desc="Who want to rocket-start their career and get placed in thier dream companies" />
          <CardProgram img={Programs2} title="Program 2" desc="Who want to rocket-start their career and get placed in thier dream companies" />
          <CardProgram img={Programs3} title="Program 3" desc="Who want to rocket-start their career and get placed in thier dream companies" />
        </div>
      </div>
    </>
  );
};

export default Programs;
