
//grabbing the data via fetch and then waiting for the response
fetch('./products.json').then(res => res.json().then( data => {
	//variable to hold all of our products with HTML
	let records= ''


	//looping over the products to include all HTML needed to show on site

	data.forEach(element => {
		let str =  `<div class="pro">
		<img src=${element.img} alt="tote bag" />
		<div class="des">
		  <span>${element.productName}</span>
		  <h5>
				${element.description}
		  </h5>

		  <h4>${element.price}</h4>
		</div>
		<a href="#"><i class="fal fa-shopping-cart cart"></i></a>
	  </div>`

		records += str
	});

	document.getElementById("pro-container").innerHTML = records

})).catch(err => {
	console.log(err)
})