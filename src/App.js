// import React, {useState, useEffect} from 'react'
// import ImageCard from './components/ImageCard'
// import ImageSearch from './components/ImageSerach'

// const App = ()=>{

//     const [images, setImages] = useState([])
//     const [isLoading, setIsLoading] = useState(true)
//     const [term, setTerm] = useState('')

//     useEffect(()=>{
//         fetch(`https://pixabay.com/api/?key=20139365-8604d003e71feba235bb75894&q=${term}&image_type=photo&pretty=true`)
//         .then(res => res.json())
//         .then(data => {
//             setImages(data.hits)
//             setIsLoading(false)
//         })
//         .catch(err => console.log(err))
//     },[term])
//     return(
//        <div className='container mx-auto'>
//            <ImageSearch searchText={(text)=> setTerm(text)} />
 
//            {!isLoading && images.length ===0 && <h1 className='text-5xl text-center mx-auto'>No Image Found</h1> }

//            {isLoading ? <h1 className='text-6xl text-center mx-auto'>Loading...</h1>: <div className='grid grid-cols-3 gap-4'>
//              {images.map((image)=>(
//                  <ImageCard key={image.id} image={image} />
//              ))}
//            </div>}

           
//        </div>
//     )
// }
//  export default App









import React, {useState, useEffect} from 'react'
import ImageCard from './components/ImageCard'
import ImageSearch from './components/ImageSerach'

const App = ()=>{

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [term, setTerm] = useState('')

    useEffect(()=>{
        fetch(`https://pixabay.com/api/?key=20139365-8604d003e71feba235bb75894&q=${term}&image_type=photo&pretty=true`)
        .then(res => res.json())
        .then(data => {
            setImages(data.hits)
            setIsLoading(false)
        })
        .catch(err => console.log(err))
    },[term])
    return(
       <div className='container mx-auto'>
           <ImageSearch setTerm={setTerm} />
 
           {!isLoading && images.length ===0 && <h1 className='text-5xl text-center mx-auto'>No Image Found</h1> }

           {isLoading ? <h1 className='text-6xl text-center mx-auto'>Loading...</h1>: <div className='grid grid-cols-3 gap-4'>
             {images.map((image)=>(
                 <ImageCard key={image.id} image={image} />
             ))}
           </div>}

           
       </div>
    )
}
 export default App