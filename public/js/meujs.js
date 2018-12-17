"use strict";

var HELPER = function () {

    function init() {
        bindFunctions();
    }

    function teste (num) { 
        var teste = num+8;
        return teste
    }

    function bindFunctions() {

        $('.botao').off().click(function () {
            var joia = 99;
            var joia2 = 199;
            var joia3 = 199;
            new GCS().setObj({
                type: 'GET',
                url: '/teste',//+joia+'/'+joia2+'/'+joia3,[[[[]]]]
                success: function (data) {
                    
                    var html = '';
                    for (let index = 0; index < data.teste.length; index++) {
                        html += '<h6>'+data.teste[index]+'</h6>'
                    }
                    $('.meu-iframe').html(html);
                    
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