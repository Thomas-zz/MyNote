## 一、初探JS魅力

### js

JavaScript就是修改样式

编写JS的流程 

- 布局：HTML+CSS

- 属性：确定要修改哪些属性

- 事件：确定用户做哪些操作（产品设计）

- 编写JS：在事件中，用JS来修改页面元素的样式

  

### 事件

- onclick  点击

- onmouseover 鼠标移入      onmouseout  鼠标移出

- alert()  弹窗

  

### 元素获取

document.getElementById('')     获取一个元素

document.getElementsByTagName()  获取一组元素



### 函数

function 函数名(){}

修改属性，HTML里叫什么，JS就怎么用。除class是关键字（保留字），不能直接拿来用，要用的话得用className

操作属性的方法：

- .操作  好处：方便
- [ ]操作   但凡用. 的地方都可以用[ ]代替  

**style操作的是行间样式，操作了style后再操作className不会有效果**  



#### 函数传参 

参数就是占位符

### 变量

可变的，不定的

var  给东西起个别名

变量没有类型（undefined），变量的类型取决于赋值的东西

**一个变量应该只存放一种类型的数据**

### 数组 

var arr = [1,2,3] 或 var arr = new Aarry(1,2,3)

length

- 既可获取，又可设置
- 例子：快速清空数组，length设为0
- 数组中应该只存一种类型的变量

- push()  在数组尾部添加

- pop()  在数组尾部删除

- shift()  从数组头部弹出

- unshift()  从数组头部添加

- splice(起点，长度)  从起始位置删除元素

- splice(起点，0，元素)  从起始位置删除，然后添加元素，可实现替换作用

- concat()  连接数组

- join('字符')  用指定字符连接数组  

- sort()  排序，默认是字符串排序规则

- 数字排序：

  xxx.sort(function(n1, n2){

  ​    return n1-n2;

  });

### 字面量（常量）

固定的，如数字、字符串（使用' '，字符串可使用+拼接）  字符串兼容性问题：charat()代替.[ ]

显示类型转换（强制类型转换）

- parseInt() 字符串转整数，从左到右扫描，遇到非数字字符便跳出
- parseFloat()  字符串转浮点数 
- toLowerCase()  转换为小写
- search('')  找到并返回子串的位置
- split(' ')  用指定字符串切分字符串，返回字符串数组

隐示类型转换

- a==b   先转换类型，然后比较
- a===b  不转换类型，直接比
- a-b  减法只有数字相减功能

NaN!=NaN  要判断是否是NaN可以用**isNaN**

### 提取行间事件

**目的：**行为、样式、结构三者分离

事件和其他属性一样，可以用JS来加

**window.onload  当页面加载完后执行**

### 循环

1.初始化  2.条件  3.语句  4.自增

### innerHtml

innerHtml里可以放html元素



## JavaScript基础

ECMAScript：解释器，JS核心 几乎没有兼容性问题

DOM：Document Object Model  操作HTML的能力  有一些操作不兼容

BOM：Browser Object Model  跟浏览器打交道的操作  没有兼容问题（完全不兼容）

### 闭包

子函数可以使用父函数中的局部变量

### 命名规范

函数名：1.类型前缀  2.首字母大写  （匈牙利命名法）

<img src="E:\大二下学习文件\莞青\前端学习\Typora图片\image-20200806152018739.png" alt="image-20200806152018739" style="zoom:60%;" />

### 真假

<img src="E:\大二下学习文件\莞青\前端学习\Typora图片\image-20200806153537197.png" alt="image-20200806153537197" style="zoom:67%;" />

### Json

键值对

Json可用for in来循环

### arguments

可变参、不定参

### 取非行间的样式

currentStyle  兼容性差 仅IE支持

getComputedStyle(函数名，任意值)  获取计算后的样式  低版本IE不兼容

为了方便可将获取非行间样式设置为函数

<img src="E:\大二下学习文件\莞青\前端学习\Typora图片\image-20200806174733849.png" alt="image-20200806174733849" style="zoom:67%;" />

复合样式：background、border

单一样式：backgroundcolor、width、height

行内样式只能取单一样式

### 获取边距

offsetLeft  获取左边距，综合考虑所有因素得到边距，不止是margin

offsetWidth  获取盒模型尺寸

## 定时器的使用

- setInterval(函数，时间)  隔一段时间执行一次
- setTimeout(函数，时间)  延时执行一次
- clearInterval(某一定时器)  关闭定时器
- clearTimeout(某一定时器)  关闭定时器
- 例子：电子时钟、延时提示框、无缝滚动

### 日期

Date()日期对象

- getHours()  getMinutes()  getSeconds()
- getFullYear()  getMonth()  getDate()  getDay()星期几

