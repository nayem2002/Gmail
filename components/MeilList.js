import { AiOutlineUsergroupDelete } from 'react-icons/ai';
import { HiInbox } from 'react-icons/hi';
import { BsFillCursorFill } from 'react-icons/bs';
import MailRowList from './MailRowList';

const MeilList = () => {
  return (
    <>
      <div className="">
        <div className="flex items-center ">
          <div className="headerstyle border-b-2 border-red-700 text-red-700">
            <HiInbox />
            <p>Primary</p>
          </div>
          <div className="headerstyle hover:text-blue-700 border-blue-700">
            <AiOutlineUsergroupDelete />
            <p>Social</p>
          </div>
          <div className="headerstyle hover:text-green-700 border-green-700">
            <BsFillCursorFill />
            <p>Promotions</p>
          </div>
        </div>
        <div>
          <MailRowList />
        </div>
      </div>
    </>
  );
};

export default MeilList;
