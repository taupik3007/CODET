import { Link, Outlet } from "react-router-dom";
import Family from "../assets/Family.jpeg";

const Jumbotron = () => {
  return (
    <>
      <div className="h-screen flex max-md:flex-col justify-center items-center space-x-28">
        <div className="md:space-y-28">
          <div className="space-y-10">
            <h1 className="text-center text-sky-700 text-3xl font-bold font-primary capitalize">Sensus penduduk</h1>
            <p className="md:w-[560px] text-justify text-sky-700 text-[15px] font-medium font-primary capitalize">
              aplikasi web inovatif yang bertujuan untuk menyederhanakan dan memodernisasi proses sensus penduduk. Aplikasi ini dirancang untuk memberikan pengalaman pengguna yang mudah dan efisien, sambil memberdayakan komunitas dengan
              data yang akurat dan relevan.
            </p>
          </div>
          <div className="flex max-md:flex-col justify-center items-center md:space-x-12 max-md:space-y-4">
            <Link to="/login" className="w-64 h-12 flex justify-center items-center bg-sky-700 rounded-[10px] border border-sky-700 text-white text-[25px] font-semibold font-['Inter'] capitalize">
              Log In
            </Link>
            <Link to="/register" className="w-64 h-12 flex justify-center items-center bg-white rounded-[10px] border border-slate-500 text-sky-700 text-[25px] font-semibold font-['Inter'] capitalize">
              Register
            </Link>
          </div>
        </div>
        <div>
          <img src={Family} alt="" className="w-96 rounded-[76px]" />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Jumbotron;
