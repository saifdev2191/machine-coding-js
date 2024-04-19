import { fetchData } from "./helper.js";

window.addEventListener("DOMContentLoaded", function () {
  const imageEl = document.querySelector(".img-wrapper");
  const footerEl = document.querySelector(".footer-wrapper");
  footerEl.addEventListener("click", handleBtnClick);
  let imageList = [];
  let currentPageNo = 1;

  fetchData().then((res) => {
    imageList = res;
    appendImagesToPage(
      imageList.filter((image) => image.id >= 1 && image.id <= 10)
    );
    buildFooter();
  });

  function appendImagesToPage(imageArr) {
    imageEl.textContent = "";
    for (let i = 0; i < 10; i++) {
      const eachProduct = document.createElement("div");
      const eachProductImage = document.createElement("img");
      const eachProductDes = document.createElement("div");
      eachProductImage.setAttribute("alt", imageArr[i].title);
      eachProductImage.setAttribute("src", imageArr[i].url);
      eachProductDes.textContent = imageArr[i].id;
      eachProduct.appendChild(eachProductImage);
      eachProduct.appendChild(eachProductDes);
      eachProduct.classList.add("each-product");
      imageEl.appendChild(eachProduct);
    }
  }

  function buildFooter() {
    const prevBtn = document.createElement("button");
    prevBtn.id = "prev";
    prevBtn.textContent = "<";
    footerEl.appendChild(prevBtn);
    for (let i = 1; i <= 10; i++) {
      const eachBtn = document.createElement("button");
      eachBtn.id = i;
      eachBtn.textContent = i;
      footerEl.appendChild(eachBtn);
    }
    const nextBtn = document.createElement("button");
    nextBtn.id = "next";
    nextBtn.textContent = ">";
    footerEl.appendChild(nextBtn);
  }

  function addColorToActiveBtn(){
    const getCurrentActiveBtn = document.getElementById(currentPageNo)
    const getPrevActiveBtn = document.querySelector(".active")
    getCurrentActiveBtn.classList.add("active")
    getPrevActiveBtn.classList.remove("active")
  }

  function filterImage(id) {
    const nextBtn = document.querySelector("#next");
    const prebBtn = document.querySelector("#prev");
    const lastImageIndex = id * 10;
    const startImageIndex = lastImageIndex - 9;
    nextBtn.disabled = false
    prebBtn.disabled = false
    addColorToActiveBtn()
    
    return imageList.filter(
      (images) => images.id >= startImageIndex && images.id <= lastImageIndex
    );
  }

  function showNextPage() {
    if (currentPageNo === 10) {
      const nextBtn = document.querySelector("#next");
      nextBtn.disabled = true
    } else {
      currentPageNo = currentPageNo + 1;
      const imageToRender = filterImage(currentPageNo);
      if (imageToRender.length) {
        appendImagesToPage(imageToRender);
      }
    }
  }

  function showPrevPage() {
    if (currentPageNo === 1) {
      const prebBtn = document.querySelector("#prev");
      prebBtn.disabled = true
    } else {
      currentPageNo = currentPageNo - 1;
      const imageToRender = filterImage(currentPageNo);
      if (imageToRender.length) {
        appendImagesToPage(imageToRender);
      }
    }
  }

  function handleBtnClick(e) {
    const id = e.target.id;
    if (id === "next") {
      showNextPage();
    } else if (id === "prev") {
      showPrevPage();
    } else {
      currentPageNo = Number(id);
      const imageToRender = filterImage(currentPageNo);
      appendImagesToPage(imageToRender);
    }
  }
});
