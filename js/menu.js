$(document).ready(function(){
    $("#menuNav").hide();
    $("body div #menu").bind('click',function(){
        $("#menuNav").toggle("hidden");


    });

    $(".hoverDiv #messagerie ").bind('click',function(){
        $("body").load("../View/mailbox.view.php");
    });

    $(".hoverDiv #contacts ").bind('click',function(){
        $("body").load("../View/contact.view.php");
    });

    $(".hoverDiv #calendrier ").bind('click',function(){
        $("body").load("../View/calendrier.view.php");
    });

    $(".hoverDiv #notes ").bind('click',function(){
        $("body").load("");
    });

    $(".hoverDiv #parametres").bind('click',function(){
        $("body").load("");
    });

    $(".hoverDiv #deconnexion").bind('click',function(){
        $("body").load("");
    });

});
