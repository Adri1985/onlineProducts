let socket = io()

console.log('entra al index.js')

// Recibir Mensahes
socket.on('logs', data => {
    const divLog = document.getElementById('products')
    let products = ''

    data.forEach(product => {
        products += `<p><i>${product.id}</i>: ${product.title}</p>`
    });

    divLog.innerHTML = messages
})