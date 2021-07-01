import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import Button from './components/Button';
import Channel from './components/Channel';


firebase.initializeApp({
  apiKey: "AIzaSyClQX2fsf-pFSig2cYBdY4ZIcDp71zGYfo",
  authDomain: "react-firechat-5ae04.firebaseapp.com",
  projectId: "react-firechat-5ae04",
  storageBucket: "react-firechat-5ae04.appspot.com",
  messagingSenderId: "237931249547",
  appId: "1:237931249547:web:56cf555f4d6f9127d9398e"
});

const auth = firebase.auth();
const db = firebase.firestore();

function App() {

  const [user, setUser]  = useState(()=> auth.currentUser);
  const [initializing, setInitializing] = useState(true);

  //its a sideffect
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(user=>{
      if(user){
        setUser(user);
      }else{
        setUser(null);
      }
      if(initializing){
        setInitializing(false);
      }
    });

    //cleanup subsription
    return unsubscribe;
  },[])

  if (initializing) return "loading...";

  //if (user) return <Channel user={user} />;

  const signInWithGoogle = async () => {
    // Retrieve Google provider object
    const provider = new firebase.auth.GoogleAuthProvider();
    // Set language to the default browser preference
    auth.useDeviceLanguage();
    // Start sign in process
    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      console.log(error);
    }
  };

  //this is the signout button from firebase
  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error.message);
    }
  };

   


  return (
    <div>
      {user ? (
        <>
          <Button onClick={signOut}>Sign Out </Button>
          <Channel user={user} db={db}/>
        </>
      ):(
        <Button onClick={signInWithGoogle}>Sign in with Google</Button>
      )}
    </div>
  );
}

export default App;