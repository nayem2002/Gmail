import { AiOutlineStar } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { collection, onSnapshot, query } from '@firebase/firestore';
import { db } from '../firebase';
import Time from 'react-time-format';
import { seeMail } from '../feature/mailSlice';
import { useDispatch } from 'react-redux';

const MailRowList = () => {
  const [emailsRow, setEmailRow] = useState([]);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const quiry = query(collection(db, 'mail'));
    const unsub = onSnapshot(quiry, (quirySnapshot) => {
      let cities = [];
      quirySnapshot.forEach((doc) => {
        cities.push({ ...doc.data(), id: doc.id });
        console.log(doc);
      });
      setEmailRow(cities);
    });
    return unsub;
  }, []);

  const openMail = (mail) => {
    dispatch(seeMail(mail));
    router.push('/mail');
  };
  return (
    <>
      <div style={{ minHeight: 'calc(100vh - 185px)' }} className="bg-gray-100">
        {emailsRow.map((mail) => (
          <div
            key={mail.id}
            onClick={() => openMail(mail)}
            className="grid grid-cols-5 px-1 space-x-1 text-xs md:text-base md:px-5 md:space-x-6 shadow-sm cursor-pointer hover:shadow-md py-3"
          >
            <div className="flex items-center space-x-1 md:space-x-3">
              <input type="checkbox" />
              <AiOutlineStar className="hidden md:block" />
              <p className="truncate">{mail.email}</p>
            </div>
            <div className="col-span-3 flex items-center space-x-1 md:space-x-4">
              <p className="font-medium truncate">{mail.subject}</p>
              <p className="truncate hidden md:text-sm md:block">
                {mail.discription}
              </p>
            </div>
            <p className="text-right">
              <Time value={mail.timestamp?.seconds * 1000} format="hh:mm:ss" />
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MailRowList;
