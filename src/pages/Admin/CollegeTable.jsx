import React, {useState, useEffect} from 'react';
import axios from "axios";
import { apiBaseUrl } from '../../utils/baseURL';
import { DataGrid, GridEventListener} from '@mui/x-data-grid';
import { getApiWithoutToken } from '../../app/api-interface';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Container, Paper } from '@mui/material';

export default function CollegeTable(props) {

  const navigate = useNavigate();

    const [colleges, setcolleges] = useState([])
    
    const getColleges = async() => {
      await getApiWithoutToken("/colleges").then(
              response => {
                console.log(response);
                if(response.status === 200) {
                  const data = response.data;
                  console.log(data);
                  setcolleges(data);
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
            getColleges();
    }, []);

    
    
      return (
        <>
        <Button variant="contained" onClick={(e) =>navigate(`/admin/add-college`)}>Add College</Button>
        <Container>
          <br />
          <Paper>
            <br /><br />
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">City</th>
                  <th scope="col">More</th>
                </tr>
              </thead>
              <tbody>
                {colleges.map((ele, key)=><tr key={key}>
                  <th scope="row">{key+1}</th>
                  <td>{ele.name}</td>
                  <td>{ele.city}</td>
                  <td>{ele.state}</td>
                  <td><p onClick={(e)=>navigate(`/admin/college/${ele.id}`)} >View Details</p></td>
                </tr>) }
              </tbody>
            </table>
            <br /><br />
          </Paper>
          <br />
        </Container>
        </>
      );
}


  


