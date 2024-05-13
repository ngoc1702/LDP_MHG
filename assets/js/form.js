
function validatePhoneNumber(phoneNumber) {
  return phoneNumber !== "" && phoneNumber.length === 10 && !isNaN(phoneNumber) && phoneNumber.charAt(0) === '0';

}

function submitApply() {

  // Kiểm tra họ và tên
  var Frist_apply = document.getElementById("Frist_apply").value;
  var errorFrist_apply = document.getElementById("errorFrist_apply");
  if (Frist_apply.trim() === "") {
    errorFrist_apply.style.display = "block";
      document.getElementById("Frist_apply").classList.add("error-input");
  } else {
    errorFrist_apply.style.display = "none";
      document.getElementById("Frist_apply").classList.remove("error-input");
  }

  var Last_apply = document.getElementById("Last_apply").value;
  var errorLast_apply = document.getElementById("errorLast_apply");
  if (Last_apply.trim() === "") {
    errorLast_apply.style.display = "block";
     document.getElementById("Last_apply").classList.add("error-input");
  } else {
    errorLast_apply.style.display = "none";
      document.getElementById("Last_apply").classList.remove("error-input");
  }

//Kiểm tra date
var dateInput = document.getElementById('datepicker').value;
var error_Date = document.getElementById('error_Date');

if (dateInput.trim() === "") {
  document.getElementById("datepicker").classList.add("error-input");
  error_Date.style.display = "block";
  // error_Date.classList.remove('hidden');
} else {
  document.getElementById("datepicker").classList.remove("error-input");
  // error_Date.classList.add('hidden');
  error_Date.style.display = "none";
}

//Kiểm tra giới tính
var genderSelect = document.getElementById('gender').value;
    var errorElement = document.getElementById('error_gender');

    if (genderSelect.trim() === "") {
      document.getElementById("gender").classList.add("error-input");
      errorElement.classList.remove('hidden');
    } else {
      document.getElementById("gender").classList.remove("error-input");
      errorElement.classList.add('hidden');
    }

//Kiểm tra địa chỉ
  var city = document.getElementById("city").value;
  var errorCity = document.getElementById("errorCity");
  if (city.trim() === "") {
    errorCity.style.display = "block";
      document.getElementById("city").classList.add("error-input");
  } else {
    errorCity.style.display = "none";
      document.getElementById("city").classList.remove("error-input");
  }

  var nation = document.getElementById("nation").value;
  var error_nation = document.getElementById("error_nation");
  if (nation.trim() === "") {
    error_nation.style.display = "block";
      document.getElementById("nation").classList.add("error-input");
  } else {
    error_nation.style.display = "none";
      document.getElementById("nation").classList.remove("error-input");
  }
  // Kiểm tra sđt
  var phone = document.getElementById("phone").value;
  var error_phone = document.getElementById("error_phone");
  var phoneNumber = phone.trim();
  if (!validatePhoneNumber(phoneNumber)) {
    error_phone.style.display = "block";
      document.getElementById("phone").classList.add("error-input");
  } else {
    error_phone.style.display = "none";
      document.getElementById("phone").classList.remove("error-input");
  }
  
// Kiểm tra email
  var email = document.getElementById("email").value;
  var error_Email = document.getElementById("error_Email");
  if (email.trim() == "" && !/^\S+@\S+\.\S+$/.test(email)) {
    error_Email.style.display = "block";
      document.getElementById("email").classList.add("error-input");
      
  } else {
    error_Email.style.display = "none";
      document.getElementById("email").classList.remove("error-input");
      
  }

  //Kiểm tra institution
  var institution = document.getElementById("institution").value;
  var error_Institution = document.getElementById("error_Institution");
  if (institution.trim() === "") {
    error_Institution.style.display = "block";
      document.getElementById("institution").classList.add("error-input");
  } else {
    error_Institution.style.display = "none";
      document.getElementById("institution").classList.remove("error-input");
  }

//Kiểm tra Year of study
var Year_of_study = document.getElementById('Year_of_study').value;
    var error_Year_of_study = document.getElementById('error_Year_of_study');

    if (Year_of_study.trim() === "") {
      document.getElementById("Year_of_study").classList.add("error-input");
      error_Year_of_study.classList.remove('hidden');
    } else {
      document.getElementById("Year_of_study").classList.remove("error-input");
      error_Year_of_study.classList.add('hidden');
    }

    //Kiểm tra Year of Program_of_choice
var Program_of_choice = document.getElementById('Program_of_choice').value;
var error_Program_of_choice = document.getElementById('error_Program_of_choice');

if (Program_of_choice.trim() === "") {
  document.getElementById("Program_of_choice").classList.add("error-input");
  error_Program_of_choice.classList.remove('hidden');
} else {
  document.getElementById("Program_of_choice").classList.remove("error-input");
  error_Program_of_choice.classList.add('hidden');
}

    //Kiểm tra Year of You know the program through
    var program_through = document.getElementById('program_through').value;
    var error_program_through = document.getElementById('error_program_through');
    
    if (program_through.trim() === "") {
      document.getElementById("program_through").classList.add("error-input");
      error_program_through.classList.remove('hidden');
    } else {
      document.getElementById("program_through").classList.remove("error-input");
      error_program_through.classList.add('hidden');
    }

}


