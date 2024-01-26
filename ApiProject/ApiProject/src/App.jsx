import './App.css'
import Search from './Search';
import Searchİmage from './Api';
import { useState } from 'react';
import ImageList from './componet/ImageList';

function App() {
    const [Images, setImages]=   useState([])
    const Submit=async (sub)=>{
        console.log(sub);
        const result= await Searchİmage(sub);
        setImages(result);
    }
    return (  
        <div className='App'>
         <Search search={Submit} />
         <ImageList ımagesPlaceHolder={Images}/>
        </div>
    );
}

export default App;
