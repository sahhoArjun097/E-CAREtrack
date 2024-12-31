import { useState } from "react"


const Appointmentsbook = () => {
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [nic,setNic] = useState("")
    const [dob,setDob]= useState("")
    const [appointment,setAppointment] = useState("")
    const [gender,setGender]= useState("") 
    return (
    <div className="flex flex-col bg-gradient-to-b h-screen  to-blue-100 via-purple-50 from-pink-100 md:flex-row items-center px-6 md:px-12">Appointmentsbook</div>
  )
}

export default Appointmentsbook