const fruits = require("./fruits.json");

class Fruit {
    constructor(fruit) {
        this.genus = fruit.genus;
        this.name = fruit.name;
        this.id = fruit.id;
        this.family = fruit.family;
        this.order = fruit.order;
        this.nutritions = fruit.nutritions;
    }

    static showAll() {
        return fruits.map(q => new Fruit(q));
    }

    static show(name) {
        const fruit = fruits.find(f => f.name.toLowerCase() == name)

        if (fruit) {
            return new Fruit(fruit)
        } else {
            throw new Error ("The fruit does not exist")
        }
    }

    static create(data) {
        const newFruit = data
        const fruit = fruits.find(f => f.name.toLowerCase() == data.name.toLowerCase())

        if (fruit){
            throw new Error("The fruit already exists")
        } else{
            newFruit['id'] = fruits.length + 1
            fruits.push(newFruit)

            return new Fruit(newFruit)
        }
    }

    update(data) {
        const updatedFruit = fruits.find(f => f.name.toLowerCase() === this.name.toLowerCase())

        if(updatedFruit) {
            updatedFruit.name = data.name
            updatedFruit.family = data.family
            return new Fruit(updatedFruit)
        } else{
            throw new Error("The fruit doesn't exist")
        }
    }

    static destroy(name){
        const deletedFruit = fruits.find(f => f.name.toLowerCase() == name)

        if (deletedFruit) {
            const index = fruits.indexOf(deletedFruit)
            return fruits.splice(index, 1)
        } else {
            throw new Error ("The fruit does not exist")
        }
    }
}

module.exports = Fruit;