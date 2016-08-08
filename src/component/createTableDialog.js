UE.registerUI('createtable',function(editor,uiName){

    //创建dialog
    var dialog = new UE.ui.Dialog({
        //指定弹出层中页面的路径，这里只能支持页面,因为跟addCustomizeDialog.js相同目录，所以无需加路径
        iframeUrl:'component/createTable.html',
        //需要指定当前的编辑器实例
        editor:editor,
        //指定dialog的名字
        name:uiName,
        //dialog的标题
        title:"插入表格",

        //指定dialog的外围样式
        cssRules:"width:600px;height:300px;",

        //如果给出了buttons就代表dialog有确定和取消
        buttons:[
            {
                className:'edui-okbutton',
                label:'确定',
                onclick:function () {
                    var $iframe = $('#' + dialog.id).find('iframe').contents();
                    var rows = $iframe.find('#rows').val();
                    var clomns = $iframe.find('#clomns').val();
                    var select = $iframe.find('input[name="width"]:checked').val();

                    var opt = {
                        numCols: clomns,
                        numRows: rows
                        //默认就是top
                        //tdvalign: 'top'
                    }

                    if(select == 1){
                        opt.tableWidth = $iframe.find('#tableWidth').val() + 'px';
                    } else {
                        opt.tdWidth = $iframe.find('#tdWidth').val();
                    }

                    opt.tdHeight = $iframe.find('#tdHeight').val();

                    dialog.editor.execCommand( 'inserttable', opt);

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
        //css的类要用,所以必须是英文.但是英文会导致dialog的宽度有问题,用中文反而还可以
        name:'插入表格',
        title:'插入表格',
        //需要添加的额外样式，指定icon图标，这里默认使用一个重复的icon
        cssRules :'background-position: -500px 0;',
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
}, [2,1]/*index 指定添加到工具栏上的那个位置，默认时追加到最后,editorId 指定这个UI是那个编辑器实例上的，默认是页面上所有的编辑器都会添加这个按钮*/);