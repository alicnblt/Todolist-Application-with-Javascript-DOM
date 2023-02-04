var items = ['item 1', 'item 2', 'item 3', 'item 4'];

var list = document.querySelector('#myList'); //ul elemanı

items.forEach(function(item){

    var li = document.createElement('li');  //li tagı oluşturuldu.
    var t = document.createTextNode(item);  //text elemanı oluşturuldu.

    li.className='list-group-item';  //li tagının class bilgisi
    li.appendChild(t);  //Önceden oluşturduğumuz text elemanını li tagının içine ekledik.

    list.appendChild(li); //listemize li elemanını ekledik.

    var span = document.createElement('span'); //span elementi oluşturuldu.
    var text = document.createTextNode('\u00D7'); // x işaretinin ascii değeri
    span.className= 'close'; // span elementine class bilgisi eklendi.
    span.appendChild(text); 
    li.appendChild(span);

});

// click olayının tanımlanması
list.addEventListener('click', function(item){

    if(item.target.tagName='li'){  //tıklanılan li elementiyse
        item.target.classList.toggle('checked'); // daha önceden li elemntinde check varsa siler yoksa ekler (toggle olayını bunu sağlar)
        
    }

});
