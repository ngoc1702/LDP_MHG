
function validatePhoneNumber(phoneNumber) {
    return phoneNumber !== "" && phoneNumber.length === 10 && !isNaN(phoneNumber) && phoneNumber.charAt(0) === '0';

}

function submitPopup() {

    // Kiểm tra họ và tên
    var name_popup = document.getElementById("name_popup").value;
    var errorName_popup = document.getElementById("errorName_popup");
    if (name_popup.trim() === "") {
        errorName_popup.style.display = "block";
        document.getElementById("name_popup").classList.add("error-input");
    } else {
        errorName_popup.style.display = "none";
        document.getElementById("name_popup").classList.remove("error-input");
    }

    // Kiểm tra sđt
    var phone_popup = document.getElementById("phone_popup").value;
    var errorPhone_popup = document.getElementById("errorPhone_popup");
    var phoneNumber = phone_popup.trim();
    if (!validatePhoneNumber(phoneNumber)) {
        errorPhone_popup.style.display = "block";
        document.getElementById("phone_popup").classList.add("error-input");
    } else {
        errorPhone_popup.style.display = "none";
        document.getElementById("phone_popup").classList.remove("error-input");
    }
    
    // // Kiểm tra email
    var emailValue = document.getElementById("email_popup").value;
    var errorEmail_popup = document.getElementById("errorEmail_popup");
    if (emailValue.trim() == "" && !/^\S+@\S+\.\S+$/.test(emailValue)) {
        errorEmail_popup.style.display = "block";
        document.getElementById("email_popup").classList.add("error-input");
        
    } else {
        errorEmail_popup.style.display = "none";
        document.getElementById("email_popup").classList.remove("error-input");
        
    }
 console.log(name_popup)
 console.log(phone_popup)
 console.log(emailValue)
}


function sendEmail(){
    var name_popup = document.getElementById("name_popup").value;
    var phone_popup = document.getElementById("phone_popup").value;
    var emailValue = document.getElementById("email_popup").value;
    const dataForm = {
        subject: "thông tin user",
        text: {
           name: "Ngoc",
           phone: "039676543",
           email: "fdgdf@gmail.com",
        },
        attachments: [
               
            ]
    }
    
    // console.log(dataForm);
    // // Gửi yêu cầu POST đến endpoint '/sendmail' trên máy chủ
    fetch('https://e70a-42-114-187-227.ngrok-free.app/email/send-email', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            subject: "thông tin user",
            text: {
               name: name_popup,
               phone: phone_popup,
               email: emailValue,
            },
            attachments: []
        })
        // data: JSON.stringify({
        //     data: dataForm,
        // }),
    })
    .then(response => {
        console.log(response);
        if (response.ok) {
            return response.json();
        }
        throw new Error('Gửi email không thành công');
    })
    .then(data => {
        document.getElementById("loadingContainer").style.display="flex";
        document.getElementById("popup-overlay").style.display="none";
        console.log(data.status); // Log trạng thái gửi email
        Swal.fire({
            icon: 'success',
            title: 'Thành công!',
            text: 'Email đã được gửi thành công.'
        });
        document.getElementById("loadingContainer").style.display="none";
    })
    .catch(error => {
        document.getElementById("loadingContainer").style.display="flex";
        document.getElementById("popup-overlay").style.display="none";
        console.error('Lỗi:', error);
        Swal.fire({
            icon: 'error',
            title: 'Lỗi!',
            text: 'Đã xảy ra lỗi khi gửi email.'
        });
        document.getElementById("loadingContainer").style.display="none";
    });
}
 
 
document
    .getElementById("popup")
    .addEventListener("submit", function (event) {
        event.preventDefault()        
        submitPopup();
        // document.getElementById("popup").style.display="none";
        if (errorName_popup.style.display === "none" && errorPhone_popup.style.display === "none" && errorEmail_popup.style.display === "none") {
            document.getElementById("popup-overlay").style.display="none";
            document.getElementById("loadingContainer").style.display="flex";
            sendEmail()
            // document.getElementById("loadingContainer").style.display="none";
            document.getElementById("popup").reset();
        }
    })


    