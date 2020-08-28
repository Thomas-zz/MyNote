
function ajax(url, fnSucc, fnFaild) {
    var oBtn = document.getElementById('btn1')

    oBtn.onclick = function () {
        //1.创建ajax对象
        if (window.XMLHttpRequest) {
            //非IE6

            var oAjax = new XMLHttpRequest()
        } else {
            //IE6   
            var oAjax = new ActiveXObject("Microsoft.XMLHTTP")
        }
        //alert(oAjax)

        //2.连接服务器
        oAjax.open('GET', url, true)

        //发送请求
        oAjax.send()

        //接受返回
        oAjax.onreadystatechange = function () {
            //oAjax.readyState    浏览器和服务器进行到哪一步了
            if (oAjax.readyState == 4) {  //读取完成
                if (oAjax.status == 200) {   //成功
                    fnSucc(oAjax.responseText)
                } else {
                    if(fnFaild){
                        fnFaild(oAjax.status)
                    }
                }
            }
        }
    }
}
