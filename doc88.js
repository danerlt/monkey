// ==UserScript==
// @name       复制道客巴巴（火狐可用，谷歌不可用） - doc88.com
// @namespace   Violentmonkey Scripts doc88
// @match       *://www.doc88.com/*
// @grant       none
// @version     1.1
// @author      danerlt
// @description 2020/6/29 上午9:02:22
// ==/UserScript==

window.onload = function() {
    var btn = document.createElement("button");
    btn.innerHTML = "显示当前页";
    btn.style.height = "50px";
    btn.style.fontSize = "14px";
    btn.style.position = "fixed";
    btn.style.left = "0px";
    btn.style.top = "300px";
    btn.style.zIndex = 65536;
    btn.setAttribute("id", "wzmBtn");
  
    document.body.appendChild(btn);
  
    document.getElementById("wzmBtn").addEventListener("click", function () {
        showtext();
    });
}


function showtext() {
    var canName = "page_" + document.getElementById("pageNumInput").value;
    var cvas = document.getElementById(canName);
    console.log(cvas)
    var dataUrl = cvas.toDataURL();
    window.open(dataUrl, "toDataURL() image");
}
