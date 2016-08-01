UE.registerUI('commonStyle',function(editor,uiName){

    //创建dialog
    var dialog = new UE.ui.Dialog({
        //指定弹出层中页面的路径，这里只能支持页面,因为跟addCustomizeDialog.js相同目录，所以无需加路径
        iframeUrl:'component/commonStyle.html',
        //需要指定当前的编辑器实例
        editor:editor,
        //指定dialog的名字
        name:uiName,
        //dialog的标题
        title:"全局设置",

        //指定dialog的外围样式
        cssRules:"width:600px;height:300px;",

        //如果给出了buttons就代表dialog有确定和取消
        buttons:[
            {
                className:'edui-okbutton',
                label:'确定',
                onclick:function () {
                    var $iframe = $('#' + dialog.id).find('iframe').contents();
                    var $margin = $iframe.find('#margin').val();
                    var $header = $iframe.find('input[name="header"]:checked').val();
                    var $footer = $iframe.find('input[name="footer"]:checked').val();

                    var editorBody = $(editor.body);
                    var $pagebreak = editorBody.find('.pagebreak');
                    var tpl;

                    $iframe.find('#margin').attr('value', $margin);

                    switch ($header){
                        case '0':
                            editorBody.find('.page_header').remove();
                            break;
                        case '1':
                            tpl = '<div class="page_header page_header1"><table data-sort="sortDisabled"><tbody><tr class="firstRow"><td width="124"valign="middle"height="70"align="center"style="word-break: break-all; border: 0px solid rgb(0, 0, 0);">我是logo<br/></td><td valign="middle"height="70"align="left"style="word-break: break-all; border: 0px solid rgb(0, 0, 0);"rowspan="1"colspan="1"width="759"><p><br/></p><p>&nbsp;<span style="color: rgb(49, 133, 155);">中国协同软件市场连续十年占有率第一</span></p></td></tr></tbody></table><hr/></div>';
                            insertHeader(tpl);
                            break;
                        case '2':
                            tpl = '<div class="page_header page_header2">页眉2<hr/></div>';
                            insertHeader(tpl);
                            break;
                    }

                    function insertHeader(tpl) {

                        editorBody.find('.page_header').remove();
                        // 1. 要插入到最前面
                        // 2. 每个分页的位置

                        editorBody.prepend(tpl);

                        $pagebreak.each(function(index, value){
                            $(tpl).insertAfter($(value))
                        })

                        editor.fireEvent('contentchange');
                    }


                    //页脚
                    switch ($footer){
                        case '0':
                            editorBody.find('.page_footer').remove();
                            break;
                        case '1':
                            tpl = '<div class="page_footer page_footer1"><hr/><br>页脚11<br><br></div>';
                            insertFooter(tpl);
                            break;
                        case '2':
                            tpl = '<div class="page_footer page_footer2"><hr/><br>页脚222<br><br></div>';
                            insertFooter(tpl);
                            break;
                    }
                    function insertFooter(tpl) {

                        editorBody.find('.page_footer').remove();
                        // 1. 要插入到最前面
                        // 2. 每个分页的位置

                        editorBody.append(tpl);

                        $pagebreak.each(function(index, value){
                            $(tpl).insertBefore($(value))
                        })

                        editor.fireEvent('contentchange');
                    }


                    editorBody.css({'margin': $margin});

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
        name:'全局设置',
        title:'全局设置',
        //需要添加的额外样式，指定icon图标，这里默认使用一个重复的icon
        cssRules :'background-position: -500px 0;',
        onclick:function () {
            //渲染dialog
            console.log(dialog)
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
}, [0,2]/*index 指定添加到工具栏上的那个位置，默认时追加到最后,editorId 指定这个UI是那个编辑器实例上的，默认是页面上所有的编辑器都会添加这个按钮*/);