import {useEffect, useState} from 'react'
const slides = [
  {id:1, title:'New Drop: Street Tees', subtitle:'Limited edition collection', img:'https://via.placeholder.com/1200x500?text=Zahnaz+1'},
  {id:2, title:'Comfort First', subtitle:'Soft cotton tees', img:'https://via.placeholder.com/1200x500?text=Zahnaz+2'},
  {id:3, title:'Bold & Minimal', subtitle:'Signature designs', img:'https://via.placeholder.com/1200x500?text=Zahnaz+3'},
]
export default function Hero(){
  const [i,setI]=useState(0)
  useEffect(()=> {
    const t = setInterval(()=> setI(p=> (p+1)%slides.length), 3000)
    return ()=> clearInterval(t)
  },[])
  return (
    <div className="relative">
      <div className="h-64 sm:h-80 md:h-96 overflow-hidden">
        {slides.map((s,idx)=> (
          <div key={s.id} className={`absolute inset-0 transition-opacity duration-700 ${idx===i ? 'opacity-100' : 'opacity-0'}`}>
            <img src={s.img} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30 flex items-center">
              <div className="container text-white">
                <h2 className="text-3xl md:text-5xl font-bold">{s.title}</h2>
                <p className="mt-2 text-gray-200">{s.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
