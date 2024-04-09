import { useEffect, useState } from "react"
import Page from "./pages/Page"
import MoonLoader from 'react-spinners/MoonLoader'



function App() {
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState('#ed6802');
  

  useEffect(() =>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, []);

  return (
    <>
      {
        loading ? (
        <div className="flex justify-center items-center w-full h-screen">
          <MoonLoader color={color} loading={loading} />
        </div>)
         : <Page/>
      }
    </>
  )
}

export default App
