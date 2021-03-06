/**
 * Created with JetBrains PhpStorm.
 * User: xuheng
 * Date: 12-12-19
 * Time: 下午4:55
 * To change this template use File | Settings | File Templates.
 */
(function () {
    var title = $G("J_title"),
        titleCol = $G("J_titleCol"),
        caption = $G("J_caption"),
        sorttable = $G("J_sorttable"),
        autoSizeContent = $G("J_autoSizeContent"),
        autoSizePage = $G("J_autoSizePage"),
        J_current = $G("J_current"),
        borderWidth = $G("J_borderWidth"),
        borderStyle = $G("J_borderStyle"),
        tone = $G("J_tone"),
        me,
        preview = $G("J_preview");

    var editTable = function () {
        me = this;
        me.init();
    };
    editTable.prototype = {
        init: function () {
            var colorPiker = new UE.ui.ColorPicker({
                    editor: editor
                }),
                colorPop = new UE.ui.Popup({
                    editor: editor,
                    content: colorPiker
                });

            title.checked = editor.queryCommandState("inserttitle") == -1;
            titleCol.checked = editor.queryCommandState("inserttitlecol") == -1;
            caption.checked = editor.queryCommandState("insertcaption") == -1;
            sorttable.checked = editor.queryCommandState("enablesort") == 1;

            var enablesortState = editor.queryCommandState("enablesort"),
                disablesortState = editor.queryCommandState("disablesort");

            sorttable.checked = !!(enablesortState < 0 && disablesortState >= 0);
            sorttable.disabled = !!(enablesortState < 0 && disablesortState < 0);
            sorttable.title = enablesortState < 0 && disablesortState < 0 ? lang.errorMsg : '';

            //重置表格属性
            me.createTable(title.checked, titleCol.checked, caption.checked);
            me.setAutoSize();
            me.setWidth(me.getWidth());
            me.setStyle(me.getStyle());
            me.setColor(me.getColor());

            domUtils.on(title, "click", me.titleHanler);
            domUtils.on(titleCol, "click", me.titleColHanler);
            domUtils.on(caption, "click", me.captionHanler);
            domUtils.on(sorttable, "click", me.sorttableHanler);
            domUtils.on(autoSizeContent, "click", me.autoSizeContentHanler);
            domUtils.on(autoSizePage, "click", me.autoSizePageHanler);
            domUtils.on(borderWidth, "change", me.setWidth);
            domUtils.on(borderStyle, "change", me.setStyle);

            domUtils.on(tone, "click", function () {
                colorPop.showAnchor(tone);
            });
            domUtils.on(document, 'mousedown', function () {
                colorPop.hide();
            });
            //颜色弹窗选择颜色,然后进行设置
            colorPiker.addListener("pickcolor", function () {
                me.setColor(arguments[1]);
                colorPop.hide();
            });
            colorPiker.addListener("picknocolor", function () {
                me.setColor("");
                colorPop.hide();
            });
        },

        //右边的预览效果
        createTable: function (hasTitle, hasTitleCol, hasCaption) {
            var arr = [],
                sortSpan = '<span>^</span>';
            arr.push("<table id='J_example'>");
            if (hasCaption) {
                arr.push("<caption>" + lang.captionName + "</caption>")
            }
            if (hasTitle) {
                arr.push("<tr>");
                if (hasTitleCol) {
                    arr.push("<th>" + lang.titleName + "</th>");
                }
                for (var j = 0; j < 5; j++) {
                    arr.push("<th>" + lang.titleName + "</th>");
                }
                arr.push("</tr>");
            }
            for (var i = 0; i < 6; i++) {
                arr.push("<tr>");
                if (hasTitleCol) {
                    arr.push("<th>" + lang.titleName + "</th>")
                }
                for (var k = 0; k < 5; k++) {
                    arr.push("<td>" + lang.cellsName + "</td>")
                }
                arr.push("</tr>");
            }
            arr.push("</table>");
            preview.innerHTML = arr.join("");
            this.updateSortSpan();
        },
        titleHanler: function () {
            var example = $G("J_example"),
                frg = document.createDocumentFragment(),
                color = domUtils.getComputedStyle(domUtils.getElementsByTagName(example, "td")[0], "border-color"),
                colCount = example.rows[0].children.length;

            //还是在做预览效果
            if (title.checked) {
                example.insertRow(0);
                for (var i = 0, node; i < colCount; i++) {
                    node = document.createElement("th");
                    node.innerHTML = lang.titleName;
                    frg.appendChild(node);
                }
                example.rows[0].appendChild(frg);

            } else {
                domUtils.remove(example.rows[0]);
            }
            me.setColor(color);
            me.updateSortSpan();
        },
        titleColHanler: function () {
            var example = $G("J_example"),
                color = domUtils.getComputedStyle(domUtils.getElementsByTagName(example, "td")[0], "border-color"),
                colArr = example.rows,
                colCount = colArr.length;

            if (titleCol.checked) {
                for (var i = 0, node; i < colCount; i++) {
                    node = document.createElement("th");
                    node.innerHTML = lang.titleName;
                    colArr[i].insertBefore(node, colArr[i].children[0]);
                }
            } else {
                for (var i = 0; i < colCount; i++) {
                    domUtils.remove(colArr[i].children[0]);
                }
            }
            me.setColor(color);
            me.updateSortSpan();
        },
        captionHanler: function () {
            var example = $G("J_example");
            if (caption.checked) {
                var row = document.createElement('caption');
                row.innerHTML = lang.captionName;
                example.insertBefore(row, example.firstChild);
            } else {
                domUtils.remove(domUtils.getElementsByTagName(example, 'caption')[0]);
            }
        },
        sorttableHanler: function () {
            //因为他是给第一行加箭头符号,所以逻辑都没写
            me.updateSortSpan();
        },
        autoSizeContentHanler: function () {
            var example = $G("J_example");
            example.removeAttribute("width");
        },
        autoSizePageHanler: function () {
            var example = $G("J_example");
            var tds = example.getElementsByTagName(example, "td");
            utils.each(tds, function (td) {
                td.removeAttribute("width");
            });
            example.setAttribute('width', '100%');
        },
        updateSortSpan: function () {
            var example = $G("J_example"),
                row = example.rows[0];

            var spans = domUtils.getElementsByTagName(example, "span");
            utils.each(spans, function (span) {
                span.parentNode.removeChild(span);
            });
            if (sorttable.checked) {
                utils.each(row.cells, function (cell, i) {
                    var span = document.createElement("span");
                    span.innerHTML = "^";
                    cell.appendChild(span);
                });
            }
        },
        //边框的3个属性函数其实可以简化
        setWidth: function (e) {
            var example = $G("J_example"),
                arr = domUtils.getElementsByTagName(example, "td").concat(
                    domUtils.getElementsByTagName(example, "th"),
                    domUtils.getElementsByTagName(example, "caption")
                );

            var value = (e.target && e.target.value) || e;
            borderWidth.value = value;
            utils.each(arr, function (node) {
                node.style.borderWidth = value;
            });
        },
        getWidth: function () {
            var start = editor.selection.getStart(), color,
                cell = domUtils.findParentByTagName(start, ["td", "th", "caption"], true);
            color = cell && domUtils.getComputedStyle(cell, "border-width");
            if (!color)  color = "1px";
            return color;
        },
        setStyle: function (e) {
            //这个是弹窗里面的示例
            var example = $G("J_example"),
                arr = domUtils.getElementsByTagName(example, "td").concat(
                    domUtils.getElementsByTagName(example, "th"),
                    domUtils.getElementsByTagName(example, "caption")
                );

            var value = (e.target && e.target.value) || e;
            borderStyle.value = value;
            utils.each(arr, function (node) {
                node.style.borderStyle = value;
            });
        },
        getStyle: function () {
            var start = editor.selection.getStart(), color,
                cell = domUtils.findParentByTagName(start, ["td", "th", "caption"], true);
            color = cell && domUtils.getComputedStyle(cell, "border-style");
            if (!color)  color = "solid";
            return color;
        },
        getColor: function () {
            var start = editor.selection.getStart(), color,
                cell = domUtils.findParentByTagName(start, ["td", "th", "caption"], true);
            color = cell && domUtils.getComputedStyle(cell, "border-color");
            if (!color)  color = "#DDDDDD";
            return color;
        },
        setColor: function (color) {
            var example = $G("J_example"),
                arr = domUtils.getElementsByTagName(example, "td").concat(
                    domUtils.getElementsByTagName(example, "th"),
                    domUtils.getElementsByTagName(example, "caption")
                );

            tone.value = color;
            utils.each(arr, function (node) {
                node.style.borderColor = color;
            });

        },
        //默认值就是页面宽度自适应
        setAutoSize: function () {
            var me = this;
            J_current.checked = true;
            //me.autoSizePageHanler();
        }
    };

    new editTable;

    dialog.onok = function () {
        editor.__hasEnterExecCommand = true;

        var checks = {
            title: "inserttitle deletetitle",
            titleCol: "inserttitlecol deletetitlecol",
            caption: "insertcaption deletecaption",
            sorttable: "enablesort disablesort"
        };
        editor.fireEvent('saveScene');
        for (var i in checks) {
            var cmds = checks[i].split(" "),
                input = $G("J_" + i);
            if (input["checked"]) {
                editor.queryCommandState(cmds[0]) != -1 && editor.execCommand(cmds[0]);
            } else {
                editor.queryCommandState(cmds[1]) != -1 && editor.execCommand(cmds[1]);
            }
        }

        //修改边框的粗细,样式和颜色
        editor.execCommand("edittable", tone.value, borderWidth.value, borderStyle.value);
        autoSizeContent.checked ? editor.execCommand('adaptbytext') : "";
        autoSizePage.checked ? editor.execCommand("adaptbywindow") : "";
        editor.fireEvent('saveScene');

        editor.__hasEnterExecCommand = false;
    };
})();