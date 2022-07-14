const express = require('express');
require('../Extensions/StringExtension');

//firebase
const firebase = require('../environments/firebase');
const firebaseAuth = require("firebase/auth");

const db = firebase.DBInfo();
const firestore = firebase.firestore();
const doc = firestore.doc;
const getDoc = firestore.getDoc;

module.exports = {
    // サインアップ処理
    signUp: function(email,password) {
        return new Promise((resolve, reject) => {
            (async () => {
                try {
                    await firebaseAuth.signInWithEmailAndPassword(firebaseAuth.getAuth(),email, password).then((user) => {
                        var userName = "";
                        const userId = user.user.uid;

                        (async () => {
                            try {
                                var result = "";
                                const docRef = doc(db, "Users", userId);
                                const docSnap = await getDoc(docRef);

                                if (docSnap.exists()) {
                                    userName = docSnap.get('userName');
                                    result = `${userName}でログインしました。`;
                                } else {
                                    result = 'No such document!';
                                }
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