$(document).ready(function(){
  $("#menuNav").hide();

  $("#menu").bind('click',function(){
    $("#menuNav").toggle("hidden ");
      //alert('ça marche') ;
  }) ;

  $("#messagerieMenu").bind('click',function(){

    //alert("ça marche") ;
    $("#tableauBord").load("../Controller/mailbox-recu.ctrl.php");

  }) ;

  $("#contactsMenu").bind('click',function(){
    //$("body").load("../View/contact.view.php");
      alert('Sorry, we are working on it ;)') ;
  }) ;


  $("#calendrierMenu").bind('click',function(){
    //$("").load();
      alert('Sorry, we are working on it ;)') ;
  }) ;

  $("#notesMenu").bind('click',function(){
    //$("").load();
      alert('Sorry, we are working on it ;)') ;
  }) ;

  $("#paramètresMenu").bind('click',function(){
      alert('Sorry, we are working on it ;)') ;
  }) ;




});
