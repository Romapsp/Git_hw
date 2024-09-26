

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
const myPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses']

const pizzaResult = []

let allIncludedFlag = true

for (const pizza of myPizzas) {
    if (!competitorPizzas.includes(pizza)) {
        pizzaResult.push(pizza)
        allIncludedFlag = false
    }
}

if (allIncludedFlag) {
    console.log(null)
} else {
    console.log(pizzaResult)
}
