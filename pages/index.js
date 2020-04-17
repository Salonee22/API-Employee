import React,{useState,useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {getEmployeeDetails} from '../Endpoint';




const useStyles = makeStyles({
  heading:{
    marginTop:70,
    marginLeft:30,
    marginBottom:10
  }
});

export default function Index() {
  const classes = useStyles();

  const [empDetails,setEmpDetails] = useState([]);

  useEffect(() =>{
    getEmployeeDetails()
        .then(response =>{
          const {data} = response;
          setEmpDetails(data);
          
        })
        .catch(console.log)
  },[]);

  return (
    <>
      <Typography className={classes.heading} variant="h3" gutterBottom>
      Employee Details:
    </Typography>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Salary</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {empDetails.map((data) => (
            <TableRow key={data.id}>
              <TableCell component="th" scope="row">
                {data.id}
              </TableCell>
              <TableCell align="right">{data.employee_name}</TableCell>
              <TableCell align="right">{data.employee_salary}</TableCell>
              <TableCell align="right">{data.employee_age}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
 
  
  );
}
