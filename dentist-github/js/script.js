'use strict';

//ハンバーガーメニュー
/*
  #menu-btnをクリックした時、  
  #gnavi に .open がついていなければ、.open を追加し、
  .opne がついていれば .open を削除
*/

const navBtn = document.getElementById('btnMenu');
const gnav = document.getElementById('nav');

navBtn.onclick = function(event) {
  event.preventDefault();
  
  //クラス名の切り替え
  gnav.classList.toggle('open');
  navBtn.classList.toggle('close');
};
