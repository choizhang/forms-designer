$(function () {

    var $treeDemo = $('#treeDemo');

    var zNodes = [
//        {
//            name: "视图1",
//            open: true,
//            children: [
////                    可以在这自定义数据
//                {name: "test1_1", ddd: 'ggg'},
//                {name: "test1_2"}
//            ]
//        }
//        {
//            name: "test2",
//            open: true,
//            children: [
//                {name: "test2_1"},
//                {name: "test2_2"}
//            ]
//        }
    ];

// zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
    var setting = {
        edit: {
            enable: true,
            drag: {
                isCopy: true,
                isMove: false
            },

            showRemoveBtn: true,
            showRenameBtn: true
        },
        callback: {
//            点击组件高亮
            onClick: function (event, treeId, treeNode) {
                $('iframe').contents().find('.focus').removeClass('focus');

                var $component = $('iframe').contents().find('.editorComp_' + (treeNode.id - 100));



                $component.addClass('focus');

                //触发了click会导致拖拽的bug,而且没有必要,拖拽只能点击标志来拖动
                //$component.find('.component-handle').eq(0).trigger('click');
            },

            onDragMove: function (event, treeId, treeNode) {
                console.log(event.target);
            },

//            右键菜单
            onRightClick: function (event, treeId, treeNode) {
                console.log(event)
                console.log(treeNode)

                if (!treeNode && event.target.tagName.toLowerCase() != "button" && $(event.target).parents("a").length == 0) {
                    zTreeObj.cancelSelectedNode();
                    showRMenu("root", event.clientX, event.clientY);
                } else if (treeNode && !treeNode.noR) {
                    if(!treeNode.level){
                        //第一级
                        showRMenu("view", event.clientX, event.clientY);
                        //当前的权限设置
                        $('#m_power').find('.current').removeClass('current');

                        var num = $('.editorComp_' + (treeNode.id - 100)).attr('data-power') || '1';

                        $('#m_power').find('li').eq(parseInt(num)-1).addClass('current');

                    } else {
                        showRMenu("node", event.clientX, event.clientY);
                    }
                    zTreeObj.selectNode(treeNode);

                }
            },

//            重命名
            onRename: function (event, treeId, treeNode, isCancel) {
                console.log(treeNode)
                var id = treeNode.id - 100;
                var newName = treeNode.name;
                if (!treeNode.isParent) {
//                    不是文件夹
                    $('iframe').contents().find('.editorComp_' + id).find('.name').val(newName);
                }

                if(treeNode.level === 0){
                    //表示是树形结构的第一级,也即是视图区
                    $('.editorComp_'+id).find('span').html(newName);
                }

            }
        }
    };

    //        域结构初始化
    var zTreeObj = $.fn.zTree.init($treeDemo, setting, zNodes);

    //    动态增加一个子节点
    $treeDemo.on('addTag', function (e, args) {
        var $navigation = $('.navigation');
        var num = $navigation.find('li').length;

        if (!args) {
            args = {};
            args.isParent = e.isParent;
            args.name = e.name;
            args.open = e.open;
            args.nodes = e.nodes;
        }

        var treeNode = args.nodes;

        if (treeNode) {
            //叶子节点
            treeNode = zTreeObj.addNodes(treeNode, {
                id: (100 + newCount),
                pId: treeNode.id,
                isParent: args.isParent,
                name: args.name
            });
        } else {
            //根节点
            treeNode = zTreeObj.addNodes(null, {
                id: (100 + newCount),
                pId: 0,
                open: args.open,
                isParent: args.isParent,
                name: args.name + num
            });
        }
        if (treeNode) {
//                zTreeObj.editName(treeNode[0]);
        } else {
            alert("叶子节点被锁定，无法增加子节点");
        }

        window.newCount++;

        return treeNode;
    })

    //        域结构中右键插入一个组件
    function addComponent() {
        var treeNode = zTreeObj.getSelectedNodes();
        var num = $('.current').index();

        var html = $('iframe').contents().find('.editorComp_' + (treeNode[0].id - 100))[0].outerHTML;

        window.editor[num].execCommand('inserthtml', html);

        hideRMenu();
    }

    //        给视图添加权限
    function addPower(event, num) {
        console.log($(event.target))
        console.log(num)
        var $target = $(event.target);
        var treeNode = zTreeObj.getSelectedNodes();

        $('.editorComp_' + (treeNode[0].id - 100)).attr('data-power', num);

        $target.parent().find('.current').removeClass('current');
        $target.addClass('current');

        hideRMenu();
    }

//        默认增加视图1
    $treeDemo.trigger('addTag', {isParent: true, name: '视图', open: true, nodes: undefined});

    //        $("#addParent").on("click", {isParent:true}, add);
    //        $("#addLeaf").on("click", {isParent:false}, add);

    //    点击子节点选中相应组件

    //    双击弹窗设置

    function showRMenu(type, x, y) {
        $("#rMenu ul").show();
        console.log(type)
        if (type == "root") {
            // 这个应该是右键到了非文字图形的其他区域,目前无用
            $("#rMenu ul").hide();
        } else if(type == "view") {
            $('#m_power').show();
            $('#m_add').hide();

        } else {
            $('#m_power').hide();
            $('#m_add').show();
        }
        $("#rMenu").css({"top": y + "px", "left": x + "px", "visibility": "visible"});

        $("body").on("mousedown", onBodyMouseDown);
    }

    function hideRMenu() {
        if ($("#rMenu")) $("#rMenu").css({"visibility": "hidden"});
        $("body").off("mousedown", onBodyMouseDown);
    }

    function onBodyMouseDown(event) {
        if (!(event.target.id == "rMenu" || $(event.target).parents("#rMenu").length > 0)) {
            $("#rMenu").css({"visibility": "hidden"});
        }

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

        var allNodes = zTreeObj.getNodes();
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

        console.log('域结构的json', result)

    }


    //保留给外部使用
    window.domainStructure = {
        addComponent: addComponent,
        addPower: addPower,
        zTreeObj: zTreeObj
    }
});