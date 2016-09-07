# Forms Designer(dev)

## Intro:

主要是基于[UEditor](https://github.com/fex-team/ueditor)来做二次开发,目前是启用了一个[node static server](https://github.com/avevlad/gulp-connect)来做,所以对文件图片的上传效果是不支持的,可以放到jsp的server上面(公司的后台就是jsp,也可以放到其他后端环境,具体参考ueditor官网),[如何跟jsp整合](https://github.com/choizhang/forms-designer/wiki/%E8%B7%9F%E5%90%8E%E7%AB%AFjsp%E6%95%B4%E5%90%88)

#### Infopath目前的问题

1. 生成出来的html不符合标准模式且修复兼容性无法解决(致命)
2. 微软官方已经不再维护(致命)
3. 基于CS架构,且性能较差

#### 跟[Formtalk](http://www.formtalk.net/form/form.do?method=design4New&formType=form)的区别
2种都是表单设计器,目前市面上主要是以Formtalk这种生成器比较多,formtalk是移动端单列的,所以复杂度要低很多

## 我们的优势
1. 基于B/S架构对浏览器的兼容性更好,也更符合未来发展的趋势
2. 能根据需求自定义的开发迭代
3. 布局随心所欲(基于光标定位,非绝对定位)
4. 轻组件概念但组件架构仍然需要
5. 组件支持域结构查看

## 风险:
1. 第一期不考虑移动端(目前的布局采用的table,在移动端也很难适配)
2. 开发技术经验准备度
3. 竞品参考少,而且相关技术实现原理介绍也非常少
4. 交互方式的差异性(c/s : b/s), 比如表格的居中

## 总结:
这件事就跟唐僧取经一样,意义重大,路途艰险

## Tips:

[Daily Paper](DailyPaper.md)

开发中碰到问题都记录在[Issues](https://github.com/choizhang/forms-designer/issues)

整理总结的文档请参考[Wiki](https://github.com/choizhang/forms-designer/wiki)

下面是前期的一些评估点:

[最新的评估点](https://docs.zoho.com.cn/sheet/ropen.do?rid=jw8rlf4d3c93ce6144dc2bef50bc3cc09d4fb#)

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

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) choizhang
