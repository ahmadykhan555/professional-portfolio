import firebase from "firebase";
import { User } from "../../meta/meta";
const config = {
  apiKey: "AIzaSyDG_6p4u6YOyCrpHe2blZM0BW1Qrkb0d9A",
  authDomain: "portfolio-ayk.firebaseapp.com",
  databaseURL: "https://portfolio-ayk.firebaseio.com",
  projectId: "portfolio-ayk",
  storageBucket: "portfolio-ayk.appspot.com",
  messagingSenderId: "626622562978",
  appId: "1:626622562978:web:74a8a6aaa479cafa2fcdfb",
  measurementId: "G-WWVCFKP45Q"
};
firebase.initializeApp(config);
firebase.analytics();

const db = firebase.firestore();
const USER_COLLECTION = "user";

const fireStore = {
  get: (): Promise<any> => db.collection(USER_COLLECTION).get()
};

const loadUser = () => {
  return new Promise<User>((resolve, reject) => {
    fireStore.get().then(res => {
      const user: User = res.docs[0].data();
      resolve(user);
    });
  });
};

export default loadUser;
