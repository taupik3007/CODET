import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="m-12 ms-24 me-24 flex justify-between items-center">
        <div className="">
          <h1 class="text-sky-700 text-2xl font-extrabold font-primary capitalize absolute">Countify</h1>
        </div>
        <div className="flex space-x-28">
          <div className="flex flex-col space-y-4">
            <h2 className="text-blue-800 text-xl font-semibold font-primary capitalize">About</h2>
            <Link href="a" className="text-black text-xl font-normal font-['Poppins'] capitalize">
              About Us
            </Link>
            <Link href="b" className="text-black text-xl font-normal font-['Poppins'] capitalize">
              Contact Us
            </Link>
            <Link href="c" className="text-black text-xl font-normal font-['Poppins'] capitalize">
              Term Of Use
            </Link>
            <Link href="d" className="text-black text-xl font-normal font-['Poppins'] capitalize">
              Refund Policy
            </Link>
            <Link href="e" className="text-black text-xl font-normal font-['Poppins'] capitalize">
              Privacy Policy
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="text-blue-800 text-xl font-semibold font-primary capitalize">Useful Links</h2>
            <Link href="a" className="text-black text-xl font-normal font-['Poppins'] capitalize">
              Instagram
            </Link>
            <Link href="b" className="text-black text-xl font-normal font-['Poppins'] capitalize">
              Facebook
            </Link>
            <Link href="c" className="text-black text-xl font-normal font-['Poppins'] capitalize">
              LinkedIn
            </Link>
            <Link href="d" className="text-black text-xl font-normal font-['Poppins'] capitalize">
              Telegram
            </Link>
            <Link href="e" className="text-black text-xl font-normal font-['Poppins'] capitalize">
              Youtube
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
