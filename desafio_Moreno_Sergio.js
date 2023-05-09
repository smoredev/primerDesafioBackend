class ProductManager {
    #products
    #error
    constructor() {
        this.#products = []
        this.#error = undefined
    }

    getProducts = () => this.#products

    getProductsById = (id) => {
        const prod = this.#products.find(item => item.id === id)
        if (!prod) return 'Not Found'
        return prod
    }

    #generateId = () => (this.#products.length === 0) ? 1 : this.#products[this.#products.length-1].id + 1

    #validateProduct = (title, description, code, price, stock, thumbnail) => {
        if (!title || !description || !code || !price || !stock || !thumbnail) {
            this.#error = `[${title}]: campos incompletos`
        } else {
            const found = this.#products.find(item => item.code === code)
            if (found) this.#error = `[${title}]: el code ya existe`
            else this.#error = undefined
        }
    }

    addProduct = (title, description, code, price, stock, thumbnail) => {
        this.#validateProduct(title, description, code, price, stock, thumbnail)
        if (this.#error === undefined) 
            this.#products.push({id: this.#generateId(), title: title, description: description, code, price, stock: stock, thumbnail})
        else 
            console.log(this.#error)
    }
}

const productManager = new ProductManager()
productManager.addProduct('Teclado', 'Gamer mecanico', '10001', '$500', 5000, 'https://www.integradosargentinos.com/teclado-gamer-inalambrico-redragon-deimos-k599-krs-qwerty-outemu-red-lineal-ingles-uk-color-negro-con-luz-rgb/p/MLA19150796')
productManager.addProduct('10001', 80000)  //error!! Faltan  datos
productManager.addProduct('Microprocesador', 'Intel 12va gen', '10002', '$200', 80000, 'https://www.venex.com.ar/products_images/1609357869_bx80701101005.jpg')
productManager.addProduct('Mouse', 'Genius', '10001', '$200', 80000)  //error!! Codigo repetido
console.log(productManager.getProducts())
console.log(productManager.getProductsById(2))
console.log(productManager.getProductsById(1))
console.log(productManager.getProductsById(9))