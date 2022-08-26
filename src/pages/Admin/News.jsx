import { Container, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { deleteApi, getApi, postApi } from '../../app/api-interface'
import jwt_decode from "jwt-decode"
import { toast } from 'react-toastify'

export default function NewsPage() {

    const [previousNews, setPreviousNews] = useState([])

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [relevantLink, setRelevantLink] = useState("");
    const [imageLink, setImageLink] = useState("");
    //const token = jwt_decode(localStorage.getItem("token"));
    const getNews = async() => {
        //const adminId = data.data.userData.id
        try{
            const response = await getApi(`/news`)
            let data = response.data
            setPreviousNews(data)
        }catch(e){
            toast.error("Some Error Occurred!")
        }
    }

    useEffect(()=>{
        getNews();
    }, [])

    const submitHandler = async(e) => {
        e.preventDefault();
        const thePayload = {
            title, body, imageLink, relevantLink
        }
        try{
            const response = await postApi(`/news`, thePayload);
            toast.success("News Added Successfully!")
            await getNews();
        }catch(e){
            toast.error("Some Error Occurred!")
        }
    }

    const deleteNews = async(id) => {
        try{
            const response = await deleteApi(`/news/${id}`);
            toast.success("News Deleted Successfully!")
            await getNews();
        }catch(e){
            toast.error("Some Error Occurred!")
        }


    }




  return (
    <>
        <Container>
            <h4>Add News</h4>
            <form onSubmit={submitHandler}>
                <br />
                <div className="form-group">
                    <label htmlFor="title">Title</label><br />
                    <input onChange={(e)=>setTitle(e.target.value)} type="text" className='form-control' name='title' id='title' required />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="body">Body</label><br />
                    <input onChange={(e)=>setBody(e.target.value)} type="text" className='form-control' name='body' id='body' required />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="imageLink">Image Link</label><br />
                    <input onChange={(e)=>setImageLink(e.target.value)} type="text" className='form-control' name='imageLink' id='imageLink' required />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="relevantLink">Relevant Link</label><br />
                    <input onChange={(e)=>setRelevantLink(e.target.value)} type="text" className='form-control' name='relevantLink' id='relevantLink' required />
                </div>
                <br />
                <button className='btn btn-success' type="submit">Add</button>
            </form>
            <br /><br />

            {previousNews.length>0?<h4>Previous News:</h4>:<></>}
            {
                previousNews.map((ele,key)=><div className='row' key={key}>
                    <div className="container">
                        <Paper style={{cursor: 'pointer', margin: '10px auto'}}>
                            <br />
                            <h6>{ele.title}</h6>
                            <p>{ele.body}</p>
                            <img src={ele.imageLink}/>
                            <p>{ele.createdAt}</p>
                            <a href={ele.relevantLink}>Link</a>
                            <br />
                            <br />
                            <button className='btn btn-danger' onClick={async(e)=>{
                                await deleteNews(ele.id)
                            }}>Delete</button>
                            <br />
                            <br />
                        </Paper>
                    </div>
                </div>)
            }

        </Container>
    </>
  )
}
