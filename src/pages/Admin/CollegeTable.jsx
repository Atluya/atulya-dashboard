import React, {useState, useEffect} from 'react';
import axios from "axios";
import { apiBaseUrl } from '../../utils/baseURL';
import { DataGrid } from '@mui/x-data-grid';
import { getApiWithoutToken } from '../../app/api-interface';

export default function CollegeTable(props) {

  const supplyIDs = (ar) => {
    let arr = ar;
    for(let i=0; i<arr.length; i++)
    {
      arr[i]["id"] = i+1
    }
    return arr
  }

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

    const columns = [
      { 
        field: 'name', 
        headerName: 'Name', 
        width: 200
      },
      { 
        field: 'city', 
        headerName: 'City', 
        width: 200 
      },
      {
        field: 'state',
        headerName: 'State',
        width: 250,
      }
    ];
    
    const rows = supplyIDs(colleges);
    console.log(rows)
    
      return (
        <>
        <div style={{ height: 630, width: '100%', margin: '20px auto' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            // onRowClick={navigate}
          />
        </div>
        </>
      );
}

