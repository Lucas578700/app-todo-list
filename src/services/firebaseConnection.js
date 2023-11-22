import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBTaJDOBhB1o_4hcF6UW6-EX771ZxAzsHU",
  authDomain: "app-todo-list-2bf9b.firebaseapp.com",
  databaseURL: "https://app-todo-list-2bf9b-default-rtdb.firebaseio.com",
  projectId: "app-todo-list-2bf9b",
  storageBucket: "app-todo-list-2bf9b.appspot.com",
  messagingSenderId: "981688108903",
  appId: "1:981688108903:web:eed9eadab9356b495991c2"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export {db, app};