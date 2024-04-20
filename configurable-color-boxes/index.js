document.addEventListener("DOMContentLoaded", function () {
  const mainEl = document.querySelector(".colorboxes");
  const boxModel = [
    {
      color: "red",
      width: "33.3%",
    },
    {
      color: "pink",
      width: "33.3%",
    },
    {
      color: "brown",
      width: "33.3%",
    },
    {
      color: "red",
      width: "50%",
    },
    {
      color: "white",
      width: "50%",
    },
    {
      color: "black",
      width: "40%",
    },
    {
      color: "grey",
      width: "60%",
    },
  ];

  for (let i = 0; i < boxModel.length; i++) {
    const colorEl = document.createElement("div");
    colorEl.classList.add("each-color-el");
    colorEl.style.width = boxModel[i].width;
    colorEl.style.backgroundColor = boxModel[i].color;
    mainEl.appendChild(colorEl)
  }
});
