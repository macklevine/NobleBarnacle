$(document).ready(function(){ 
  $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
  });
  // $("#nav-toggle").click(function(e) {
  //     e.preventDefault();
  //     $("#wrapper").toggleClass("toggled");
  // });
  // document.querySelector( "#nav-toggle" )
  //   .addEventListener( "click", function() {
  //     this.classList.toggle( "active" );
  //   });
});