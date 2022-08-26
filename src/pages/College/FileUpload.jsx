import React, {useState, useEffect} from 'react'
import Container from '@mui/material/Container';
import { Paper } from '@mui/material';
import { apiBaseUrl } from '../../utils/baseURL';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function FileUpload() {

    const [imageLink, setImageLink] = useState({type: 'empty'});
    const [fileLink, setFileLink] = useState("");

    const fileHandler = (e) => {
        setImageLink(e.target.files[0]);
    }

    const submitHandler = async(e) => {
        e.preventDefault();
        console.log("In!")
        const formData = new FormData();
        formData.append('file', imageLink);
        try{
            let response = await axios.post(apiBaseUrl+"/file/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })

            let link = response.data.link

            setFileLink(link);
            toast.success("File Uploaded Successfully!")
        }catch(e){
            toast.error("Some Error Occurred!")
        }
        
    }


  return (
    <div>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Paper>
                <br /><br />
                <h4>File Upload</h4>
                <br />
                <form onSubmit={submitHandler}>
                    <input onChange={fileHandler} type="file" name="file" id="file" required />
                    <button className='btn btn-primary' type="submit">Upload</button>
                </form>
                <br /><br />
                <p>
                    {fileLink.length > 0 ? <h6>Link: {fileLink}</h6> : <></>}
                    {fileLink.length > 0 ? <a target={"_blank"} href={fileLink} rel="noreferrer">Link</a> : <></>}
                </p>
            </Paper>
        </Container>
    </div>
  )
}
