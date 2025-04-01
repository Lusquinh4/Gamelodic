<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="post">
        <label for="nome">Nome</label>
        <input id="nome" type="text" name="nome" required placeholder="Imaculada Souza">
        <br>
        <label for="idade">Idade</label>
        <input type="number" name="idade" id="idade" required placeholder="18">
        <br>
        <label for="altura">Altura</label>
        <input type="number" name="altura" id="altura" required placeholder="1.80" step="0.01">
        <br>
        <label for="peso">Peso</label>
        <input type="number" name="peso" id="peso" required placeholder="80" step="0.01">
        <br>
        <input type="submit" value="Enviar" name="enviar">
    </form>

    <?php

    if (isset($_POST['enviar'])) {
        $nome= $_POST['nome'];
        $idade = (int)$_POST['idade'];
        $altura = (float)$_POST['altura'];
        $altura = number_format($altura, 2, '.', '');
        $peso = (float)$_POST['peso'];
        $imc = $peso / $altura ** 2;
        $imc = number_format($imc, 2, '.', '');

        if ($imc < 18.5) {
            $estado = "você está <b>abaixo do peso</b>";
        } elseif ($imc >= 18.5 && $imc < 24.9) {
            $estado = "você está no <b>peso ideal</b>";
        } elseif ($imc >= 25 && $imc < 29.9) {
            $estado = "você está <b>acima do peso</b>";
        } else {
            $estado = "você está <b>obeso</b>";
        }

        if ($estado == "você está <b>obeso</b>") {
            $img = "obeso.jpeg";
        }

        echo "<br>";
        echo "<h1>Olá $nome</h1>";
    echo "De acordo com sua idade de $idade anos, e altura de $altura m: <br> Seu imc é $imc, o que significa que $estado";
    }
    echo "<br>";
    echo "<img src='$img' alt='Imagem de uma pessoa obesa' width='300px' height='300px'>";
    echo "<br>";

    ?>
</body>
</html>