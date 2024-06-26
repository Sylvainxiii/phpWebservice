<?php
//Se connecter à la base de données
include("db_connect.php");
$request_method = $_SERVER["REQUEST_METHOD"];

function getProduct($pdo, $id = 0)
{
    $sql = "SELECT * FROM products";
    if ($id != 0) {
        $sql .= " WHERE product_id=" . $id;
    }
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    header("Content-Type: application/json");
    echo json_encode($result, JSON_PRETTY_PRINT);
}

function deleteProduct($pdo, $id = 0)
{
    $sql = "DELETE FROM products WHERE product_id=" . $id;
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    return true;
}

switch ($request_method) {
    case 'GET':
        $id = intval($_GET["id"]);
        getProduct($pdo, $id);
        break;
    case 'DELETE':
        $id = intval($_GET["id"]);
        deleteProduct($pdo, $id);
        break;
}
