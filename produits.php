<?php
    //Se connecter à la base de données
    include("db_connect.php");
    $request_method = $_SERVER["REQUEST_METHOD"];

    function getProducts($pdo){
        $sql = "SELECT * FROM products";
        $stmt = $pdo->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        header("Content-Type: application/json");
        // $product = json_encode($response, JSON_PRETTY_PRINT);
        echo json_encode($result, JSON_PRETTY_PRINT);

        // return $product;
    }

    switch($request_method){
        case 'GET':
            if(!empty($_GET["id"])){
                //Récupérer un seul produit
                $id = intval($_GET["id"]);
                getProducts($pdo);
            }else{
                //Récupérer tous les produits
                getProducts($pdo);
            }
        break;
    }
?>