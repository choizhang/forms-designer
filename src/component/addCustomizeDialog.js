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
                    var nodes = domainStructure.zTreeObj.getNodes();

                    //返回的是重复表的node,文本域是添加在重复表后面的,后面要使用event的返回值,所以封装了一下
                    console.log(num)
                    console.log(nodes[num])
                    var event = $.Event('addTag', {isParent:true, name: '重复表', nodes: nodes[num]});
                    if (nodes.length>0) {
                        //$("#treeDemo").trigger('addTag', {isParent:true, name: '重复表', nodes: nodes[num]});
                        $("#treeDemo").trigger(event);
                    }

                    window.newCount--;

                    //var html = '<table class="component" draggable="true" ondragstart="event.dataTransfer.setData(\'text/plain\', \'This text may be dragged\'); ">' ;
                    var html = '<table draggable="false" class="component editorComp_' + newCount + '"><tbody>' ;

                    html += '<tr class="firstRow"><th>标题1<em class="component-handle">v</em></th>'
                    for(var i=1; i<column; i++){
                        html += '<th>标题' + (i+1) + '</th>'
                    }

                    html += '</tr><tr>';

                    window.newCount++;

                    for(i=0; i<column; i++){
                        html += '<td><br><table draggable="false" class="component com-text editorComp_' + newCount + '"><tbody><tr><td><em class="component-handle">v</em><input type="text" class="name" style="width: 100%;height: 100%;border: none;" value="文本域' + newCount + '" /></td></tr></tbody></table></td>';

                        console.log(event.result[0])

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
}, [1,0]/*index 指定添加到工具栏上的那个位置，默认时追加到最后,editorId 指定这个UI是那个编辑器实例上的，默认是页面上所有的编辑器都会添加这个按钮*/);