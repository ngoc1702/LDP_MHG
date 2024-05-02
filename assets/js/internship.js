const clickables = document.querySelectorAll('.clickable');
const internIcons = document.querySelectorAll('.intern-icon');
let activeElement = clickables[0];
const removeMobile = document.querySelectorAll('.intership');
const removeDestop = document.querySelectorAll('.intern-destop');

const hideDesktopControl = () => {
    const desktopControl = document.querySelector('.intern-control-destop');
    removeDestop.removeChild(desktopControl);
};

const hideMobileControl = () => {
    const mobileControl = document.querySelector('.intern-control-mobile');
    removeDestop.removeChild(mobileControl);
};

// if (screen.width <= 768) {
//     hideDesktopControl();
// } else {
//     hideMobileControl();
// }

clickables.forEach((clickable) => {
    clickable.addEventListener('click', () => {
        // Remove classes and add classes for the clicked element
        clickable.classList.remove("bg-white", "border-2", "shadow", "border-neutral-200");
        clickable.classList.add("text-white", "border-r-8", "border-[#F2CA8F]", "shadow-xl", "bg-[#003A34]");

        // Change fill color of SVG icon of clicked element and previous element
        if (activeElement !== null) {
            internIcons[Array.from(clickables).indexOf(activeElement)].setAttribute('fill', "#15634A");
        }
        internIcons[Array.from(clickables).indexOf(clickable)].setAttribute('fill', "#F2CA8F");
        activeElement = clickable; // Update active element

        const contentId = clickable.getAttribute('data-content');

        // Hide all contents
        document.querySelectorAll('.deltailcontent').forEach((content) => {
            content.style.display = 'none';
        });

        // Show content corresponding to clicked element
        document.getElementById(contentId).style.display = 'block';

        // Remove classes and add classes for unclicked elements
        clickables.forEach((item) => {
            if (item !== clickable) {
                item.classList.remove("text-white", "whitespace-nowrap", "border-r-8", "border-amber-200", "shadow-xl", "bg-teal-950");
                item.classList.add("bg-white", "border-2", "shadow", "border-neutral-200");
            }
        });
    });
});

// Automatic content switch every 2 seconds
setInterval(() => {
    const currentIndex = Array.from(clickables).indexOf(activeElement);
    const nextIndex = (currentIndex + 1) % clickables.length; // Get index of next element

    // Find next element and trigger click event
    clickables[nextIndex].click();
}, 3000);

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 16,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

//   
var swiper = new Swiper(".mySwiper1", {
	pagination: {
	  el: ".swiper-pagination",
	  type: "progressbar",
	  clickable: true,
	  renderBullet: function (index, className) {
		return '<span class="' + className + '">' + (index + 1) + "</span>";
	  },
	},
  });
  var clickicon = document.querySelectorAll('.clickicon');
  //var internIcons = document.querySelectorAll('.intern-icon'); // Lấy tất cả các biểu tượng SVG
  
 // var activeElement = clickables[0]; // Phần tử đang được click
  
 clickicon.forEach(function(clickable) {
	  clickable.addEventListener('click', function() {
		  
  
		  var contentId = this.getAttribute('data-id');
		  
		  // Ẩn tất cả các nội dung
		  document.querySelectorAll('.deltailstep').forEach(function(content) {
			  content.style.display = 'none';
		  });
		
		  // Hiển thị nội dung tương ứng với phần tử được click
		  document.getElementById(contentId).style.display = 'block';
  
		  // Loại bỏ các lớp và thêm lớp cho các phần tử không được click
		  
	  });
  });

 