function tabSliderOpal(imgs) {
  var expandImg = document.getElementById("expandedImgOpal");
  expandImg.src = imgs.src;
  var thumbNails = $('.thumbnail img');
  for (var i = 0; i < thumbNails.length; i++) {
    thumbNails[i].classList.remove('active');
  }
  imgs.classList.add('active');
}

function tabSlider(imgs) {
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;
  var thumbNails = $('.thumbnail img');
  for (var i = 0; i < thumbNails.length; i++) {
    thumbNails[i].classList.remove('active');
  }
  imgs.classList.add('active');
}

function tabSliderTwo(imgs) {
  var expandImg = document.getElementById("expandedImgTwo");
  expandImg.src = imgs.src;

  // add cap
  var cap = $(imgs).parent().find('.caption').text();
  if(cap.length > 0){
    //$(expandImg).parent().append(cap);
    $(expandImg).parent().find('.caption').text(cap);
   
  }else{
    $(expandImg).parent().find('.caption').text(' ');
     
  }
  //console.log($(imgs).attr('cap'));
  var thumbNails = $('.thumbnail img');
  for (var i = 0; i < thumbNails.length; i++) {
    thumbNails[i].classList.remove('active');
  }
  imgs.classList.add('active');
}
