import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyB7cqrJJPs3e9tLcvF4IDl_QwIn0IpI2Oc',
  authDomain: 'fir-960ec.firebaseapp.com',
  projectId: 'fir-960ec',
  storageBucket: 'fir-960ec.appspot.com',
  messagingSenderId: '88940496943',
  appId: '1:88940496943:web:2fa316fecd5684bed19eda',
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

const storage = getStorage();

export { app, db, storage };
