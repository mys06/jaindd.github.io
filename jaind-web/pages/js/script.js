$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });


function toggleDarkMode() {
   var body = document.body;
   body.classList.toggle("dark-mode");
 }