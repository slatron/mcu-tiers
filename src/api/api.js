import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA4Ut5x488eODNFmnlisGKRSNYhuoHJ6Pw",
  authDomain: "mcu-tiers.firebaseapp.com",
  databaseURL: "https://mcu-tiers.firebaseio.com",
  projectId: "mcu-tiers",
  storageBucket: "mcu-tiers.appspot.com",
  messagingSenderId: "236578939074",
  appId: "1:236578939074:web:b57b6e1006f6b327"
}

// Initialize DB
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const moviesRef = ref(db, 'movies');
const tiersRef = ref(db, 'tiers');

export default {
  getMovies: () => get(moviesRef),
  getTiers: () => get(tiersRef),
}
