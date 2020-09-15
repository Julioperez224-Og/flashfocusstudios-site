$(document).ready(function () {
    
let photos = document.getElementById("photos");
let street = document.getElementById("street");
let wildlife = document.getElementById("wildlife");
let portraits = document.getElementById("portraits");
let landscape = document.getElementById("landscape");
let allImages = document.getElementById("allImages");
let body = document.getElementsByTagName("body");
let burger = document.getElementById("burger");
let img = document.getElementsByTagName("img");
let header = document.getElementById("header");

// document.addEventListener("contextmenu", function(e){
//     e.preventDefault();
// }, false);

// burger toggle


let streetPhotography = [
    {   "name": "Vendor",
        "url":"images/gallery/streetphotography/vendor.jpg",
        "stars": 2
    },
    {
        "name":"congress",
        "url": "images/gallery/streetphotography/congress.jpg",
        "stars": 3
    },
    {
        "name":"Safe Travels",
        "url": "images/gallery/streetphotography/safeTravels.jpg",
        "stars": 3
    },
    {
        "name":"The Bike Path",
        "url": "images/gallery/streetphotography/theBikePath.jpg",
        "stars": 4
    },
    {
        "name":"Yu",
        "url": "images/gallery/streetphotography/yu.jpg",
        "stars": 3
    },
    {
        "name":"Coffee Blues",
        "url": "images/gallery/streetphotography/coffeeBlues.jpg",
        "stars": 3
    }
]

let portraitPhotography = [
    {   "name": "Alis1",
        "url":"images/gallery/portraitPhotography/alis1.jpg",
        "stars": 3
    },
    {
        "name":"Ali Head Shot",
        "url": "images/gallery/portraitPhotography/aluHeadShot.jpg",
        "stars": 3
    },
    {
        "name":"Lawrence Headshot",
        "url": "images/gallery/portraitPhotography/lawrenceHeadShot.jpg",
        "stars": 3
    },
    {
        "name":"Allison SunFlower 1",
        "url": "images/gallery/portraitPhotography/alysunflower1.jpg",
        "stars": 4
    },
    {
        "name":"Allison SunFlower 2",
        "url": "images/gallery/portraitPhotography/alysunflower2.jpg",
        "stars": 3
    },
    {
        "name":"Sio Portrait",
        "url": "images/gallery/portraitPhotography/sioBeauty.jpg",
        "stars": 3
    },
    {
        "name":"Jen Portraits",
        "url": "images/gallery/portraitPhotography/jenPort.jpg",
        "stars": 3
    },
    {
        "name":"Lawrence",
        "url": "images/gallery/portraitPhotography/lawBW.jpg",
        "stars": 3
    },
    {
        "name":"Jen Portraits",
        "url": "images/gallery/portraitPhotography/horse.jpg",
        "stars": 3
    }
]


let landscapePhotography = [
    {   "name": "Colonial Park",
        "url":"images/gallery/landscapePhotography/colonialparkcompo.jpg",
        "stars": 3
    },
    {   "name": "Colonial Park",
        "url":"images/gallery/landscapePhotography/bayonneBridge.jpg",
        "stars": 3
    },
    {   "name": "Colonial Park",
        "url":"images/gallery/landscapePhotography/nycScape.jpg",
        "stars": 3
    },
    {   "name": "Colonial Park",
        "url":"images/gallery/landscapePhotography/mtTammany.jpg",
        "stars": 3
    },
    {   "name": "Colonial Park",
        "url":"images/gallery/landscapePhotography/sunset.jpg",
        "stars": 3
    },
    {   "name": "Colonial Park",
        "url":"images/gallery/landscapePhotography/falls.jpg",
        "stars": 3
    },
]

let wildlifePhotography = [
    {   "name": "Catbird",
        "url":"images/gallery/wildlifePhotography/catbird.jpg",
        "stars": 3
    },
    {   "name": "Catbird",
        "url":"images/gallery/wildlifePhotography/easternBlueBird1.jpg",
        "stars": 3
    },
    {   "name": "Catbird",
    "url":"images/gallery/wildlifePhotography/geese.jpg",
    "stars": 3
    },
    {   "name": "Catbird",
        "url":"images/gallery/wildlifePhotography/heron.jpg",
        "stars": 3
    },
    {   "name": "Catbird",
        "url":"images/gallery/wildlifePhotography/oriole1.jpg",
        "stars": 3
    }, 
    {   "name": "Catbird",
        "url":"images/gallery/wildlifePhotography/redtailhawk.jpg",
        "stars": 3
    },
    {   "name": "Catbird",
        "url":"images/gallery/wildlifePhotography/sterling.jpg",
        "stars": 3
    },
    {   "name": "Catbird",
        "url":"images/gallery/wildlifePhotography/turtles.jpg",
        "stars": 3
    },
    {   "name": "Catbird",
        "url":"images/gallery/wildlifePhotography/woodpecker1.jpg",
        "stars": 3
    },
]

$("#wildlife").on("click", function(){
    removeImages(photos);
    setImages(wildlifePhotography);
    // allImages.addClass("underLine");
});
$("#landscape").on("click", function(){
    removeImages(photos);
    setImages(landscapePhotography);
   
});

$("#allImages").on("click", function(){
    removeImages(photos);
    setImages(streetPhotography);
    setImages(portraitPhotography);
    setImages(landscapePhotography);
    setImages(wildlifePhotography);
});

$("#street").on("click", function(){
    removeImages(photos);
    setImages(streetPhotography);
});

$("#portraits").on("click", function(){
    removeImages(photos);
    setImages(portraitPhotography);
});

// header toggle function

$('#burger').click(function(e){
    $('header').toggleClass('hide');
    e.preventDefault();
});


const setImages = (photography) => {
    for(let i = 0; i < photography.length; i++){
        let image = document.createElement("img");
        let aTag = document.createElement("a");
        image.src = photography[i].url;
        image.className += "img";
        aTag.href = "/blank";
        photos.appendChild(aTag);
        aTag.appendChild(image);
    }
}

const removeImages = (photos) => {
    while(photos.firstChild){
        photos.removeChild(photos.firstChild);
    }
}

setImages(streetPhotography);
setImages(portraitPhotography);
setImages(landscapePhotography);
setImages(wildlifePhotography);


// document.querySelectorAll('.img').forEach(item => {
//     item.addEventListener('click', event => {
//         //handle click
//         item.classList.add("imgLarge");
//     }
// )});
      




});

