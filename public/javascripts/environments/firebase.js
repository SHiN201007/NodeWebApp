const firebase = require("firebase/app");
const config = {
  apiKey: 'AIzaSyAjgr19WobwPZGzwQtbcaGR0dUfNPztnYc',
  authDomain: 'node-web-app-12177.firebaseapp.com',
  projectId: "node-web-app-12177",
  storageBucket: "node-web-app-12177.appspot.com",
  messagingSenderId: "560550053573",
  appId: "1:560550053573:web:0e61f9c436effa234b92ac"
};
const app = firebase.initializeApp(config);

const firestore = require("firebase/firestore");
const db = firestore.getFirestore(app);

module.exports = {
  DBInfo : function(){
    return db;
  },
  firestore : function(){
    return firestore;
  }
}
