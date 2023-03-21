import { NextUIProvider } from '@nextui-org/react';
import { Input } from "@nextui-org/react";
import { Container, Card, Row, Text, Col, Spacer, Table } from "@nextui-org/react";
import { Button, Grid } from "@nextui-org/react";
import { Link } from "@nextui-org/react";



export default function ListAllStudents({data}) {

    const MockItem = ({ text }) => {
        return (
          <Card css={{ h: "$24", $$cardColor: '$colors$primary' }}>
            <Card.Body>
              <Text h6 size={15} color="white" css={{ mt: 0 }}>
                {text}
              </Text>
            </Card.Body>
          </Card>
        );
      };

      async function saveData(sid,enrolledin) {
     
    
        // grab the variables from the form.
        
    

        let coursevalid = document.getElementById(`course_`+sid).value;

       

        // if we want to get a parameter from the URL such as
        // the ID.
        
        

        const data = {
            sid: sid,
            coursevalid: coursevalid
          }
      
          // Send the data to the server in JSON format.
          const JSONdata = JSON.stringify(data)
      
          // API endpoint where we send form data.
          const endpoint = '/api/AssignCourse'
     
     
      
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



  return (
    <>
 <Grid.Container gap={2} justify="center">
      <Grid xs={4}>
        <MockItem text="1 of 3" />
      </Grid>
      <Grid xs={4}>
        <MockItem text="2 of 3" />
      </Grid>
      <Grid xs={4}>
        <MockItem text="3 of 3" />
      </Grid>
    </Grid.Container>

   

       


            <Table

aria-label="Example table with static content"
css={{
  height: "auto",
  minWidth: "100%",

}}

>
<Table.Header>
    <Table.Column>ID</Table.Column>
    <Table.Column>Course ID</Table.Column>
  <Table.Column>Name</Table.Column>
  <Table.Column>Surname</Table.Column>
  <Table.Column>Email</Table.Column>
  <Table.Column>Address</Table.Column>
  <Table.Column>Telephone</Table.Column>
  <Table.Column>Assign Course </Table.Column>
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
        <Table.Cell>{item.enrolledin} </Table.Cell>
        <Table.Cell>{item.name} </Table.Cell>
        <Table.Cell>{item.surname} </Table.Cell>
        <Table.Cell>{item.email} </Table.Cell>
        <Table.Cell>{item.address} </Table.Cell>
        <Table.Cell>{item.telephone} </Table.Cell>
        
        <Table.Cell> 
        <Input id={`course_`+item.sid}   labelPlaceholder={`course_`+item.sid}/>



        <Button type="button" onClick={(save) => saveData(item.sid, item.enrolledin)}  size="xs">Save</Button>

     </Table.Cell>
       
      </Table.Row>






    ))
  }

</Table.Body>
</Table>









   
    </>

  )
}


export async function getServerSideProps(context) {
    const res = await fetch(`http://localhost:3000/api/listStudents`)
    const data = await res.json()
 
  
    return {
      props: { data }, // will be passed to the page component as props
    }
  }