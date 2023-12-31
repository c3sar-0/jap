const carCategoryUrl =
  "https://japceibal.github.io/emercado-api/cats_products/101.json";
const carsContainer = document.getElementById("cars-container");

const showProducts = () => {
  getJSONData(carCategoryUrl).then((res) => {
    if (res.status == "ok") {
      carsContainer.innerHTML += `
      <center>
        <h1>Productos</h1>
        <h3>Verás aquí todos los productos de la categoría ${res.data.catName}</h3>   
      </center>
      `;
      res.data.products.forEach((product) => {
        const html = `
        <div class="list-group-item list-group-item-action cursor-active">
          <div class="row">
            <div class="col-3">
            <img src="${product.image}" alt="car image" class="img-thumbnail">
              </div>
                <div class="col">
                  <div class="d-flex w-100 justify-content-between">
                  <div class="mb-1">
                  <small class="text-muted">${product.soldCount} vendidos</small>
                  <h4>${product.name} - ${product.cost}${product.currency}</h4>
                  <p>${product.description}</p>
                </div>
              </div>
            
            </div>
          </div>
        </div>
        `;
        carsContainer.innerHTML += html;
      });
      console.log(res.data);
    }
  });
};

showProducts();

// function showCategoriesList(array){
//   let htmlContentToAppend = "";

//   for(let i = 0; i < array.length; i++){
//       let category = array[i];
//       htmlContentToAppend +=
//       <div class="list-group-item list-group-item-action">
//           <div class="row">
//               <div class="col-3">
//                   <img src=" + category.imgSrc + " alt="product image" class="img-thumbnail">
//               </div>
//               <div class="col">
//                   <div class="d-flex w-100 justify-content-between">
//                       <div class="mb-1">
//                       <h4>+ category.name +</h4>
//                       <p> + category.description +</p>
//                       </div>
//                       <small class="text-muted"> + category.productCount +  artículos</small>
//                   </div>

//               </div>
//           </div>
//       </div>

//       document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
//   }
// }
