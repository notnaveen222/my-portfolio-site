const cursorDot =  document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove",function (e){
   const posX = e.clientX;
   const posY = e.clientY;
   
   cursorDot.style.left = `${posX}px`;
   cursorDot.style.top = `${posY}px`;

   //cursorOutline.style.left = `${posX}px`;
   //cursorOutline.style.top = `${posY}px`;

   cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
   }, { duration: 500, fill: "forwards"});
});

function scrollToSection(section) {
   var section = document.getElementById(section);
   section.scrollIntoView({ behavior: 'smooth' });
   // Add your desired functionality here
 }


 function QRslideshow() {
   var QrcImg = document.getElementsByClassName('project-image2')[0]
   var image = 0;
   var urls = ['url("../Assets/projects-thumbnail/QRC/QRCGen-DarkMode.png")','url("../Assets/projects-thumbnail/QRC/QRCGen-LightMode.png")',
   'url("../Assets/projects-thumbnail/QRC/extension-whole.png")',
]
   setInterval(() => {
      QrcImg.style.backgroundImage = urls[image];
      image = (image + 1) % urls.length; // Increment image index, loop back to 0 if at the end
   }, 2000);
 }

QRslideshow();

