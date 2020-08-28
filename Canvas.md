## canvas绘图步骤

### 准备画布

- 画布是白色的，默认100*150
- 设置画布大小  **不建议在样式设置尺寸**
- 在样式下设置尺寸会将画布放大，而不是修改画布大小

### 准备绘制工具

### 利用工具绘图

- 获取元素
  - var myCanvas = document.querySelector('canvas')
- 获取上下文 (绘制环境、绘制工具箱)
  - var ctx = myCanvas.getContext('2d')
- 移动画笔
  - ctx.moveTo(100,100)
- 绘制直线（轨迹、路径）
  - ctx.lineTo(200,100)
- 描边
  - ctx.stroke()

## 线条样式

### 关于线条

默认颜色和宽度

- 线条默认宽度为1px  默认颜色为黑色
- 对齐的点是两块像素的中间位置，两个像素点各显示0.5px，因为像素点不饱和，所以颜色变灰，且两个像素点都显示
- 解决办法：±0.5px

起始点和结束点无法完全闭合

- 原因：对齐点是像素中间位置
- 解决办法：使用canvas的自动闭合  ctx.closePath()

### 样式设置

- ctx.strokeStyle = ''  设置颜色
- ctx.lineWidth =    画笔宽度
- ctx.beginPath()   开启新路径
- ctx.fill()   填充颜色
- ctx.closePath()  关闭样式，自动闭合线条
- lineCap
  - butt  默认属性
  - square  “方帽子”变长一点
  - round  圆角
- lineJoin  相交的拐点
  - miter  默认
  - round  圆角
  - bevel  斜面
- setLineDash([x,y,z])   设置虚线
- lineDashOffset = x    负值往后便宜 正值往前偏移

### 非零环绕

看一块区域是否填充

- 从这个区域拉一条直线
- 看和这条直线相交的轨迹，如果顺时针相交 +1，如果逆时针相交 -1
- 所有的轨迹值相加，如果非零，填充；是零，不填充

## 绘制网格

- 获取画布大小

  -  console.log(ctx.canvas.width)
  - console.log(ctx.canvas.height)
  - var canvasHeight = myCanvas.height
  - var canvasWidth = myCanvas.width

  

## 绘制渐变矩形

- fillRect(左上角x坐标，左上角y坐标，矩形宽度，矩形高度)  填充矩形
- 创建渐变方案 createLinearGradient(起始点x，起始点y，结束点x，结束点y)  确定长度和方向
- addColorStop(.05，‘color’)  添加渐变分段 颜色
- fillStyle = linearGradient

## 圆弧

- 弧度：一弧度=一个半径的长度
- 一角度等于多少弧度 π / 180
- 利用公式画图
- arc(起始点x，起始点y，半径，起始角，结束角，true(逆时针))  绘制圆弧  顺时针方向绘制

## 绘制文本

- font= ‘字体大小  字体样式’
- strokeText(字符串，x坐标，y坐标)  描边文字 起点在文字左下角
- fillText(字符串，x坐标，y左边)  实体字  起点在文字左下角
- textAlign = ‘left right center start(默认) end’  基准为起始坐标
- textBaseline = 'top middle bottom'  基线对齐  基于起始坐标
- measureText(str)  测量文本宽度

## 图片的加载

- 绘制图片的三种方式
  - 1.加载图片到内存
    - 创建对象
    - 绑定加载完成事件
    - 实现图片绘制
    - ![image-20200816235132295](E:\大二下学习文件\莞青\前端学习\Typora图片\image-20200816235132295.png)
    - drawImage(image,x坐标，y坐标)  三参数
  - 2.drawImage(图片对象，x，y，缩放，缩放)  五参数
  - 3.drawImage(图片对象,(图片上定位的坐标)（在图片上截取多大的区域）（绘制在画布上的坐标）（图片缩放）) 九个参数
  - ![image-20200817001451799](E:\大二下学习文件\莞青\前端学习\Typora图片\image-20200817001451799.png)