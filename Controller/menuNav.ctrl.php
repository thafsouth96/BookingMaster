<?php
    $menu = array(
    'messagerie'  => array('image'=>'../design/icon/icon_email.png' ,  'text'=>'Messagerie',  'url'=>'../View/mailbox.view.php'),
    'contacts'  => array('image'=>'../design/icon/contact-book.png',  'text'=>'Mes Contacts',  'url'=>'../View/contact.view.php'),
    'calendrier' => array('image'=>'../design/icon/datepicker.png',  'text'=>'Mon Calendrier', 'url'=>'../View/calendrier.view.php'),
    'notes' => array('image'=>'../design/icon/note.png',  'text'=>'Mes Notes', 'url'=>''),
    'parametres' => array('image'=>'../design/icon/settings.png',  'text'=>'Paramètres', 'url'=>''),
    'deconnexion' => array('image'=>'../design/icon/logout.png',  'text'=>'Deconnexion', 'url'=>''),
    );

    function generateMenu($items) {
      $html = "<nav>\n";
      foreach($items as $item) {
        $html .= "<div><a href='{$item['url']}'><img src={$item['image']}></a> <a href='{$item['url']}'>{$item['text']}</a></div>\n";
      }
      $html .= "</nav>\n";
      return $html;
    }

    $htmlNav = generateMenu($menu);



    // Charge la vue
    include("../View/menuNav.view.php");
?>
