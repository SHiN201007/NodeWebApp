const express = require('express');
require('../Extensions/StringExtension');

//firebase
require('../environments/firebase');
const firebase = require("firebase/app");
const firebaseAuth = require("firebase/auth");
const getFirestore = require('firebase/firestore');
const db = getFirestore();


module.exports = {
    // サインアップ処理
    signUp: function(email,password) {
        return new Promise((resolve, reject) => {
            (async () => {
                try {
                    await firebaseAuth.signInWithEmailAndPassword(firebaseAuth.getAuth(),email, password).then((user) => {
                        const userStr = String(user);
                        const userName = "";
                        console.log(user.user.uid);

                        (async () => {
                            try {
                                const snapshot = await db.collection('Users');
                                console.log(snapshot);

                                snapshot.forEach((doc) => {
                                    if(user.user.uid == doc.id){
                                        userName =doc.get('userName');
                                    }
                                    console.log(doc.id, '=>', doc.data());
                                });
                                const result = userStr.isEmpty() ? 'failure' : `${userName}でログインしました。`;
                                resolve(result);              
                            } catch (err) {
                              console.log(err);
                            }
                        })();
                    });           
                } catch (err) {
                  console.log(err);
                }
            })();
        });
    }
}