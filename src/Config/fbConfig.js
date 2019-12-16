import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyC_Xheqy-fpbCha3g1vNPrIS_PARl7C2xE",
    authDomain: "up-stream-341c5.firebaseapp.com",
    databaseURL: "https://up-stream-341c5.firebaseio.com",
    projectId: "up-stream-341c5",
    storageBucket: "up-stream-341c5.appspot.com",
    messagingSenderId: "626650644264"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore()

  export default firebase