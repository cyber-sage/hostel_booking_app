    // import React, { Component } from "react";
// import './App.css';
// import firebase from "firebase";
// import { StyledFirebaseAuth } from 'react-firebaseui';

// // function App() {

// //   state={isSignedIn:false};
// //   return (
// //     <div className="App">
// //       {
// //         this.state.isSignedIn ?
// //         <div>Signed In!</div>
// //         :
// //         <div>Not Signed In!</div>

// //       }
// //     </div>
// //   );
// // }


// class App extends Component{
//   state={isSignedIn:false};
//    render(){ return (
//       <div className="App">
//         {
//           this.state.isSignedIn ?
//           <div>Signed In!</div>
//           :
//           <div>Not Signed In!</div>
  
//         }
//       </div>
//     );
//       }

// }

// export default App;

import React, { Component } from "react";
import "./App.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import FrontPage from './Components/frontPage';

firebase.initializeApp({
  apiKey: "AIzaSyDoiNCLXxi6gt1WrbKbErQTa1T9okcjuak ",
  authDomain: "hostel-daze-b1ec8.firebaseapp.com "
})

class App extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? (
          <span>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <FrontPage></FrontPage>
            
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    )
  }
}

export default App
