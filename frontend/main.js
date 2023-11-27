import { createItem } from "./components/item.js";
import { getAllCars, getOneCar, addCar, deleteCar, updateCar } from "./requests/car.requests.js";
import { modalCreate } from "../modalCar.js";

(function(){
    class Car{
        constructor(name, description, price, img){
            this.name = name;
            this.description = description;
            this.price = price;
            this.img = img;
        }
    }

    let list = document.getElementById('car-list');
    async function elementsGenerator(){
        const cars = await getAllCars();
        for (let car of cars){
            let listItem = createItem(car.name, car.price, car.description, car.img);
            listItem.btnDetail.addEventListener('click', function(){
                let newCar = new Car();
                newCar = modalCreate(car);
                updateCar(newCar);
                
            });
            listItem.btnDelete.addEventListener('click', function(){
                if(confirm("Вы уверены, что хотите удалить данный обЪект?")){
                    deleteCar(car.id);
                    listItem.item.remove();
                }
            })
            list.append(listItem.item);
        }
    }

    document.addEventListener('DOMContentLoaded', function(e){
        e.preventDefault();
        elementsGenerator();

        let form = document.getElementById('add-element-form');
        form.addEventListener('submit', function(){
            let carName = document.getElementById('carName');
            let carDescription = document.getElementById('carDescription');
            let carPrice = document.getElementById('carPrice');
            let carImg = document.getElementById('carImg');
    
            let car = new Car(carName.value, carDescription.value, carPrice.value, carImg.value);
            addCar(car);
    
            let listItem = createItem(carName.value, carDescription.value, carPrice.value, carImg.value);
            list.append(listItem.item);            
        });
    });
})();