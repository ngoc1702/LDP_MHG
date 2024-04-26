function isDesktop() {
  return window.innerWidth > 768; // Đây là một giả định về kích thước của máy tính để bàn
}
window.addEventListener('scroll', function() {

  var header = document.getElementById('header');
  var menuLinks = document.querySelectorAll('.nav__link');
  var svgElement1 = document.querySelector('.open_menu1');
  var svgElement2 = document.querySelector('.open_menu2');
  var svgElement3 = document.querySelector('.open_menu3');
  if (window.scrollY > 80) {
    console.log("SCROLL")
    header.classList.add('bg-white');
    svgElement1.setAttribute('fill', 'black');
    svgElement2.setAttribute('fill', 'black');
    svgElement3.setAttribute('fill', 'black');
    menuLinks.forEach(function(link) {
      if (!link.classList.contains('active')) {
        link.classList.add('text-black');
    }
  });
    
  } else {
    header.classList.remove('bg-white');
    svgElement1.setAttribute('fill', 'white');
    svgElement2.setAttribute('fill', 'white');
    svgElement3.setAttribute('fill', 'white');
    menuLinks.forEach(function(link) {
      if (!link.classList.contains('active')) {
        link.classList.remove('text-black');
    }
  });
  }
});


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






var swiper = new Swiper(".mySwiper_about", {
  spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});

