// STRETCH
const cars = [
    {
    vin: "11111111111111111",
    make: "toyota",
    model: "prius",
    mileage: 90000,
    title: "clean",
    transmission: 'manual'
},
    {
    vin: "11111111111111111",
    make: "toyota",
    model: "corola",
    mileage: 10,
    title: "salvage"
},
    {
    vin: "11111111111111111",
    make: "ford",
    model: "focus",
    mileage: 300000,
},
]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}