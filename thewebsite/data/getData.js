const url = "https://fakestoreapi.com/products";
let dataRender = document.querySelector(".render");

async function welcomeUsers (){
    let res = await fetch(`${url}`);
    return res.json();
}

welcomeUsers().then(res => {
   res.forEach(element => {
      console.log(element);
      dataRender.innerHTML += 
      `
      <div class="col-lg-4 col-sm-4 col-xl-3">
         <div class="box_main">
            <h4 class="shirt_text">${element.title}</h4>
            <p class="price_text">Price  <span style="color: #262626;">${element.price}</span></p>
            <div class="tshirt_img"><img src="${element.image}"></div>
            <div class="btn_main">
               <div class="buy_bt"><a href="#">Buy Now</a></div>
               <div class="seemore_bt"><a href="#">See More</a></div>
            </div>
         </div>
      </div>
      `
   });
})

// welcomeUsers().then(res = () => {
//     card += `
//     <div class="col-lg-4 col-sm-4">
//     <div class="box_main">
//        <h4 class="shirt_text">Man T -shirt</h4>
//        <p class="price_text">Price  <span style="color: #262626;">$ 30</span></p>
//        <div class="tshirt_img"><img src="images/tshirt-img.png"></div>
//        <div class="btn_main">
//           <div class="buy_bt"><a href="#">Buy Now</a></div>
//           <div class="seemore_bt"><a href="#">See More</a></div>
//        </div>
//     </div>
//  </div>
//     `
// });

// dataRender.innerHTML = card;