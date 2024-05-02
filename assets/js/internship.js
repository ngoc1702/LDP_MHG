var clickables = document.querySelectorAll('.clickable');
var internIcons = document.querySelectorAll('.intern-icon'); // Lấy tất cả các biểu tượng SVG

var activeElement = clickables[0]; // Phần tử đang được click

clickables.forEach(function(clickable) {
    clickable.addEventListener('click', function() {

      
        // Loại bỏ các lớp và thêm lớp cho phần tử được click
        this.classList.remove("bg-white", "border-2", "shadow", "border-neutral-200");
        this.classList.add("text-white", "border-r-8", "border-[#F2CA8F]", "shadow-xl", "bg-[#003A34]");
        
        // Thay đổi màu fill của biểu tượng SVG của phần tử được click và phần tử trước đó
        if (activeElement !== null) {
            internIcons[Array.from(clickables).indexOf(activeElement)].setAttribute('fill', "#15634A");
        }
        internIcons[Array.from(clickables).indexOf(this)].setAttribute('fill', "#F2CA8F");
        activeElement = this; // Cập nhật phần tử đang được click

        var contentId = this.getAttribute('data-content');
        
        // Ẩn tất cả các nội dung
        document.querySelectorAll('.deltailcontent').forEach(function(content) {
            content.style.display = 'none';
        });
      
        // Hiển thị nội dung tương ứng với phần tử được click
        document.getElementById(contentId).style.display = 'block';

        // Loại bỏ các lớp và thêm lớp cho các phần tử không được click
        clickables.forEach(function(item) {
            if (item !== clickable) {
                item.classList.remove("text-white", "whitespace-nowrap", "border-r-8", "border-amber-200", "shadow-xl", "bg-teal-950");
                // "clickable flex swiper-slide  justify-center px-4 py-4 text-white  rounded-lg border-r-8 border-[#F2CA8F] border-solid shadow-xl bg-[#003A34]"
                item.classList.add("bg-white", "border-2", "shadow", "border-neutral-200");
            }
        });
    });
});

// Tự động chuyển đổi nội dung sau mỗi 2 giây
setInterval(function() {
    var currentIndex = Array.from(clickables).indexOf(activeElement);
    var nextIndex = (currentIndex + 1) % clickables.length; // Lấy chỉ số của phần tử kế tiếp

    // Tìm phần tử kế tiếp và kích hoạt sự kiện click
    clickables[nextIndex].click();
}, 3000);

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
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

 