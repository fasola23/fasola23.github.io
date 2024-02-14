<!DOCTYPE html>
<html lang="pl">

<head>
    <title>BITWINE</title>
    <link rel="icon" href="ok.png" type="image/x-icon">
    <meta charset="UTF-8">
    <style>
        body {
            background-color: rgba(150, 65, 39, 0.63);
            background-size: cover;
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
        }

        #strona {
            width: 950px;
            margin: 0 auto;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            margin-top: 20px;
            background-color: rgba(255, 255, 255, 0.8);
        }

        #gora {
            height: 40px;
            background-image: url(wod.jpg);
            color: white;
            line-height: 40px;
            border-radius: 5px;
            margin-bottom: 20px;
            justify-content: flex-end;
            padding: 0 20px;
        }

        #gora a {
            color: white;
            text-decoration: none;
            margin: 0 20px;
            font-size: 14px;
            transition: color 0.3s ease;
        }

        #gora a:hover {
            color: #3498db;
        }

        #gorac {
            width: 100%;
            height: 40px;
            background-image: url(ol.jpg);
            color: white;
            text-align: center;
            line-height: 40px;
            border-radius: 5px;
        }

        .o,
        .i,
        .k,
        .n,
        .q {
            font-size: 10px;
            color: #555;
        }

        .q {
            word-spacing: 70px;
        }

        a {
            color: white;
            text-decoration: none;
        }

        .tekst {
            width: 60%;
            float: left;
            margin-right: 20px;
        }
        #menu {
            width:40%;
            height: 300px;
            float:left;
            background-color: #ECA4A6;
        }
       #glowny {
        width: 57%;
        height: 300px;
        float:left;
        background-color: #ECA4A6;
        padding-left: 3%;
       }
       #przyciski li {
        width: 200px;
        height: 30px;
        background-color: #F9D5D3;
        text-align: center;
        margin-top: 20px;
        padding: 20px;
        border-radius: 20px;
        list-style-type:none;
        font-weight: bold;
       }
       #kontener {
        width:90px;
        margin-left: auto;
        margin-right: auto;
       }
    </style>
</head>

<body>
    <div id="strona">
        <div id="gora">
            <span class="q">
                <span class="i"><a href="przygody.html">MENU</a></span>
                <span class="k"><a href="historia.html">Kontak</a></span>
                <span class="n"><a href="index.html">Powrót</a></span>
                <span class="o"><a href="zdjecia.html">zdjecia</a></span>
                <span class="y"><a href="kal.html">kalkulator</a></span>
                <span class="l"><a href="gry.html">gra</a></span>
            </span>
        </div>
        <div id="gorac">
                <p>Piękność </p>
        </div>
        <div class="tekst">
            <div id="kontener">
            <div id="menu">
                <ol id="przyciski">
                    <li><a href="index.html">Strona główna</a></li>
                    <li><a href="wizyty.php">Wizyty</a></li>
                </ol>
            </div>
                <div id="glowny">
                    <h2>Zapisz się na wizytę</h2>
                </div>
    </div>
    </div>
</body>
</html>