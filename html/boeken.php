<?php
include "header.php";
?>
    <main>

        <h1>
            Boek uw reservering!
        </h1>
        <form action="boeken.html" method="post">


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
    <footer>
        <div class="logoFooter">
            <img src="../logo_vegan_food_amsterdam.png" alt="logo">
        </div>

        <p>020 456 78 92</p>
        <p>veganfood@gmail.com</p>

        <hr>

        <div class="socialLogo">
            <div class="iconsFooter">
            </div>
            <p>volg ons</p>
            <img src="../facebookk.png" alt="facebook">
            <img src="../instagram-removebg-preview.png" alt="instagram">
        </div>
    </footer>

</body>

</html>