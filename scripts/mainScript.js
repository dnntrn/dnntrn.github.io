
window.onload= function(){

  if (document.querySelectorAll(".orangeFill")[0] != null ){
    logoAnimate();
  }


  //javascript media query
  const mq = window.matchMedia( "(min-width: 820px)" );

  if (mq.matches){
    window.addEventListener("scroll", stickyNavBar, false);
  }


  //get div that user clicks to reveal a panel
  const showPanelClasses = document.querySelectorAll(".revealClick");

  //add a click event to the reveal divs
  for (let i = 0; i < showPanelClasses.length; i++){
    showPanelClasses[i].addEventListener("click", function(){
      showPanels(i);
    }, false);
  }

  //get button that user clicks to activate contact modal
  const contactButtons = document.querySelectorAll(".contactBtn");

  //add a click event to contact buttons
  for (let i = 0; i < contactButtons.length; i++){
    contactButtons[i].addEventListener("click", function(){
      showModal();
    }, false);
  }

  //get button that user clicks to close contact modal
  const closeButtons = document.querySelectorAll(".closeBtn");

  //add a click event to close modal buttons
  for (let i = 0; i < closeButtons.length; i++){
    closeButtons[i].addEventListener("click", function(){
      closeModal();
    }, false);
  }
}



//this function creates slideDown effect in pure javascript for hidden divs
function showPanels(i){
  const revealPanel = document.querySelectorAll(".revealPanel")[i];
  const revealClick = document.querySelectorAll(".revealClick")[i];

  if (revealPanel.style.height == 0 || revealPanel.style.height == "0px"){
    revealPanel.style.height = "100px";
  } else if (revealPanel.style.height == "100px"){
    revealPanel.style.height = 0;

  }
}


//this function shows contact modals and fades in the content
function showModal(){
  const modal = document.querySelectorAll(".contactModal")[0];
  const modalContent = document.querySelectorAll(".contactModalContent")[0];
  modal.style.display = "block";
  let op = .1;

  //fade in contact content
  let timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        modalContent.style.opacity = op;
        op += .1;
        modalContent.style.filter = 'alpha(opacity=' + op * 100 + ")";
    }, 50);

}


//this function shows contact modals
function closeModal(){
  const modal = document.querySelectorAll(".contactModal")[0];
  const modalContent = document.querySelectorAll(".contactModalContent")[0];
  modalContent.style.opacity = 0;
  modal.style.display = "none";

}



//function to animate the logo
function logoAnimate() {
  //javascript media query
  const mq = window.matchMedia( "(min-width: 820px)" );

  let elem;
  let elemHeight;
  let fillY;
  let checkY;
  let fillHeight;
  let speed;
  if (mq.matches){
    elem = document.querySelectorAll(".orangeFill")[1];
    elemHeight = elem.height;
    fillY = 150;
    checkY = 0;
    fillHeight = 5;
    speed = .8;
  } else{
    elem = document.querySelectorAll(".orangeFill")[0];
    elemHeight = elem.height;
    fillY = 60;
    checkY = -11;
    fillHeight = 20;
    speed = 1;
  }

  let id = setInterval(frame, 10);

  function frame() {
    if (fillY <= checkY) {
      clearInterval(id);

    } else {
      fillHeight += .5;
			fillY -= speed;
      elem.style.height = fillHeight;
			elem.style.y = fillY;
    }
  }
}


//this function makes a stickyNavBar
function stickyNavBar(){
  const navBar = document.querySelectorAll(".navBar")[0];
  const logo = document.querySelectorAll(".wholeLogo")[1];


  const rect = logo.getBoundingClientRect();

  const checkHeight = rect.height * -1;

  const initialBgColor = navBar.style.backgroundColor;
  const initialPadding = navBar.style.padding;
  const initialMargin = navBar.style.margin;

  if (rect.y < checkHeight + rect.height/2){
    navBar.style.position = "fixed";
    navBar.style.backgroundColor = "rgba(238,238,238,1)";
    navBar.style.zIndex = "1";
    navBar.style.top = "0";
    navBar.style.left = "10%";
    navBar.style.width = "80%";
    navBar.style.paddingTop = "1%";
    navBar.style.paddingBottom = "1%";
    navBar.style.marginTop = "0";
  } else{
    navBar.style.position = "static";
    navBar.style.width = "100%";
    navBar.style.backgroundColor = "white";
    navBar.style.margin = initialMargin;
    navBar.style.padding = initialPadding;
  }

}
