window.addEventListener("load", ()=>{
    const loader =document.querySelector(".loader");

    loader.classList.add("loader-hidden");
    loader.addEventListener("transtionend",()=>{
        setTimeout(() => {
          document.body.removeChild("loader")   
        }, 1000);
       
    })
})