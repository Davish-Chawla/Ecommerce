import axios from "axios"
import { useEffect, useState } from "react"

export default function Dashboard(){
    const [user, setUser] = useState()
    const [loading, setloading] = useState(true)
    useEffect(()=>{
        axios.get("http://localhost:7000/api/users/profile", {
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })
        .then(response=>{
            setUser(response.data.user)
            setloading(false)
        })
    }, [])

    if(loading){
        return <div>Loading....</div>
    }
    return(
        <div>
            Name: {user.name}
            Email: {user.email}
        </div>
    )
}