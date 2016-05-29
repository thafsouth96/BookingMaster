<?php
    $menu = array(
    'messagerie'  => array('image'=>'../data/icon/icon_email.png' ,  'text'=>'Messagerie'/*,  'url'=>'../View/mailbox.view.php'*/),
  'contacts'  => array('image'=>'../data/icon/contact-book.png',  'text'=>'Mes Contacts'/*,  'url'=>'../View/contact.view.php'*/),
'calendrier' => array('image'=>'../data/icon/datepicker.png',  'text'=>'Mon Calendrier'/*, 'url'=>'../View/calendrier.view.php'*/),
    'notes' => array('image'=>'../data/icon/note.png',  'text'=>'Mes Notes'/*, 'url'=>''*/),
  'parametres' => array('image'=>'../data/icon/settings.png',  'text'=>'Paramètres'/*, 'url'=>''*/),
'deconnexion' => array('image'=>'../data/icon/logout.png',  'text'=>'Deconnexion'/*, 'url'=>''*/)
    );

    function generateMenu($items) {
      $html = "<nav>\n";
      foreach($items as $item) {
        $html .= "<div id={$item['text']}><img src={$item['image']}>{$item['text']}</div>\n";
      }
      $html .= "</nav>\n";
      return $html;
    }

    $htmlNav = generateMenu($menu);



    // Charge la vue
    include("../View/menuNav.view.php");
?>
