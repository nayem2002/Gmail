import { AiFillDelete } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { hideCompas } from '../feature/mailSlice';
import { useForm } from 'react-hook-form';
import { db } from '../firebase';
import { addDoc, collection, serverTimestamp } from '@firebase/firestore';
const Compas = () => {
  const dispatch = useDispatch();
  const { showCompose } = useSelector((state) => state.mail);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async ({ email, subject, discription }) => {
    try {
      await addDoc(collection(db, 'mail'), {
        email,
        subject,
        discription,
        timestamp: serverTimestamp(),
      });
      alert('Data submited sucessfull');
    } catch (err) {
      alert(err);
    }
    dispatch(hideCompas());
  };
  return (
    <>
      {showCompose && (
        <div className="fixed bottom-0 right-0 w-4/6 md:w-2/5 h-3/5 md:h-2/3 shadow-2xl bg-white rounded-lg">
          <div className="relative h-full">
            <div className="flex bg-gray-600 h-8 md:h-12 text-xs md:text-base items-center justify-between px-2 md:px-4">
              <h1 className="text-white">New Message</h1>
              <ImCross
                className="text-gray-400 cursor-pointer"
                onClick={() => dispatch(hideCompas())}
              />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="px-2 md:px-4 flex flex-col">
                <input
                  type="email"
                  placeholder="Recipients"
                  className=" outline-none border-b-2 h-8 md:h-10 border-gray-100 "
                  {...register('email', { required: true })}
                />
                <p className="text-red-500 text-xs md:text-sm">
                  {errors.email && 'Email is required !'}
                </p>
                <input
                  type="text"
                  placeholder="Subject"
                  className=" outline-none border-b-2 h-10 border-gray-100"
                  {...register('subject', { required: true, maxLength: 40 })}
                />
                <p className="text-red-500 text-xs md:text-sm">
                  {errors.subject && 'Subject is require !'}
                </p>
                <textarea
                  id="txtArea"
                  rows="10"
                  cols="70"
                  className="outline-none"
                  {...register('discription')}
                />
              </div>
              <div className="flex items-center justify-between px-2 md:px-4 absolute bottom-2 left-0 right-0">
                <button
                  type="submit"
                  className="bg-blue-700 px-2 md:px-5 md:text-base text-sm md:py-2 text-white rounded-md"
                >
                  Send
                </button>
                <AiFillDelete
                  onClick={() => dispatch(hideCompas())}
                  className=" text-sm md:text-xl cursor-pointer"
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Compas;
