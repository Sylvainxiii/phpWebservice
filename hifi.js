let docBody = document.getElementById('body');
let getIdBtn = document.getElementById('getIdBtn');
let listTable = document.getElementById('listTable');
let listTbody = document.getElementById('listTbody');

function getProducts() {
    listTbody.innerHTML = "";

    let inputId = document.getElementById('id').value;
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



document.onload = getProducts();

getIdBtn.addEventListener("click", function (event) {
    event.preventDefault();
    getProducts();
})

