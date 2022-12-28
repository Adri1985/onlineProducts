let socket = io()

console.log('entra al index.js')



// Recibir Mensahes
socket.on('logs', data => {
    const divLog = document.getElementById('products')
    let products = ''

    console.log("data en index.js", data)

    data.forEach(product => {
        products += `<p>ID: ${product.id}</p> <p> TITLE: ${product.title}</p> <p> PRICE: ${product.price} <hr>`
    });

    divLog.innerHTML = products
})