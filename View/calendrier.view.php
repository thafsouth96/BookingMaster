<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="Design/calendrier.css" media="screen" charset="utf-8">
    <script type="text/javascript" src="../Controller/calendrier.ctrl.js"></script>
    <title>bookMaster</title>
  </head>

<body onLoad="Defaults()">

    <link rel="stylesheet" href="Design/calendrier.css" media="screen" charset="utf-8">
<form name="when">
<tr>
   <td><input type="button" value="<-- Last" onClick="Skip('-')"></td>
   <td> </td>
   <td><select name="month" onChange="On_Month()">

<script language="JavaScript1.2">
if (ie4||ns6){
   for (j=0;j<Month_Label.length;j++) {
      document.writeln('<option value=' + j + '>' + Month_Label[j]);
   }
}
</script>

       </select>
   </td>
   <td><input type="text" name="year" size=4 maxlength=4 onKeyPress="return Check_Nums()" onKeyUp="On_Year()"></td>
   <td> </td>
   <td><input type="button" value="Next -->" onClick="Skip('+')"></td>
</tr></form>
<div id=Calendar style="position:relative;width:238px;top:-2px;" align="left"></div>
</body>
</html>
