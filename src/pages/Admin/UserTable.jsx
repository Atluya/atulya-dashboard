import React, {useState, useEffect} from 'react';
import axios from "axios";
import { apiBaseUrl } from '../../utils/baseURL';
import { DataGrid, GridEventListener} from '@mui/x-data-grid';
import { getApiWithoutToken } from '../../app/api-interface';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function UserTable(props) {

  const navigate = useNavigate();
  const supplyIDs = (ar) => {
    let arr = ar;
    for(let i=0; i<arr.length; i++)
    {
      arr[i]["id"] = i+1
    }
    return arr
  }

    const [users, setusers] = useState([])
    
    const getUsers = async() => {
      await getApiWithoutToken("/users").then(
              response => {
                console.log(response);
                if(response.status === 200) {
                  const data = response.data.data;
                  console.log(data);
                  setusers(data);
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
            getUsers();
    }, []);

  //   const renderApproveButton = (params) => {
  //     return (
  //             <Button><a href="javascript:;" onClick={(e) =>navigate(`/admin/user/${params.row.id}`)}>View Details</a></Button>
  //     )
  // }

    const columns = [
      { 
        field: 'name', 
        headerName: 'Name', 
        width: 200
      },
      { 
        field: 'status', 
        headerName: 'Status', 
        width: 200 
      }
    ];
    
    const rows = supplyIDs(users);
    console.log(rows)
    
      return (
        <>
        {/* {<Button variant="contained" onClick={(e) =>navigate(`/admin/add-college`)}>Add College</Button>} */}
        <div style={{ height: 630, width: '100%', margin: '20px auto' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </div>
        </>
      );
}


  


