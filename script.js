"use strict";
const chart = document.querySelector(".size-chart");
const sizeImg = document.querySelector(".size-img");
const color = document.querySelectorAll(".color");
const sizes = document.querySelectorAll(".size");
const img = document.querySelector("#myImg");
const d=document.querySelector('#xxl')
// functions

// size funcions
const openSizeChart = function () {
  sizeImg.style.display = "block";
};
const closeSizeChart = function () {
  sizeImg.style.display = "none";
};
// color change funcions
const toCloseAll = function () {
  // to close all tshirt
  color.forEach((en) => en.classList.remove("active"));
};


// to select one color
const selectOne = function (event) {
  toCloseAll();
  const t=event.target;
  t.classList.add("active");

  img.src = `./img/${t.dataset.src}-tshirt.jpg`;
 
 
//   for zooming image

    $("#myImg").elevateZoom();
};
  
// to remove all previous selected size function
const removePrevSize = function () {
  sizes.forEach((en) => en.classList.remove("active"));
};

// to select size of tshirt
const selectOneSize = function (event) {
  removePrevSize();
  event.target.classList.add("active");
};

chart.addEventListener("click", openSizeChart);

sizeImg.addEventListener("click", closeSizeChart);

color.forEach((e) => e.addEventListener("click", selectOne));

sizes.forEach((e) => e.addEventListener("click", selectOneSize));

$("#myImg").elevateZoom();