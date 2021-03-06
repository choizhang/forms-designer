$(function () {

    var $treeDemo = $('#treeDemo');

    var zNodes = [
        //{"id":100,"pId":0,"open":true,"isParent":true,"name":"域结构","level":0,"tId":"treeDemo_1","parentTId":null,"zAsync":false,"isFirstNode":true,"isLastNode":true,"isAjaxing":false,"isHover":false,"editNameFlag":false,"children":[{"id":102,"pId":100,"isParent":false,"name":"文本域2","level":1,"tId":"treeDemo_2","parentTId":"treeDemo_1","open":false,"zAsync":true,"isFirstNode":true,"isLastNode":false,"isAjaxing":false,"isHover":true,"editNameFlag":false,"isHide":true,"isOld":true},{"id":103,"pId":100,"isParent":false,"name":"文本域3","level":1,"tId":"treeDemo_3","parentTId":"treeDemo_1","open":false,"zAsync":true,"isFirstNode":false,"isLastNode":true,"isAjaxing":false,"isHover":false,"editNameFlag":false,"isOld":true}],"isOld":true}
//        {
//            name: "视图1",
//            open: true,
//            id: 11,
//            pid: 10,  // 表示父子关系,在标准的关系里面,这个没啥用
//            children: [
////                    可以在这自定义数据
//                {name: "test1_1", id: 12, ddd: 'ggg'},
//                {name: "test1_2", id: 13}
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

    var dragId;

// zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
    var setting = {
        edit: {
            enable: true,
            drag: {
                //copy也是我需要的,只是这里只copy了域结构,视图没有变化,所以实现不了需求
                isCopy: false,
                prev: true, next: true,inner: false
                //isMove: false
            },

            removeTitle: '删除',
            renameTitle: '重命名',

            //showRemoveBtn: function(treeId, treeNode) {
            //    //视图目录不会显示删除按钮
            //    return treeNode.level;
            //},
            showRemoveBtn: false,
            showRenameBtn: true
        },
        view: {
            addHoverDom: function(treeId, treeNode) {
                if(!treeNode.isOld){
                    //只对新插入组件能删除
                    var aObj = $("#" + treeNode.tId + "_a");
                    if ($("#diyBtn_"+treeNode.id).length>0) return;
                    var editStr = "<button type='button' class='diyBtn1' id='diyBtn_" + treeNode.id
                        + "' title='删除'>删除</button>";
                    aObj.append(editStr);
                    var btn = $("#diyBtn_"+treeNode.id);
                    if (btn) btn.bind("click", function(){
                        aObj.parent().hide();
                        treeNode.isHide = true;

                        $('iframe').contents().find('.editorComp_'+(treeNode.id-100)).remove();
                    });
                }
            },
            removeHoverDom: function (treeId, treeNode) {
                //为了占位,id正确,所以只是隐藏
                if(!treeNode.isOld) {
                    $("#diyBtn_" + treeNode.id).unbind().remove();
                }
            }
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
                //console.log(event.target);
            },

            //只能平级拖动,只是改变顺序不改变结构
            beforeDrag: function (treeId, treeNodes) {
                for (var i=0,l=treeNodes.length; i<l; i++) {
                    dragId = treeNodes[i].pId;
                    if (treeNodes[i].drag === false) {
                        return false;
                    }
                }
                return true;
            },

            //只能平级拖动,只是改变顺序不改变结构
            beforeDrop: function (treeId, treeNodes, targetNode, moveType) {
                if(targetNode.pId == dragId){
                    return true;
                }else{
                    return false;
                }
            },

//            右键菜单
            onRightClick: function (event, treeId, treeNode) {

                if (!treeNode && event.target.tagName.toLowerCase() != "button" && $(event.target).parents("a").length == 0) {
                    zTreeObj.cancelSelectedNode();
                    showRMenu("root", event.clientX, event.clientY);
                } else if (treeNode && !treeNode.noR) {
                    if(!treeNode.level){
                        //第一级
                        showRMenu("view", event.clientX, event.clientY);
                        //当前的权限设置,因为右键菜单是公用的,所以要获取到tab的值,然后动态设置当前态
                        $('#m_power').find('.current').removeClass('current');
                        var num = $('.editorComp_' + (treeNode.id - 100)).attr('data-power') || '1';
                        $('#m_power').find('li').eq(parseInt(num)-1).addClass('current');

                    } else {
                        showRMenu("node", event.clientX, event.clientY);
                    }
                    zTreeObj.selectNode(treeNode);

                }
            },

            // 重命名,不能出现一样的名字包括嵌套结构里面
            beforeRename: function (treeId, treeNode, newName, isCancel) {
                var nodes = zTreeObj.transformToArray(zTreeObj.getNodes());

                if (newName.length == 0) {
                    alert("节点名称不能为空.");
                    setTimeout(function(){zTreeObj.editName(treeNode)}, 10);
                    return false;
                }else{
                    return nodes.every(function(value){
                        //非自己的其他组件名有一样的
                        if(treeNode.id != value.id && value.name == newName){
                            //组件的名称已经存在了
                            alert('组件的名称('+newName+')已经存在了');
                            //让焦点聚焦在input输入框里面
                            //要设置延迟,不然会死循环
                            setTimeout(function(){zTreeObj.editName(treeNode)}, 10);
                            return false;
                        } else {
                            return true;
                        }
                    })
                }

            },

//            重命名,让视图中的组件提示文字改变
            onRename: function (event, treeId, treeNode, isCancel) {
                var id = treeNode.id - 100;
                var newName = treeNode.name;

                //目前不需要在视图中反应了
                if (!treeNode.isParent) {
//                    不是文件夹,修改组件中的展示名称
                    $('iframe').contents().find('.editorComp_' + id).find('.name').attr('value', newName);
                }

                if(treeNode.level === 0){
                    //表示是树形结构的第一级,也即是视图区
                    $('.editorComp_'+id).find('span').html(newName);
                }
            },

//            只有组件能删除
            onRemove: function (event, treeId, treeNode) {
                var id = treeNode.id - 100;
                //直接多iframe查找也能实现,暂时不做优化了
                var $target = $('iframe').contents().find('.editorComp_'+id);

                $target.remove();
                return false;
            }
        }
    };

    //$('.other-msg-title').on('click', 'li', function() {
    //    var num = $(this).index();
    //
    //    $('.other-msg-current').removeClass('other-msg-current');
    //    $(this).addClass('other-msg-current');
    //
    //    $('.other-content > div').hide().eq(num).show();
    //})

    /**
     * 对设置的控件执行初始化事件监听
     */
    function initSetting() {
        var $component;

        $('#bgColor').change(function() {
            //获取到目标元素,然后进行设置
            $component = $('#componentsSetting').data('component');
            $component.css('color', $(this).val())
        })

        $('#fontSize').change(function() {
            $component = $('#componentsSetting').data('component');
            $component.css('fontSize', $(this).val())
        })

        $('#viewPowerSet').change(function() {
            $component = $('#componentsSetting').data('component');
            $component.attr('data-power', $(this).val())
        })

        $('#comPowerSet').change(function() {
            var num = $('.current').index();
            $component = $('#componentsSetting').data('component');
            $component.closest('.component').attr('data-power', $(this).val());

            //设置完成后要根据目前的权限状态去设置
            //获取当前页面的权限值
            var me = window.editorArr[num];
            var nowPower = me.queryCommandValue('powercombox');
            me.execCommand('powercombox', nowPower);
        })

        $('#comLayout').change(function() {
            $component = $('#componentsSetting').data('component');
            $component.css('textAlign', $(this).val())
        })

        //$('.color-check').each(function() {
        //
        //})

        //颜色控件
        $('.color-check').change(function() {
            var $input = $(this).parent().next();

            $component = $('#componentsSetting').data('component');

            if( $(this).prop("checked") ){
                $input.attr('disabled', false);
                $component.css('color', $input.val());
            } else {
                $input.attr('disabled', true);
                $component.css('color', '');
            }
        })

        //上边框
        $('.border').change(function() {
            $component = $('#componentsSetting').data('component');

            var $setting = $(this).parent().next();
            var $width = $setting.find('.border-width');
            var $style = $setting.find('.border-style');
            var $color = $setting.find('.border-color');
            var type = $(this).data('type');

            if( $(this).prop("checked") ){
                $setting.show();
                $component.css(type, $width.val() + ' ' + $style.val() + ' ' + $color.val());
            } else {
                $setting.hide();
                $component.css(type, 'none');
            }
        })
        $('.border-width').change(function() {
            var type = $(this).data('type');
            $component = $('#componentsSetting').data('component');

            $component.css(type, $(this).val())
        })
        $('.border-style').change(function() {
            var type = $(this).data('type');
            $component = $('#componentsSetting').data('component');

            $component.css(type, $(this).val())
        })
        $('.border-color').change(function() {
            var type = $(this).data('type');
            $component = $('#componentsSetting').data('component');

            $component.css(type, $(this).val())
        });

        $('.padding').change(function() {
            var type = $(this).data('type');
            $component = $('#componentsSetting').data('component');

            $component.css(type, parseInt($(this).val()))
        });

        //页眉
        $('#repeateHeader').change(function() {
            var isChecked = $(this).prop('checked');
            var $header = $('#componentsSetting').data('component').find('.table-header');

            if( isChecked ){
                $header.removeClass('hidden');
            } else {
                $header.addClass('hidden');
            }
        })

        //页脚
        $('#repeateFooter').change(function() {
            var isChecked = $(this).prop('checked');
            var $footer = $('#componentsSetting').data('component').find('.table-footer');

            if( isChecked ){
                $footer.removeClass('hidden');
            } else {
                $footer.addClass('hidden');
            }
        })
    }



    function init(zNodes) {
        //        域结构初始化
        var zTreeObj = $.fn.zTree.init($treeDemo, setting, zNodes);

        var nodes = zTreeObj.transformToArray(zTreeObj.getNodes());

        //将之前删除过的隐藏起来,初始化操作
        nodes.forEach(function(value) {
            if(value.isHide){
                //需要被隐藏
                $('#'+value.tId).hide();
            }
        })

        //        默认增加域结构,如果是更新就不需要增加了
        //if(!zNodes.length){
        //    zTreeObj.addNodes(null, {
        //        id: 100,
        //        pId: 0,
        //        open: true,
        //        isParent: true,
        //        name: '域结构'
        //    });
        //    newCount++;
        //}

        newCount++;

        return zTreeObj;
    }

    //    动态增加一个子节点
    $treeDemo.on('addTag', function (e, args) {
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
                name: args.name + newCount
            });
        } else {
            //根节点
            treeNode = zTreeObj.addNodes(null, {
                id: (100 + newCount),
                pId: 0,
                open: args.open,
                isParent: args.isParent,
                name: args.name + newCount
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
        var treeNode = zTreeObj.getSelectedNodes()[0];
        var num = $('.current').index();

        //如果视图中已经没有这个组件了,这种方法就行不通了
        //var html = $('iframe').contents().find('.editorComp_' + (treeNode[0].id - 100))[0].outerHTML;


        var html = '<table draggable="false" id="field' + newCount++ + '" class="component com-text editorComp_' + (treeNode.id-100) + '"><tr class="firstRow"><td width="50" height="20"><hr class="component-handle"><input type="text" class="name" data-type="text" value="'+ treeNode.name + '" readonly="readonly"></td></tr></table>';

        window.editorArr[num].execCommand('inserthtml', html);

        $('#domainRefresh').trigger('click');

        hideRMenu();
    }

    //        给视图添加权限,现在没有视图了
    //function addPower(event, num) {
    //    var $target = $(event.target);
    //    var treeNode = zTreeObj.getSelectedNodes();
    //
    //    $('.editorComp_' + (treeNode[0].id - 100)).attr('data-power', num);
    //
    //    $target.parent().find('.current').removeClass('current');
    //    $target.addClass('current');
    //
    //    hideRMenu();
    //}

//        默认增加视图1
//    $treeDemo.trigger('addTag', {isParent: true, name: '域结构', open: true, nodes: undefined});


    //        $("#addParent").on("click", {isParent:true}, add);
    //        $("#addLeaf").on("click", {isParent:false}, add);

    //    点击子节点选中相应组件

    //    双击弹窗设置

    function showRMenu(type, x, y) {
        $("#rMenu ul").show();
        if (type == "root") {
            // 这个应该是右键到了非文字图形的其他区域,目前无用
            $("#rMenu ul").hide();
        } else if(type == "view") {
            //目前视图去掉了,权限设置没用了,这里保留实现方法供后面使用
            $('#m_power').hide();
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

    }

    /**
     * 对页面中的组件进行轮询,如果已经被删除(隐藏)了,则域结构也做相应处理
     * 因为删除的方式有很多种,所以不好控(触发).所以目前是手动的方式
     */
    $('#domainRefresh').on('click', function() {

        var nodes = zTreeObj.transformToArray(zTreeObj.getNodes());
        var contents = $('iframe').contents();
        var target, length;

        nodes.forEach(function(value){
            target = $('#'+value.tId+'_ico');
            if(value.level!=0){
                length = contents.find('.editorComp_' + (value.id-100) ).length;

                if(length === 0){
                    //组件已经不存在了不用删除,通过前面的图片做一个记录即可
                    //zTreeObj.removeNode(value);

                    target.addClass('remove');
                } else if(length === 1){
                    target.removeClass('remove');
                    target.removeClass('edit');
                } else {
                    //有多个组件,就添加另外一种标志
                    target.addClass('edit');
                }

            }

        })


    });

    initSetting();


    //保留给外部使用
    window.domainStructure = {
        addComponent: addComponent,
        //addPower: addPower,
        init: init
    }
});