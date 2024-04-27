const data = [
  {
    id: 1,
    title: "Hạ Long",
    thumbnail_src: "./assets/images/halong.png",
    gallery: [
      "./assets/images/nhatrang.png",
      "./assets/images/mientay.png",
      "./assets/images/sapa.png",
      "./assets/images/mientay.png",
    ],
  },
  {
    id: 2,
    title: "Sapa",
    thumbnail_src: "./assets/images/sapa.png",
    gallery: [
      "./assets/images/sapa.png",
      "./assets/images/mientay.png",
      "./assets/images/halong.png",
    ],
  },
  {
    id: 3,
    title: "Nha Trang",
    thumbnail_src: "./assets/images/nhatrang.png",
    gallery: [
      "./assets/images/mientay.png",
      "./assets/images/mientay.png",
      "./assets/images/sapa.png",
      "./assets/images/mientay.png",
    ],
  },
  {
    id: 4,
    title: "Miền Tây",
    thumbnail_src: "./assets/images/mientay.png",
    gallery: [
      "./assets/images/halong.png",
      "./assets/images/mientay.png",
      "./assets/images/sapa.png",
      "./assets/images/mientay.png",
    ],
  },
];

const btnPlay = document.querySelector("#play-vid");
const vid = document.querySelector("#vid");
const gallery = document.querySelector("gallery");

// hide play button when video play
btnPlay.addEventListener("click", (event) => {
  vid.play();
  btnPlay.style.display = "none";
});

// show play button when video pause
vid.addEventListener("click", (event) => {
  event.target.pause();
  btnPlay.style.display = "block";
});

// Item Gallery
function itemGallery(item) {
  return `<div class="item-gallery bg-[url(${item.thumbnail_src})] bg-cover relative w-[160px] md:w-[240px] aspect-square rounded-3xl relative shrink-0 cursor-pointer overflow-hidden border-2 border-[#003A34] hover:border-[#D2A97D] hover:text-[#D2A97D]" onclick="openLightBox(${item.id})">
   <div id="title-gallery"
     class="w-full md:py-4 py-2 gap-2.5 absolute bottom-0 bg-[#FFFFFF] rounded-b-3xl text-center text-sm md:text-xl font-semibold leading-6 md:leading-7 hover:underline cursor-pointer ">
     ${item.title}
   </div>
 </div>`;
}

//Render body gallery
function RenderGalleryString(data) {
  const galleryContent = data.map((item) => {
    return itemGallery(item);
  });
  return galleryContent.join("").toString();
}

// Render HTML
function RenderGallery(data) {
  document.getElementById("gallery").innerHTML = RenderGalleryString(data);
}

RenderGallery(data);

// Build lightbox
async function lightBox(item) {
  document.getElementById(
    "title-lightbox"
  ).textContent = `Hình ảnh ${item.title}`;

  //Init current index slide
  let currentIndex = 0;

  const smImgContain = item.gallery.map((img, index) => {
    return `<img loading="lazy" srcset="${img}" data-index=${index} class="smImg ${
      index === currentIndex ? "selected" : ""
    } shrink-0 p-[2px] md:p-1 max-w-24 md:max-w-40 aspect-video cursor-pointer rounded-lg object-cover" />`;
  });
  document.getElementById("smImgContain").innerHTML = await smImgContain
    .join("")
    .toString(); //wait render img small

  //Change image when slide change
  function setImage(img) {
    document.getElementById("preview").srcset = img.srcset;
  }

  //Set current index slide image
  const smImgs = document.querySelectorAll(".smImg");
  setImage(smImgs[currentIndex]);

  smImgs.forEach((img) =>
    img.addEventListener("click", (e) => {
      smImgs.forEach((img) => img.classList.remove("selected"));
      e.target.classList.add("selected");
      setImage(e.target);
      currentIndex = e.target.getAttribute("data-index"); //New index when you click slide
    })
  );

  const prev = document.getElementById("prev");
  const next = document.getElementById("next");

  function pushSlide(n) {
    smImgs[currentIndex].classList.remove("selected");
    currentIndex += n;
    if (currentIndex < 0) {
      currentIndex = smImgs.length - 1;
    } else if (currentIndex > smImgs.length - 1) {
      currentIndex = 0;
    }
    console.log(currentIndex);
    smImgs[currentIndex].classList.add("selected");
    setImage(smImgs[currentIndex]);
  }

  prev.addEventListener("click", (e) => pushSlide(-1));
  next.addEventListener("click", (e) => pushSlide(1));

  document.getElementById("wrapper-lightbox").classList.remove("hidden");
}

// show/hide lightbox
function openLightBox(id) {
  data.forEach((item) => {
    if (item.id === id) {
      lightBox(item);
      document.body.style.overflow = 'hidden';
    }
  });
}

// show/hide lightbox
function closeLightBox() {
  document.getElementById("wrapper-lightbox").classList.add("hidden");
  document.body.style.overflow = 'auto';
}

//SHOW OPTION
const options = document.querySelectorAll(".option");
const selectOptions = document.querySelectorAll(".select-option");
options.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    let index = e.target.getAttribute("index-tab");
    options.forEach(
      (tab) =>
        (tab.className =
          "option md:px-6 md:py-3 px-4 py-2 text-center md:text-start text-[#5E5E5E] cursor-pointer")
    );
    e.target.className =
      "option md:px-6 md:py-3 px-4 py-2 text-center md:text-start text-white bg-[#D2A97D] rounded-[100px] cursor-pointer";
    selectOptions.forEach((option) => option.classList.add("hidden"));
    selectOptions[index - 1].classList.remove("hidden");
  });
});
