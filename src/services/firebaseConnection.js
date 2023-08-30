
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCWXsnRUmgTzBnlFg7mJZIyjb40hWstZHg",
  authDomain: "tickets-chamado-cf016.firebaseapp.com",
  projectId: "tickets-chamado-cf016",
  storageBucket: "tickets-chamado-cf016.appspot.com",
  messagingSenderId: "633491890651",
  appId: "1:633491890651:web:004b1350c74be1ce05c7fe"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };