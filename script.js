var items = ['Learn Software', 'Swim', 'Reading Books', 'Eat Breakfast'];

var list = document.querySelector('#myList'); //ul elemanı

items.forEach(function(item){

    CreateItem(item);

});


// click olayının tanımlanması
list.addEventListener('click', function(item){


    if(item.target.tagName=='LI'){  //tıklanılan li elementiyse
        item.target.classList.toggle('checked'); // daha önceden li elemntinde check varsa siler yoksa ekler (toggle olayını bunu sağlar)
        ToogleDeleteButton();
    }

});


//Delete All butonuna click özelliği atama
document.querySelector('#deleteAll').onclick = function(){
    var elements = document.querySelectorAll('.checked');

    elements.forEach(function(item){

        item.style.display='none';

    });
}

function ToogleDeleteButton(){

    var checkList= document.querySelectorAll('.checked') //sayfadaki checked leri saymak için

    if(checkList.length>0){   // Eğer 0'dan farklı seçim yaptıysak Delete All butonu görünür olsun.
        document.querySelector('deleteAll').classList.remove('d-none'); 
    } else{
        document.querySelector('deleteAll').classList.add('d-none');
    }
}

//butonun id bilgisinin onclick olayına fonksiyon tanımlama
document.querySelector('#btnAdd').onclick=function(){

// input kutusuna kullanıcının girdiği değeri görmek için
    var item = document.querySelector('#txtItem').value;

    if(item===''){
        alert('Lütfen bir değer giriniz.'); //input alanı eğer boş ise alert ile uyarı verme
        return;
    }

    CreateItem(item);

};

function CreateItem(item){
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

    span.onclick = function(){   // span elementine onclick özelliği atandı.
        var li = this.parentElement;
        li.style.display='none';
        li.classList.remove('checked'); // eğer li silindiyse checked class özelliğide silinsin.
    }
}