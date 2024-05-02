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
    if (
        name_popup === "" ||
        phone_popup === "" ||
        emailValue === "" 
    ) {

    } else {
        // loading.style.display = "inline-block";
        // overlay.style.display = "block";
        var formData = [{
            name: name_popup,
            phone: phone_popup,
            email_from: emailValue,          
            type: "opportunity",
        }];

        $.ajax({
            url: "mtprogram@mandalahotels.com.vn",
            method: "POST",
            dataType: "json",
            data: JSON.stringify({
                data: formData,
            }),
            success: function (res) {
                // loading.style.display = "none";
                // overlay.style.display = "none";
                if (res.result?.is_success) {
                    console.log(res)
                    swal("Thành công", "Thông tin của quý khách đã được gửi tới hệ thống thành công, quý khách sẽ nhận được liên hệ từ bộ phận tư vấn trong vòng 24 giờ tới...", "success");
                } else {
                    swal("Lỗi", "Hệ thống đang trong quá trình bảo trì, vui lòng quay lại sau...", "error");
                }
            },
            error: function (xhr, status, error) {

                // loading.style.display = "none";
                // overlay.style.display = "none";
                swal("Lỗi", "Hệ thống đang trong quá trình phát triển, vui lòng quay lại sau...", "error");
            },
        });

    // $.ajax({
    //     url: "mtprogram@mandalahotels.com.vn",
        
    //     dataType: "json",
    //     type: "POST",
    //     contentType: "application/json",
    //     success: function (response) {
    
    //         // loading.style.display = "none";
    //         // overlay.style.display = "none";
    //         console.log(response)
    //         if (response.status == "Success") {
    //             swal("Thành công", "Đã gửi thông tin thành công", "success");
    //         } else {
    //             swal("Lỗi", "Hệ thống đang trong quá trình bảo trì, vui lòng quay lại sau...", "error");
    //         }
    //     },
    //     error: function () {
    
    //         // loading.style.display = "none";
    //         // overlay.style.display = "none";
    //         swal("Lỗi", "Hệ thống đang trong quá trình phát triển, vui lòng quay lại sau...", "error");
    //     }
    // });
    }
};



document
    .getElementById("popup")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        submitPopup();

        if (errorName_popup.style.display === "none" && errorPhone_popup.style.display === "none" && errorEmail_popup.style.display === "none") {
      
            document.getElementById("popup").reset();
       
        }
    });