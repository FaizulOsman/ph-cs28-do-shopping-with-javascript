const cartArray = []

// Function for Count and Create added products list
function display() {
    const tableBody = document.getElementById('table-body')
    let totalPrice = 0

    // Clear the table body 
    tableBody.innerHTML = ''


    for (let i = 0; i < cartArray.length; i++) {
        const productName = cartArray[i].productName
        const productPrice = cartArray[i].productPrice

        // Count Total added products
        const totalAddedProducts = document.getElementById('total-added-products')
        totalAddedProducts.innerText = i + 1

        // Total Price Count
        totalPrice += productPrice

        // Create Cart list and append in tableBody
        const tr = document.createElement('tr')
        tr.innerHTML = `
            <th>${i + 1}</th>
            <td>${productName}</td>
            <td>${productPrice}</td>
        `
        tableBody.appendChild(tr)
    }

    // Create Total Price Area and append in tableBody
    const trTotal = document.createElement('tr')
    trTotal.innerHTML = `
        <th></th>
        <td>Total</td>
        <td>${totalPrice}</td>
    `
    tableBody.appendChild(trTotal)
}


// Function for clicking BUY NOW button
function addToCart(element) {
    const productName = element.parentNode.parentNode.children[0].innerText
    const productPrice = parseFloat(element.parentNode.parentNode.children[1].children[0].innerText)

    // Create products object
    const productObj = {
        productName: productName,
        productPrice: productPrice
    }
    cartArray.push(productObj)

    // Call display function for count and create added products list
    display()
}