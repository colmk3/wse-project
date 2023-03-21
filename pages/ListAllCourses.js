
import { NextUIProvider } from '@nextui-org/react';
import { Input } from "@nextui-org/react";
import { Container, Card, Row, Text, Col, Spacer, Table } from "@nextui-org/react";
import { Button, Grid } from "@nextui-org/react";
import { Link } from "@nextui-org/react";



export default function ListAllCourses({data}) {

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
  <Table.Column>Title</Table.Column>
  <Table.Column>Description </Table.Column>
  <Table.Column>NFQ </Table.Column>
  <Table.Column>Year </Table.Column>
  <Table.Column>Option </Table.Column>
</Table.Header>
<Table.Body >
  <Table.Row key="1">
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