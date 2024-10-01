<?php
    $file = fopen("loremIpsum.txt","a");
    $subject = $_POST["subject"];
    $content = $_POST["content"];

    $subject = str_replace("," ,  "‚"  , $subject);
    $content = str_replace("," ,  "‚"  , $content);
    $subject = str_replace(":" ,  "։"  , $subject);
    $content = str_replace(":" ,  "։"  , $content);
    $subject = str_replace(";" ,  ";"  , $subject);
    $content = str_replace(";" ,  ";"  , $content);

    $text = file_get_contents("loremIpsum.txt");
    $id = substr_count($text,"subject:");

    fwrite($file,"subject:".$subject.",");
    fwrite($file,"content:".$content.",");
    fwrite($file,"finished".$id.":false;");
    fclose($file);

    header("Location: request.test");
?>