function show_nav() {
    document.getElementById("nav-links").classList.toggle("display-none");
}

function my_js_function() {
    const name= document.getElementById("yourname").value;
    const email = document.getElementById("email").value;
    const contactNo = document.getElementById("contact").value;
    const message = document.getElementById("txtmsg").value;

    // Radio button checks
    const gotAnswersYes = document.getElementById("answer1").checked;
    const gotAnswersNo = document.getElementById("answer2").checked;
    const satisfiedYes = document.getElementById("satisfied1").checked;
    const satisfiedNo = document.getElementById("satisfied2").checked;

    // 2. Validate Text/Textarea fields (basic empty check)
    let isValid=true;
    if (name == "") {
        alert("Please enter your Name.");
        isValid=false;
    }
    if (email == "") {
        alert("Please enter your Email Address.");
        isValid=false;
    } 
    if (contactNo == "") {
        alert("Please enter your Contact No.");
        isValid=false;
    }
    if (message == "") {
        alert("Please enter your Feedback/Message.");
        isValid=false;
    }

    // 3. Validate Radio Button Groups
    if (!gotAnswersYes && !gotAnswersNo) {
        alert("Please answer the 'Did you get all your answers?' question.");
        isValid=false
    }

    if (!satisfiedYes && !satisfiedNo) {
        alert("Please answer the 'Are you satisfied with our services?' question.");
        isValid = false;
    }

    // 4. Handle Errors or Success
    if (isValid) {
        alert("Form submitted successfully!"); 
        return true; 
    }
    
    return false;
} 


const counters = document.querySelectorAll('.counter');
let started = false;

window.addEventListener('scroll', () => {
    let sectionTop = document.querySelector('.counter-section').offsetTop;

    if (window.scrollY + window.innerHeight > sectionTop && !started) {
        counters.forEach(counter => {
            let target = +counter.getAttribute("data-target");
            let count = 0;

            let speed = target / 100; // Smooth speed

            let interval = setInterval(() => {
                if (count < target) {
                    count += Math.ceil(speed);
                    counter.innerText = count;
                } else {
                    counter.innerText = target;
                    clearInterval(interval);
                }
            }, 20);
        });
        started = true;
    }
});