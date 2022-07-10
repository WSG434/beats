const sections = $("section");
const display = $(".maincontent");

let inScroll = false;

sections.first().addClass("active--section");

const performTransition = (sectionEq) => {
  
  if (inScroll === false){
    inScroll = true;
    const position = sectionEq * -100;
  
    display.css({
      transform: `translateY(${position}%)`
    });

    sections.eq(sectionEq).addClass("active--section").siblings().removeClass("active--section");
  }

  setTimeout( () =>{
    inScroll = false;
  }, 1300);
};

const scrollViewport = direction => {
  const activeSection = sections.filter(".active--section");
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();


  if (direction === "next" && nextSection.length){
    performTransition(nextSection.index());
    console.log("next" + nextSection.length);
    
  }


  if (direction === "prev" && prevSection.length){
    performTransition(prevSection.index());
    console.log("prev" + prevSection.length);
  }
}

$(window).on("wheel", e =>{
  const deltaY = e.originalEvent.deltaY;

  if (deltaY > 0) {
    //next
    scrollViewport("next");
  }

  if (deltaY < 0) {
    //prev
    scrollViewport("prev");
  }

});


$(window).on("keydown", e => {

  const tagName = e.target.tagName.toLowerCase();


  if (tagName !== "input" && tagName !== "textarea"){
    switch (e.keyCode) {
    case 38: //prev
      scrollViewport("prev");
      break;
    case 40: //next
      scrollViewport("next");
      break;
  }
  };
  

});