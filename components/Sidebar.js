import CommonSidebar from './CommonSidebar';
import { HiInbox } from 'react-icons/hi';
import { AiFillStar, AiOutlineSend } from 'react-icons/ai';
import { MdDrafts, MdExpandMore, MdSnooze } from 'react-icons/md';
import { showCompose } from '../feature/mailSlice';
import { useDispatch } from 'react-redux';

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div
        style={{ height: 'calc(100vh - 64px)' }}
        className="shadow-md sticky top-16 z-40 bg-white col-span-2 md:col-span-1"
      >
        <div
          onClick={() => dispatch(showCompose())}
          className="flex items-center md:space-x-3 shadow-md rounded-full p-3 md:p-2 cursor-pointer mt-2 md:mt-6 ml-2 w-10 md:w-32 md:h-12 hover:shadow-lg"
        >
          <img
            src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"
            alt="compose"
            className="w-4 h-3 md:w-10 md:h-8"
          />
          <p className="font-serif font-medium text-sm hidden md:block ">
            Compose
          </p>
        </div>
        <div>
          <CommonSidebar
            icon={<HiInbox />}
            name="Inbox"
            message={233}
            isActive
            isClicked
          />
          <CommonSidebar icon={<AiFillStar />} name="Starred" message={22} />
          <CommonSidebar icon={<MdSnooze />} name="Snoozed" message={32} />
          <CommonSidebar icon={<AiOutlineSend />} name="Sent" message={100} />
          <CommonSidebar icon={<MdDrafts />} name="Drafts" message={2} />
          <CommonSidebar icon={<MdExpandMore />} name="More" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
