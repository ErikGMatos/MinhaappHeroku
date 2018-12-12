"use strict";

var HELPER = function () {

    function init() {
        bindFunctions();
    }

    function teste (num) { 
        var teste = num+8;
        return teste;
     }

    function bindFunctions() {

        $('.botao').off().click(function () {
            var id = 99;
            new GCS().setObj({
                type: 'GET',
                url: '/'+id,
                success: function (data) {
                    debugger;
                }
            }).executar();
        });

        $('.office').off().click(function () {  
            
            var apiOffice ='https://view.officeapps.live.com/op/view.aspx?src=';
            var dados = $(this).data('url');
            var url = encodeURIComponent(dados);
            var iframe = '<iframe width="100%" height="800px" src="'+apiOffice+url+'" frameborder="0"></iframe>';
            $('.meu-iframe').html(iframe);
        });
    }

    return {
        init: init,
        teste:teste
    };

}();
$(HELPER.init);