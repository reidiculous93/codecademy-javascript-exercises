let kelvin = 293; // kelvin temp
let celsius = kelvin - 273; //kelvin to celsius conversion
let fahrenheit = (celsius * 9/5) + 32; //c to f conversion
fahrenheit = Math.floor(fahrenheit); //round down temp

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)