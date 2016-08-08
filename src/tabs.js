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

    window.editor[0].ready(function() {
        fromServer.storage.storeHtml.forEach(function (value, index) {
            if(index){
                $('#viewAdd').trigger('click', value.name);
                window.newCount++;
            }
            window.editor[index].ready(function() {
                window.editor[index].setContent(value.html);
            })

        })

        //window.editor[0].setContent(fromServer.storage.storeHtml);
        window.zTreeObj = window.domainStructure.init(fromServer.storage.nodes)
    });


    //这样就不会自动插入节点,还没试过
    //window.editor[0].addOutputRule(function(root){
    //    // 这里是在解决一个ueditor的bug(对我来说是个bug), 每次编辑框获取焦点的时候都会自动插入<p><br/></p>
    //    // 只处理第一个空的段落，后面的段落可能是人为添加
    //    var firstPNode = root.getNodesByTagName("p")[0];
    //    firstPNode && /^\s*(<br\/>\s*)?$/.test(firstPNode.innerHTML()) && firstPNode.parentNode.removeChild(firstPNode);
    //});

    /**
     * 新增一个tab分页
     * 这里有2个值,一个是全局的标志,一个是tab单独的标志(因为要存到数组中)
     */
    $('#viewAdd').on('click', function (e, name) {
        var index = window.newCount;
        var num = $navigation.find('li').length;
        var ss = '<li class="view"><ul class="toolbar-tabs"><li class="current">编辑</li><li>插入</li><li>表格</li><li>工具</li><li>组件</li></ul><ul class="toolbar-content"><li><script id="container$1" name="content$1" type="text/plain"></script></li></ul></li>';
        var dd = '<li id="tab$1" class="editorComp_$1" contenteditable="true" data-type="view"><span>' + (name ? name :'视图$2') + '</span> <i class="tab-del">&times;</i></li>';

        if(num > 6){
            alert('抱歉,已经不能更多了');
            return;
        }

        $('.content').append(ss.replace(/\$1/g, index));
        $navigation.append(dd.replace(/\$1/g, index).replace(/\$2/g, index));
        window.editor[num] = UE.getEditor('container' + index, config);

        //增加了视图,域结构也要增加
        //$("#treeDemo").trigger('addTag', {isParent: true, name: '视图', open: true, nodes: undefined});

//            先增加在选中
        $navigation.find('li').last().trigger('click');

        //给新增的iframe绑定事件
        var iframeBody = $($('iframe')[num].contentWindow.document.body);

        iframe.bindIframe(iframeBody);

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

        var nodes = zTreeObj.getNodes();

        zTreeObj.removeNode(nodes[index]);

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


        //高亮组件设置tab
        if(!$('#componentsSetting').hasClass('other-msg-current')){
            $('.other-msg-current').removeClass('other-msg-current');
            $('#componentsSetting').addClass('other-msg-current');

            $('.other-content > div').hide().eq(1).show();
        }

        var nowType = $(this).data('type');
        if($('#componentsSetting').data('type') != nowType){
            //这次需要显示的组件类型和上一次不一样
            $('.components>div').hide().filter('.type-'+nowType).show();
        }

        $('#powerSet').val( $(this).data('power') || 1 );

        $('#componentsSetting')
            .data('component', $(this))
            .data('type', nowType);

        e.stopPropagation();
    })

    //function getDomain() {
    //    //使用闭包获取域结构的json节点
    //    //[
    //    //    {
    //    //        name: '视图1',
    //    //        children: [
    //    //            {
    //    //                name: '姓名'
    //    //            },
    //    //            {
    //    //                name: '报销明细',
    //    //                children: [
    //    //                    {
    //    //                        name: '交通费'
    //    //                    },
    //    //                    {
    //    //                        name: '差旅费'
    //    //                    },
    //    //                    {
    //    //                        name: '补助'
    //    //                    }
    //    //                ]
    //    //            }
    //    //        ]
    //    //    },
    //    //    {
    //    //        name: '视图2',
    //    //        children: [
    //    //            {
    //    //                name: '付款金额'
    //    //            }
    //    //        ]
    //    //    }
    //    //]
    //
    //    var allNodes = window.domainStructure.zTreeObj.getNodes();
    //    var result = [];
    //
    //    function getTest(value){
    //        var obj = {};
    //        obj.name = value.name;
    //        if(value.children){
    //            //如果有子节点
    //            obj.children = [];
    //            value.children.forEach(function(value){
    //                var tt = getTest(value)
    //                obj.children.push(tt);
    //            })
    //            return obj;
    //        } else {
    //            return obj;
    //        }
    //    }
    //
    //    allNodes.forEach(function(value){
    //        var obj = {};
    //        obj.name = value.name;
    //        result.push(getTest(value));
    //    });
    //
    //    return result;
    //}

    function getDomain() {
        var nodes = zTreeObj.transformToArray(zTreeObj.getNodes());
        var controlls = {};
        var temp = {};
        var table = {};
        var value;

        //把第一个节点(域结构)去掉
        nodes.shift();

        for(var i=0;i<nodes.length;i++){
            value = nodes[i];
            if(value.isParent){
                // 重复表
                temp = {"name": value.name};

                value.children.forEach(function(repeat) {
                    table['field'+(repeat.id-100)] = repeat.name;
                })
                temp.fields = table;
                controlls['formtable'+value.id] = temp;
                i += value.children.length;
            } else {
                temp = {"fieldTitle": value.name}
                controlls['field'+(value.id-100)] = temp;
            }
        }

        return controlls;

    }

    /**
     * 导出到外部的数据
     * 1. 视图中编辑过的html
     * 2. 域结构的json对象
     * todo: 多视图中的html是以怎么样的方式导出
     */
    $('#output').on('click', function (e) {
        var html = [];
        var style = '';
        var storeHtml = [];
        var result;
        window.editor.forEach(function(value, index){
            var editorResult = processHtml(value.getContent());
            var $targetTab = $('.navigation').find('li').eq(index)
            html.push({
                id: $targetTab.attr('id'),
                name: $targetTab.find('span').html(),
                html: editorResult.html
            });
            style += editorResult.style;

            storeHtml.push({
                id: $targetTab.attr('id'),
                name: $targetTab.find('span').html(),
                html: value.getContent()
            });
        })

        var nodes = zTreeObj.transformToArray(zTreeObj.getNodes());
        nodes.forEach(function(value){
            //将之前的组件都设置为老的
            if(!value.isOld){
                value.isOld = true
            }
        });

        result = {
            style: style,
            html: html,
            controlls: getDomain(),
            storage: {
                //全局计数器
                newCount: window.newCount,
                //视图的html
                storeHtml: storeHtml,
                //初始化域结构的数据
                nodes: zTreeObj.getNodes()
            }
        }

        console.log(JSON.stringify(result))
    });

    function processHtml(html) {
        html = $('<div>' + html + '</div>');
        var input = html.find('.com-text');
        var style = '<style>';

        //这个主要用于我后面解析的
        var storeStyle = {};

        input.each(function(index, value){
            var cstyle = $(value).find('input').attr('style') || '';
            var width = $(value).find('td').attr('width');
            var height = $(value).find('td').attr('height');
            var id = $(value).attr('id');

            storeStyle[id] = {
                width: width,
                height: height,
                style: cstyle
            }

            cstyle += 'width:' + width + 'px;height:' + height + 'px;';
            style += '#' + id + '{' + cstyle + '}';

            $(value).after('<div>@'+id+'@</div>');
            $(value).remove();
        })

        style += '</style>';

        return {
            style: style,
            storeStyle: storeStyle,
            html: html.html()
        }
    }

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