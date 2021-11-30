import Compas from '../components/Compas';
import Header from '../components/Header';
import Mail from '../components/Mail';
import MailMiniTopBar from '../components/MailMiniTopBar';
import Sidebar from '../components/Sidebar';

const mail = () => {
  return (
    <>
      <div>
        <Header />
        <div className="grid grid-cols-6">
          <Sidebar />
          <div className="col-span-4 md:col-span-5">
            <MailMiniTopBar />
            <Mail />
          </div>
        </div>
        <Compas />
      </div>
    </>
  );
};

export default mail;
