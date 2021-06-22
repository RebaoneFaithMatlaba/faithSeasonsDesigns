function menuButton(){
  $(document).ready(function(){
    $(".menu-button").click(function(){
      $(".navigation-list").toggle(600);
    });
  });
}
menuButton();
