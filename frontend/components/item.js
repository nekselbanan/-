export function createItem(name, price, description, img){
    let item = document.createElement('div');
    let image = document.createElement('img');
    let divBody = document.createElement('div');
    let h5 = document.createElement('h5');
    let pDescription = document.createElement('p');
    let pPrice = document.createElement('p');
    let btnGroup = document.createElement('div');
    let btnDetail = document.createElement('button');
    let btnDelete = document.createElement('button');

//---------------------------------------------------------------------------------------------------------------------------------------

    item.classList.add('card', 'm-3');
    item.style.width = '18rem';
    item.style.float = 'left';

    image.classList.add('card-img-top');
    image.src = img;
    image.style.marginTop = "10px"

    divBody.classList.add('card-body');

    h5.classList.add('card-title');
    h5.innerText = name;

    pDescription.classList.add('card-text');
    pDescription.innerText = description;

    pPrice.innerText = price;

    btnGroup.classList.add('btn-group', 'float-end');

    btnDetail.classList.add('btn', 'btn-primary');
    btnDetail.textContent = 'Подробнее';

    btnDelete.classList.add('btn', 'btn-danger');
    btnDelete.textContent = 'Удалить';
    
//--------------------------------------------------------------------------------------------------------------------------------------

    btnGroup.append(btnDetail, btnDelete);
    divBody.append(h5, pDescription, pPrice, btnGroup);
    item.append(image, divBody);

//--------------------------------------------------------------------------------------------------------------------------------------

    return { item, btnDetail, btnDelete };
}