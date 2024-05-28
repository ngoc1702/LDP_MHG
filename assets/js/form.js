
function updatePlaceholder() {
  var datepicker = document.getElementById('datepicker');
  if (datepicker.value === '') {
    datepicker.classList.add('placeholder');
    console.log("KHÔNG PLACHOVER")
  } else {
    datepicker.classList.remove('placeholder');
    console.log("CÓ PLACHOVER")
  }
}

function uploadFile(input) {
    var file = input.files[0];
    if (!file) {
      return; // Nếu không có file được chọn, không thực hiện các bước tiếp theo
    }
    var formData = new FormData();
    formData.append('file', file);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/upload', true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        document.getElementById('fileName').innerText = file.name;
        alert('File đã được tải lên thành công!');
      } else {
        alert('Đã xảy ra lỗi khi tải lên file.');
      }
    };
    xhr.send(formData);
  }

