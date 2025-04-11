fetch('data/rent.json')
.then(response=>response.json())
.then(data =>{
    const table = document.querySelector("#rTable tbody");

    data.rent_type.forEach(item=>{

        const row = document.createElement("tr");

        row.innerHTML=`
        <td>${item.type}</td>
        <td>${item.max}</td>
        <td>${item.rHalf}</td>
        <td>${item.rFull}</td>
        <td>${item.wHalf}</td>
        <td>${item.wFull}</td>
        
        `;
        table.appendChild(row);
        
    })


})

    .catch(error => console.error('Can not read the Json file'));