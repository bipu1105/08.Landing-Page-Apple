var image =  document.querySelector('.image');
var bar = document.querySelector('.bar');
var sideBar = document.querySelector('.side-bar');
var sideBarList = document.querySelectorAll('.side-bar ul li');

function fun(element){
  var source = element.getAttribute('data-image');
  image.src = source;
}

var j =0;

bar.addEventListener('click',function(){
    sideBar.classList.toggle('side-bar-js');

    if(j==0){
        bar.setAttribute('class','fas fa-times bar');
        j=1;
    }else{
        bar.setAttribute('class','fas fa-bars bar');
        j=0;
    }
    sideBarList.forEach(function(links){
        links.classList.toggle('sideBarList-js')
    })
})