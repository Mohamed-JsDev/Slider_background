let img = Array.from(document.querySelectorAll("img"));
img.forEach((e) => {
  e.addEventListener("click", (e) => {
    document
      .querySelector(".imgs")
      .style.setProperty("background-image", 'url("img/' + e.target.id + '")');
  });
});
