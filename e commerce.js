let buying = true,
    total = 0,
    discount = 0

const productArray = []

class NewProduct{
    constructor(id, name, price, stock){
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}

const AirMax = new NewProduct(1, 'Air MAx', 500, 12) 
productArray.push(AirMax)
const SC = new NewProduct(2, 'SC', 250, 10)
productArray.push(SC)
const Jordan = new NewProduct(3, 'Jordan', 1000, 20)
productArray.push(Jordan)
const OffWhitte = new NewProduct(4, 'Off Whitte', 2050, 5)
productArray.push(OffWhitte)

const getDiscount = total => {
    if (total > 3000){
        discount = total * 0.25
        total = total - discount
    }else if (total <= 2000 && total > 1000){
        discount = total * 0.12
        total = total - discount
    }else{
        discount = total * 0.1
        total = total - discount
    }
    return total
}

const addToCart = product => {
    total = total + productArray[product-1].price
}

while (buying) {
    let products = parseInt(
        prompt(
            "¿Qué modelo zapatillas desea agregar al carrito: 1. Air Max($500), 2. SC($200), 3. Jordan($1000), 4. Off Whitte($2050)?"
            )
        )
    addToCart(products)
    let keepBuying = 
    prompt(
        "¿Desea seguir comprando? si/no:"
        )
    while (keepBuying !== "no" && keepBuying !== "si") {
        keepBuying = 
        prompt(
            "Responda: si/no"
            )
    }
    if (keepBuying === "no") {
        buying = false
        total = getDiscount(total)
    }
}

alert(`El total de su compra es de: $${total}. Ahorrado: $${discount}`)
