

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
const myPizzas = ['peperoni', 'Caprichosa', 'Diablo', '4 cheeses']

const pizzaResult = []

for (let i = 0; i < competitorPizzas.length; i++) {
    competitorPizzas[i] = competitorPizzas[i].toLowerCase()
}

for (let i = 0; i < myPizzas.length; i++) {
    myPizzas[i] = myPizzas[i].toLowerCase()
}

for (const pizza of myPizzas) {
    if (!competitorPizzas.includes(pizza)) {
        pizzaResult.push(pizza)
    }
}

if (pizzaResult.length === 0) {
    console.log(null)
} else {
    console.log(pizzaResult)
}