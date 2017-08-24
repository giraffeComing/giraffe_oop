/**
 * Created by zhangwei36 on 2017/8/18.
 */

window.onload=function () {
    //1、关于call，应该是由一个有名字的方法调用的，其参数应该是要this指向的对象
    // function.prototype.call()

    function textCall() {
        console.log(this)
    }
    function App() {
    }
    var app1=new App();
    textCall.call(app1)
    textCall.call(window)
    textCall.call(Array)


    // 2、规范：新建了一个对象的示例可以用一个字母o来命名示例

    function App() {

    }
    var o=new App();

    // 3、call和apply的第一个参数都是this要指向的对象，它们的不同在于第二个参数不同，
    // 第二个参数是传到调用call或者apply的function中的，aplly是以数组的形式传参

    function fn(i,j) {
        console.log(this)
        console.log(i+j)
    }
    function Obj() {

    }
    var o=new Obj();

    fn.call(o,1,3)
    fn.apply(window,[2,4])

    // bind绑定this的形式和使用方法,bind与call和apply不用的是会返回一个函数
    var counter = {
        count: 0,
        inc: function () {
            this.count++;
            console.log(this.count)
        }
    };
    var func = counter.inc.bind(counter);
    func();

/*============================OOP创建节点并参数传参的demo start=======================================*/
    function Oul(arr) {
        this.OulData = arr
    }
    // 注意html文本内容的插入用的是innerHTML，但是节点的插入用的应该是append方法
    Oul.prototype.creatUl=function () {

        var _this = this;
        var aUl=document.createElement('ul');
        for(var i=0;i<this.OulData.length;i++){
            (function (i) {
               var ali= document.createElement('li');
                ali.innerHTML = _this.OulData[i];
                aUl.append(ali)
            })(i)
        }
        document.body.append(aUl)
    }
    // 给最后一个li设置指定的style
    Oul.prototype.lastOne=function (style) {
        var ul=document.getElementsByTagName('ul')[0];
        var aLi=ul.getElementsByTagName('li');
        var lastOne=aLi[this.OulData.length-1];
        lastOne.setAttribute('style',style)
    }
    var oul=new Oul(['第一条','我是第二条','介货是第三条']);
    oul.creatUl();
    oul.lastOne('color:red');
/*============================OOP创建节点的demo end=======================================*/

/*============================OOP弹窗纯定义方法的demo 通过id来标识功能区=======================================*/
    function Popup(id) {
        this.pop= document.getElementById(id);
    }
    Popup.prototype.open=function () {
        this.pop.style.display= 'block';
    }
    Popup.prototype.close=function () {
        this.pop.style.display= 'none';
    };
    // 在这个类下面添加一个getByClass的工具方法,暂时先不用了
    Popup.prototype.getByClass=function(oParent, sClass){
        if(oParent.getElementsByClassName){
            return oParent.getElementsByClassName(sClass);
        }else{
            var res = [];
            var re = new RegExp(' ' + sClass + ' ', 'i')
            var aEle = oParent.getElementsByTagName('*');
            for(var i = 0; i < aEle.length; i++){
                if(re.test(' ' + aEle[i].className + ' ')){
                    res.push(aEle[i]);
                }
            }
            return res;
        }
    }
    var apop=new Popup('pop');
    // 打开的测试按钮
    var aBtn=document.getElementById('btn');
    // 测试实例
    aBtn.onclick=function () {
        apop.open();
    }
    // 关闭按钮
    var colseBtn=document.getElementById('closeBtn')
    colseBtn.onclick=function () {
        apop.close();
    }

/*============================OOP弹窗纯定义方法的demo 通过id来标识功能区=======================================*/


}