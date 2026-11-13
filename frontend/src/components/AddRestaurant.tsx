import { useState } from "react"
import { useAppData } from "../context/AppContext";
import toast from "react-hot-toast";
import axios from "axios";
import { restaurantService } from "../main";


const AddRestaurant = () => {
  const [name,setName]=useState("");
  const [description,setDescription]=useState("");
  const [phone,setPhone]=useState("");
  const [image,setImage]=useState<File| null>(null);
  const [submitting,setSubmitting]=useState(false);

  const {loadingLocation , location}=useAppData()

  const handleSubmit=async()=>{
    if(!name || !image || !location){
      alert("All Fields Are Required");
      return ;
    }

    const formData= new FormData()
    formData.append("name",name);
    formData.append("description",description);
    formData.append("latitude",String(location.latitude));
    formData.append("longitude",String(location.longitude));
    formData.append("formattedAddress",location.formattedAddress);
    formData.append("file",image);
    formData.append("phone",phone);

     try{
       setSubmitting(true)
       await axios.post(`${restaurantService}/api/restaurant/new`,formData,{
        headers:{
          Authorization:`Bearer ${localStorage.getItem("token")}`,
        },
       });

       toast.success("Restaurant added successfully");

     }catch(error:any){
      toast.error(error.response.data.message)
     }
     finally{
      setSubmitting(false);
     }

  };


  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6">
      <div className="mx-auto max-w-lg rounded-xl bg-white p-6 shadow-sm space-y-5">
        <h1 className="text-xl font-semibold">Add your Restaurant</h1>
        
        <input type="text" placeholder="Restaurant name" value={name} onChange={e=>setName(e.target.value)} className="w-full rounded-lg border px-4 py-2 text-sm outline-none" />
        
        <input type="number" placeholder="Contact Number" value={phone} onChange={e=>setPhone(e.target.value)} className="w-full rounded-lg border px-4 py-2 text-sm outline-none" />

      </div>

    </div>
  )
}

export default AddRestaurant