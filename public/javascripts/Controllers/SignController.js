const express = require('express');
require('../Extensions/StringExtension');
// Models
signModel = require('../Models/SignModel');

module.exports = {
    doSignUp: function(req, res, next) {
        const email = req.body.email;
        const password = req.body.password;
        // メール認証呼び出し
        signModel.signUp(email,password)
        .then((result) => {
            const data = {
                info: {
                    title: 'Confirm',
                    result: result,
                }
            }
            res.render("confirm", data);
        }).catch((error) => {
            // エラー画面表示
            res.render("error", data);
        })
    }
}