let docBody = document.getElementById('body');

function getProducts(){
    fetch('http://localhost/phpWebservice/produits',{method:'GET'})
    .then(response => response.json())
    .then(data => {
        let table = document.createElement('table');
        let tbody = document.createElement('tbody');
        
        for (let $i = 0; $i < data.length; $i = $i + 1) {
            
            //Récupération des données de L'api
            id = data[$i]['product_id'];
            nom = data[$i]['product_name'];
            annee = data[$i]['model_year'];
            prix = data[$i]['list_price'];
            colonneTable=[nom, annee, prix];
            
            let ligne = document.createElement('tr');
            ligne.id = id;
            for ($y=0; $y<colonneTable.length; $y = $y + 1){

            let cellule = document.createElement('td');
            cellule.innerHTML = colonneTable[$y];
            ligne.appendChild(cellule);
            }
            tbody.appendChild(ligne);
            }
            
            table.appendChild(tbody);
            docBody.appendChild(table);
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