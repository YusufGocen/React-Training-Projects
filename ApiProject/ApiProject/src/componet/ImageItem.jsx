function ImageItem({Images1}) {
    console.log(Images1);
    return ( 
        <div>
            <img className="ImageListImg" src={Images1.urls.small} alt="" />
        </div>
    );
}

export default ImageItem;