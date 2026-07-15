const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {

    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");

};

document.querySelectorAll(".navbar a").forEach(link => {

    link.onclick = () => {
        navbar.classList.remove("active");
        menuIcon.classList.remove("bx-x");
    }

});


var typed = new Typed(".multiple-text", {
        strings: [
            "Web Developer",
            "Frontend Developer",
            "UI/UX Designer",
            "Programmer"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        backDelay: 1500,
        loop: true
    });

const educationSection = document.querySelector(".education");
const educationHeading = document.querySelector(".education .heading");
const educationBoxes = document.querySelectorAll(".education-box");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            educationHeading.classList.add("show");

            educationBoxes.forEach(box => {
                box.classList.add("show");
            });

        } else {

            educationHeading.classList.remove("show");

            educationBoxes.forEach(box => {
                box.classList.remove("show");
            });

        }
    });
}, {
    threshold: 0.25
});

observer.observe(educationSection);



const certificateSection = document.querySelector(".certificate");
const certificateHeading = document.querySelector(".certificate .heading");
const certificateBoxes = document.querySelectorAll(".certificate-box");

const certificateObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if(entry.isIntersecting){

            certificateHeading.classList.add("show");

            certificateBoxes.forEach(box => {
                box.classList.add("show");
            });

        }else{

            certificateHeading.classList.remove("show");

            certificateBoxes.forEach(box => {
                box.classList.remove("show");
            });

        }

    });
},{
    threshold:0.1
});

certificateObserver.observe(certificateSection);








const projectSection = document.querySelector(".project");
const projectHeading = document.querySelector(".project .heading");
const projectBoxes = document.querySelectorAll(".project-box");

const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if(entry.isIntersecting){

            projectHeading.classList.add("show");

            projectBoxes.forEach(box => {
                box.classList.add("show");
            });

        }else{

            projectHeading.classList.remove("show");

            projectBoxes.forEach(box => {
                box.classList.remove("show");
            });

        }

    });
},{
    threshold:0.25
});

projectObserver.observe(projectSection);




window.onload = function(){

emailjs.init({
    publicKey: "4qAuvDCWHkvOGHTHc",
});


const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();


    emailjs.sendForm(
        "service_u8gukqp",
        "template_u6c9u9f",
        this
    )
    .then(() => {

        alert("Message Sent Successfully!");
        form.reset();

    })
    .catch((error)=>{

        console.log(error);
        alert("Failed To Send!");

    });

});

}