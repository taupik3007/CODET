import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="h-screen bg-sky-700 flex justify-center items-center">
        <Link to="/" className="text-white text-3xl font-bold font-primary capitalize absolute end-8 top-8">
          Countify
        </Link>
        <div className="w-[400px] h-[550px] bg-blue-100 rounded-[15px] border border-slate-500 flex flex-col justify-center items-center space-y-20">
          <div className="space-y-6 flex flex-col justify-center items-center">
            <h1 className="text-center text-sky-700 text-3xl font-bold font-primary capitalize">Create Account</h1>
            <input type="text" className="ps-3 w-[350px] h-[50px] bg-white rounded-[20px]" placeholder="Name" />
            <input type="text" className="ps-3 w-[350px] h-[50px] bg-white rounded-[20px]" placeholder="Your E-mail" />
            <input type="password" className="ps-3 w-[350px] h-[50px] bg-white rounded-[20px]" placeholder="Password" />
            <button className="w-[225px] h-[45px] bg-sky-700 rounded-[10px] text-center text-white text-[25px] font-semibold font-['Inter'] capitalize">Sign Up</button>
          </div>
          <p className="text-black text-md font-normal font-primary">
            Already Have Account?
            <Link to="/login" className="ms-1 text-sky-700 text-md font-semibold font-primary">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
