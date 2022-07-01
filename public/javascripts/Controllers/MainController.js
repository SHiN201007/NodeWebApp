const express = require('express');
require('../Extensions/StringExtension');

module.exports = {
    openWindow: function(req, res, next) {
        const data = {
            info: {
                title: 'WEB APP',
                sign: 'サインアップ',
                content: 'ボタンタップでサインアップする',
                link: {
                    href: '/users',
                    text: 'タップで遷移'
                }
            }
        }
        res.render('index', data);
    }
}