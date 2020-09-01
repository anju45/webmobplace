// api url 
const api_url = 
	"https://api.jsonbin.io/b/5efdf1000bab551d2b6ab1c9/1"; 

// Defining async function 
async function getapi(url) { 
	
	// Storing response 
	const response = await fetch(url); 
	
	// Storing data in form of JSON 
	var data = await response.json(); 
	console.log(data); 
	if (response) { 
		hideloader(); 
	} 
	show(data); 
} 
// Calling that async function 
getapi(api_url); 

// Function to hide the loader 
function hideloader() { 
	document.getElementById('loading').style.display = 'none'; 
} 
// Function to define innerHTML for HTML table 
function show(data) { 
	let tab = 
		`<tr> 
		<th>id</th> 
		<th>price</th> 
		<th>quantity</th> 
		<th>__typename</th> 
		</tr>`; 
	
	// Loop to access all rows 
	for (let r of data.data.purchased_services.purchased_office_template.purchased_office_services.service_selected) { 
		tab += `<tr> 
	<td>${r.id} </td> 
	<td>${r.price}</td> 
	<td>${r.quantity}</td> 
	<td>${r.__typename}</td>		 
</tr>`; 
	} 
	// Setting innerHTML as tab variable 
	document.getElementById("item").innerHTML = tab; 
} 
