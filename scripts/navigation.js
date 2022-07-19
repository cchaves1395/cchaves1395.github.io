var navigationContainer = document.getElementById("navigationContainer");
var mobileToggle = document.getElementById("mobileMenu");

const navigationItems = [
    {name:"Solicitudes", url:"/Solicitud.html"},
];

var loadNavigation = ()=>{
    var navigationHtml = "";
    navigationItems.map((item)=>{
        navigationHtml += `<li><a href="${item.url}">${item.name}</a>`
    });
    navigationContainer.insertAdjacentHTML('beforeend', navigationHtml);
}

loadNavigation();





//Functions and loadings

mobileToggle.addEventListener("click", ()=>{
   
    navigationContainer.classList.toggle("active");
});

