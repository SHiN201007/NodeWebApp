const express = require('express');
require('../Extensions/StringExtension');

const firebase = require("firebase/app");
const firebaseAuth = require("firebase/auth");

const config = {
  apiKey: 'AIzaSyAAERLaSes1Tl24GypkwswudGbUFOSbp9w',
  authDomain: 'snaphy-3bf68.firebaseapp.com'
};
firebase.initializeApp(config);

// module.exports = {
//     // サインアップ処理
//     signUp: function(email,password) {
//         return new Promise((resolve, reject) => {
//             const emailStr = String(email);
//             const result = emailStr.isEmpty() ? 'failure' : 'success';
//             resolve(result);
//         });
//     }
// }

module.exports = {
    // サインアップ処理
    signUp: function(email,password) {
        return new Promise((resolve, reject) => {
            (async () => {
                try {
                    await firebaseAuth.signInWithEmailAndPassword(firebaseAuth.getAuth(),email, password).then((user) => {
                        console.log(user);
                        const userStr = String(user);
                        const result = userStr.isEmpty() ? 'failure' : `${email}でログインしました。`;
                        resolve(result);
                    });           
                } catch (err) {
                  console.log(err);
                }
            })();
        });
    }
}