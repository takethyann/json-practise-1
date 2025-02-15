document.addEventListener("DOMContentLoaded",function() {
    fetch("data/product.json")
    .then(response => response.json())
    .then(products => {
        const tableBody = document.getElementById("productTable");
        
        products.forEach(product => {
            const row = document.createElement("tr");
            row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.description}</td>`;

            tableBody.appendChild(row);
        });
    })
    .catch(error => console.error('エラー:', error));
});