import React, { useEffect, useState } from 'react';
import Form from '@rjsf/material-ui/v5';
import { postApi } from '../../app/api-interface';
import { toast } from 'react-toastify';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { getApiWithoutToken } from '../../app/api-interface';
import { useNavigate } from 'react-router-dom';

export default function AddCollege() {

  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = React.useState();
  const [categories, setCategories] = React.useState([]);
  const [ShowScreen, setShowScreen] = React.useState(false);

  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [shortName, setShortName] = useState("")
  const [categoryId, setCategoryId] = useState("")

  const handleCategoriesSelect = ((e) => {
    setSelectedCategories(e.target.value);
  });
  const getCategories = async() => {
    await getApiWithoutToken("/categories").then(
            response => {
              if(response.status === 200) {
                const data = response.data;
                setCategories(data.data);
                setShowScreen(true);
              }
              else if(response.status === 500)
              {
                console.log(response.error);
                return 0;
              }
          }
          )
          .catch(
            err => {
              console.log(err);
              return 0;
            }
          );
  }
  useEffect(() => {
    getCategories();
}, []);

  const submitHandler = async(e) => {
    e.preventDefault();
    let body = {
      email, name, shortName, categoryId: Number(categoryId)
    }
    try{
      let response = await postApi("/colleges", body);
      toast.success("College Added Successfully!");
      navigate("/admin/colleges")
    }catch(e){
      if(e.response.status === 409){
        toast.error("Email ID already exists!")
      }
    }
  }

  return (
    <>
    {ShowScreen ? <>
      <Typography component="h1" variant="h5">
        Add College
      </Typography>
      <form onSubmit={submitHandler}>
          <br />
          <div className="form-group">
              <label htmlFor="email">Email</label><br />
              <input onChange={(e)=>setEmail(e.target.value)} type="email" className='form-control' name='email' id='email' required />
          </div>
          <br />
          <div className="form-group">
              <label htmlFor="name">Name</label><br />
              <input onChange={(e)=>setName(e.target.value)} type="text" className='form-control' name='name' id='name' required />
          </div>
          <br />
          <div className="form-group">
              <label htmlFor="shortName">Short Name</label><br />
              <input onChange={(e)=>setShortName(e.target.value)} type="text" className='form-control' name='shortName' id='shortName' required />
          </div>
          <br />
          <div className="form-group">
              <label htmlFor="categoryId">Category</label><br />
              <select onChange={(e)=>setCategoryId(e.target.value)} class="custom-select form-control" id="categoryId">
                <option selected>Choose Category</option>
                {categories.map((ele,key)=><option key={key} value={ele.id}>{ele.categoryName}</option>)}
              </select>
          </div>
          <br />
          <button className='btn btn-success' type="submit">Add</button>
      </form>
    </>: <div>Loading...</div> }
    </>
  )
}
