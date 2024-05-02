import { fetchImages, config } from "./helper.js";

window.addEventListener("DOMContentLoaded", function () {
  const carouselEl = document.querySelector(".carousel-prim");
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");
  const imagesWrap = document.querySelector(".images-wrap");
  const { limit, imagesPerCarousel } = config;
  let imagesList = [];
  let startIndex = 0;

  leftBtn.addEventListener("click", moveimagesToLeft);
  rightBtn.addEventListener("click", moveimagesToRight);

  fetchImages(limit).then((res) => {
    imagesList = res;
    console.log(imagesList);
    // input no of images to be shown
    buildCarousel(imagesList.slice(0, imagesPerCarousel));
  });

  function buildCarousel(imagesToRender) {
    imagesWrap.innerHTML = "";
    for (let i = 0; i < imagesPerCarousel; i++) {
      const imgEl = document.createElement("img");
      imgEl.setAttribute("alt", imagesToRender[i].title);
      imgEl.setAttribute("src", imagesToRender[i].url);
      imagesWrap.appendChild(imgEl);
    }
  }

  function moveimagesToLeft() {
    // let imagesToBuild = []
    // let endIndex = (currentIndex - imagesPerCarousel)%imagesList.length;
    // if(endIndex < 0){
    //     currentIndex = imagesList.length + currentIndex
    // }
    // // console.log(endIndex)
    // craeteImageList(currentIndex)
    
    const endindex = startIndex - imagesPerCarousel
    

  } 

  function moveimagesToRight(){}

  function craeteImageList(index){
    //   const endIndex = index + imagesPerCarousel
    //   const imageCopy= [...imagesList]
    //   const imageToRender = imageCopy.splice(index, imagesPerCarousel)
    //   console.log("index", index)
    //   console.log("imageToRender",imageToRender)

    // const imagesListToRender = imagesList.slice(startIndex, startIndex + imagesPerCarousel)
    // buildCarousel(imagesListToRender)
  }

});
