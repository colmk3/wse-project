import Link from 'next/link'
import { Table } from '@nextui-org/react';
import { useRouter } from 'next/router'
import { Input } from "@nextui-org/react";
import { Button, Grid } from "@nextui-org/react";
import {NextUIProvider} from "@nextui-org/react"
export default function ViewAll({data,courseid, data2}) {


    // if we want to redirect the user
    const router = useRouter()

    // if we want to get a parameter from the URL such as
    // the ID.
    const {coursed} = router.query

    async function saveData(sid,enrolledin) {
     
    
        // grab the variables from the form.
        
    

        let gradeValue = document.getElementById(`grade_`+sid).value;

       

        // if we want to get a parameter from the URL such as
        // the ID.
        
        

        const data = {
            sid: sid,
            grade: gradeValue,
            enrolledin:enrolledin,
          }
      
          // Send the data to the server in JSON format.
          const JSONdata = JSON.stringify(data)
      
          // API endpoint where we send form data.
          const endpoint = '/api/saveGrade'
     
     
      
          // Form the request for sending data to the server.
          const options = {
            // The method is POST because we are sending data.
            method: 'POST',
            // Tell the server we're sending JSON.
            headers: {
              'Content-Type': 'application/json',
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
          }
     
          
      
          // Send the form data to our forms API on Vercel and get a response.
          const response = await fetch(endpoint, options)
      
          // Get the response data from server as JSON.
          // If server returns the name submitted, that means the form works.
          const result = await response.json()
   
   
        
         
         alert(`Saved`)
    
    
        
    
    
     
    }

    async function deleteData(sid) {
     
    
      // grab the variables from the form.
  
     
  
      // if we want to get a parameter from the URL such as
      // the ID.
      
      
  
      const data = {
          sid:sid,
          
        }
    
        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)
    
        // API endpoint where we send form data.
        const endpoint = '/api/deleteGrade'
   
   
    
        // Form the request for sending data to the server.
        const options = {
          // The method is POST because we are sending data.
          method: 'POST',
          // Tell the server we're sending JSON.
          headers: {
            'Content-Type': 'application/json',
          },
          // Body of the request is the JSON data we created above.
          body: JSONdata,
        }
   
        
    
        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options)
    
        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json()
  
  
      
       
       alert(`Deleted`)
  
  
      
  
  
   
  }


    return (

        <>
        
        Current id is: {coursed}
        
        <Table

aria-label="Example table with static content"
css={{
  height: "auto",
  minWidth: "100%",

}}

>
<Table.Header>
  <Table.Column>ID</Table.Column>
  <Table.Column>Grade</Table.Column>
  <Table.Column>Firstname</Table.Column>
  <Table.Column>Lastname</Table.Column>
  <Table.Column>Email</Table.Column>
  <Table.Column>Address</Table.Column>
  <Table.Column>Telephone</Table.Column>
  <Table.Column>EnrolledIn</Table.Column>
</Table.Header>
<Table.Body >
  <Table.Row key="1">
    <Table.Cell></Table.Cell>
    <Table.Cell></Table.Cell>
    <Table.Cell></Table.Cell>
    <Table.Cell></Table.Cell>
    <Table.Cell></Table.Cell>
    <Table.Cell></Table.Cell>
    <Table.Cell></Table.Cell>
    <Table.Cell></Table.Cell>

  </Table.Row>


  {

    data &&
    data.map((item, i) => (
      // print out the table from the JSON we got
      // from the API

      <Table.Row key="1">

        <Table.Cell>{item.sid} </Table.Cell>
        <Table.Cell> 
        <Input id={`grade_`+item.sid}   labelPlaceholder={`grade_`+item.sid}/>



        <Button type="button" onClick={(save) => saveData(item.sid, item.enrolledin)}  size="xs">Save</Button>
             </Table.Cell>
        <Table.Cell>{item.name} </Table.Cell>
        <Table.Cell>{item.surname} </Table.Cell>
        <Table.Cell>{item.email} </Table.Cell>
        <Table.Cell>{item.address} </Table.Cell>
        <Table.Cell>{item.telephone} </Table.Cell>
        <Table.Cell>{item.enrolledin} </Table.Cell>
        
        
      </Table.Row>






    ))
  }

</Table.Body>
</Table>

<Table

aria-label="Example table with static content"
css={{
  height: "auto",
  minWidth: "100%",

}}

>
<Table.Header>
  <Table.Column>SID</Table.Column>
  <Table.Column>Course ID</Table.Column>
  <Table.Column>Grade</Table.Column>
  <Table.Column>Delete</Table.Column>
</Table.Header>
<Table.Body >
  <Table.Row key="1">
    <Table.Cell></Table.Cell>
    <Table.Cell></Table.Cell>
    <Table.Cell></Table.Cell>
    <Table.Cell></Table.Cell>

  </Table.Row>


  {

    data2 &&
    data2.map((item, i) => (
      // print out the table from the JSON we got
      // from the API

      <Table.Row key="1">
        <Table.Cell>{item.sid} </Table.Cell>
        <Table.Cell>{item.courseid} </Table.Cell>
        <Table.Cell>{item.grade} </Table.Cell>
        <Table.Cell><Button type="button" onClick={(save) => deleteData(item.sid)}  size="xs">Delete</Button></Table.Cell>
        
        
      </Table.Row>






    ))
  }

</Table.Body>
</Table>
        </>
    )

    }

    export async function getServerSideProps(context) {

        let id = context.query.coursed;
        let courseid = context.query.coursed;
        const res = await fetch(`http://localhost:3000/api/getEnrolledStudents?id=`+id)
        const data = await res.json()

        const res2 = await fetch(`http://localhost:3000/api/getGrades?id=`+id)
        const data2 = await res2.json()
     
      
        return {
          props: { data,courseid, data2 }, // will be passed to the page component as props
        }
      }