import { getProviders, getSession, signIn } from 'next-auth/react';
const login = ({ providers }) => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="-mt-36 flex items-center justify-center flex-col">
        <img
          className="w-72 h-auto"
          src="https://cdn.vox-cdn.com/thumbor/g_nyLm8AT_WA7a79K-EhRZV0sE0=/0x0:1320x880/920x613/filters:focal(555x335:765x545):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67587450/newgmaillogo.0.jpg"
          alt="image"
        />
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="align-center">
            <button
              className="bg-blue-700 px-8 py-3 text-white rounded-xl"
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
            >
              Login
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default login;

export async function getServerSideProps(contex) {
  const providers = await getProviders();
  const session = await getSession(contex);
  return {
    props: { providers, session },
  };
}
