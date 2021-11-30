import { useRouter } from 'next/router';
const CommonSidebar = ({ icon, name, message, isActive, isClicked }) => {
  const route = useRouter();
  return (
    <>
      <div
        className="mt-2 md:mt-4"
        onClick={() => {
          if (isClicked) {
            route.push('/');
          }
        }}
      >
        <div
          className={`flex items-center pr-6 text-xs md:text-base justify-between font-medium p-2 rounded-r-full cursor-pointer pl-2 md:px-6 lg:text-lg w-full hover:bg-gray-100 ${
            isActive && 'bg-red-200 hover:bg-red-200'
          }`}
        >
          <div className="flex items-center space-x-1 md:space-x-3">
            <p className="md:text-lg lg:text-xl">{icon}</p>
            <p>{name}</p>
          </div>
          <p>{message}</p>
        </div>
      </div>
    </>
  );
};

export default CommonSidebar;
