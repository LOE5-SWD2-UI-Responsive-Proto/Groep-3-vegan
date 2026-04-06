
<!DOCTYPE html>
<html lang="en" data-mode="light"> 

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="author" content="Evra">
    <meta name="description" content="Ontdek een levendige vegan eetervaring met creatieve plantaardige gerechten, verse ingrediënten en duurzame smaken voor elke liefhebber.">
    <meta name="keywords" content="vegan restaurant, plantaardig eten, vegan eten, gezond restaurant, vegan gerechten, biologisch vegan, duurzaam eten, vegetarische opties, vegan keuken, milieuvriendelijk restaurant, verse ingrediënten, plantaardig menu, vegan lunch, vegan diner">
    <title>Vegan Restaurant</title>
    <link rel="stylesheet" href="../css/style.css">
    <script src="../js/index.js" defer></script>
    <script src="../js/openingstijden.js" defer></script>
    <script src="../js/darkmode.js" defer></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,600&display=swap"
        rel="stylesheet">
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
        rel="stylesheet">
</head>
<body>
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