const express = require('express');
require('../Extensions/StringExtension');
require('../environments/firebase');

const firebaseAuth = require("firebase/auth");

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