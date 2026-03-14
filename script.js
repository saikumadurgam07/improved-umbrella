const news = [

{
title:"India Launches New Satellite",
image:"images/news1.jpg",
desc:"India successfully launched a new communication satellite today.",
breaking:true
},

{
title:"Cricket World Cup Match Highlights",
image:"images/news2.jpg",
desc:"Exciting cricket world cup match ends with a thrilling victory.",
breaking:false
},

{
title:"Technology Trends in 2026",
image:"images/news3.jpg",
desc:"Experts reveal upcoming technology innovations for the next decade.",
breaking:false
},

{
title:"New Government Policies Announced",
image:"images/news4.jpg",
desc:"Government announces several new policies for economic growth.",
breaking:true
}

];


const container = document.getElementById("newsContainer");

const breakingBar = document.getElementById("breakingNews");

let breakingList = [];

news.forEach(item => {

if(item.breaking){
breakingList.push(item.title);
}

container.innerHTML += `

<div class="news-card">

<img src="${item.image}">

<div class="news-content">

<h3>${item.title}</h3>

<p>${item.desc}</p>

<button>Read More</button>

</div>

</div>

`;

});


breakingBar.innerText = breakingList.join(" | ");