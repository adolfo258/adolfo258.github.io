class Product {
    constructor(name, price, year){
        this.name = name
        this.price = price
        this.year = year
    }
}

class Ui{
    addProduct(product){
        const productList = document.getElementById('product-list')
        const element = document.createElement('div')
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product name:</strong> ${product.name}
                    <strong>Product price:</strong> ${product.price}
                    <strong>Product year:</strong> ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `
        productList.appendChild(element)
        this.showMessage('Product Added Successfully!', 'success')
    }

    resetForm(){
        document.getElementById('product-form').reset()
    }

    deleteProduct(element){
         if(element.name === 'delete'){
             element.parentElement.parentElement.parentElement.remove()
             this.showMessage('Product Deleted Successfuly!', 'danger')
         }
    }

    showMessage(message, cssClass){
        const div = document.createElement('div')
        div.className = ` alert alert-${cssClass}`
        div.appendChild(document.createTextNode(message))

        const container = document.querySelector('.container')
        const app = document.querySelector('#app')
        container.insertBefore(div, app)
        
        setTimeout(()=>{
            document.querySelector('.alert').remove()
        }, 3000)
    }
}

//DOM Events


document.getElementById('product-form').addEventListener('submit', (e)=>{
    const name = document.getElementById('name').value
    const price = document.getElementById('price').value
    const year = document.getElementById('year').value

    const product = new Product(name, price, year)
    const ui = new Ui()
    if(name === '' || price === '' || year === ''){
        ui.showMessage('Complete Fields Please!', 'info')
    }else{
        ui.addProduct(product)
        ui.resetForm()
    }

   e.preventDefault()
})


document.getElementById('product-list').addEventListener('click', (e)=>{
    const ui = new Ui()
    ui.deleteProduct(e.target)
})