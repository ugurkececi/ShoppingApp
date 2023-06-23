var products = [
    {
        imgSrc: 'img/a1.webp',
      alt: 'Ürün',
      title: 'Nike Force2',
      description: 'Ürünümüz Tamamen Orjinaldir',
      price: '$10'
    },
    {
      imgSrc: 'img/a2.webp',
      alt: 'Ürün 2',
      title: 'Nike Blazer',
      description: 'Ürün 2 Açıklaması',
      price: '$20'
    },
    {
        imgSrc: 'img/a3.webp',
        alt: 'Ürün',
        title: 'Nike Tloe',
        description: 'Ürünümüz Tamamen Orjinaldir',
        price: '$10'
      },
      {
        imgSrc: 'img/a4.webp',
        alt: 'Ürün 2',
        title: 'Nike Sloe',
        description: 'Ürün 2 Açıklaması',
        price: '$20'
      },

      {
        imgSrc: 'img/a5.webp',
        alt: 'Ürün',
        title: 'Nike ',
        description: 'Ürünümüz Tamamen Orjinaldir',
        price: '$10'
      },
      {
        imgSrc: 'img/a6.webp',
        alt: 'Ürün 2',
        title: 'Nike Ks',
        description: 'Ürün 2 Açıklaması',
        price: '$20'
      },
  

  ];


  var parentElement = document.getElementById('parent');


  for (var i = 0; i < products.length; i++) {

    var product = products[i];
    var divElement = document.createElement('div');
    divElement.className = 'product2';

    var imgElement = document.createElement('img');
    imgElement.src = product.imgSrc;
    imgElement.alt = product.alt;
    divElement.appendChild(imgElement);

    var h2Element = document.createElement('h2');
    h2Element.textContent = product.title;
    divElement.appendChild(h2Element);

    var p1Element = document.createElement('p');
    p1Element.textContent = product.description;
    divElement.appendChild(p1Element);


    var p2Element = document.createElement('p');
    p2Element.textContent = 'Fiyat: ' + product.price;
    divElement.appendChild(p2Element);

    var aElement=document.createElement('a');
    aElement.className='button'
    aElement.textContent='Sepete Ekle';
    aElement.href='#a1';
    divElement.appendChild(aElement);
    
    parentElement.appendChild(divElement);
  }