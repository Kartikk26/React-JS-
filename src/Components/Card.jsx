import React from 'react';

function Card() {


    const data = [
        {
            image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: "Learning React",
            description: "Learning React with dedication and consistency for mastery in web development.",
            Instock : true
        },
        {
            image: 'https://images.unsplash.com/photo-1548081087-a8a3bc4ff088?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: "Textures",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ab amet nostrum.",
            Instock : false
        },
        {
            image: 'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: "Nathia",
            description: "Nadhia doing what she enjoys most - laughing.",
            Instock : true
        }
    ]
    return (
        <div className='w-full h-screen bg-zinc-200 flex items-center justify-center gap-10'>
           {data.map((value,index) => (
             <div key={index}  className=' w-52 bg-zinc-100 rounded-md overflow-hidden' >
             <div className='w-full h-32 bg-zinc-300' >
                 <img className='w-full h-full object-cover' src={value.image} alt="" />
             </div>
             <div className='w-full px-3 py-4' >
                 <h2 className='font-semibold'>{value.name}</h2>
                 <p className='text-xs mt-5' >{value.description}</p>
                 <button className= {`px-4 py-1 ${ value.Instock ? 'bg-blue-600' : 'bg-red-600' } text-xs text-zinc-100 rounded mt-3 `} >
                    { value.Instock ? "In stock" :  "Out of stock" }
                 </button>
             </div>
         </div>
           ))}
        </div>
    )
}

export default Card;
