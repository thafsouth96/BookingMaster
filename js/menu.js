$(document).ready(function(){
  $("#menuNav").hide();

  $("#menu").bind('click',function(){
    $("#menuNav").toggle("hidden ");
      //alert('ça marche') ;
  }) ;

  $("#messagerie").bind('click',function(){
    $("body").load("../Controller/mailbox-envoi.ctrl.php");

  }) ;

  $("#contacts").bind('click',function(){
    $("body").load("../View/contact.view.php");
      //alert('ça marche') ;
  }) ;


  $("#calendrier").bind('click',function(){
    $("").load();
      //alert('ça marche') ;
  }) ;

  $("#notes").bind('click',function(){
    $("").load();
      //alert('ça marche') ;
  }) ;

  $("#paramètres").bind('click',function(){
    $("").load();
      //alert('ça marche') ;
  }) ;




});
