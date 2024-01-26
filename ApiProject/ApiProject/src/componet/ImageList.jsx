import ImageItem from "./ImageItem";
function ImageList({ımagesPlaceHolder}) {
    return ( 
    <div className="ImageList">
        {ımagesPlaceHolder.map((Images,index)=>{
          return  <ImageItem key={index} Images1={Images}/>
        })}
    </div> );    
}

export default ImageList;