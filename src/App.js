import { useEffect, useState } from "react";


function App() {
  const [container, setCotainer] = useState([])

  const fetchingData = async ()=>{
    const url = 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '700a4a81a5msha4ec0072397f2ebp1ce85fjsn8b3dd796e198',
		'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const data = await response.json();
	console.log(data.hints);
  if(data && data.hints && data.hints.length > 0){
    setCotainer(data.hints)
  }else{
    setCotainer([])
  }
} catch (error) {
	console.error(error);
}
  }
  useEffect(() => {
    fetchingData()
  }, [])
  
  return (
    <div className="App-container">

<div class="bg-dark text-secondary px-4 py-5 text-center">
    <div class="py-5">
      <h1 class="display-5 fw-bold text-white">Dark color hero</h1>
      <div class="col-lg-6 mx-auto">
        <p class="fs-5 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Custom button</button>
          <button type="button" class="btn btn-outline-light btn-lg px-4">Secondary</button>
        </div>
      </div>
    </div>
  </div>


<br/><br/><br/><br/><br/>


    {container.map((item, index) => {

      return (
        <div key={index}>

          <img src={item.food.image} />

          <p>{item.food.label}</p>

        </div>
      )

      

    })}

<div class="container">
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Features</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
    </ul>
    <p class="text-center text-body-secondary">© 2023 Company, Inc</p>
  </footer>
</div>


    </div>

  
);
}

export default App;