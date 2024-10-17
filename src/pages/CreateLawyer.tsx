import { useState } from "react"
import { ILawyer } from "../interfaces/lawyer.interface"
import { mockApi } from "../services/api"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export const CreateLawyer = () => {
  const navigation = useNavigate();
  const [formLawyer, setFormLawyer] = useState<ILawyer>({
    firstName: '',
    lastName: '',
    speciality: '',
    phone: '',
    location: ''
  })

  const onChangeForm = (name: string, value: string) => {
    setFormLawyer(formLawyer => ({
      ...formLawyer,
      [name]: value
    }))
  }

  const onSubmit = () => {
    mockApi.post('/users/lawyers', formLawyer).then(response => {
      console.log("response", response);
      toast.success("Se ha creado correctamente el abogado");
      navigation("/")
    })
  }

  return <div className="border bg-gray-400 flex flex-col items-center gap-2">
      <input value={formLawyer.firstName} 
        onChange={(e) => onChangeForm("firstName", e.target.value)} 
        type="text"
        placeholder="First Name"/>
      <input 
        value={formLawyer.lastName} 
        onChange={(e) => onChangeForm("lastName", e.target.value)}
        type="text" placeholder="Last Name"/>

      <input value={formLawyer.speciality} 
        onChange={(e) => onChangeForm("speciality", e.target.value)}
        type="text" placeholder="Speciality"/>
      <input value={formLawyer.phone} 
        onChange={(e) => onChangeForm("phone", e.target.value)}
        type="text" placeholder="Phone"/>
      <input 
        onChange={(e) => onChangeForm("location", e.target.value)}
        value={formLawyer.location} type="text" placeholder="Location"/>
      <button className="bg-blue-600 rounded-lg p-2 text-white" onClick={() => onSubmit()}>Create Lawyer</button>
  </div>
}