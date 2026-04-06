<?php
include "header.php";
?>
    <main>

        <h1>
            Boek uw reservering!
        </h1>
        <form action="boeken.php" method="post">


            <p> Voornaam:</p> <br>
            <input type="text"> <br> <br>
            <p>Achternaam: </p><br>
            <input type="text"> <br> <br>
            <p> E-mail:</p> <br>
            <input type="text"> <br> <br>
            <p> Aantal personen:</p> <br>
            <input type="text"> <br> <br>
            <p>Datum & Tijd</p> <br>

            <div class="tijdDatum">
                <input type="date" placeholder="Datum"> <br>
                <input type="time" placeholder="Tijd"> <br> <br>
            </div>
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