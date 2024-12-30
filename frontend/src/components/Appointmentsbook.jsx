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
    <div>Appointmentsbook</div>
  )
}

export default Appointmentsbook