import Axios from 'axios';

const Searchİmage= async (sub)=>{
    const response=await Axios.get('https://api.unsplash.com/search/photos',{
        headers : {
            Authorization:'Client-ID F4eNA0xdTicET6J1ETTrY5QolEv-UtHfOff5_U4LDrI',
        },
        params:{
            query:sub,
        }
    })
    return response.data.results;
}
export default Searchİmage;