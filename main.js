
// Вводится имя

let personName = prompt('Введите имя','')

// Характеристики персонажа

let person = {
    health : 100,
    money : 0,
    name : personName,
}

console.log('Ваши жизни: ' + person.health)
console.log('Ваш баланс: ' + person.money)

// Сюжет

alert(`Итак ${person.name}, сколько будет 2 + 2 х 2`)
let oneQuest = 6

let oneQuestAnswer = prompt('Ваш ответ..', '')

if (oneQuestAnswer == 6) {
    alert('Вы правы и выиграли 10 монет')
    person.money = person.money += 10
    console.log('Ваш баланс: ' + person.money)
} else {
    alert('Увы, вы ощиблись, с вашего счета списано 10 монет')
    person.money = person.money -= 10
    console.log('Ваш баланс: ' + person.money)
}

// Файтинг

alert('Кажется на вас напали')
alert('Что вы предпочтете сделать?')

function Boss(health) {
    this.health = health
}

let oneBoss = new Boss(25)
