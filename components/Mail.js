import { AiFillPrinter, AiOutlineMore, AiOutlineStar } from 'react-icons/ai';
import { BiWindowOpen } from 'react-icons/bi';
import { BsFillForwardFill } from 'react-icons/bs';
import { TiArrowBack } from 'react-icons/ti';
import { useSelector } from 'react-redux';
import Moment from 'react-moment';

const Mail = () => {
  const { mail } = useSelector((state) => state.mail);
  return (
    <div className="px-2 md:px-8">
      {mail && (
        <>
          <div className="flex items-center justify-between py-2 md:py-6">
            <h1 className="text-sm md:text-xl lg:text-2xl font-medium">
              {mail.subject}
            </h1>
            <div className="flex items-center space-x-2 md:space-x-5 text-xl text-gray-600">
              <AiFillPrinter className="icon-style" />
              <BiWindowOpen className="icon-style" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1 md:space-x-3 font-medium">
              <img
                className="h-8 w-8 md:h-12 md:w-12 rounded-full object-cover"
                src="https://img.favpng.com/25/13/19/samsung-galaxy-a8-a8-user-login-telephone-avatar-png-favpng-dqKEPfX7hPbc6SMVUCteANKwj.jpg"
                alt=""
              />
              <p className="truncate text-xs md:text-base">{mail.email}</p>
            </div>

            <div className="hidden md:inline-flex items-center space-x-2 lg:space-x-8 text-xl ">
              <p className="text-sm">
                <Moment fromNow>{mail?.timestamp?.toDate()}</Moment>
               
              </p>
              <AiOutlineStar className="icon-style" />
              <TiArrowBack className="icon-style" />
              <AiOutlineMore className="icon-style" />
            </div>
          </div>
          <div className="mt-6 border-b-2 border-gray-100">
            <p className="text-xs md:text-sm lg:text-base pb-2 md:pb-6">
              {mail.discription}
            </p>
          </div>
          <div className="flex items-center space-x-2 mt-2 md:space-x-6 md:mt-6 mb-6">
            <button className="btn">
              <TiArrowBack className="mr-1 md:mr-3" /> Reply
            </button>
            <button className="btn">
              <BsFillForwardFill className="mr-1 md:mr-3" /> Forward
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Mail;
