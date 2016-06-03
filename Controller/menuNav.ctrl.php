<?php
    include_once('../Model/DAO.class.php');


    if(!isset($_SESSION)){
      session_start() ;
    }


  include_once('../Model/Booker.class.php');
  //var_dump($_SESSION);
  //$booker = $dao->getBooker($SESSION['id']);
  $nom = $_SESSION['booker']->nom() ;
  $prenom = $_SESSION['booker']->prenomB() ;

    $menu = array(
    'messagerie'  => array('image'=>'../data/icon/MenuNav_icon/messagerie.png' ,  'text'=>'Messagerie',  'url'=>''),
    'contacts'  => array('image'=>'../data/icon/MenuNav_icon/contact.png',  'text'=>'Mes Contacts',  'url'=>''),
    'calendrier' => array('image'=>'../data/icon/MenuNav_icon/calendrier.png',  'text'=>'Mon Calendrier', 'url'=>''),
    'notes' => array('image'=>'../data/icon/MenuNav_icon/note.png',  'text'=>'Mes Notes', 'url'=>''),
    'parametres' => array('image'=>'../data/icon/MenuNav_icon/parametres.png',  'text'=>'Paramètres', 'url'=>''),
    'deconnexion' => array('image'=>'../data/icon/MenuNav_icon/logout.png',  'text'=>'Deconnexion', 'url'=>''),
    );

    function generateMenu($items) {
      global $nom ;
      global $prenom ;
      $html =  "<nav id= \"content_menuNav\">\n";
      $html .= "<div class = \"profil\">
                  <a class= \"profilMenu\"href=''><img src=\"../data/icon/MenuNav_icon/profil.png\"></a>\n
                  <a href=''><p class =\"profilMenu\">".$prenom.' '.$nom."</p></a>\n
                </div>\n
              <div id=\"content_rows\">\n";
/*href='{$item['url']}'*/
      foreach($items as $key => $item) {
        $html .= "<div class = \"hoverDiv\" id=".$key."Menu"."><a class = \"iconMenuNav\"><img src={$item['image']}></a> <a href='{$item['url']}'>{$item['text']}</a></div>\n";
      }
      $html .= "</div>\n";
      $html .= "</nav>\n";
      return $html;
    }

    $htmlNav = generateMenu($menu);



    // Charge la vue
    include("../View/menuNav.view.php");
?>
