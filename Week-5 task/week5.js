function displayformdate(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value; 
    var number = document.getElementById("number").value;
    
    console.log("Name;"+name);
    console.log("Email;"+email);
    console.log("Contact;"+number)
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});