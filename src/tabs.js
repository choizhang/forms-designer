$(function () {
    var ues = [];
    var $navigation = $('.navigation');

    ues[0] = UE.getEditor('container', {
//            toolbars: [
//                ['fullscreen', 'source', 'undo', 'redo', 'bold']
//            ],
//        shortcutMenu: [],
        allowDivTransToP: false,
        autoHeightEnabled: true,
        autoFloatEnabled: true,
//            分隔线替代文字
//        pageBreakTag: '\<hr class="pagebreak" noshade="noshade" size="5" style="-webkit-user-select: none;">'
    });

    var index = 1;
    var ss = '<li><script id="container$1" name="content$1" type="text/plain"><\/script></li>';
    var dd = '<li>视图$1 <i class="tab-del">&times;</i></li>';

    /**
     * 新增一个tab分页
     */
    $('.add').on('click', function (e) {
        index++;
        $('.content').append(ss.replace(/\$1/g, index));
        $navigation.append(dd.replace(/\$1/g, index))
        ues[index - 1] = UE.getEditor('container' + index);

        //增加了视图,域结构也要增加
        $("#treeDemo").trigger('addTag', {isParent: true, name: '视图', nodes: undefined});

//            先增加在选中
        $navigation.find('li').last().trigger('click');

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
        $('.content').find('li').hide().eq(num).show();

        var nodes = domainStructure.zTreeObj.getNodes();
        if (nodes.length > 0) {
            domainStructure.zTreeObj.selectNode(nodes[num]);
        }

        e.stopPropagation();
    })

});