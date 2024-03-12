console.log("Har Har Mahadev");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const  caption = document.querySelector(".caption");
const currentActiveImage = document.querySelectorAll(".active-item > img");
let counter = 1;
displaySlide(counter);
nextBtn.addEventListener("click", (e) => {
      counter++;
      displaySlide(counter, caption[counter]);
})
prevBtn.addEventListener("click", (e) => {
      counter--;
      displaySlide(counter, caption[counter]);
})
currentActiveImage.forEach((img) => {
      img.addEventListener("click", (e) => {
         const currentId = parseInt(e.currentTarget.id);
         displaySlide(currentId);
      });
})



function displaySlide(id){
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide) => {
        slide.style.display = "none";
    })    
    currentActiveImage.forEach((img) => {
        img.className = img.className.replace("active", "");
    })
    if(id > slides.length){
        counter = 1;
    }
   if(id < 1){
       counter = slides.length;
   }  
   slides[counter-1].style.display = "block"
   currentActiveImage[counter-1].className += "active";
   caption.textContent = currentActiveImage[counter - 1].alt;
}

