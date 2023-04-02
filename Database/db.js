import {initializeApp} from 'firebase/app';
import {getFirestore , doc , getDoc , updateDoc , collection, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBuazbsVRJ9DZBE6P_LaxNxhGSUEe8deDc",
    authDomain: "project1-0-353f2.firebaseapp.com",
    projectId: "project1-0-353f2",
    storageBucket: "project1-0-353f2.appspot.com",
    messagingSenderId: "151986895808",
    appId: "1:151986895808:web:1bee4976686637293d2625",
    measurementId: "G-18MKHYYJBR"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const dataRef = collection(db,'data');
const ref = doc(db,'data','currentValues');

export const storeData = async (data)=>{
  try {
  const Data = await getData(ref);

  const currData =  await updateDoc(ref,data);

  return currData;
  
  } catch (error) {
    return false
  }
  
}

export const getData = async (reference)=>{
  const dataSnap = await getDoc(reference);

  if(dataSnap.exists()){
    return dataSnap.data();
  }

  else return false;
}