var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
//handle form submission
form.addEventListner('submit', function (event) {
    event.preventDefault();
    //collect input vaLues
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n<h2><b>Resume</b></h2>\n<h3><b>Personal Information</b></h3>\n<p><b>Name:</b>".concat(name, "</p>\n<p><b>Email:</b>").concat(email, "</p>\n<p><b>phone:</b>").concat(phone, "</p>\n\n<h3>Education</h3>\n<p>").concat(education, "</p>\n\n<h3>Experience</h3>\n<p>").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p>").concat(skills, "</p>\n\n");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
