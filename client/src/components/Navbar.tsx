import { FC } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar: FC = () => {
  return (
    <div className="w-full fixed top-0 z-50 h-52 bg-gradient-to-b from-[#572525]/70 from-[-50%] to-[100%] to-transparent">
      <MaxWidthWrapper className="flex items-center justify-between py-5">
        <Logo />
        <div className="flex items-center gap-5">
          <Link to={"/"}>Home</Link>
          <Link
            to={"/donate"}
            className="text-black bg-primary font-semibold text-lg px-5 py-2 rounded-3xl uppercase"
          >
            Donate
          </Link>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;
