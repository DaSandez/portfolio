const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async (e)=>{
    e.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');

    const data = {
        name,
        email,
        phone,
        message
    }
    const formData = new FormData();
    for(let k in data){
        formData.append(k, data[k]);
    }

    const url = "http://correo-portfolio-back.notasalmargen.net";
    
    const response = await fetch(url,{
        method: "post",
        headers: {
            "Content-Type": "multipart/form-data"
        },
        body: formData
    });
    console.log(response);
})