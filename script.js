// window.open(url, '', 'width=1000, height=500')

let huey = document.querySelector(".huey");
function openHuey() {
    var window1 = window.open("", "", 'width=400, height=300')
    window1.document.write("<img src='https://raw.githubusercontent.com/wutongwutong00/basedesign/main/resource/images/huey2.jpg' width='400'/>");

    var window2 = window.open("", "", 'width=500, height=500')
    window2.document.write("<img src='https://raw.githubusercontent.com/wutongwutong00/basedesign/main/resource/images/huey5.png' width='500'/>");

    var window3 = window.open("", "", 'width=200, height=200')
    window3.document.write("<img src='https://raw.githubusercontent.com/wutongwutong00/basedesign/main/resource/images/huey1.jpg' width='200'/>");

    tmot1 = setTimeout(function(){window1.close()}, 4000);
    tmot2 = setTimeout(function(){window2.close()}, 3000);
    tmot3 = setTimeout(function(){window3.close()}, 2000);
}
// console.log('huey is selected');


