import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineSetting,
  AiOutlineAppstore,
} from 'react-icons/ai';
import { MdContactSupport } from 'react-icons/md';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';

const Header = () => {
  const route = useRouter();
  const { data: session } = useSession();

  return (
    <>
      <div className="w-full sticky top-0 px-1 md:px-4 flex h-16 bg-white z-50 justify-between items-center shadow-sm">
        <div className="flex items-center space-x-1 md:space-x-3">
          <AiOutlineMenu className=" text-sm md:text-2xl cursor-pointer hover:scale-110 transition-all transform duration-100" />
          <img
            onClick={() => route.push('/')}
            className="cursor-pointer w-12 md:w-24 lg:w-32"
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
            alt="logo"
          />
        </div>
        <div className="relative flex">
          <AiOutlineSearch className="absolute top-1/3 left-1 md:left-3 text-sm md:text-2xl cursor-pointer" />
          <input
            type="text"
            placeholder="Search mail"
            className="outline-none bg-gray-100 w-32 h-8 md:w-72 md:h-12 xl:w-96 rounded-xl px-4 pl-6 md:pl-12 transition-all duration-100 focus:bg-white focus:shadow-md"
          />
        </div>
        <div className="flex items-center space-x-2 md:space-x-4 text-sm md:text-2xl">
          <MdContactSupport className="cursor-pointer hover:scale-110 transform transition-all duration-100" />
          <AiOutlineSetting className="cursor-poicursor-pointer hover:scale-110 transform transition-all duration-100nter " />
          <AiOutlineAppstore className="cursor-pointer hover:scale-110 transform  transition-all duration-100" />
          <img
            onClick={signOut}
            className="w-6 h-6 md:h-10 md:w-10 cursor-pointer rounded-full"
            src={session?.user?.image}
            alt="user"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
