import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('grey')

  const data =[
    { "id": 1, "color": "#1e3a8a", "name": "Dark Blue" },
    { "id": 2, "color": "#6b21a8", "name": "Dark Purple" },
    { "id": 3, "color": "#4c1d95", "name": "Deep Purple" },
    { "id": 4, "color": "#d97706", "name": "Goldenrod" },
    { "id": 5, "color": "#0369a1", "name": "Darker Light Blue" },
    { "id": 6, "color": "#15803d", "name": "Dark Green" },
    { "id": 7, "color": "#c2410c", "name": "Dark Orange" },
    { "id": 8, "color": "#5f3d2e", "name": "Dark Brown" },
    { "id": 9, "color": "#9333ea", "name": "Vivid Purple" },
    { "id": 10, "color": "#0ea5e9", "name": "Light Blue" },
    { "id": 11, "color": "#7c3aed", "name": "Medium Purple" },
    { "id": 12, "color": "#eab308", "name": "Dark Yellow" },
    { "id": 13, "color": "#db2777", "name": "Dark Pink" },
    { "id": 14, "color": "#0284c7", "name": "Sky Blue" },
    { "id": 15, "color": "#0f766e", "name": "Teal" }
  ]
  
  
  
  
  return (
    <>
      <div className='w-100 h-screen relative flex items-center'  style={{backgroundColor:color}}>
        <div className='absolute   right-[100px] bg-white p-5 rounded-3xl flex flex-col gap-2' >
          {
            data?.map((item) => <button onClick={() => setColor(item.color)} style={{backgroundColor:item.color}} key={item.id} className='text-white  text-stork px-5 py-2 rounded-3xl hover:opacity-70 transition-all '>{item?.name}</button>)
          }
         
         
        </div>
      </div>
    </>
  )
}

export default App
