UE.registerUI('dialog',function(editor,uiName){

    //创建dialog
    var dialog = new UE.ui.Dialog({
        //指定弹出层中页面的路径，这里只能支持页面,因为跟addCustomizeDialog.js相同目录，所以无需加路径
        iframeUrl:'customizeDialogPage.html',
        //需要指定当前的编辑器实例
        editor:editor,
        //指定dialog的名字
        name:uiName,
        //dialog的标题
        title:"这是个测试浮层",

        //指定dialog的外围样式
        cssRules:"width:600px;height:300px;",

        //如果给出了buttons就代表dialog有确定和取消
        buttons:[
            {
                className:'edui-okbutton',
                label:'确定',
                onclick:function () {
                    var $input = $('#' + dialog.id).find('iframe').contents().find('input')
                    var column = $input.val();
                    //var html = '<div>';
                    //for(var i=0; i<num; i++){
                    //    html += '<img src="" title="title" alt="文本域" style="width: 55px;height: 30px;text-align: center;line-height: 30px;font-size: 17px;">';
                    //}
                    //html += '</div>';

                    var num = $('.current').index();
                    var nodes = zTreeObj.getNodes();
                    var event = $.Event('addTag', {isParent:true, name: '重复表', nodes: nodes[num]});
                    if (nodes.length>0) {
                        //$("#treeDemo").trigger('addTag', {isParent:true, name: '重复表', nodes: nodes[num]});
                        $("#treeDemo").trigger(event);
                    }

                    //var html = '<table class="component" draggable="true" ondragstart="event.dataTransfer.setData(\'text/plain\', \'This text may be dragged\'); ">' ;
                    var html = '<table class="component" draggable="false" id="editorComp_' + (100 + newCount) + '"><tbody>' ;
                    html += '<tr><th>11<button class="component-handle">v</button></th><th>22</th><th>33</th></tr><tr>'
                    for(var i=0; i<column; i++){
                        html += '<td><span class="test">*</span><table class="component com-text" draggable="false" id="editorComp_' + (100 + newCount) + '"><tbody><tr><td><button class="component-handle">v</button>文本域</td></tr></tbody></table></td>';

                        $("#treeDemo").trigger('addTag', {isParent:false, name: '文本域', nodes: event.result[0]});
                    }
                    html += '</tr></tbody></table>';

                    dialog.editor.execCommand( 'inserthtml', html);

                    dialog.close(true);
                }
            },
            {
                className:'edui-cancelbutton',
                label:'取消',
                onclick:function () {
                    dialog.close(false);
                }
            }
        ]});

    //参考addCustomizeButton.js
    var btn = new UE.ui.Button({
        name:'dialogbutton' + uiName,
        title:'dialogbutton' + uiName,
        //需要添加的额外样式，指定icon图标，这里默认使用一个重复的icon
        cssRules :'background-position: -500px 0;',
        onclick:function () {
            //渲染dialog
            dialog.render();
            dialog.open();
        }
    });

    return btn;
}/*index 指定添加到工具栏上的那个位置，默认时追加到最后,editorId 指定这个UI是那个编辑器实例上的，默认是页面上所有的编辑器都会添加这个按钮*/);