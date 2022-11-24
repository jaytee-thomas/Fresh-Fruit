//Declare global container constant to represent <div> container
const container = document.getElementById('app');

//Define Fruit Object type with required properties
class Fruit {
    id: number;
    name: string;
    unit: string;
    price: number;
    image: any;

    constructor(id:number, name: string, unit: string, price: number, image: any) {
        this.id = id;
        this.name = name;
        this.unit = unit;
        this.price = price;
        this.image = image;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getUnit() {
        return this.unit;
    }

    getPrice() {
        return this.price;
    }

    getImage() {
        return this.image;
    }

    setId(id: number) {
        this.id = id;
    }   

    setName(name: string) {
        this.name = name;
    }

    setUnit(unit: string) {
        this.unit = unit;
    }

    setPrice(price: number) {
        this.price = price;
    }

    setImage(image: any) {
        this.image = image;
    }
  
}

//Fetch data from server using getFruits() method
async function getFruits() {
    const response = await fetch('http://localhost:3000/fruits');
    const data = await response.json();
    return data;
    
}

//Inside transform() method, iterate the json data and transform each fruit to transformedFruit object that mirrors Fruit type 
function transform(data: any) {
    let transformedFruit: Fruit[] = [];
    for (let fruit of data) {
        transformedFruit.push(new Fruit(fruit.id, fruit.name, fruit.unit, fruit.price, fruit.image));
    }
    return transformedFruit;
}

//Inside showFruit() method, display each transformedFruit as card by creating HTML code and appending it to the div container
/*function showFruit(fruit: Fruit) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="card-image">
            <img width=100px height=100px src="${fruit.getImage()}" alt="${fruit.getName()}">
        </div>
        <div class="card-content">
            <h3 class="card-title">${fruit.getName()}</h3>
            <p class="card-text">${fruit.getUnit()}</p>
            <p class="card-text">${fruit.getPrice()}</p>
        </div>
    `;
    container.appendChild(card);
}*/

 const showFruit = (transformedFruit: Fruit): void => {
  let output: string = `
              <div class="card" id="fruit-card">
                  <img  width=100px height=100px src=${transformedFruit.image} alt=${transformedFruit.name} />
                  <div class="card-body">
                     <h5 class="card-title">${transformedFruit.name}</h5>
                     <h6 class="card-subtitle mb-2 text-muted">Price:$${transformedFruit.price}</h5>
                  </div>
                </div>
          `;
  container.innerHTML += output;
}; 

//Call getFruits() method globally
getFruits().then(data => {
    let transformedFruit = transform(data);
    for (let fruit of transformedFruit) {
        showFruit(fruit);
    }

}
);




