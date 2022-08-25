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
  const [Categories, setCategories] = React.useState([]);
  const [ShowScreen, setShowScreen] = React.useState(false);
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
    const data = new FormData(e.currentTarget);
    let email = data.get('email');
    let name = data.get('name');
    let shortName = data.get('shortName');
    let categoryId = Number(selectedCategories['id']);
    console.log({
      email,name,shortName, categoryId
    })
    if(categoryId)
    await postApi("/colleges", {email,name,shortName, categoryId}).then(
      response => {
        console.log({
          email,name,shortName, categoryId
        })
        if(response.status === 201||response.status===203) {
          const data = response.data;
          toast.success(response.message);
          navigate("/admin/colleges");
        }
        else
        {
          toast.error(response.message);
          return 0;
        }
      }
    )
    .catch(
      err => {
        toast.error(err.message);
        return 0;
      }
    );
  }

  return (
    <>
    {ShowScreen ? <>
      <Typography component="h1" variant="h5">
        Add College
      </Typography>
      <Box component="form" noValidate onSubmit={submitHandler} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="name"
          label="Name"
          type="text"
          id="name"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="shortName"
          label="Short Name"
          type="text"
          id="shortName"
        />
        <InputLabel id="categories">Categories</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="categories"
          // value={selectedCategories}
          label="Category"
          onChange={handleCategoriesSelect}
        >
          <MenuItem hidden>Category</MenuItem>
          {Categories.map((value, key) => {
            return (
              <MenuItem value={value.id} key={key}>
                {value.categoryName}
              </MenuItem>
            );
          })}
        </Select>
        <Button
          onClick={submitHandler}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Submit
        </Button>

        
      </Box>
    </>: <div>Loading...</div> }
    </>
  )
}
