import React,{useState,useEffect,createContext, useContext} from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

const GlobalAuthContext = createContext();

function AuthContext({children}) {

    const [user, setuser] = useState({});

    function signUp(email ,password){
        return createUserWithEmailAndPassword(auth,email,password);
    }

    function login(email,password){
        return signInWithEmailAndPassword(auth,email,password);
    }
    
    function logOut(){
        return signOut(auth);
    }

    useEffect(() => {
        const authentication = onAuthStateChanged(auth,(currentUser) =>{
            setuser(currentUser);
        });

        return () => {
            authentication();
        };
    });



  return(
    <GlobalAuthContext.Provider value={{user,signUp,login,logOut}}>
        {children}
    </GlobalAuthContext.Provider>
  )
}

export default AuthContext;

export function UserAuthConsumer(){
    return useContext(GlobalAuthContext);
}
