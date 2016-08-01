$(function () {

    //        因为iframe的初始化需要时间,所以要做一个延迟
    setTimeout(function () {
        var iframeBody = $($('iframe')[0].contentWindow.document.body);

        bindIframe(iframeBody)

    }, 2000)


    function bindIframe(iframeBody) {
        iframeBody
        //                    包裹的整个组件
            .on('dragend', '.component', function (e) {

                var dataTransfer = e.originalEvent.dataTransfer;

                if (dataTransfer.dropEffect === 'none') {
//                    此次拖拽是失败的

                } else {
//                    拖拽成功,不知道在哪里设置,只能手动删除原来的
                    $(e.currentTarget).remove();
                }

//                如果多个组件嵌套
                e.stopPropagation();
            })
            //                    对拖拽手柄事件绑定
            .on({
                click: function (e) {
                    var el = $(this).closest('.component');
                    var $comp = iframeBody.find('.component');

                    $comp.removeClass('focus').removeClass('dragable');

                    el.prop('draggable', true);
                    el.addClass('dragable');
//                el.prop('draggable', !el.prop('draggable'))

                    var range = document.createRange();
                    range.selectNode(el[0]);

                    //获取当前是第几个tab
                    var current = $('.current').index( );

                    var window = $('iframe')[current].contentWindow;
                    var sel = window.getSelection();
                    sel.removeAllRanges();
                    sel.addRange(range);

                    $(this).addClass('active');


//                让树形结构中相应的高亮
//                zTreeObj.selectNode(nodes[0]);
                    var id = el.attr('class').replace(/.*editorComp_(\d).*/, '$1');
                    $('#treeDemo_' + id + '_a').trigger('click');

                    e.stopPropagation();
                },

                //            连续点击handle拖拽的时候要阻止table的update
                mousemove: function (e) {
                    e.stopPropagation();
                }
            }, '.component-handle')

            //                    对组件里面真实组件事件绑定
            .on({
                change: function (e) {
                    var nodes = domainStructure.zTreeObj.getSelectedNodes();

                    nodes[0].name = $(this).val();
                    $(this).attr('value', $(this).val());
                    domainStructure.zTreeObj.updateNode(nodes[0]);

                    e.stopPropagation();
                },

                //            单击拖拽句柄,相当于是单击域结构
                click: function (e) {
                    var el = $(this).closest('.component');

                    //先将其他组件的状态全部去掉
                    iframeBody.trigger('click');

                    //在拖拽态,如果点击组件要取消拖拽态,不然这个时候也拖不动
                    el.removeClass('dragable');
                    //var id = el.attr('class').split('_')[1];
                    var id = el.attr('class').replace(/.*editorComp_(\d).*/, '$1');
                    $('#treeDemo_' + id + '_a').trigger('click');


                    //将组件在拖拽过程中自动生成的无长度空格,加粗等去除.组件的样式不是通过富文本编辑的
                    var $td = $(this).parent();
                    var html = $td.html()
                        //.replace(/[\u200B]/g, '')
                        //.replace(/<strong.*ong>/g, '')
                        //.replace(/<em.*em>/g, '')

                    //要判断下,不然会感染正常的情况,焦点无法聚焦
                    if(/[\u200B]/.test(html)){
                        html = html.replace(/[\u200B]/g, '');
                        $td.html( html );
                    }

                    if(/<strong.*ong>/.test(html)){
                        html = html.replace(/<strong.*ong>/g, '');
                        $td.html( html );
                    }

                    if(/<em.*em>/.test(html)){
                        html = html.replace(/<em.*em>/g, '');
                        $td.html( html );
                    }


                    //进入到组件内部,需要禁用掉工具栏,组件有自己的样式编辑
                    var current = $('.current').index();
                    //window.editor[current].setDisabled();


                    e.stopPropagation();
                }
            }, '.name')

            /**
             * 点击body区域
             * 1. 将组件置为不可拖动
             * 2. 取消组件的高亮状态
             */
            .on('click', function (e) {
                var $comp = iframeBody.find('.component');
                //var $focus = iframeBody.find('.focus');
                $comp.prop('draggable', false);
                $comp.removeClass('focus').removeClass('dragable');

//                高亮状态取消,并将样式去掉(拖拽的时候将hover的style变成了行内样式)
                iframeBody.find('.component-handle').removeClass('active').removeAttr('style');

                iframeBody.find('.name').removeAttr('style');


                //进入到组件内部,需要禁用掉工具栏,组件有自己的样式编辑
                var current = $('.current').index();
                //window.editor[current].setEnabled();

                //为了注释这句话找了大半天拖拽,因为ueditor也有监听click,而且是在iframe上,所以如果中断事件传输,他有些功能就失效了.比如图片出现拖拽句柄
                //e.stopPropagation();
            })

            .on('dragover', '.component', function (e) {
//                这样设置了就让组件不能拖到组件内部,还是不行
//                e.preventDefault();
//
//                e.originalEvent.dataTransfer.dropEffect = 'move';
            });
    }

    window.iframe = {
        bindIframe: bindIframe
    }

});