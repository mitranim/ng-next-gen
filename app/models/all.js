System.register(['./words'], function(exports_1) {
    function exportStar_1(m) {
        for(var n in m) {
            if (n !== "default") exports_1(n, m[n]);
        }
    }
    return {
        setters:[
            function (_words_1) {
                exportStar_1(_words_1);
            }],
        execute: function() {
        }
    }
});
