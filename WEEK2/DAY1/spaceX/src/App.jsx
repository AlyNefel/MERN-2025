import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  //use state of search query
  const [searchTerm,setSearchTerm]=useState("")
  // count useState
  const [count,setCount]=useState(0)
// we will make a useState for our lanches
const [lanches,setLanches]=useState([])
// we will have another use state for our axios 
const [axisoLanches,setAxiosLanches]=useState([])

// how to use axios 
const dataWithAxios= async()=>{
  await axios.get('https://api.spacexdata.com/v3/launches')
  .then(response=>{
    console.log("from axios",response.data)
    // we will get the first 6 lanches 
    const fisrtSixLanches1=response.data.slice(0,6)
    const filtredLanches=response.data.filter(launch=>
      launch.mission_name.includes(searchTerm)
    )

    // update our axisoLanches
    setAxiosLanches(filtredLanches)
    setCount(filtredLanches.length)

})
}

// we will make our fetch function 

const fetchedLanches=()=>{
  fetch('https://api.spacexdata.com/v3/launches')
  .then(response=>response.json())
  .then(response=>{
    // console.log("this is the response after .json",response)
    // we want to get only the first 6 lanches 
    const fisrtSixLanches=response.slice(0,6)
    // console.log(fisrtSixLanches.length)
    // we will useState of our lanches to set the response 
    setLanches(fisrtSixLanches)
  })
}

// we want to get our data without clicking on buttons 
//1- we will import it 
useEffect(()=>{

  // we wiil declare what should be executed inside it on component onmount7
  dataWithAxios()
 
},[searchTerm])


  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between mb-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search launches..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} // Update search term
                />
            </div>
            <h3>You have  {count} result for the query {searchTerm}</h3>
      <h1>The first 6 lanches using fetch</h1>
      {/* <button className="btn btn-success" onClick={fetchedLanches}>Get Lnches with Fetch</button>
      <button className="btn btn-primary" onClick={dataWithAxios}>Get lanches with axios</button> */}
      <div className="row">
      {lanches.map((lanch,index)=>{
        return(
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
               <img src={lanch.links.mission_patch_small} className="card-img-top" />
            </div>
            <div className="card-body">
                                    <h5 className="card-title">{lanch.mission_name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">
                                        Flight Number: <span className="">{lanch.flight_number}</span>
                                    </h6>
                                    <p className="card-text"><strong>lanch Year:</strong> {lanch.launch_year}</p>
                                    <p className="card-text"><strong>Rocket Name:</strong> {lanch.rocket.rocket_name}</p>
                                    <p className="card-text" style={{ color: lanch.lanch_success ? 'green' : 'red' }}>
                                        <strong>lanch Success:</strong> {lanch.lanch_success ? 'Yes' : 'No'}
                                    </p>
                                    <a href={lanch.links.video_link} className="card-link" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
                                </div>
          </div>
        )
      })

      }
      </div>
      <h1>Data using axios </h1>
      <div className="row">
      {axisoLanches.map((lanch,index)=>{
        return(
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
               <img src={lanch.links.mission_patch_small} className="card-img-top" />
            </div>
            <div className="card-body">
                                    <h5 className="card-title">{lanch.mission_name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">
                                        Flight Number: <span className="">{lanch.flight_number}</span>
                                    </h6>
                                    <p className="card-text"><strong>lanch Year:</strong> {lanch.launch_year}</p>
                                    <p className="card-text"><strong>Rocket Name:</strong> {lanch.rocket.rocket_name}</p>
                                    <p className="card-text" style={{ color: lanch.lanch_success ? 'green' : 'red' }}>
                                        <strong>lanch Success:</strong> {lanch.lanch_success ? 'Yes' : 'No'}
                                    </p>
                                    <a href={lanch.links.video_link} className="card-link" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
                                </div>
          </div>
        )
      })

      }
      </div>

    </div>
  )
}

export default App
