// STRETCH
const cars = [
    {
    vin: "JH4DA3350JS000592",
    make: "toyota",
    model: "prius",
    mileage: 90000,
    title: "clean",
    transmission: 'manual'
},
    {
    vin: "WDCGG8HB0AF462890",
    make: "toyota",
    model: "corola",
    mileage: 10,
    title: "salvage"
},
    {
    vin: "JM1FE173540138012",
    make: "ford",
    model: "focus",
    mileage: 300000,
},
]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}