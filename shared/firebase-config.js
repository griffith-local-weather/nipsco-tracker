/* ════════════════ FIREBASE CONFIGURATION ════════════════ */
/* SECURITY NOTE: API key is exposed by design in client-side apps.
 * Security is enforced via Firebase Security Rules (firestore.rules)
 * which validate admin email server-side for write operations.
 */
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDZnYc1kU0HyD_djZ2JqgGKyp1kAgP5Y1g",
  authDomain: "nipsco-tracker.firebaseapp.com",
  projectId: "nipsco-tracker",
  storageBucket: "nipsco-tracker.firebasestorage.app",
  messagingSenderId: "510146051905",
  appId: "1:510146051905:web:fda7d9aac583dc5283abc0",
  measurementId: "G-NJQWG293Z7"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
}
const auth = firebase.auth();

// SECURITY: Only this email can broadcast messages
// This email is checked server-side via Firebase Security Rules (see firestore.rules)
const ADMIN_EMAIL = "primegamer2008@outlook.com";
