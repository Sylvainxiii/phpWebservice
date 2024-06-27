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
        <div class="mb-3">
            <label for="nom" class="form-label">Nom</label>
            <input type="text" class="form-control" id="nom">
        </div>
        <div class="mb-3">
            <label for="brandId" class="form-label">ID Marque</label>
            <input type="text" class="form-control" id="brandId">
        </div>
        <div class="mb-3">
            <label for="categoryId" class="form-label">ID Categorie</label>
            <input type="text" class="form-control" id="categoryId">
        </div>
        <div class="mb-3">
            <label for="price" class="form-label">Prix</label>
            <input type="text" class="form-control" id="price">
        </div>
        <div class="mb-3">
            <label for="year" class="form-label">Année</label>
            <input type="text" class="form-control" id="year">
        </div>
        <button type="submit" class="btn btn-primary" id="getIdBtn">Afficher le produit</button>
        <button type="submit" class="btn btn-success" id="addIdBtn">Ajouter un produit</button>
        <button type="submit" class="btn btn-warning" id="editIdBtn">Editer un produit</button>
        <button type="submit" class="btn btn-danger" id="deleteIdBtn">Supprimer le produit</button>
    </form>
    <table id="listTable">
        <tbody id="listTbody">

        </tbody>
    </table>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
<script src="hifi.js"></script>

</html>