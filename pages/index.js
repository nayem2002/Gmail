import Head from 'next/head';
import Compas from '../components/Compas';
import Header from '../components/Header';
import MeilList from '../components/MeilList';
import MiniTopbar from '../components/MiniTopbar';
import Sidebar from '../components/Sidebar';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const { data: session } = useSession();
  const route = useRouter();
  useEffect(() => {
    if (session === null || session === undefined) {
      route.push('/login');
    } else {
      route.push('/');
    }
  }, [session]);
  return (
    <div className="">
      <Head>
        <title>Gmail Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="grid grid-cols-6">
        <Sidebar />
        <div className="col-span-4 md:col-span-5">
          <MiniTopbar />
          <MeilList />
        </div>
      </div>
      <Compas />
    </div>
  );
}
