"use strict";

var meuJS = function () {

    function init() {
        bindFunctions();
    }

    function bindFunctions() {

        $('.botao').click(function () {
            var id = 99;
            new GCS().setObj({
                type: 'GET',
                url: '/'+id,
                success: function (data) {
                    debugger;
                }
            }).executar();
        });
    }

    return {
        init: init
    };

}();
$(meuJS.init);