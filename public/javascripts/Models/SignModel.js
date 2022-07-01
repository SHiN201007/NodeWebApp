const express = require('express');
require('../Extensions/StringExtension');

module.exports = {
    // サインアップ処理
    signUp: function(email) {
        return new Promise((resolve, reject) => {
            const emailStr = String(email);
            const result = emailStr.isEmpty() ? 'failure' : 'success';
            resolve(result);
        });
    }
}