<?php
    $id = $_POST["idNum"];
    $bool = $_POST["bool"];
    echo $id;
    echo $bool;
    $text = file_get_contents("loremIpsum.txt");
    $file = fopen("loremIpsum.txt","w");
    
    
    if ($bool == 'true') {
        $text = str_replace("finished".$id.":false","finished".$id.":true",$text);
    }
    else if ($bool == 'false') {
        $text = str_replace("finished".$id.":true","finished".$id.":false",$text);
    }
    
    echo $text;
    fwrite($file,$text);
    fclose($file);
?>