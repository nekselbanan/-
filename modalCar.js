export function modalCreate(car){
    var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
    myModal.show();


    let h1 = document.getElementById('staticBackdropLabel');
    h1.innerText = car.name;
    let img = document.getElementById('modalImg');
    img.src = car.img;
    let description = document.getElementById('modalDescription'); 
    description.innerText = car.description;
    let price = document.getElementById('modalPrice');
    price.innerHTML = car.price;
    let modalFooter = document.getElementById('modalFooter');
    let btnRedactor = document.getElementById('modalRedactor');

    let btnSave = document.createElement('button');
    btnSave.classList.add('btn', 'btn-primary');
    btnSave.innerHTML = 'Сохранить';

    btnRedactor.addEventListener('click', function(){
        h1.contentEditable = 'true';
        img.contentEditable = 'true';
        description.contentEditable = 'true';
        price.contentEditable = 'true';

        btnRedactor.remove();
        modalFooter.append(btnSave);
    });

    btnSave.addEventListener('click', function(){
        car.name = h1.value;
        car.description = description.value;
        car.price = price.value;
        myModal.hide();
    });

    return car;
}