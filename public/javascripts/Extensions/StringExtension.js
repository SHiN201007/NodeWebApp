// 空文字検知
String.prototype.isEmpty = function() {
    console.log('isEmpty', this);
    return this == null || this == 'undefined' || this == ''
}
