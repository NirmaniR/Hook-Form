import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Fetching() {
    const[posts,setPosts] = useState([])

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])
    return(
        <div>
            <ul>
                {   posts.map(post => (
                    <li key={post.id} >{post.title}</li>
                
                ))
                }   
            </ul>

        </div>
    )
}

export default Fetching

