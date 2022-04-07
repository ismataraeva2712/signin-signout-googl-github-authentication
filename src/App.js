
import './App.css';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase.init.js/firebase.init';
import { useState } from 'react';
const auth = getAuth(app);
function App() {
  const [user, setUser] = useState({})

  const handleSignIn = () => {
    const provider1 = new GoogleAuthProvider();
    signInWithPopup(auth, provider1)
      .then(result => {
        const user = result.user
        setUser(user)
        console.log(user)
      })
      .catch(error => {
        console.error(error)
      })
  }
  const gitHandleSignin = () => {
    const provider2 = new GithubAuthProvider();
    signInWithPopup(auth, provider2)
      .then(result => {
        const user = result.user
        setUser(user)
      })
      .catch(error => {
        console.error(error)
      })

  }
  const handleSignOut = () => {
    signOut(auth)
      .then(result => {
        setUser({})
      })
      .catch(error => {
        setUser({})
      })
  }
  return (
    <div className="App">
      {
        user.uid ? <button onClick={handleSignOut}> sign out</button> : <> <button onClick={handleSignIn}>Google sign in</button> <button onClick={gitHandleSignin}>GitHUb sign in</button>
        </>


      }
      <h2>{user.displayName}</h2>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
