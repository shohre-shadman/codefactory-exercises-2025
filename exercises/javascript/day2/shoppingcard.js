let applePricePerKg = 2.99
let bananaPricePerKg = 1.89
let orangePricePerKg = 3.49
document.write(`<p>apple price: $${applePricePerKg} per kg</p>`)
document.write(`<p>banana price: $${bananaPricePerKg} per kg</p>`)
document.write(`<p>orange price: $${orangePricePerKg} per kg</p>`)



function purchase() {
    let applequantity = Number(prompt(`how many kg apple do you want to buy?`))
    let bananaquantity = Number(prompt(`how many kg banana do you want to buy?`))
    let orangequantity = Number(prompt(`how many kg orange do you want to buy?`))


    let appleSum = applePricePerKg * applequantity;
    document.body.append(`<p>apple total price: ${appleSum}</p>`)

    let bananaSum = bananaPricePerKg * bananaquantity;
    document.body.append(`<p>banana total price: ${bananaSum}</p>`)

    let orangesum = orangePricePerKg * orangequantity;
    document.body.append(`<p>orange total price: ${orangesum}</p>`)

}

// console.log(`I'm ${firstname} ${lastname} ,${age} years old`)
