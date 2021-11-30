import { AiOutlineMore, AiOutlineReload } from 'react-icons/ai';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { CgToolbarBottom } from 'react-icons/cg';

const MiniTopbar = () => {
  return (
    <>
      <div className="flex items-center justify-between px-4 bg-white z-40 shadow-sm h-14 md:text-lg sticky top-16">
        <div className="flex items-center space-x-1 md:space-x-5">
          <input type="checkbox" className="cursor-pointer" />
          <AiOutlineReload className="icon " />
          <AiOutlineMore className="icon" />
        </div>
        <div className="flex items-center space-x-1 md:space-x-6">
          <p className="text-xs md:text-sm">1-20 of 221</p>
          <IoIosArrowBack className="icon" />
          <IoIosArrowForward className="icon" />
          <CgToolbarBottom className="icon" />
        </div>
      </div>
    </>
  );
};

export default MiniTopbar;
