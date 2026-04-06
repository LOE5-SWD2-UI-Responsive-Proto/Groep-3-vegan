<?php
include "header.php";
?>

    <main>

        <h1>
            Werk bij ons!
        </h1>
        <form action="vacature.php" method="post">


            <p> Voornaam:</p> <br>
            <input type="text"> <br> <br>
            <p>Achternaam: </p><br>
            <input type="text"> <br> <br>
            <p> E-mail:</p> <br>
            <input type="text"> <br> <br>
            <p> Telefoonnummer:</p> <br>
            <input type="text"> <br> <br>
            Woonplaats
            <input type="text">
            <p></p> <br>
            <br>
            <div class="verzenden">
                <input class="input1" type="submit" value="Verzenden"> <br>
            </div>
        </form>
    </main>
     <?php
   include "footer.php"
   
   ?>

</body>

</html>