### 

## DOM基础

子节点  

- childNodes  子节点
- children  子节点，只算元素节点
- 子节点都只算第一层（子元素），不算后代元素

NodeType  节点类型

- nodeType = 1 元素节点
- nodeType = 3 文本节点

父节点

- parentNode

获取元素用来定位的父级

- offsetParent

首尾子节点和兄弟节点

- <img src="E:\大二下学习文件\莞青\前端学习\Typora图片\image-20200807195746468.png" alt="image-20200807195746468" style="zoom:67%;" />

操纵元素属性

<img src="E:\大二下学习文件\莞青\前端学习\Typora图片\image-20200807200032061.png" alt="image-20200807200032061" style="zoom:60%;" />

### 创建、插入和删除元素

创建DOM元素

- createElement()

插入元素

- 父级.appendChild(子节点)     1.先把元素从原有的父级上删掉 2.添加到新的父级
- 父级.insertBefore(子节点，在谁之前)
- 每插入一次页面就会重新渲染一次

删除子节点

- removeChild(节点)

文档碎片

- createDocumentFragment()  创建文档碎片
- 一般只在低级浏览器中会提高一点性能

### 表格应用

#### 获取

- tBodies
- rows   获取行
- cells   获取单元格
- tHead   获取表头
- tFoot   

属性：oldColor  原来的颜色

### 表单事件

- onsubmit   提交事件时
- onreset  重置

## 运动基础

<img src="E:\大二下学习文件\莞青\前端学习\Typora图片\image-20200808123104831.png" alt="image-20200808123104831" style="zoom:100%;" />怎么解决？16集

- 1.没关定时器
- 2.判断距离，停掉
- 3.然我们设置了停止定时器，但是每次停止定时器的话是下一步再停止，用if else解决
- 4.在运动前先把定时器清掉

#### 缓冲运动

- 向上取整：Math.ceil()
- 向下取整：Math.floor()
- 四舍五入：Math.round()
- 终止条件：两点重合
- **注意取整** speed=speed>0?*Math*.ceil(speed):*Math*.floor(speed);

#### 匀速运动

- 终止条件：距离足够近，先自动运动一段路程，最后一小段路程小于速度时，通过设置使元素到达位置



#### 悬浮框

- 网页可见区域高：document.body.clientHeight

  网页正文全文高：document.body.scrollHeight
  网页可见区域高（包括边线的高）：document.body.offsetHeight
  网页被卷去的高：document.body.scrollTop

  屏幕分辨率高：window.screen.height

### 多物体运动框架

- 解决了多个物体运动时，一个定时器用不过来的问题
- 让每个div都有一个div
- 多物体运动框架里所有东西都不能共用，可作为属性加到每个物体上
- offsetWidth获取的是盒模型宽度，用起来可能会有“bug”（如加border），所以要少用
-  用currentstyle代替offset

### 任意值运动框架

```javascript
function getStyle(obj, name){
    if(obj.currentStyle){
        return obj.currentStyle[name];
    }
    else{
        return getComputedStyle(obj, false)[name]
    }
}

function startMove(obj, attr, iTarget, fnEnd){
    clearInterval(obj.timer)
    obj.timer = setInterval(function(){
        var cur=0
        if(attr == 'opacity'){
            cur = Math.round(parseFloat(getStyle(obj, attr))*100)
        }else{
            cur = parseInt(getStyle(obj, attr))
        }

        var speed = (iTarget-cur)/6
        speed = speed>0?Math.ceil(speed):Math.floor(speed)

        if(cur == iTarget){
            clearInterval(obj.timer)

            if(fnEnd) fnEnd();
        }
        else{
            if(attr=='opacity'){
                // 给IE设置
                obj.style.filter='alpha(opcity:'+(cur+speed)+')'
                // 给chrom、火狐设置
                obj.style.opacity=(cur+speed)/100
            }else{
                obj.style[attr] = cur+speed+'px'
            }
        }
    }, 30)

}
```



### 仿Flash图片展示

https://www.bilibili.com/video/BV194411X7Uv?p=18

### 运动中级

**链式运动**

### 完美运动框架

- 原因：现有运动框架不能让很多值一块动



## JS事件基础

document包含整个界面

### event对象

- 用来获取事件的详细信息：鼠标位置，键盘按键

- 鼠标事件

  - event.clientX  点击点x坐标     event.clientY   点击点y坐标  (可视区坐标)
  - scrollTop  可视区距离顶部高度
  - 兼容性写法：var oEvent = ev||event
  - var scrollTop = document.documentElement.scrollTop||document.body.scrollTop

