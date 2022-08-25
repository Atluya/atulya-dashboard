import React, {useState, useEffect} from 'react';
import axios from "axios";
import { apiBaseUrl } from '../../utils/baseURL';
import { DataGrid, GridEventListener} from '@mui/x-data-grid';
import { getApiWithoutToken } from '../../app/api-interface';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function SuperadminTable(props) {

  const navigate = useNavigate();
  const supplyIDs = (ar) => {
    let arr = ar;
    for(let i=0; i<arr.length; i++)
    {
      arr[i]["id"] = i+1
    }
    return arr
  }

    const [Superadmins, setSuperadmins] = useState([])
    
    const getSuperadmins = async() => {
      await getApiWithoutToken("/superadmins").then(
              response => {
                console.log(response);
                if(response.status === 200) {
                  const data = response.data;
                  console.log(data);
                  setSuperadmins(data);
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
            getSuperadmins();
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
        field: 'contactNo', 
        headerName: 'Contact Number', 
        width: 200 
      },
      { 
        field: 'status', 
        headerName: 'Status', 
        width: 200 
      }
    ];
    
    const rows = supplyIDs(Superadmins);
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


  