function uploadFile(input) {
  var file = input.files[0];
  if (!file) {
      return; // Nếu không có file được chọn, không thực hiện các bước tiếp theo
  }
  var formData = new FormData();
  formData.append('file', file);
  console.log(formData);
  fetch('https://e70a-42-114-187-227.ngrok-free.app/file/upload', {
      method: 'POST',
      body: formData
  })
  .then(response => {
      if (response.ok) {
          return response.json();
      } else {
          throw new Error('Đã xảy ra lỗi khi tải lên file.');
      }
  })
  .then(data => {
      // Lưu thông tin file name và path để sử dụng sau khi gửi email
      var file_name = data.data.filename;
      var file_path = data.data.filepath;
      console.log(file_name);
      console.log(file_path);

      // Gọi hàm để gửi email sau khi upload file thành công
      sendEmailWithAttachment(file_name, file_path);
  })
  .catch(error => {
      alert(error.message);
  });
}

function sendEmailWithAttachment(file_name, file_path) {
  var Frist_apply = document.getElementById("Frist_apply").value;
  var Last_apply = document.getElementById("Last_apply").value;
  var dateInput = document.getElementById('datepicker').value;
  var genderSelect = document.getElementById('gender').value;
  var city = document.getElementById("city").value;
  var nation = document.getElementById("nation").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var institution = document.getElementById("institution").value;
  var Year_of_study = document.getElementById('Year_of_study').value;
  var Program_of_choice = document.getElementById('Program_of_choice').value;
  var program_through = document.getElementById('program_through').value;

  // Gửi yêu cầu POST đến endpoint '/sendmail' trên máy chủ
  fetch('https://e70a-42-114-187-227.ngrok-free.app/email/send-email', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          subject: "thông tin user",
          text: {
              First_name: Frist_apply,
              Last_name: Last_apply,
              Date_of_bith: dateInput,
              Gender: genderSelect,
              City: city,
              Natinnality: nation,
              Email: email,
              Phone: phone,
              Your_Institution: institution,
              Year_of_study: Year_of_study,
              Program_of_choice: Program_of_choice,
              program_through: program_through,
          },
          attachments: [{
              filename: file_name,
              path: file_path
          }]
      })
  })
  .then(response => {
      console.log(response);
      if (response.ok) {
          return response.json();
      }
      throw new Error('Gửi email không thành công');
  })
  .then(data => {
      document.getElementById("loadingContainer").style.display = "flex";
      console.log(data.status); // Log trạng thái gửi email
      Swal.fire({
          icon: 'success',
          title: 'Thành công!',
          text: 'Email đã được gửi thành công.'
      });
      document.getElementById("loadingContainer").style.display = "none";
  })
  .catch(error => {
      document.getElementById("loadingContainer").style.display = "flex";
      console.error('Lỗi:', error);
      Swal.fire({
          icon: 'error',
          title: 'Lỗi!',
          text: 'Đã xảy ra lỗi khi gửi email.'
      });
      document.getElementById("loadingContainer").style.display = "none";
  });
}






  
//   // console.log(dataForm);
//   // // Gửi yêu cầu POST đến endpoint '/sendmail' trên máy chủ
//   fetch('https://e70a-42-114-187-227.ngrok-free.app/file/upload', { 
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//           subject: "thông tin user",
//           text: {
         
//         },
//         attachments: [
              
//             ]
//       })
//       // data: JSON.stringify({
//       //     data: dataForm,
//       // }),
//   })
//   // .then(response => {
//   //     console.log(response);
//   //     if (response.ok) {
//   //         return response.json();
//   //     }
//   //     throw new Error('Gửi email không thành công');
//   // })
//   // .then(data => {
//   //     document.getElementById("loadingContainer").style.display="flex";
//   //     console.log(data.status); // Log trạng thái gửi email
//   //     Swal.fire({
//   //         icon: 'success',
//   //         title: 'Thành công!',
//   //         text: 'Email đã được gửi thành công.'
//   //     });
//   //     document.getElementById("loadingContainer").style.display="none";
//   // })
//   // .catch(error => {
//   //     document.getElementById("loadingContainer").style.display="flex";
//   //     console.error('Lỗi:', error);
//   //     Swal.fire({
//   //         icon: 'error',
//   //         title: 'Lỗi!',
//   //         text: 'Đã xảy ra lỗi khi gửi email.'
//   //     });
//   //     document.getElementById("loadingContainer").style.display="none";
//   // });
// }

document
  .getElementById("apply")
  .addEventListener("submit", function (event) {
      event.preventDefault()        
      submitApply();
      // document.getElementById("popup").style.display="none";
      if (errorFrist_apply.style.display === "none" && errorLast_apply.style.display === "none" && error_Date.style.display === "none" && errorElement.style.display === "none") {
        // document.getElementById("popup-overlay").style.display="none";
        document.getElementById("loadingContainer").style.display="flex";
          sendEmail2()
          document.getElementById("apply").reset();
      }
  })


  


// function updatePlaceholder() {
//   var datepicker = document.getElementById('datepicker');
//   if (datepicker.value === '') {
//     datepicker.classList.add('placeholder');
//     console.log("KHÔNG PLACHOVER")
//   } else {
//     datepicker.classList.remove('placeholder');
//     console.log("CÓ PLACHOVER")
//   }
// }



