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
      "./assets/images/nhatrang.png",
      "./assets/images/mientay.png",
      "./assets/images/sapa.png",
    ],
  },
  {
    id: 3,
    title: "Nha Trang",
    thumbnail_src: "./assets/images/nhatrang.png",
    gallery: [
      "./assets/images/nhatrang.png",
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
      "./assets/images/nhatrang.png",
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
function itemGallery(id, urlThumb, title) {
  return `<div class="item-gallery w-[240px] h-[240px] rounded-3xl rectangle relative shrink-0 cursor-pointer "
   style="background-image: url(${urlThumb});" onclick="openLightBox(${id})">
   <div id="title-gallery"
     class="w-[240px] py-4 justify-center items-center gap-2.5 absolute bottom-[0.125px] bg-[#FFFFFF] rounded-b-3xl text-center text-xl font-semibold leading-7 hover:underline hover:text-[#D2A97D] cursor-pointer ">
     ${title}
   </div>
 </div>`;
}

//Render body gallery
function RenderGalleryString(data) {
  let galleryContent = "";
  for (i = 0; i < data.length; i++) {
    galleryContent += itemGallery(
      data[i].id,
      data[i].thumbnail_src,
      data[i].title
    );
  }
  return galleryContent.toString();
}

// Render HTML
async function RenderGallery(data) {
  document.getElementById("gallery").innerHTML = RenderGalleryString(data);
}

RenderGallery(data);

// Light Box Modal
function lightBox(title, listImage) {
  let listImageString = "";
  if (listImage) {
    listImageString = listImage.map((item) => {
      return `<img loading="lazy" srcset=${item} class="shrink-0 w-40 max-w-full aspect-[1.79]"/>`;
    });
  }
  return `
  <div class="flex flex-col p-6 bg-white rounded-2xl shadow-2xl max-w-[976px] max-md:px-5 fixed top-[50%] left-[50%] z-50 translate-x-[-50%] translate-y-[-50%]">
    <div class="flex gap-5 justify-between text-2xl font-bold leading-8 text-neutral-800 max-md:flex-wrap max-md:max-w-full">
      <div class="max-md:max-w-full">${title}</div>
      <img
        loading="lazy"
        src="./assets/icons/close-line.svg"
        onclick="closeLightBox()"
        class="shrink-0 w-8 aspect-square cursor-pointer"
      />
    </div>
    <img
      loading="lazy"
      srcset="./assets/images/halong1.jfif"
      class="mt-6 w-full aspect-[1.79] max-md:max-w-full"
    />
    <div class="flex gap-4 mt-6  max-md:flex-wrap" style="overflow-x: auto;">
     ${listImageString.join("").toString()}
    </div>
  </div>;
  `;
}

// show/hide lightbox
function openLightBox(id) {
  data.forEach(async function (item) {
    if (item.id === id) {
      const renderHTML = await lightBox(item.title, item.gallery);
      document.getElementById("light-box-modal").innerHTML = renderHTML;
    }
  });
}

// show/hide lightbox
function closeLightBox() {
  document.getElementById("light-box-modal").innerHTML = "";
}
