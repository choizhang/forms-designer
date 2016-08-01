$(function () {
    var $navigation = $('.navigation');

    var config = {
//            toolbars: [
//                ['fullscreen', 'source', 'undo', 'redo', 'bold']
//            ],
//        shortcutMenu: [],
        allowDivTransToP: false,
        autoHeightEnabled: true,
        autoFloatEnabled: true,
        //initialFrameWidth : 1000,  //编辑器宽度，默认1000
        //initialFrameHeight : 500  //编辑器高度，默认320
//            分隔线替代文字
//        下面这个设置了可以在预览的时候看到效果
        pageBreakTag: '<hr class="pagebreak" noshade="noshade" size="5" style="-webkit-user-select: none;">'
    };

    window.editor[0] = UE.getEditor('container', config);

    //这样就不会自动插入节点,还没试过
    window.editor[0].addOutputRule(function(root){
        // 这里是在解决一个ueditor的bug(对我来说是个bug), 每次编辑框获取焦点的时候都会自动插入<p><br/></p>
        // 只处理第一个空的段落，后面的段落可能是人为添加
        var firstPNode = root.getNodesByTagName("p")[0];
        firstPNode && /^\s*(<br\/>\s*)?$/.test(firstPNode.innerHTML()) && firstPNode.parentNode.removeChild(firstPNode);
    });

    var ss = '<li class="view"><ul class="toolbar-tabs"><li class="current">编辑</li><li>插入</li><li>表格</li><li>工具</li><li>组件</li></ul><ul class="toolbar-content"><li><script id="container$1" name="content$1" type="text/plain"></script></li></ul></li>';
    var dd = '<li class="editorComp_$1"><span>视图</span> <i class="tab-del">&times;</i></li>';

    /**
     * 新增一个tab分页
     * 这里有2个值,一个是全局的标志,一个是tab单独的标志(因为要存到数组中)
     */
    $('#viewAdd').on('click', function (e) {
        var index = window.newCount;
        var num = $navigation.find('li').length;

        if(num > 6){
            alert('抱歉,已经不能更多了');
            return;
        }

        console.log('index', index)
        console.log('num', num)

        $('.content').append(ss.replace(/\$1/g, index));
        $navigation.append(dd.replace(/\$1/g, index));
        window.editor[num] = UE.getEditor('container' + index, config);

        //增加了视图,域结构也要增加
        $("#treeDemo").trigger('addTag', {isParent: true, name: '视图', open: true, nodes: undefined});

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

        var num = $navigation.find('li').length;

        if(num < 2){
            alert('抱歉,至少要保留一个视图');
            return;
        }

        var relateLi = $(this).closest('li');
        var index = relateLi.index();
        relateLi.remove();
        $('.content').eq(index).remove();

        window.editor.splice(index, 1);

        var nodes = domainStructure.zTreeObj.getNodes();

        domainStructure.zTreeObj.removeNode(nodes[index]);

        //设置当前状态
        if(!$navigation.find('.current').length){
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

    function getDomain() {
        //使用闭包获取域结构的json节点
        //[
        //    {
        //        name: '视图1',
        //        children: [
        //            {
        //                name: '姓名'
        //            },
        //            {
        //                name: '报销明细',
        //                children: [
        //                    {
        //                        name: '交通费'
        //                    },
        //                    {
        //                        name: '差旅费'
        //                    },
        //                    {
        //                        name: '补助'
        //                    }
        //                ]
        //            }
        //        ]
        //    },
        //    {
        //        name: '视图2',
        //        children: [
        //            {
        //                name: '付款金额'
        //            }
        //        ]
        //    }
        //]

        var allNodes = window.domainStructure.zTreeObj.getNodes();
        var result = [];

        function getTest(value){
            var obj = {};
            obj.name = value.name;
            if(value.children){
                //如果有子节点
                obj.children = [];
                value.children.forEach(function(value){
                    var tt = getTest(value)
                    obj.children.push(tt);
                })
                return obj;
            } else {
                return obj;
            }
        }

        allNodes.forEach(function(value){
            var obj = {};
            obj.name = value.name;
            result.push(getTest(value));
        });

        return result;
    }

    /**
     * 导出到外部的数据
     * 1. 视图中编辑过的html
     * 2. 域结构的json对象
     */
    $('#output').on('click', function (e) {
        console.log('域结构的json', getDomain());

        var html = '';
        window.editor.forEach(function(value){
            html += value.getContent();
        })

        console.log('html: ', html);
    });

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