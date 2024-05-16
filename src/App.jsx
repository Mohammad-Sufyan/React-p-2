// import { useState, useEffect, useRef } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Navbar from './componenets/Navbar'

// function App() {
//   const [count, setCount] = useState(0)
  
//   const [showbtn, setshowbtn] = useState(false)
//   const [todos, setTodos] = useState([
//     {
//       title:"hey todo 1",
//       desc: "i am good1",
//     },
//     {
//       title:"hey todo 2",
//       desc: "i am good2",
//     },
//     // {
//     //   title:"hey todo 3"
//     //   desc: "i am good3",
//     // },
//   ])
//   // const a = useRef(0)
//   // // const [color, setColor] = useState(0)
//   // // const [first, setFirst] = useState(0)

  
//   // useEffect(() => {
//   //   a.current = a.current + 1
//   //   console.log("rerendering and value of a is ${a.current}..")
//   // });
//   // const btnRef =useRef()

//   // useEffect(() => {
//   //     console.log("rerendering ")
//   //     btnRef.current.style.backgroundColor = "blue"

//   //      });


//   // const Todo=({todo})=>{
//   //   return (
//   //     <>
//   //     <div className="m-7 border border-1 border-purple-400">
//   //       <div className='todo'>{todo.title}</div>
//   //       <div className='todo'>{todo.desc}</div>
//   //     </div>
//   //     </>
//   //   )
//   // }


//   return (
//     <>
//     {/* <Navbar color={" navy + red" + color}/> */}
    

//       <div>

//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>

//       {showbtn? <button>show btn is true </button> : <button>show btn is false </button> }
//     {/* {showbtn && <button>show btn is true </button>} */}
// {todos.map(todo=>{
//   // return <Todo key={todo.title} todo={todo}/>
//   return <div key={todo.title} className="m-7 border border-1 border-purple-400">
//         <div className='todo'>{todo.title}</div>
//         <div className='todo'>{todo.desc}</div>
//       </div>
     
// })}
// <div className="card">
//   <button onClick={()=>setshowbtn(!showbtn)}>toggle btn</button>
// </div>

//       <div className="card">
//         {/* <button ref ={btnRef} onClick={() => setCount((count) => count + 1)}> */}
//         {/* <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button> */}
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//       {/* <button onClick={()=>{btnRef.current.style.backgroundColor="yellow"}}>change me</button> */}
//     </>
//   )
// }

// export default App




// import { useState, useRef } from 'react';

// export default function VideoPlayer() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const ref = useRef(null);

//   function handleClick() {
//     const nextIsPlaying = !isPlaying;
//     setIsPlaying(nextIsPlaying);

//     if (nextIsPlaying) {
//       ref.current.play();
//     } else {
//       ref.current.pause();
//     }
//   }

//   return (
//     <>
//       <button onClick={handleClick}>
//         {isPlaying ? 'Pause' : 'Play'}
//       </button>
//       <video
//         width="500"
//         ref={ref}
//         onPlay={() => setIsPlaying(true)}
//         onPause={() => setIsPlaying(false)}
//       >
//         <source
//           src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//           type="video/mp4"
//         />
//       </video>
//     </>
//   );
// }


// import { useState, useRef } from 'react';

// export default function VideoPlaying() {
//   const [isPlaying, setIsPlaying] =useState(false)
//   const ref =useRef(null)
  
//   function handleClick(){
//     const nextIsPlaying = !isPlaying
//     setIsPlaying(nextIsPlaying)
  

//   if (nextIsPlaying) {
//     ref.current.play()
//   } else {
//     ref.current.pause()
//   }
// }
//   return (
//     <>
//   <button onClick={handleClick}>
//     {isPlaying ? 'Pause':'Play'}
//   </button>
//   <video
//         width="500"
//         ref={ref}
//         onPlay={() => setIsPlaying(true)}
//         onPause={() => setIsPlaying(false)}
//       >
//         <source
//           src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//           type="video/mp4"
//         />
//       </video>
//     </>
//   );
// }


// event handling

import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setName] = useState("sufyan")
  // const [form, setForm] = useState({email:"", phone:""})
  const [form, setForm] = useState({})


  const handleClick = ()=>{
    alert ("hey i am handleclick")
  }
  const mouseHover = ()=>{
    alert ("hey i am mouseHover")
  }
  const handlechange = (e)=>{
    // setName(e.target.value)
    setForm({...form, [e.target.name]:e.target.value})
    console.log(form)

  }

    return(
      <>
      <div className="button">
        <button onClick={handleClick}>
      click me
        </button>
      </div>
      <div className="violet" onMouseOver={mouseHover}>
        ok
      </div>
      {/* <input type="text" value={name} onChange={handlechange} /> */}

      {/* <input type="text" name='email' value={form.email} onChange={handlechange} />
      <input type="text" name='phone' value={form.phone} onChange={handlechange} /> */}


      <input type="text" name='email' value={form.email?form.email:""} onChange={handlechange} />
      <input type="text" name='phone' value={form.phone?form.phone:""} onChange={handlechange} />
      </>
    )
}

export default App