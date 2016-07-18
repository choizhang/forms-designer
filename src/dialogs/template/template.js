/**
 * Created with JetBrains PhpStorm.
 * User: xuheng
 * Date: 12-8-8
 * Time: 下午2:09
 * To change this template use File | Settings | File Templates.
 */
(function () {
    var me = editor,
        preview = $G("preview"),
        preitem = $G("preitem"),
        tmps = templates,
        currentTmp;
    var initPre = function () {
        var str = "";
        for (var i = 0, tmp; tmp = tmps[i++];) {
            str += '<div class="preitem" onclick="pre(' + i + ')"><img src="' + "images/" + tmp.pre + '" ' + (tmp.title ? "alt=" + tmp.title + " title=" + tmp.title + "" : "") + '></div>';
        }
        preitem.innerHTML = str;
    };
    var pre = function (n) {
        var tmp = tmps[n - 1];
        currentTmp = tmp;
        clearItem();
        domUtils.setStyles(preitem.childNodes[n - 1], {
            "background-color": "lemonChiffon",
            "border": "#ccc 1px solid"
        });
        preview.innerHTML = tmp.preHtml ? tmp.preHtml : "";
    };
    var clearItem = function () {
        var items = preitem.children;
        for (var i = 0, item; item = items[i++];) {
            domUtils.setStyles(item, {
                "background-color": "",
                "border": "white 1px solid"
            });
        }
    };
    dialog.onok = function () {
        if (!$G("issave").checked) {
            me.execCommand("cleardoc");
        }
        var obj = {
            html: currentTmp && currentTmp.html
        };

        //如果模板中含有组件,要添加到域结构中去

        //文本组件
        var tep = $(obj.html);

        tep.find('.com-text').not('.com-inner-text').each(function (index, value) {
            var className = $(value).attr('class');

            var num = me.execCommand('button');
            //先执行插入一个按钮,通过返回的数字给iframe的组件给id
            className = className.replace(/editorComp_\d+/g, 'editorComp_' + (num-1));

            $(value).attr('class', className)

        })

        //重复表组件
        tep.find('.com-repeat').each(function (index, value) {
            var className = $(value).attr('class');

            var $text = $(value).find('.com-text');

            //因为这个的页面的window已经发生变化了,我获取不到newCount值,只能通过函数的回调返回回来
            var result = me.execCommand('repeattable');
            console.log(result)
            //先执行插入一个按钮,通过返回的数字给iframe的组件给id
            className = className.replace(/editorComp_\d+/g, 'editorComp_' + (result[0]-1));

            $(value).attr('class', className);

            $text.each(function (index, value) {
                className = $(value).attr('class');
                className = className.replace(/editorComp_\d+/g, 'editorComp_' + (result[0]+index));
                $(value).attr('class', className);
                me.execCommand('repeattext', result[1]);
            })

        })

        obj.html = tep[0].outerHTML;

        me.execCommand("template", obj);
    };
    initPre();
    window.pre = pre;
    pre(2)

})();
