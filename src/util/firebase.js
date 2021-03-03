import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDZtF8jzMoxG6xT0tfhuupp-QbrKkB370s",
  authDomain: "teste-53986.firebaseapp.com",
  projectId: "teste-53986",
  storageBucket: "teste-53986.appspot.com",
  messagingSenderId: "1042005880502",
  appId: "1:1042005880502:web:af2d64cbff7b62434e4017",
  measurementId: "G-MJSSBMDPFJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;