import { createContext, useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,

} from "firebase/auth";
import { app } from "../Firebase/Firebase";
import UseAxiosPublic from "../Components/UseAuth/UseAxiosPublic";


// Create Context
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = UseAxiosPublic()

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);

  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);

  };

  //for googleSignin
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);

  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };




  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
      //for jwt 
      if (currentUser) {
        //get token and store client
        const userINfo = {email:currentUser.email}
        axiosPublic.post('/jwt',userINfo)
        .then (res=>{
          if(res.data.token){
            localStorage.setItem('access-token', res.data.token)
            //needed two arguments
          }
          else {
            //do something:remove token (if the token store in the client sight(like,localstorage,chasing,memory))
            localStorage.removeItem('access-token')
          }
        })
      }
      
      setLoading(false);
    });



    // যখন একজন ইউজার লগইন করে (বা Firebase এর মাধ্যমে currentUser পাওয়া যায়), 
    // তখন আমরা সেই ইউজারের জন্য একটা JWT Token সার্ভার থেকে নিয়ে নিচ্ছি এবং
    //  localStorage-এ রেখে দিচ্ছি। এই টোকেনটা আমরা পরবর্তীতে ব্যবহার করবো সিকিউর API গুলাতে access পাওয়ার জন্য।

    return () => unsubscribe();
  }, [axiosPublic]);

  const authInfo = {
    user,
    setUser,
    createUser,
    signIn,
    googleSignIn,
    logOut,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
