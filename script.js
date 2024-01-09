
function sendEmail(){
    let parms = {
        firstname : document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        email : document.getElementById("email").value,
        address : document.getElementById("address").value,
        message : document.getElementById("Message").value,
        // browser : document.getElementById("browsers").value,
    }


    // using the service id and templelate id 
    emailjs.send("service_fpi0i6g","template_2pxpg39",parms).then(alert("Email Sent Successfully!!"))
}


