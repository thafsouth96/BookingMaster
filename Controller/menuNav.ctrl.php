<?php
    $menu = array(

    'messagerie'  => array('image'=>'../data/icon/MenuNav_icon/messagerie.png' ,  'text'=>'Messagerie',  'url'=>'../View/mailbox.view.php'),
    'contacts'  => array('image'=>'../data/icon/MenuNav_icon/contact.png',  'text'=>'Mes Contacts',  'url'=>'../View/contact.view.php'),
    'calendrier' => array('image'=>'../data/icon/MenuNav_icon/calendrier.png',  'text'=>'Mon Calendrier', 'url'=>'../View/calendrier.view.php'),
    'notes' => array('image'=>'../data/icon/MenuNav_icon/note.png',  'text'=>'Mes Notes', 'url'=>''),
    'parametres' => array('image'=>'../data/icon/MenuNav_icon/parametres.png',  'text'=>'Paramètres', 'url'=>''),
    'deconnexion' => array('image'=>'../data/icon/MenuNav_icon/logout.png',  'text'=>'Deconnexion', 'url'=>''),
    );

    function generateMenu($items) {

      $html = "<nav id= \"content_menuNav\">\n";
      $html .= "<div class = \"profil\">
                  <a class= \"profilMenu\"href=''><img src=\"../data/icon/MenuNav_icon/profil.png\"></a>\n
                  <a href=''><p class =\"profilMenu\">Booker Nom</p></a>\n
                </div>\n

              <div id=\"content_rows\">\n";


      foreach($items as $item) {
        $html .= "<div class = \"hoverDiv\"><a class = \"iconMenuNav\"href='{$item['url']}'><img src={$item['image']}></a> <a href='{$item['url']}'>{$item['text']}</a></div>\n";
      }
      $html .= "</div>\n";
      $html .= "</nav>\n";
      return $html;
    }

    $htmlNav = generateMenu($menu);



    // Charge la vue
    include("../View/menuNav.view.php");
?>
