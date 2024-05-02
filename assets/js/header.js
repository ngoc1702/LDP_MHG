

function isDesktop() {
  return window.innerWidth > 768; // Đây là một giả định về kích thước của máy tính để bàn
}
window.addEventListener('scroll', function() {

  var header = document.getElementById('header');
  var menuLinks = document.querySelectorAll('.nav__link');
  var menuLinks2 = document.querySelector('.nav__link2');
  var svgElement1 = document.querySelector('.open_menu1');
  var svgElement2 = document.querySelector('.open_menu2');
  var svgElement3 = document.querySelector('.open_menu3');
  if (window.scrollY > 80) {
    // console.log("SCROLL")
    header.classList.add('bg-white');
    header.classList.add('top');
    header.classList.add('shadow-lg');
    svgElement1.setAttribute('fill', 'black');
    svgElement2.setAttribute('fill', 'black');
    svgElement3.setAttribute('fill', 'black');
    menuLinks.forEach(function(link) {
      if (!link.classList.contains('active')) {
        // console.log(menuLinks2)
        link.classList.add('text-black');
        menuLinks2.classList.add('text-black')
    }
  });
    
  } else {
    header.classList.remove('bg-white');
    header.classList.add('shadow-lg');
    svgElement1.setAttribute('fill', 'white');
    svgElement2.setAttribute('fill', 'white');
    svgElement3.setAttribute('fill', 'white');
    menuLinks.forEach(function(link) {
      if (!link.classList.contains('active')) {
        link.classList.remove('text-black');
        menuLinks2.classList.remove('text-black')
    }
  });
  }
});


 // Lắng nghe sự kiện cuộn trang
 window.addEventListener('scroll', function () {
  // Lấy tất cả các menu link và các section
  var menuLinks = document.querySelectorAll('.nav__link');
  var sections = document.querySelectorAll('section');

  // Lặp qua từng section và kiểm tra vị trí cuộn
  sections.forEach(function (section, index) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          // Nếu section hiện tại đang được cuộn đến, kích hoạt menu link tương ứng
          menuLinks.forEach(function (link) {
         
              link.classList.remove('active');
          });
          menuLinks[index].classList.add('active');
      }
  });
});



// Hiển thị popup sau 3 giây
setTimeout(function () {
  document.getElementById("popup-overlay").style.display = "flex";
}, 1000);

// Bắt sự kiện click cho nút đóng
document.getElementById("close_popup").addEventListener("click", function (event) {
  // Ngăn chặn hành vi mặc định của sự kiện click (tránh việc tải lại trang)
  event.preventDefault();
  
  // Ẩn popup
  document.getElementById("popup-overlay").style.display = "none";
  document.getElementById("popup").classList.add('hidden');
});


function openApply() {
  var menuLinks3 = document.querySelector('.nav__link3');
  document.getElementById("apply").style.display = "flex";
  document.getElementById("container_content").style.display = "none";
  menuLinks3.classList.remove("active")
//   document.querySelectorAll(".nav__link").forEach(function(element) {
//     element.style.display = "none";
// });

}



function openModal() {
  document.getElementById("modalContainer").style.display = "flex";
  document.getElementById("open_menu").style.display = "none";
  document.getElementById("close_menu").style.display = "flex";
}

function closeModalMobile() {
  // Ẩn popup
  document.getElementById("modalContainer").style.display = "none";
  document.getElementById("close_menu").style.display = "none";
  document.getElementById("open_menu").style.display = "flex";
}

function closeNotication() {
  document.getElementById("notification").style.display = "none";
  document.getElementById("header").classList.add('top');;
}

//Active header
function printClickedElement(event) {
  var clickedElement = event.target;
  var isAlreadyActive =
    clickedElement.classList.contains("active");

  if (!isAlreadyActive) {
    // Nếu phần tử chưa có lớp 'active', thì thêm lớp
    clickedElement.classList.add("active");
   

    // Xóa lớp 'active' từ tất cả các phần tử khác
    var allLinks =
      document.querySelectorAll("li a");
    allLinks.forEach(function (link) {
      if (link !== clickedElement) {
        link.classList.remove("active");
      }
    });
  }
//   else{
//     document.getElementById("apply").style.display = "none";
//     var section_content = document.querySelectorAll(".section_content");
// section_content.forEach(function(element) {
//     element.classList.add('flex');
//     element.style.display = "flex"
// });

//   }
}


function toggleContent(group) {
  var content = document.querySelector('.content.' + group);
  if (!content) {
      console.error('Không tìm thấy phần tử .content.' + group);
      return; // Thoát khỏi hàm nếu không tìm thấy phần tử
  }

  // Tiếp tục xử lý nếu phần tử tồn tại
  var openBtn = content.parentElement.querySelector('.open-btn');
  var closeBtn = content.parentElement.querySelector('.close-btn');
  var title = content.parentElement.querySelector('.title');

  if (content.classList.contains('hidden')) {
      // Hiển thị nội dung và chuyển đổi giữa nút mở và nút đóng
      content.classList.remove('hidden');
      title.classList.add('text-orange-300');
      openBtn.classList.add('hidden');
      closeBtn.classList.remove('hidden');
  } else {
      // Ẩn nội dung và chuyển đổi giữa nút đóng và nút mở
      content.classList.add('hidden');
      title.classList.remove('text-orange-300');
      openBtn.classList.remove('hidden');
      closeBtn.classList.add('hidden');
  }
}


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Optional smooth scrolling behavior
  });
}




var swiper = new Swiper(".mySwiper_aboutMandala", {
 
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});

