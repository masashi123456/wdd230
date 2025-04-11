fetch('table.json')
.then(response=>response.json())
.then(data =>{
    const table = document.querySelectorAll("#rTable tbody");

    data.rentType.forEach(item=>{

        const row = document.createElement("tr");

        row.innerHTML=`
        <td>${item.type}</td>
        <td>${item.max}</td>
        <td>${item.rHalf}</td>
        <td>${item.rFull}</td>
        <td>${item.wHalf}</td>
        <td>${item.rFull}</td>
        
        `;
        table.appendChild(row);
        
    })


})

    .catch(error => console.error('Can not read the Json file'));