- 键盘事件

  - keyCode  每个按键的编号

  - onkeydown  键盘按下时  **默认行为，有返回值**
  - onkeyup  按键弹起时 
  - ctrlKey  回车键
  - shiiftKey
  - altKey

### 事件冒泡

- 事件会顺着它的层级一直往上传
- 取消冒泡
  - oEvent.cancelBubble = true

### 默认行为

浏览器自带的行为

- oncontextmenu  点击右键时  **有返回值**
- onkeydown  键盘按下时
- ......

### 事件绑定

- IE方式
  - attachEvent(事件名称，函数)  可以同时加多个函数到一个事件上
  - detachEvent(事件名称，函数)  删除绑定
- 火狐、chrome
  - addEventListener(事件名，函数，false)
  - removeEventListener(事件名称，函数，捕获)

```javascript
function myAddEvent(obj, ev, fn){
    if(obj.attachEvent){
        obj.attachEvent('on'+ev, fn)    //IE
    }else{
        obj.addEventListener(ev, fn, false)    //chrome、火狐
    }
}
```

### 事件捕获

- setCapture()  把多个事件集合在一个事件上执行  只有IE能用
- releaseCapture

## ajax

去缓存方法

![image-20200810130140615](E:\大二下学习文件\莞青\前端学习\Typora图片\image-20200810130140615.png)

eval可以读取txt里的数组和json

- 创建ajax对象
- 连接到服务器
  - open(方法，文件名，异步传输（true）)
- 发送请求
- 接受返回值
  - readyState  获取返回值
  - ![image-20200810191143083](E:\大二下学习文件\莞青\前端学习\Typora图片\image-20200810191143083.png)

加了new后，系统会偷偷的做var this = new Object()，也会偷偷的返回出去

### 原型

- prototype
- 相当于class，一次给一组元素加方法
- 加在类上，其对象都可以用
- 构造函数加属性，原型加方法

## 面向对象

改写面向对象函数

- 去掉函数嵌套，改写全局变量
- 将window.onload改写成构造函数
- 将全局变量变为属性，函数变为方法

### 单体

- 把方法包在一个Json里（命名空间）
- 整个程序里只有一个，写起来比较简单

### 继承

- call()  可以改变函数执行时的this  **继承属性**
- **继承方法**  A.prototype = B.prototype   其实是种引用
- 更好的方法：![image-20200811124719145](E:\大二下学习文件\莞青\前端学习\Typora图片\image-20200811124719145.png)



### 系统对象

<img src="E:\大二下学习文件\莞青\前端学习\Typora图片\image-20200811130049835.png" alt="image-20200811130049835" style="zoom:80%;" />

不需要实例化（不需要new）的对象就是静态对象

### BOM应用

- document.write   先清空页面，然后再写
- window.open(‘about：blank’ , '_blank'/'_self')  开启一个新窗口   空白窗口   返回值为一个新窗口
- document.close()  关闭窗口
- **常用属性**
- window.navigator.userAgent  弹出当前浏览器版本信息
- window.onresize  当浏览器被重置大小时执行Javascript代码:
- window.location  弹出当前页面的地址，不光可以读取，还可以赋值
- 系统对话框
  - confirm()  返回true或false
  - alert()  弹出提示框
  - prompt('问题','默认值')  返回输入框输入的内容

<img src="E:\大二下学习文件\莞青\前端学习\Typora图片\image-20200811132305242.png" alt="image-20200811132305242" style="zoom:67%;" />

## cookie

- 页面用来保存信息
- 同一个网站中所有页面共享一套cookie
- 数量、大小有限
- 有过期时间
  - document.cookie = ‘名字=值; expires=’+oDate
  - 读取cookie：字符串分割
  - 删除cookie  设置过期时间为-1

## 正则表达式

- substring(头，尾)  返回子字符串，包头不包尾
- charAt()   获取某位置上的字符
- split()   分割字符串，获得数组
- **正则**
  - ![image-20200811153116135](E:\大二下学习文件\莞青\前端学习\Typora图片\image-20200811153116135.png)
  - 第二个参数
    - i  忽略大小写  ignore
    - g  找到全部  global
    -   
  - 转义  / /
    - \d  数字
    - \w  英文、数字、下划线
    - \s  空白字符
    - 大写则为‘非’
  - match  获取匹配的项目
    - 量词   + 若干个
    - {n}  至少出现n次
    - {n,m}  最少n次，最多m次
    - ？ 可以出现可以不出现，0次或1次
    - ^首个字符
  - replace   替换
  - [ ]
    - ![image-20200811154504727](E:\大二下学习文件\莞青\前端学习\Typora图片\image-20200811154504727.png)
  - teet()  字符串一部分符合要求，则返回true

