import axios from 'axios'
const baseurl = 'https://api.escuelajs.co/api/v1';

export const getallcategories=async ()=>{
    
        const url = `${baseurl}/categories`;
        try{
     const {data} = await axios.get(url);
     console.log(data);
     console.log("hello")
     return data;
        }
        catch(err){
            console.log(err);
        }
      
    
}