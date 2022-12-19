const nameGenerator = () =>{
    let number = Math.floor(Math.random()*8)
    const players = ["Messi", "Cristiano Ronaldo", "Mbappe", "Harry Kane", "Salah", "Modric", "Neymar", "Clebão"]
    return players[number]
}

const qualityGenerator = () =>{
    let number = Math.floor(Math.random()*8)
    const players = ["jack of all trades", "fenomenal player", "genius", "invencible player", "misereble player", "weak player", "lazy player", "m***** f*****"]
    return players[number]
}

const forecastGenerator = () =>{
    let number = Math.floor(Math.random()*8)
    const players = ["beat the clock", "have a breakout", "be poised", "step up his game", "make impressive games", "not be able to maintain the same level", "have challenges he'll not going to overcome", "not be able to handle the increased level of competition"]
    return players[number]
}

const finalMessage = () =>{
    return nameGenerator() + " is a(n) " + qualityGenerator() + " who will " + forecastGenerator() + " in the next season!"
} 

console.log(finalMessage())