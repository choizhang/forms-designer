UE.registerUI('repeattable',function(editor,uiName){

    editor.registerCommand(uiName, {
        execCommand: function () {
            var nodes = zTreeObj.getNodes();

            //返回的是重复表的node,文本域是添加在重复表后面的,后面要使用event的返回值,所以封装了一下

            //var event = $.Event('addTag', {isParent:true, name: '重复表', nodes: nodes[num]});

            //域结构不分视图了
            var event = $.Event('addTag', {isParent:true, name: '重复表', nodes: nodes[0]});

            if (nodes.length>0) {
                //$("#treeDemo").trigger('addTag', {isParent:true, name: '重复表', nodes: nodes[num]});
                $("#treeDemo").trigger(event);
            }

            return [newCount, event];

        }
    });

    editor.registerCommand('repeattext', {
        execCommand: function (uiName, event) {
            $("#treeDemo").trigger('addTag', {isParent:false, name: '文本域', nodes: event.result[0]});
        }
    });

    //创建dialog
    var dialog = new UE.ui.Dialog({
        //指定弹出层中页面的路径，这里只能支持页面,因为跟addCustomizeDialog.js相同目录，所以无需加路径
        iframeUrl:'component/repeatTable.html',
        //需要指定当前的编辑器实例
        editor:editor,
        //指定dialog的名字
        name:uiName,
        //dialog的标题
        title:"添加重复表",

        //指定dialog的外围样式
        cssRules:"width:600px;height:300px;",

        //如果给出了buttons就代表dialog有确定和取消
        buttons:[
            {
                className:'edui-okbutton',
                label:'确定',
                onclick:function () {
                    var $dialog = $('#' + dialog.id).find('iframe').contents();
                    var column = $dialog.find('#cloumn').val();
                    var header = $dialog.find('#header').prop('checked');
                    var footer = $dialog.find('#footer').prop('checked');

                    var event = editor.execCommand(uiName)[1];

                    window.newCount--;

                    //var html = '<table class="component" draggable="true" ondragstart="event.dataTransfer.setData(\'text/plain\', \'This text may be dragged\'); ">' ;
                    var html = '<table draggable="false" id="field' + newCount + '" class="component com-repeat editorComp_' + newCount + '" data-type="repeatetable"><tbody>' ;


                    if(!header){
                        header = ' style="display: none;"'
                    } else {
                        header = '';
                    }

                    //这里将th换成了td,因为有的表单会有2行标题
                    //html += '<tr class="firstRow">'
                    html += '<tr class="table-header"'+header+'>'
                    for(var i=0; i<column; i++){
                        html += '<td>页眉' + (i+1) + '</td>'
                    }

                    html += '</tr>';



                    window.newCount++;

                    html += '<tr>';
                    //br放在了table前面,不然会造成均分按钮不可用
                    for(i=0; i<column; i++){
                        html += '<td width="40" height="20" data-minheight="20" valign="top">'+ (i===0? '<hr class="component-handle">': '') +'<br><table draggable="false" id="field' + newCount + '" class="component com-text com-inner-text editorComp_' + newCount + '"><tbody><tr><td width="50" height="20" data-minheight="20" valign="top"><hr class="component-handle"><input type="text" class="name" readonly="readonly" data-type="text" value="文本域'+ newCount + '" /></td></tr></tbody></table></td>';

                        editor.execCommand('repeattext', event);
                    }
                    html += '</tr>';

                    if(!footer){
                        footer = ' style="display: none;"'
                    } else {
                        footer = '';
                    }

                    html += '<tr class="table-footer"'+footer+'>';
                    for(i=0; i<column; i++){
                        html += '<td>页脚' + (i+1) + '</td>'
                    }
                    html += '</tr>';


                    html += '</tbody></table>';

                    dialog.editor.execCommand( 'inserthtml', html, true);

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
        name:'重复表',
        title:'重复表',
        //需要添加的额外样式，指定icon图标，这里默认使用一个重复的icon
        cssRules :'background-position: -755px -95px;',
        onclick:function () {
            //渲染dialog
            dialog.render();
            dialog.open();
        }
    });

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

    return btn;
}/*index 指定添加到工具栏上的那个位置，默认时追加到最后,editorId 指定这个UI是那个编辑器实例上的，默认是页面上所有的编辑器都会添加这个按钮*/);