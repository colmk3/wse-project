import {useRouter} from 'next/router'

import { NextUIProvider } from '@nextui-org/react';
import { Input } from "@nextui-org/react";
import { Container, Card, Row, Text, Col, Spacer } from "@nextui-org/react";
import { Button, Grid } from "@nextui-org/react";
import { Link } from "@nextui-org/react";


export default function students({data}) {
  const router = useRouter()

  async function handleSubmit(event) {
  
    alert("The form was submitted");
     event.preventDefault();
     const name = document.querySelector('#name').value;
     console.log(name);

     const surname = document.querySelector('#surname').value;
     console.log(surname);


     const email = document.querySelector('#email').value;
     console.log(email);

     const address = document.querySelector('#address').value;
     console.log(address);

     const telephone = document.querySelector('#telephone').value;
     console.log(telephone);

     const data = {
       name: name,
       surname: surname,
       email: email, 
       address: address,
       telephone: telephone,
    }
       
       

    const JSONdata = JSON.stringify(data);

    const endpoint = '/api/regStudents'

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

   const response = await fetch(endpoint, options)

   router.push("/ListAllStudents");

   

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
  }

  return (

    <NextUIProvider>
    <Grid.Container gap={2} justify="center">

      <Grid xs={4}>
      <Card css={{ h: "$50", $$cardColor: '$colors$primary' }}>
        <Card.Body>
          <Text h6 size={15} color="white" css={{ mt: 0 }}>
            Register New Student
            </Text>
            <form onSubmit={handleSubmit}>

            <Input  id="name" clearable bordered labelPlaceholder="Name" initialValue="" />

            <Spacer y={2} />
            <Input id="surname" clearable bordered labelPlaceholder="Surname" initialValue="" />

            <Spacer y={2} />
            <Input id="email" type="email" minlength="4" maxlength="25" clearable bordered labelPlaceholder="Email" initialValue="" />

            <Spacer y={2} />
            <Input id="address" clearable bordered labelPlaceholder="Address" initialValue="" />

            <Spacer y={2} />
            
            <Input id="telephone" pattern="[0-9]{1,15}" clearable bordered labelPlaceholder="Telephone" initialValue="" />
            <Spacer y={2} />
            <Button type="submit" color="secondary" auto>
              Register Student
            </Button>

            </form>
        </Card.Body>
      </Card>
      </Grid>

    </Grid.Container>

    </NextUIProvider>
    
  )
}