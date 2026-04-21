import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyD_fKNrbAPL4uIQvh6ozNGYLoncPFsedj8",
  authDomain: "x-trading-de557.firebaseapp.com",
  projectId: "x-trading-de557",
  storageBucket: "x-trading-de557.firebasestorage.app",
  messagingSenderId: "622550253572",
  appId: "1:622550253572:web:316bcb6af542a7b486f551",
  measurementId: "G-ZYCWKRS7SL"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

window.placeTrade = function(type) {
    let amount = document.getElementById('trade-amount').value;
    if(amount < 1) { alert("Sahi amount daalo Sir!"); return; }

    push(ref(db, 'trades/'), {
        type: type,
        amount: amount,
        time: new Date().toLocaleString(),
        status: "Pending"
    }).then(() => {
        alert("Trade Successful: " + type + " ₹" + amount);
    }).catch((error) => {
        alert("Error: " + error.message);
    });
}
