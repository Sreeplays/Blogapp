import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from '../firebase-config';
const CreatePost = ({ isAuth }) => {
   const [Title, setTitle] = useState("");

   const [PostText, setPostText] = useState("");

   let navigate = useNavigate();

   const postsCollection = collection(db, "sreeplayspost");
   
   const createPost = async () => {
    await addDoc(postsCollection, {Title, PostText, author: {name: auth.currentUser.displayName, id: auth.currentUser.uid} })
    navigate('/blog')
   };
   

  return (
    <div className="justify-center text-center border bg-gray-900 h-screen text-white rounded-md shadow-lg">
      <h2 className='text-4xl font-semibold '>Create New Post</h2>
      <div>
        <div className="py-6 text-7xl"><label>Title</label></div>
        <input type="text" placeholder="Title..." className='rounded-sm text-black py-5 px-8' onChange={(event) => {setTitle(event.target.value)}}/>
        <div>
       <div className="py-4 text-2xl"><label> Post </label></div> 
        <textarea placeholder='Write...' cols="35" rows="10" className='rounded-md text-black py-6 px-10' onChange={(event) => {setPostText(event.target.value)}}></textarea>
        <div><button className='text-black rounded-lg border bg-red-300 px-6 py-4 my-3' onClick={createPost}>Submit</button></div>
        </div>
        
        
      </div>
      
    </div>
  )
}

export default CreatePost