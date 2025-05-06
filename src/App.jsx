import Input from './Components/Inputs';
import Header from './Components/Header';
import MemeDisplay from './Components/MemeDisplay';
import { useEffect, useState } from 'react'



function App() {

  const [setdata, setSetdata] = useState({
    top: '',
    bottom: '',
    img: "./c67c9a69-50ac-4b52-8f3f-de0a4cd34aa8.jpeg"
  })
  const [starWars, setStarWars] = useState([])

  const callFunction = (event) => {
    const { name, value } = event.target
    setSetdata(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const radomPick = () => {
    const randomNumber = Math.floor(Math.random() * starWars.length)
    const newAdd = starWars[randomNumber].url
    setSetdata(prevmeme => ({
      ...prevmeme, img: newAdd
    }))
  }

  useEffect(
    () => {
      fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        // .then(data => console.log(data.data.memes))
        .then(data => setStarWars(data.data.memes))

    }, []
  )



  return (
    <>
      <Header />
      <div className="inside">
        <Input call={callFunction} caller={radomPick} />
        <MemeDisplay top={setdata.top} image={setdata.img} bottom={setdata.bottom} />
      </div>

    </>
  )
}

export default App
