function productmenushow(){
    document.getElementById("navconnectpr").style.display="block";
    document.getElementById("productsubmenu").style.visibility="visible";
    document.getElementById("productsubmenu").style.opacity="1";
    document.getElementById("productsubmenu").style.top="70px";
    document.getElementById("navconnectpr").style.zIndex="204";
    document.getElementById("productsubmenu").style.transition = "all 0.25s";
    
}
function productmenuhide(){
    document.getElementById("productsubmenu").style.opacity="0";
    document.getElementById("navconnectpr").style.display="none";
    
    document.getElementById("productsubmenu").style.visibility="hidden";
    document.getElementById("productsubmenu").style.top="95px";

    document.getElementById("navconnectpr").style.zIndex="0";
    document.getElementById("productsubmenu").style.transition = "none";
    
}

function BGmenushow(){
  document.getElementById("navconnectBG").style.display="block";
  document.getElementById("buyersguidesubmenu").style.visibility="visible";
  document.getElementById("buyersguidesubmenu").style.opacity="1";
  document.getElementById("buyersguidesubmenu").style.top="70px";
  document.getElementById("navconnectBG").style.zIndex="204";
  document.getElementById("buyersguidesubmenu").style.transition = "all 0.25s";
  
}
function BGmenuhide(){
  document.getElementById("navconnectBG").style.display="none";
  document.getElementById("buyersguidesubmenu").style.visibility="hidden";
  document.getElementById("buyersguidesubmenu").style.opacity="0";
  document.getElementById("buyersguidesubmenu").style.top="90px";
  document.getElementById("navconnectBG").style.zIndex="204";
  document.getElementById("buyersguidesubmenu").style.transition = "none";
  
}
    

function Smenushow(){
  document.getElementById("navconnectS").style.display="block";
  document.getElementById("servicesubmenu").style.visibility="visible";
  document.getElementById("servicesubmenu").style.opacity="1";
  document.getElementById("servicesubmenu").style.top="70px";
  document.getElementById("navconnectS").style.zIndex="204";
  document.getElementById("servicesubmenu").style.transition = "all 0.25s";
  
}
function Smenuhide(){
  document.getElementById("navconnectS").style.display="none";
  document.getElementById("servicesubmenu").style.visibility="hidden";
  document.getElementById("servicesubmenu").style.opacity="0";
  document.getElementById("servicesubmenu").style.top="95px";
  document.getElementById("navconnectS").style.zIndex="0";
  document.getElementById("servicesubmenu").style.transition = "none";
  
}




window.onload = function imageslideshowmain() {
  const slideCount = 8;
  const interval = 20000; 
  let currentSlide = 0;
  let slideshowInterval;

  function showSlide(slideIndex) {
    const slides = document.getElementsByClassName('slideshow-image');
    const radioButtons = document.getElementsByClassName('radio-button');
    const numSlides = slides.length;

    for (let i = 0; i < numSlides; i++) {
      slides[i].style.opacity = 0;
      radioButtons[i].checked = false;
    }

    slides[slideIndex].style.opacity = 1;
    radioButtons[slideIndex].checked = true;
  }

  function startSlideshow() {
    slideshowInterval = setInterval(() => {
      currentSlide = (currentSlide + 1) % slideCount;
      showSlide(currentSlide);
    }, interval);
  }

  function stopSlideshow() {
    clearInterval(slideshowInterval);
  }

  const radioButtons = document.querySelectorAll('.radio-button');
  radioButtons.forEach((radioButton, index) => {
    radioButton.addEventListener('change', () => {
      stopSlideshow();
      showSlide(index);
      startSlideshow();
    });
  });

  startSlideshow();
};




/////// For Search button Modal //////

function displaysearch(){
  document.getElementById("body").style.height="100vh";
  document.getElementById("search-pop-up").style.top="32.85vh";
  document.getElementById("blur-blue-body").style.visibility="visible";
  document.getElementById("body").style.overflow="hidden";
document.getElementById("search-pop-up").style.visibility="visible";
  document.getElementById("blur-blue-body").style.opacity="1";
  document.getElementById("search-pop-up").style.opacity="1";
  
  }
  
  
  
  var input = document.getElementById("search-pop-up-text");
  
  input.addEventListener("keypress",function(eventsrchenter){
    let val=document.getElementById("search-pop-up-text").value;    
    if (eventsrchenter.key === "Enter") {
      let link=document.getElementById("linkchange");
      document.getElementById("linkchange").click();
  }
  })
  
  
  function searchonclick(){
    let val=document.getElementById("search-pop-up-text").value;
  
    let link=document.getElementById("linkchange");
  link.href="https://www.yamaha-motor-india.com/site-search.html?q="+val;
  }
  
  function displaysearchout(){
    document.getElementById("body").style.height="auto";
      document.getElementById("blur-blue-body").style.visibility="hidden";
      document.getElementById("search-pop-up").style.visibility="hidden";
       document.getElementById("blur-blue-body").style.opacity="0";
  document.getElementById("search-pop-up").style.opacity="0";
  document.getElementById("body").style.overflow="visible";
  document.getElementById("body").style.overflowX="hidden";
   document.getElementById("search-pop-up").style.top="10vh";
  
     }
     function hover(img){
      img.src="Images/searchwhite.png"
      
  }
  
  function hoverout(img){
  img.src="Images/search.png"
  }
  
  
  function hoversrchbtn(img){
      img.src="Images/searchbtnminiblack.png"
  }
  
  function hoveroutsrchbtn(img){
  img.src="Images/searchbtnminigrey.png"
  }
 ///////////End of Script for Modal//////////////////////  

 function scrolltotopsmooth(){
  window.scrollTo(0,0);
 }

 
 function  fbsrcin(){
  document.getElementById("fbicon").src="Images/fbafter.png"
}
function   twsrcin(){
  
  document.getElementById("twicon").src="Images/twitterafter.png"
}
function     instssrcin(){
  
  document.getElementById("inicon").src="Images/instaafter.png"
}
function    youtsrcin(){
  
  document.getElementById("yoicon").src="Images/youtubeafter.png"
}


function fbsrcout(){document.getElementById("fbicon").src="Images/svgexport-14.svg"}
function twsrcout(){document.getElementById("twicon").src="Images/twitter.svg"}
function instasrcout(){document.getElementById("inicon").src="Images/insta.svg"}
function youtsrcsrcout(){document.getElementById("yoicon").src="Images/outube.svg"}
  

   
function openembedded(){
  document.getElementById("tcsvideoiframe").style.display="flex";
  document.getElementById("tcsvideoiframe").style.opacity="1";
  document.getElementById("tcsvideoiframe").style.zIndex="1000";
  document.getElementById("tcsinner").style.top="20vh";
  document.getElementById("iframeid").style.zIndex="999";
  document.getElementById("iframeid").style.opacity="1";
  document.getElementById("body").style.overflow="hidden"
  document.getElementById("tcsvideoiframe").style.transition="all 0.6s ease-in";

 
}
function closeiframe(){
  document.getElementById("tcsvideoiframe").style.display="none";
  document.getElementById("tcsvideoiframe").style.opacity="0";
  document.getElementById("tcsvideoiframe").style.zIndex="80";
  document.getElementById("iframeid").style.zIndex="80";
  document.getElementById("tcsinner").style.top="0px";
  document.getElementById("iframeid").style.opacity="0";
  document.getElementById("body").style.overflowY="visible";
  document.getElementById("tcsvideoiframe").style.transition="all 0.6s ease-in";
  
}