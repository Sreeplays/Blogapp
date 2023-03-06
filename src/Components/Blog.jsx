import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { UserAuth } from '../context/AuthContext';
import { useState } from 'react'
import { auth, db } from '../firebase-config';
import { Button, Card, CardBody, CardText, Col, Container, Input, Row } from "reactstrap"
const Blog = ({ UserAuth }) => {
    const [postLists, setPostLists] = useState([]);
    const postsCollection = collection(db, "sreeplayspost");
    useEffect(() => {
       const getPosts = async () => {
        const data = await getDocs(postsCollection);
        setPostLists( data.docs.map((doc) => ({...doc.data(), id: doc.id})));};

       getPosts();
    })

    const deletePost = async (id) => {
        const postDoc = doc(db, "sreeplayspost", id)
        await deleteDoc(postDoc);
    }
    
  return (
    
    <div > {postLists.map((post) => {
        return <div >
    <div className='border border-black text-center mr-96 my-4 mx-96 font-extrabold rounded-xl bg-slate-100 drop-shadow-xl'>
        
        <div>
        <h3>{post.Title}</h3>
        {UserAuth && post.author.id === auth.currentUser.uid && (<button className='text-right' onClick={() => {deletePost(post.id)}}> &#128465; </button>)}
        </div>
        <div> </div>
        <div className='py-5 border border-black text-center mr-36 my-5 mx-36 max-h-[450px] font-mono rounded-2xl overflow-y-auto overflow-hidden'>{post.PostText}</div>
        <div className='text-right font-serif rounded-xl'>Author:- @{post.author.name}</div>
    </div>
        
        
        
    </div>
    })}</div>
  )
}

export default Blog