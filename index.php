<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>Hifi API</title>
</head>

<?php

?>

<body id="body">
    <h1>Test de webservice PHP</h1>
    <form id="getId">
        <div class="mb-3">
            <label for="id" class="form-label">ID Produit</label>
            <input type="text" class="form-control" id="id">
        </div>
        <button type="submit" class="btn btn-primary" id="getIdBtn">Afficher le produit</button>
    </form>
    <table id="listTable">
        <tbody id="listTbody">

        </tbody>
    </table>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
<script src="hifi.js"></script>

</html>