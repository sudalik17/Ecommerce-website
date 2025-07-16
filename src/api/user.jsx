import axios from "axios"
export const UserAuth = async (name,email,password)=>{
   const url = 'https://api.escuelajs.co/api/v1/users/';
   try{
   const data = await axios.post(url,{
    name:name,
    email:email,
    password:password,
    avatar: "https://picsum.photos/800" ,
    role: "customer"
   })
   return data;
}
catch (err) {
  console.log("❌ Error status:", err.response?.status);
  console.log("📄 Error data:", JSON.stringify(err.response?.data, null, 2));
  return err.response?.data || err.message;
}
}