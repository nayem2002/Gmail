import {
  AiFillDelete,
  AiOutlineFieldTime,
  AiOutlineMore,
  AiTwotoneMail,
} from 'react-icons/ai';
import { MdAttachEmail, MdReport, MdTimerOff } from 'react-icons/md';
import { BiArrowBack, BiTime } from 'react-icons/bi';
import { MdLabelImportant } from 'react-icons/md';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { CgToolbarBottom } from 'react-icons/cg';
import { IoBagRemove } from 'react-icons/io5';
import { useRouter } from 'next/router';

const MailMiniTopBar = () => {
  const router = useRouter();
  return (
    <>
      <div className="sticky top-16 z-40 bg-white flex items-center justify-between h-10 md:h-14 shadow-sm px-1 md:px-6 text-xl text-gray-600">
        <div className="flex items-center space-x-2 md:space-x-5 lg:space-x-9 xl:space-x-12">
          <BiArrowBack
            className="icon-style"
            onClick={() => router.push('/')}
          />
          <MdAttachEmail className="icon-style" />
          <MdReport className="icon-style" />
          <AiFillDelete className="icon-style" />
          <AiTwotoneMail className="icon-style" />
          <BiTime className="icon-style" />
          <MdTimerOff className="icon-style" />
          <IoBagRemove className="icon-style" />
          <MdLabelImportant className="icon-style" />
          <AiOutlineMore className="icon-style" />
        </div>
        <div className="hidden md:block md:flex items-center md:space-x-3 lg:space-x-6">
          <p className="text-xs md:text-sm lg:text-base">1-20 of 221</p>
          <IoIosArrowBack className="icon" />
          <IoIosArrowForward className="icon" />
          <CgToolbarBottom className="icon" />
        </div>
      </div>
    </>
  );
};

export default MailMiniTopBar;
