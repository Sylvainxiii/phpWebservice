let docBody = document.getElementById('body');
let getIdBtn = document.getElementById('getIdBtn');
let deleteIdBtn = document.getElementById('deleteIdBtn');
let listTable = document.getElementById('listTable');
let listTbody = document.getElementById('listTbody');
let champId = document.getElementById('id');

function getProducts() {
    listTbody.innerHTML = "";

    let inputId = champId.value;
    if (inputId == "") {
        inputId = 0;
    }

    let url = 'http://localhost/phpWebservice/produits?id=' + inputId;

    fetch(url, { method: 'GET' })
        .then(response => response.json())
        .then(data => {
            if (data.length == 0) {
                alert("Le produit cherché n'est pas répertorié");
                return
            }

            for (let $i = 0; $i < data.length; $i = $i + 1) {

                //Récupération des données de L'api
                id = data[$i]['product_id'];
                nom = data[$i]['product_name'];
                annee = data[$i]['model_year'];
                prix = data[$i]['list_price'];
                colonneTable = [id, nom, annee, prix];

                let ligne = document.createElement('tr');
                ligne.id = id;
                for ($y = 0; $y < colonneTable.length; $y = $y + 1) {

                    let cellule = document.createElement('td');
                    cellule.innerHTML = colonneTable[$y];
                    ligne.appendChild(cellule);
                }
                listTbody.appendChild(ligne);
            }

            return;
        })
        .catch((error) => {
            if (error) {
                alert('error');
                return;
            }
            return;
        })
}

function deleteProducts() {
    let inputId = champId.value;
    if (inputId == "") {
        alert("Veuillez renseigner un id")
    }

    let url = 'http://localhost/phpWebservice/produits?id=' + inputId;

    fetch(url, { method: 'DELETE' })
        .then(() => alert("suppression ok"))
        .catch((error) => {
            if (error) {
                alert('error');
                return;
            }
            return;
        })
}

function addProducts() {

    let nom = document.getElementById('nom').value;
    let brandId = document.getElementById('brandId').value;
    let categoryId = document.getElementById('categoryId').value;
    let price = document.getElementById('price').value;
    let year = document.getElementById('year').value;

    let url = 'http://localhost/phpWebservice/produits.php';

    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            "product_name": nom,
            "brand_id": brandId,
            "category_id": categoryId,
            "list_price": price,
            "model_year": year
        }),
        headers: {
            "Content-type": "application/json"
        }
    })
        .then(response => response.json())
        .then((data) =>
            console.log(data))
        .catch((error) => {
            if (error) {
                alert('error');
                return;
            }
            return;
        })
}

document.onload = getProducts();

getIdBtn.addEventListener("click", function (event) {
    event.preventDefault();
    getProducts();
})

deleteIdBtn.addEventListener("click", function (event) {
    event.preventDefault();
    deleteProducts();
    debugger
    champId.value = "";
    getProducts();
})

addIdBtn.addEventListener("click", function (event) {
    event.preventDefault();
    addProducts();
    getProducts();
})

