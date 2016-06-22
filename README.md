# forms-designer
Forms Designer(dev)

主要是基于editor来做二次开发,目前是启用了一个node static server来做,所以对文件图片的上传效果是不支持的,后期是会放到php的server上面去

[Daily Paper](DailyPaper.md)

下面是前期的一些评估点:

<table cellspacing="0" cellpadding="0">
    <tbody>
        <tr class="firstRow">
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; word-break: break-all; background-color: rgb(190, 192, 191);" width="89" height="14"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(190, 192, 191);" width="89" height="14">
                <p style="text-align:center;">
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);"><strong>需求点</strong></span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(190, 192, 191);" width="89" height="14">
                <p style="text-align:center;">
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);"><strong>优先级</strong></span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(190, 192, 191);" width="89" height="14">
                <p style="text-align:center;">
                    <span style="font-family:Helvetica;color:#000000;font-stretch: normal; font-size: 10px; font-family: Helvetica; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);"><strong>ueditor</strong></span><span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);"><strong>支持度</strong></span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(190, 192, 191);" width="89" height="14">
                <p style="text-align:center;">
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);"><strong>开发难度</strong></span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(190, 192, 191);" width="89" height="14">
                <p style="text-align:center;">
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);"><strong>说明</strong></span>
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; word-break: break-all; background-color: rgb(220, 220, 220);" width="89" height="13" class="selectTdClass">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);"><strong>全局设置</strong></span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13" class="selectTdClass">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">新建多视图</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13" class="selectTdClass">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">高</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13" class="selectTdClass">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">不支持</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13" class="selectTdClass">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">高</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13" class="selectTdClass"></td>
        </tr>
        <tr>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(220, 220, 220);" width="89" height="41"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="41">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">试图的基本设置（背景色，背景图片，板式设置）</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="41">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">高</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="41">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">部分支持</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="41">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">低</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="41">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">板式设置不支持</span>
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(220, 220, 220);" width="89" height="14"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="14">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">列表样式模板</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="14"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="14">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">支持</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="14"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="14"></td>
        </tr>
        <tr>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(220, 220, 220);" width="89" height="27"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="27">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">默认字体类别</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="27">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">低</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="27">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">部分支持</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="27">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">中</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="27">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">默认支持的比较少，需要增加</span>
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(220, 220, 220);" width="89" height="28"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="28">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">分页符</span><span style="font-family:Helvetica;color:#000000;font-stretch: normal; font-size: 10px; font-family: Helvetica; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">/</span><span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">分隔符</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="28">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">高</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="28">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">部分支持</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="28">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">低</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="28">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">分页符用于分页打印设置</span>
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(220, 220, 220);" width="89" height="55"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="55">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">从其他源粘贴（带样式</span><span style="font-family:Helvetica;color:#000000;font-stretch: normal; font-size: 10px; font-family: Helvetica; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">/</span><span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">不带样式）</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="55"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="55">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">支持</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="55"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="55">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">支持</span><span style="font-family:Helvetica;color:#000000;font-stretch: normal; font-size: 10px; font-family: Helvetica; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">Dreamweaver</span><span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">（不用兼容</span><span style="font-family:Helvetica;color:#000000;font-stretch: normal; font-size: 10px; font-family: Helvetica; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">word</span><span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">，</span><span style="font-family:Helvetica;color:#000000;font-stretch: normal; font-size: 10px; font-family: Helvetica; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">excel</span><span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">）</span>
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(220, 220, 220);" width="89" height="41"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="41">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">组件拖拽</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="41"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="41">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">不支持</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="41">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">高</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="41">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">在页面各个能插入组件的位置能自由拖拽</span>
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(220, 220, 220);" width="89" height="14"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="14">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">表单预览</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="14"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="14">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">支持</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="14"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="14"></td>
        </tr>
        <tr>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(220, 220, 220);" width="89" height="13"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">工具栏交互布局</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">低</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">不支持</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">低</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">工作量比较大</span>
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(220, 220, 220);" width="89" height="11"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="11"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="11"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="11"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="11"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="11"></td>
        </tr>
        <tr>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(220, 220, 220);" width="89" height="28">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);"><strong>表格</strong></span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="28">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">生成方式：拖动</span><span style="font-family:Helvetica;color:#000000;font-stretch: normal; font-size: 10px; font-family: Helvetica; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">/</span><span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">板式</span><span style="font-family:Helvetica;color:#000000;font-stretch: normal; font-size: 10px; font-family: Helvetica; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">/</span><span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">绘制</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="28">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">板式：高；绘制：低</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="28">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">部分支持</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="28">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">高</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="28">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">目前只支持拖动生成</span>
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(220, 220, 220);" width="89" height="13"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">擦除表格行列</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">低</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">不支持</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">高</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13"></td>
        </tr>
        <tr>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(220, 220, 220);" width="89" height="13"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">底纹颜色</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">支持</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13"></td>
        </tr>
        <tr>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(220, 220, 220);" width="89" height="28"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="28">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">自动行高列宽（等分）</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="28"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="28">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">支持</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="28"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="28"></td>
        </tr>
        <tr>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(220, 220, 220);" width="89" height="27"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="27">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">行高</span><span style="font-family:Helvetica;color:#000000;font-stretch: normal; font-size: 10px; font-family: Helvetica; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">/</span><span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">列宽设置（固定值，最小值）</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="27">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">高</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="27">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">不支持</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="27">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">低</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="27"></td>
        </tr>
        <tr>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(220, 220, 220);" width="89" height="13"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">对齐方式</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">高</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">不支持</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">低</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">左</span><span style="font-family:Helvetica;color:#000000;font-stretch: normal; font-size: 10px; font-family: Helvetica; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">/</span><span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">右</span><span style="font-family:Helvetica;color:#000000;font-stretch: normal; font-size: 10px; font-family: Helvetica; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">/</span><span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">居中</span>
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(220, 220, 220);" width="89" height="84"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="84">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">拖动要求</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="84"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="84">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">支持</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="84"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="84">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">只能通过最后一行一列来实现表格整体高度宽度的调整。其他位置的拖动只涉及到相邻单元格的影响</span>
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(220, 220, 220);" width="89" height="11"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="11"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="11"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="11"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="11"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="11"></td>
        </tr>
        <tr>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(220, 220, 220);" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);"><strong>表格（单元格）</strong></span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">四周间距</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">高</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">不支持</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">低</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13"></td>
        </tr>
        <tr>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(220, 220, 220);" width="89" height="28"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="28">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">边框</span><span style="font-family:Helvetica;color:#000000;font-stretch: normal; font-size: 10px; font-family: Helvetica; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);"> </span><span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">样式</span><span style="font-family:Helvetica;color:#000000;font-stretch: normal; font-size: 10px; font-family: Helvetica; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);"> </span><span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">前景</span><span style="font-family:Helvetica;color:#000000;font-stretch: normal; font-size: 10px; font-family: Helvetica; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">/</span><span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">背景颜色</span><span style="font-family:Helvetica;color:#000000;font-stretch: normal; font-size: 10px; font-family: Helvetica; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);"> </span><span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">宽</span><span style="font-family:Helvetica;color:#000000;font-stretch: normal; font-size: 10px; font-family: Helvetica; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">/</span><span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">高度</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="28"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="28">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">支持</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="28"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="28"></td>
        </tr>
        <tr>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(220, 220, 220);" width="89" height="13"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">对齐方式</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">支持</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:Helvetica;color:#000000;font-stretch: normal; font-size: 10px; font-family: Helvetica; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">9</span><span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">个方位</span>
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(220, 220, 220);" width="89" height="11"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="11"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="11"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="11"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="11"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="11"></td>
        </tr>
        <tr>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(220, 220, 220);" width="89" height="28">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);"><strong>组件</strong></span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="28">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">插入方式（空白区域，单元格内）</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="28">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">高</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="28">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">不支持</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="28">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">低</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="28">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">暂时先支持点击插入</span>
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(220, 220, 220);" width="89" height="13"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">提供域结构支持</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">中</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">不支持</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">高</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">参考</span><span style="font-family:Helvetica;color:#000000;font-stretch: normal; font-size: 10px; font-family: Helvetica; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">infopath</span>
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(220, 220, 220);" width="89" height="11"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="11"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="11"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="11"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="11"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="11"></td>
        </tr>
        <tr>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(220, 220, 220);" width="89" height="28">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);"><strong>组件（文本框）</strong></span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="28">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">字体</span><span style="font-family:Helvetica;color:#000000;font-stretch: normal; font-size: 10px; font-family: Helvetica; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">/</span><span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">字号</span><span style="font-family:Helvetica;color:#000000;font-stretch: normal; font-size: 10px; font-family: Helvetica; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">/</span><span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">颜色</span><span style="font-family:Helvetica;color:#000000;font-stretch: normal; font-size: 10px; font-family: Helvetica; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">/</span><span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">加粗</span><span style="font-family:Helvetica;color:#000000;font-stretch: normal; font-size: 10px; font-family: Helvetica; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">/</span><span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">斜体</span><span style="font-family:Helvetica;color:#000000;font-stretch: normal; font-size: 10px; font-family: Helvetica; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">/</span><span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">下划线</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="28">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">高</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="28">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">不支持</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="28">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">低</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="28"></td>
        </tr>
        <tr>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(220, 220, 220);" width="89" height="13"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">占位符</span><span style="font-family:Helvetica;color:#000000;font-stretch: normal; font-size: 10px; font-family: Helvetica; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">/</span><span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">提示语</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">高</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">不支持</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">低</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13"></td>
        </tr>
        <tr>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(220, 220, 220);" width="89" height="28"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="28">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">生成后保留</span><span style="font-family:Helvetica;color:#000000;font-stretch: normal; font-size: 10px; font-family: Helvetica; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">/</span><span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">替换功能</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="28">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">低</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="28">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">不支持</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="28">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">高</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="28">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">先实现保留功能</span>
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(220, 220, 220);" width="89" height="11"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="11"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="11"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="11"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="11"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="11"></td>
        </tr>
        <tr>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(220, 220, 220);" width="89" height="27">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);"><strong>组件（重复表）</strong></span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="27">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">页眉页脚</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="27">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">高</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="27">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">不支持</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="27">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">高</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="27">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">默认勾选页眉，可能会有多行的情况</span>
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(220, 220, 220);" width="89" height="12"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="12"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="12"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="12"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="12"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="12"></td>
        </tr>
        <tr>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(220, 220, 220);" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);"><strong>打印</strong></span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">横向纵向</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">支持</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13"></td>
        </tr>
        <tr>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(220, 220, 220);" width="89" height="13"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">页眉页脚</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">低</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">部分支持</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">中</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">需要跟协同整合</span>
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(220, 220, 220);" width="89" height="12"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="12"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="12"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="12"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="12"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="12"></td>
        </tr>
        <tr>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(220, 220, 220);" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);"><strong>跟协同</strong></span><span style="font-family:Helvetica;color:#000000;font-stretch: normal; font-size: 10px; font-family: Helvetica; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);"><strong>CAP</strong></span><span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);"><strong>整合</strong></span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">低</span>
                </p>
            </td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="13">
                <p>
                    <span style="font-family:PingFang SC;color:#000000;font-stretch: normal; font-size: 10px; font-family: &#39;PingFang SC&#39;; font-kerning: none; font-variant-ligatures: common-ligatures; -webkit-text-stroke-color: rgb(0, 0, 0);">后续再评估</span>
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(220, 220, 220);" width="89" height="11"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="11"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="11"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="11"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="11"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="11"></td>
        </tr>
        <tr>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px; background-color: rgb(220, 220, 220);" width="89" height="12"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="12"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="12"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="12"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="12"></td>
            <td valign="top" style="border-color: rgb(0, 0, 0); padding: 4px;" width="89" height="12"></td>
        </tr>
    </tbody>
</table>