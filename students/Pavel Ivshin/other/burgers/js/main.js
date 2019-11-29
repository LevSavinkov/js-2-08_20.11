let uForm = document.querySelector ('#userform')
let allPriceNode = document.querySelector ('#allPrice')
let allCaloriesNode = document.querySelector ('#allCalories')
let btn = document.querySelector ('#calculate')
btn.addEventListener ('click', createBurger)

function createBurger() {
    let burger = new Burger ('Size', 'Stuffing', 'Topping')
    burger.showResult()
}

class Burger {
    constructor (size, stuffing, topping){
        this.size = this._input(size)
        this.stuffing = this._input(stuffing)
        this.topping = this._getTopping(topping)
    }

    _input (attrName) {
        let object = document.querySelector (`input[name=${attrName}]:checked`)

        return {
            price: +object.dataset.price,
            calories: +object.dataset.calories
        }
    }

    _getTopping (attrName) {
        let toppingArray = []
        let arr = [...document.querySelectorAll (`input[name=${attrName}]:checked`)]
        arr.forEach (el => {toppingArray.push (
            {
                price: +el.dataset.price,
                calories: +el.dataset.calories
            }
            )//push
        })
        return toppingArray
    }

    _calculatePrice() {
        let allPrice = 0
        allPrice += this.size.price 
        allPrice += this.stuffing.price
        this.topping.forEach( el => allPrice += el.price)
        return allPrice
    }

    _calculateCalories() {
        let allCalories = 0
        allCalories += this.size.calories
        allCalories += this.stuffing.calories
        this.topping.forEach( el => allCalories += el.calories)
        return allCalories
    }

    showResult() {
        allPriceNode.innerHTML = this._calculatePrice()
        allCaloriesNode.innerHTML = this._calculateCalories()
    }
}