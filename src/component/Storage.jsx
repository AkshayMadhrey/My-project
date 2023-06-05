import React, { useState } from 'react';
import './Storage.css'
const Storage = () => {

   const [name, setName] = useState('');
   const [pwd, setPwd] = useState('');

   const handle = () => {
      localStorage.setItem('Name', name);
      localStorage.setItem('Password', pwd);
   };
   const remove = () => {
      localStorage.removeItem('Name');

   };
   const Get = () =>{
      console.log(
localStorage.getItem('Name'),
localStorage.getItem('Password'));

   }

   return (
      <div className="app">
         <h1>Name of the user:</h1>
         <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
         />
         <h1>Password of the user:</h1>
         <input
            type="password"
            placeholder="Password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
         />
         <div className='btn1'>
            <button onClick={()=>handle()}>Submit</button>
         </div>
          
         <div className='btn2'>
            <button onClick={remove}>Remove</button>
         </div>
         <div className='btn3'>
            <button onClick={()=>Get()}>Get</button>
         </div>

      </div>
   );
};
export default Storage;