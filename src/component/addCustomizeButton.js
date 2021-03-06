UE.registerUI('button', function (editor, uiName) {
    //注册按钮执行时的command命令，使用命令默认就会带有回退操作
    editor.registerCommand(uiName, {
        execCommand: addTag,

        queryCommandState: function () {
            var start = editor.selection.getStart();

            //如果光标在组件里面,则此组件不可用
            if($(start).closest('.component').length){
                return -1;
            } else {
                return 0;
            }
        }
    });

    /**
     * 把这个提取出来是后面更新的时候,可以动态生成域结构
     * @returns {*}
     */
    function addTag() {

        //域结构不分视图了
        var nodes = zTreeObj.getNodes();
        if (nodes.length>0) {
            $("#treeDemo").trigger('addTag', {isParent:false, name: '域', nodes: nodes[0]});
        }

        return newCount;
    }

    //创建一个button
    var btn = new UE.ui.Button({
        //按钮的名字
        name: 'text',
        //提示
        title: '文本域',
        //需要添加的额外样式，指定icon图标，这里默认使用一个重复的icon
        cssRules: 'background-position: -755px -74px;',
        //点击时执行的命令
        onclick: function () {
            //editor.execCommand( 'inserthtml', '<table draggable="false" class="component com-text editorComp_' + newCount + '"><tr class="firstRow"><td><div class="component-handle">v</div>文本域</td></tr></table>');

            //component-handle还不能使用div,不然会在其他tab被换成p
            //将数字标识符去掉了,因为在模板添加的时候很容易实现冲突
            //最后一个参数要设置成true,不然会将input给过滤了
            //component-handle如果使用双标签,要么被变成span,而且将contenteditable属性在拖拽后去掉了,于是使用单标签算了
            editor.execCommand( 'inserthtml', '<table draggable="false" id="field' + newCount + '" class="component com-text editorComp_' + newCount + '"><tr class="firstRow"><td width="50" height="20"><hr class="component-handle"><input type="text" class="name" data-type="text" value="域'+ newCount + '" readonly="readonly"></td></tr></table>');


            //这种html结构死活不能整个模块拖动
            //editor.execCommand( 'inserthtml', '<div draggable="false" class="component com-text editorComp_' + newCount + '"><div class="component-handle">v</div><input type="text" class="name" value="文本域' + newCount + '"></div>');

            //这里是执行的上面注册的命令
            //editor.execCommand(uiName);

            //不用上面的方法是因为,加了状态反射后,就不能执行了,所以就换成了自定义函数
            addTag();
        }
    });

    //当点到编辑内容上时，按钮要做的状态反射
    editor.addListener('selectionchange', function () {
        var state = editor.queryCommandState(uiName);
        if (state == -1) {
            btn.setDisabled(true);
            //设置状态的类,用户替换图标的图案,禁用是将透明度降低到0.3
            btn.setChecked(false);
        } else {
            btn.setDisabled(false);
            btn.setChecked(state);
        }
    });

    //因为你是添加button,所以需要返回这个button
    return btn;
}/*index 指定添加到工具栏上的那个位置，默认时追加到最后,editorId 指定这个UI是那个编辑器实例上的，默认是页面上所有的编辑器都会添加这个按钮*/);