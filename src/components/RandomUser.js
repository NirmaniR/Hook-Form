import React,{useState,useEffect} from 'react'
import axios from 'axios'

function RandomUser() {
    const[user,setUser] = useState(null)
    
    const instance = axios.create({
        baseURL:'https://randomuser.me/api',
        headers:{
            "Content-Type":"text/html ; charset=UTF-8",
        }
    })

    useEffect(async () => {
        const config ={
            'method' : 'get',
            'url' : '/'
        };
        const res = await instance.request(config);
        console.log(res)
        setUser(res.data.results[0])
    },[]);

    async function get(){
        const config = {
            'method' : 'get',
            'url' : '/?results=5000'
        };
        const res = await instance.request(config);
        console.log(res)
        setUser(res.data.results[0])
    }
        
    return (
        <div>
            {
                user &&
                <>
                    <img src={user.picture.medium}/>
                    <h2>First name is {user.name.first}</h2>
                </>
            }
            <button onClick ={() => get()}>get 5000</button>
        </div>
     )
}
export default RandomUser