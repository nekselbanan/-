export async function getAllCars(){
    const responce = await fetch('http://localhost:8080/api/car', {
        method: 'GET'
    });
    const result = await responce.json();
    console.log(result);
    
    return result;
}

export async function getOneCar(id){
    const responce = await fetch('http://localhost:8080/api/car/' + id, {
        method: 'GET'
    });
    const result = await responce.json();
    console.log(result);
    
    return result;
}

export async function addCar(car){
    await fetch('http://localhost:8080/api/car', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: car.name,
            description: car.description,
            price: car.price,
            img: car.img
        })
    });
}

export async function updateCar(car){
    await fetch('http://localhost:8080/api/car', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            id: car.id,
            name: car.name,
            description: car.description,
            price: car.price,
            img: car.img
        })
    });
}

export async function deleteCar(id){
    await fetch('http://localhost:8080/api/car/' + id, {
        method: 'DELETE'
    });
}