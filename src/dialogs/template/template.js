/**
 * Created with JetBrains PhpStorm.
 * User: xuheng
 * Date: 12-8-8
 * Time: 下午2:09
 * To change this template use File | Settings | File Templates.
 */
(function () {
    var me = editor,
            preview = $G( "preview" ),
            preitem = $G( "preitem" ),
            tmps = templates,
            currentTmp;
    var initPre = function () {
        var str = "";
        for ( var i = 0, tmp; tmp = tmps[i++]; ) {
            str += '<div class="preitem" onclick="pre(' + i + ')"><img src="' + "images/" + tmp.pre + '" ' + (tmp.title ? "alt=" + tmp.title + " title=" + tmp.title + "" : "") + '></div>';
        }
        preitem.innerHTML = str;
    };
    var pre = function ( n ) {
        var tmp = tmps[n - 1];
        currentTmp = tmp;
        clearItem();
        domUtils.setStyles( preitem.childNodes[n - 1], {
            "background-color":"lemonChiffon",
            "border":"#ccc 1px solid"
        } );
        preview.innerHTML = tmp.preHtml ? tmp.preHtml : "";
    };
    var clearItem = function () {
        var items = preitem.children;
        for ( var i = 0, item; item = items[i++]; ) {
            domUtils.setStyles( item, {
                "background-color":"",
                "border":"white 1px solid"
            } );
        }
    };
    dialog.onok = function () {
        if ( !$G( "issave" ).checked ){
            me.execCommand( "cleardoc" );
        }
        var obj = {
            html:currentTmp && currentTmp.html
        };

        //如果模板中含有组件,要添加到域结构中去

        //文本组件
        $(obj.html).find('.com-text').each(function(index, value){
            var className = $(value).attr('class');

            var num = me.execCommand('button');
            //先执行插入一个按钮,通过返回的数字给iframe的组件给id
            className.replace(/editorComp_{\d}/g, 'editorComp_'+num);

            $(value).attr('class', className)

        })

        //重复表组件
        $(obj.html).find('.com-repeat').each(function(index, value){
            var className = $(value).attr('class');

            var num = me.execCommand('repeatTable');
            //先执行插入一个按钮,通过返回的数字给iframe的组件给id
            className.replace(/editorComp_{\d}/g, 'editorComp_'+num);

            $(value).attr('class', className)

        })

        console.log(obj.html)

        me.execCommand( "template", obj );
    };
    initPre();
    window.pre = pre;
    pre(2)

})();

console.log(jQuery)