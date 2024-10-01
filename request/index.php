<html>
    <head>
        <title>forem ipsum</title>
        <style>
            body {text-align: center; background-color: rgb(153, 0, 153); color: white;}
            input {margin-top: 10px;}
            textarea {margin-top: 10px; max-width: 800px; max-height: 300px;
            min-width: 100px; min-height: 70px; border:4px solid rgb(204, 0, 204);}
            
            input:invalid + span::after {   
                content: "✖";  
            }
            input:valid + span::after {   
                content: "✓";
            }
            h1 {
                 
            }
            #fajl {
                font-size: large; width:500px;border:4px solid rgb(204, 0, 204);
                position: absolute; margin-left:29vw; text-align:left; min-height: 50px;
                max-height: 250px; overflow-y: auto; overflow-x: hidden; background-color: rgb(255, 51, 255);
            }
            

        </style>
    </head>
    <body>
        <h1>Föreslå ett nytt system</h1>
        <form action='formHandler.php' method='POST'>
            <input type="text" name="subject" maxlength="50" placeholder="ämne" required/> <span></span> <br/>
            <textarea name="content" rows="8" cols="50" maxlength="500" placeholder="förslag" required></textarea>
            <br/> <input type="submit" name="submit"/>
        </form>
        <div id='fajl'></div>
        

        <script src='script.js'></script>
    </body>
</html>