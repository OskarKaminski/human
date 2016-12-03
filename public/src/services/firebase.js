import firebase from 'firebase/firebase-browser';

export default firebase.initializeApp({
    apiKey: "AIzaSyCIO2QQIe9FNxb2xVpoOP0KXyyavjBTjBY",
    authDomain: "ithinkaboutyou-510c0.firebaseapp.com",
    databaseURL: "https://ithinkaboutyou-510c0.firebaseio.com",
    storageBucket: "ithinkaboutyou-510c0.appspot.com"
});

export const fbAuth = new firebase.auth.FacebookAuthProvider();