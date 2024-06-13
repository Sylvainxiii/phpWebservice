let docBody = document.getElementById('body');

function getProducts(){
    fetch('http://localhost/phpWebservice/produits?')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let table = document.createElement('table');
        let tbody = document.createElement('tbody');
        
        for (let $i = 0; $i < data.length; $i = $i + 1) {
            
            //Récupération des données de L'api
            nom = data[$i]['product_name'];
            annee = data[$i]['model_year'];
            prix = data[$i]['list_price'];
            
            let ligne = document.createElement('tr');
            let cellule1 = document.createElement('td');
            cellule1.innerHTML = nom;
            ligne.appendChild(cellule1);
            let cellule2 = document.createElement('td');
            cellule2.innerHTML = annee;
            ligne.appendChild(cellule2);
            let cellule3 = document.createElement('td');
            cellule3.innerHTML = prix;
            ligne.appendChild(cellule3);
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