
import { NextUIProvider } from '@nextui-org/react';
import { Input } from "@nextui-org/react";
import { Container, Card, Row, Text, Col, Spacer, Table } from "@nextui-org/react";
import { Button, Grid } from "@nextui-org/react";
import { Link } from "@nextui-org/react";



export default function ListAllCourses({data}) {

  async function deleteData(coursed) {
     
    
    // grab the variables from the form.

   

    // if we want to get a parameter from the URL such as
    // the ID.
    
    

    const data = {
        coursed:coursed,
        
      }
  
      // Send the data to the server in JSON format.
      const JSONdata = JSON.stringify(data)
  
      // API endpoint where we send form data.
      const endpoint = '/api/deleteCourse'
 
 
  
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
  


  return (
    <>
 <Grid.Container gap={2} justify="center">
      <Grid xs={4}>
      <Card css={{ h: "$50", $$cardColor: '$colors$primary' }}>
        <Card.Body>

        
            <Button auto flat as={Link} href="/students">
             Register New Students
            </Button>

            
        </Card.Body>
      </Card>
      </Grid>
      <Grid xs={4}>
      <Card css={{ h: "$50", $$cardColor: '$colors$primary' }}>
        <Card.Body>

        
            <Button auto flat as={Link} href="/ListAllStudents">
             See Student List and Assign Courses
            </Button>

            
        </Card.Body>
      </Card>
      </Grid>

      <Grid xs={4}>
      <Card css={{ h: "$50", $$cardColor: '$colors$primary' }}>
        <Card.Body>

        
            <Button auto flat as={Link} href="/chat">
             Chat with Someone
            </Button>

            
        </Card.Body>
      </Card>
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
  <Table.Column>Title</Table.Column>
  <Table.Column>Description </Table.Column>
  <Table.Column>NFQ </Table.Column>
  <Table.Column>Year </Table.Column>
  <Table.Column>View </Table.Column>
  <Table.Column>Delete </Table.Column>
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

  </Table.Row>


  {

    data &&
    data.map((item, i) => (
      // print out the table from the JSON we got
      // from the API

      <Table.Row key="1">

        <Table.Cell>{item.coursed} </Table.Cell>
        <Table.Cell>{item.title} </Table.Cell>
        <Table.Cell>{item.desc} </Table.Cell>
        <Table.Cell>{item.nfq} </Table.Cell>
        <Table.Cell>{item.courseyear} </Table.Cell>

        
        <Table.Cell><Link href={`/viewAll?coursed=`+item.coursed}>View</Link></Table.Cell>
        <Table.Cell>
          <Button type="button" onClick={(save) => deleteData(item.coursed)}  size="xs">Delete</Button></Table.Cell>
      </Table.Row>






    ))
  }

</Table.Body>
</Table>









   
    </>

  )
}


export async function getServerSideProps(context) {
    const res = await fetch(`http://localhost:3000/api/listCourses`)
    const data = await res.json()
 
  
    return {
      props: { data }, // will be passed to the page component as props
    }
  }