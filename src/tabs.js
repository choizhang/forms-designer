$(function () {
    var $navigation = $('.navigation');

    window.editor[0] = UE.getEditor('container', {
//            toolbars: [
//                ['fullscreen', 'source', 'undo', 'redo', 'bold']
//            ],
//        shortcutMenu: [],
        allowDivTransToP: false,
        autoHeightEnabled: true,
        autoFloatEnabled: true,
        //initialFrameWidth : 1000,  //编辑器宽度，默认1000
        initialFrameHeight : 500  //编辑器高度，默认320
//            分隔线替代文字
//        pageBreakTag: '\<hr class="pagebreak" noshade="noshade" size="5" style="-webkit-user-select: none;">'
    });

    console.log(window.newCount)

    //var index = window.newCount + 1;

    var ss = '<li class="view"><ul class="toolbar-tabs"><li class="current">编辑</li><li>插入</li><li>表格</li><li>工具</li><li>组件</li></ul><ul class="toolbar-content"><li><script id="container$1" name="content$1" type="text/plain"></script></li></ul></li>';
    var dd = '<li class="editorComp_$1"><span>视图$2</span> <i class="tab-del">&times;</i></li>';

    /**
     * 新增一个tab分页
     */
    $('.add').on('click', function (e) {
        var index = window.newCount;
        var num = $navigation.find('li').length;

        $('.content').append(ss.replace(/\$1/g, index));
        $navigation.append(dd.replace(/\$1/g, index).replace(/\$2/g, num+1))
        window.editor[num] = UE.getEditor('container' + index);

        //增加了视图,域结构也要增加
        $("#treeDemo").trigger('addTag', {isParent: true, name: '视图', nodes: undefined});

//            先增加在选中
        $navigation.find('li').last().trigger('click');

        //给新增的iframe绑定事件
        var iframeBody = $($('iframe')[num].contentWindow.document.body);

        iframe.bindIframe(iframeBody)

        e.stopPropagation();
    })

    /**
     * 点击删除按钮将当前tab删除
     */
    $navigation.on('click', '.tab-del', function (e) {
        // 应该给予提示
        //alert('删除不可逆,确定要删除该视图吗?')

        var relateLi = $(this).closest('li');
        var index = relateLi.index();
        relateLi.remove();
        $('.content').eq(index).remove();

        var nodes = domainStructure.zTreeObj.getNodes();
        console.log($navigation.find('.current'))

        domainStructure.zTreeObj.removeNode(nodes[index]);

        if(!$navigation.find('.current').length){
            console.log($navigation.find('li').eq(index))
            $navigation.find('li').eq(index).trigger('click');
        }

        e.stopPropagation();
    })

    /**
     * 点击tab实现当前tab显示
     */
    $navigation.on('click', 'li', function (e) {
        $navigation.find('.current').removeClass('current')
        var num = $(this).addClass('current').index();
        $('.content').children('li').hide().eq(num).show();

        var nodes = domainStructure.zTreeObj.getNodes();
        if (nodes.length > 0) {
            domainStructure.zTreeObj.selectNode(nodes[num]);
        }

        e.stopPropagation();
    })

    /**
     * 点击工具栏tab实现当前tab显示
     */
    $('.content').on('click', '.toolbar-tabs li', function (e) {
        var $currentView = $(this).closest('.view')
        $currentView.find('.current').removeClass('current')
        var num = $(this).addClass('current').index();
        $currentView.find('.edui-toolbar').hide().eq(num).show();

        e.stopPropagation();
    })

});