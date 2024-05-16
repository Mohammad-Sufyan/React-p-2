import React, {useEffect} from 'react'

const Navbar = ({color}) => {
    useEffect(() => {
        alert("1")
      })

    useEffect(() => {
        alert("2")
      }, [])

    useEffect(() => {
        alert("3-color ")
      }, [color])

      useEffect(() => {
        alert("my component app.jsx")
      
        return () => {
          alert("component unmount")
        }
      }, [])
      

  return (
    <div>
      
        this is{color}
      
    </div>
  )
}

export default Navbar
