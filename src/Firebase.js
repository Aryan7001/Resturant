import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {addDoc,collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAL57k3DgTsV6bcSXYoZgykNWmPBT6Fz84",
  authDomain: "resturant-29382.firebaseapp.com",
  projectId: "resturant-29382",
  storageBucket: "resturant-29382.appspot.com",
  messagingSenderId: "637246065264",
  appId: "1:637246065264:web:a03301c1df0cdf123b42b5",
  measurementId: "G-6HHXJ151QN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
const db = getFirestore(app); 


const signUp = async(name, email,password)=>{
    try{
const res = await createUserWithEmailAndPassword(auth, email, password);
const user = res.user;
await addDoc(collection(db,'user'),{
    uid:user.uid,
    name,
    authProvider:'local',
    email,
})
    }
    catch(error){
console.log(error);
alert('there is an error')
    }
}


const Logins = async(email,password)=>{
try{
     await signInWithEmailAndPassword(auth, email,password);

}
catch(error){
    console.log(error)
    alert('there is an error')
}
}

const Logout = async()=>{
    signOut(auth);
}

export{auth,Logins,Logout,db,signUp};