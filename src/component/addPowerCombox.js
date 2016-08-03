UE.registerUI('powercombox', function (editor, uiName) {
    var nowPower = 1;
    //注册按钮执行时的command命令,用uiName作为command名字，使用命令默认就会带有回退操作
    editor.registerCommand(uiName, {
        execCommand: function (cmdName, value) {
            //这里借用fontsize的命令
            //this.execCommand('fontsize', value + 'px')

            //我这里只做显示隐藏,不做删除,后面的系统可以做删除
            switch (value){
                case 1:
                    // 普通

                    hideNoPower(2);
                    hideNoPower(3);
                    break;
                case 2:
                    //经理
                    showNoPower(2)
                    hideNoPower(3)
                    break;
                case 3:
                    //管理员

                    showNoPower(2)
                    showNoPower(3)
                    break;
            }


        },
        queryCommandValue: function () {
            return nowPower;
            //这里借用fontsize的查询命令
            //return this.queryCommandValue('fontsize')
        }
    });

    function hideNoPower(value) {
        var $ele = $(editor.body).find('[data-power="'+value+'"]');
        var html;
        console.log($ele)
        $ele.each(function(index, value){
            if(value.tagName === 'TD'){
                //现将内容存储起来
                if(html = $(value).html()){
                    //设置一次内容就为空了,不能反复设置
                    $(value).data('save', html);
                }

                $(value).html('')
            } else if(value.tagName === 'TR'){
                $(value).hide();
            }
        })
    }

    function showNoPower(value) {
        var $ele = $(editor.body).find('[data-power="'+value+'"]');
        $ele.each(function(index, value){
            if(value.tagName === 'TD'){
                //现将内容存储起来
                $(value).html($(value).data('save') || '');
            } else if(value.tagName === 'TR'){
                $(value).show();
            }
            //$(value).css('visibility', 'visible');
        })
    }


    //创建下拉菜单中的键值对
    var items = [];
    for (var i = 0, ci; ci = ['普通','经理','管理员'][i++];) {
        items.push({
            //显示的条目
            label: ci,
            //选中条目后的返回值
            value: i,
            //针对每个条目进行特殊的渲染
            renderLabelHtml: function () {
                //这个是希望每个条目的字体是不同的
                return '<div class="edui-label %%-label">' + (this.label || '') + '</div>';
            }
        });
    }

    //创建下拉框
    var combox = new UE.ui.Combox({
        //需要指定当前的编辑器实例
        editor: editor,
        //添加条目
        items: items,
        //当选中时要做的事情
        onselect: function (t, index) {

            //拿到选中条目的值
            var now = this.items[index].value;

            editor.execCommand(uiName, now);

            nowPower = now;
        },
        //提示
        title: uiName,
        //当编辑器没有焦点时，combox默认显示的内容
        initValue: '普通'
    });

    //我这倒是没啥用
    //里面有disabled设置,所以是有必要的,比如我讲所有按钮disabled掉
    editor.addListener('selectionchange', function (type, causeByUi, uiReady) {
        if (!uiReady) {
            var state = editor.queryCommandState(uiName);
            if (state == -1) {
                combox.setDisabled(true);
            } else {
                combox.setDisabled(false);
                var value = editor.queryCommandValue(uiName);
                if (!value) {
                    //这是设置默认值的
                    combox.setValue('普通');
                    return;
                }
            }
        }

    });

    return combox;
}, [0,3]/*index 指定添加到工具栏上的那个位置，默认时追加到最后,editorId 指定这个UI是那个编辑器实例上的，默认是页面上所有的编辑器都会添加这个按钮*/);