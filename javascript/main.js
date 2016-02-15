var alternate_service_section_html_string= '<div class="services-item services-plumber"> <h3>Plumbing Services</h3> <img class="img-responsive" src="images/plumber.jpg" alt="plumber"> <ul> <li>Repair and Maintenance of Plumbing System and its Components.</li><li>Repair and Maintenance of Water Treatment Equipment, Piping and Controls.</li><li>Solve issues related to Sinks, Tubs, and other plumbing fixture.</li></ul> </div><div class="services-item services-electrician"> <h3>Electrical Services</h3> <img class="img-responsive" src="images/electrician.jpg" alt="electrician"> <ul> <li>Installation and Maintenance of Electrical Wiring and Equipments.</li><li>Repair of malfunctioning electrical devices.</li><li>Solve any other electricity related household issue.</li></ul> </div><div class="services-item services-carpenter"> <h3>Carpentry Services</h3> <img class="img-responsive" src="images/carpenter.jpg" alt="carpenter"> <ul> <li>General hardware related maintenance and repair work.</li><li>Installation of doors, handles, locks and other wooden fixtures.</li><li>Any other carpentry related household work.</li></ul> </div>';

$(document).ready(function(){
  //console.log("dom ready");

  /*
  * Slow Scroll for in-page links code
  */
  $('a[href*=#]:not([href=#])').click(function() {
    if( $(this).attr("href")=="#carousel-salon-images") return;//This is the exception
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 700);
        return false;
      }
    }
  });

});

$(window).load(function(){
  //console.log("window loaded");
  adjustServicesItemHeight();
  adjustPlansItemHeight();
  //adjustServicesSectionDisplay();
});

$(window).resize(function(){
  //console.log("window resized");
  adjustServicesItemHeight();
  adjustPlansItemHeight();
});

function adjustServicesItemHeight(){

  /*Only Adjust height if service items are displayed in columns*/
  if($(window).width()>=768)
  {
    var max_height = $('.services-plumber ul').height();
    //console.log(max_height);
    $('.services-electrician ul').height(max_height);
    $('.services-carpenter ul').height(max_height);
  }
  else {
    $('.services-electrician ul').height('auto');
    $('.services-carpenter ul').height('auto');
  }
}

function adjustPlansItemHeight(){

  /*Only Adjust height if plans items are displayed in columns*/
  var max_height = $('.plans-residential ul').height();
  $('.plans-corporate ul').height(max_height);
}

function adjustServicesSectionDisplay(){
  if($(window).width()<650){
    $("#services .para-content").html(alternate_service_section_html_string);
    //console.log("service-section-display adjusted");
  }
}
