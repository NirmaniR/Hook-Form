import React,{useState} from 'react'

function HookForm(){
    const[user,setUser]=useState([])
    const[inputData,setInputData]=useState( )
    const addUser=(e)=>{
        e.preventDefault();
        setUser([...user,{firstName:inputData.firstName,lastName:inputData.lastName,faculty:inputData.faculty,gender:inputData.gender}]) }
    //     <input type="radio" id="female" name="gender" value={inputData.gender}
    //    onChange={(e) =>{console.log(e.target.id);setInputData({...inputData, gender: e.target.id})}} />
    return(
        <div>
            <form align="center" >
                <h2>User Details</h2>
                Enter your First Name :
                <input type='text' value={inputData.firstName} onChange={e => setInputData({...inputData,firstName : e.target.value})}/><br/>
                Enter your Last Name :
                <input type='text' value={inputData.lastName} onChange={e => setInputData({...inputData,lastName : e.target.value})}/><br/>
                Enter your Faculty :
                <select name="category" value={inputData.faculty} onChange={e => setInputData({...inputData,faculty : e.target.value})}><br/>
                    <option value="">Faculty.......</option>
                    <option value="IT">IT</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Business">Business</option>
                    <option value="Architecture">Architecture</option>
                </select>
                <p>
                    <div>
                        Gender :
                        <input type="radio" id="male" name="gender" value={inputData.gender} onChange={e => setInputData({...inputData,gender : e.target.id})}/>
                        <label for="male">Male</label>
                        <input type="radio" id="female" name="gender" value={inputData.gender} onChange={e => setInputData({...inputData,gender : e.target.id})}/>
                        <label for="female">Female</label><br/>
                    </div>
                </p> 
                <button onClick={(e) => {addUser(e)}}>Add</button>
                </form>
            
            <p></p>
            <table border="6" align="center">
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Faculty</th>
                    <th>Gender</th>
                </tr>
                    {
                        user.map(Oneuser => (
                        <tr>
                            <td>{Oneuser.firstName}</td>
                            <td>{Oneuser.lastName}</td>
                            <td>{Oneuser.faculty}</td>
                            <td>{Oneuser.gender}</td>
                        </tr>
                        ))
                    } 
               <p></p>
            </table>
            <h4>Your First Name is = { inputData.firstName}</h4>
            <p><h4>Your Last Name is = { inputData.lastName}</h4></p> 
            <p><h4>Your Faculty Name is = { inputData.faculty}</h4></p>
            <p><h4> Gender  =  { inputData.gender}</h4></p> 


        </div>
    )
}


export default HookForm