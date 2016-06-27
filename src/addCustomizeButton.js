UE.registerUI('button', function (editor, uiName) {
    //注册按钮执行时的command命令，使用命令默认就会带有回退操作
    editor.registerCommand(uiName, {
        execCommand: function () {
            //alert('execCommand:' + uiName)
        }
    });

    //创建一个button
    var btn = new UE.ui.Button({
        //按钮的名字
        name: '自定义',
        //提示
        title: '文本域',
        //需要添加的额外样式，指定icon图标，这里默认使用一个重复的icon
        cssRules: 'background-position: -500px 0;',
        //点击时执行的命令
        onclick: function () {
            //这里可以不用执行命令,做你自己的操作也可
            editor.execCommand(uiName);
            editor.execCommand( 'inserthtml', '<img src="text.png" id="editorComp_' + (100 + newCount) + '" title="title" alt="文本域" style="width: 55px;height: 30px;text-align: center;line-height: 30px;font-size: 17px;border:solid 1px #999;">');

            var num = $('.current').index();
            var nodes = zTreeObj.getNodes();
            if (nodes.length>0) {
                $("#treeDemo").trigger('addTag', {isParent:false, name: '文本域', nodes: nodes[num]});
            }


            //editor.execCommand('insertimage', {
            //    src: '',
            //    width: '100',
            //    height: '100'
            //});

            //点击表格前或内部都可以实现表格居中
            //editor.execCommand( 'tablealignment', 'center');
        }
    });

    //当点到编辑内容上时，按钮要做的状态反射
    editor.addListener('selectionchange', function () {
        var state = editor.queryCommandState(uiName);
        if (state == -1) {
            btn.setDisabled(true);
            btn.setChecked(false);
        } else {
            btn.setDisabled(false);
            btn.setChecked(state);
        }
    });

    //因为你是添加button,所以需要返回这个button
    return btn;
}/*index 指定添加到工具栏上的那个位置，默认时追加到最后,editorId 指定这个UI是那个编辑器实例上的，默认是页面上所有的编辑器都会添加这个按钮*/);