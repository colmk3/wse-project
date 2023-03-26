import { NextUIProvider} from '@nextui-org/react';
import { Input } from "@nextui-org/react";
import {  Card, Row, Text, Col, Spacer, Table, Textarea } from "@nextui-org/react";
import { Button, Grid } from "@nextui-org/react";

import {useRouter} from 'next/router'



export default function chat({data}) {
    const router = useRouter()

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

      async function handleSubmit(event) {
        
        const username = document.querySelector('#username').value
        console.log("username is " + username);
        const comment = document.querySelector('#comment').value
        console.log("comment is " + comment);

        // grab the variables from the form.
        const data ={
            username: username, 
            comment: comment, 

        }
    

        

       

        // if we want to get a parameter from the URL such as
        // the ID.
        
        

      
           // Send the data to the server in JSON format.
     const JSONdata = JSON.stringify(data)
 
     // API endpoint where we send form data.
     const endpoint = '/api/saveChat'


 
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
     
     alert(`server result: ${result}`)
    
    
        
    
    
     
    }

    async function callChatPage(){

        const options = {
            // The method is POST because we are sending data.
            method: 'GET',
            // Tell the server we're sending JSON.
            headers: {
              'Content-Type': 'application/json',
            },
            // Body of the request is the JSON data we created above.
           
          }
     
          
      
          // Send the form data to our forms API on Vercel and get a response.
          const response = await fetch('api/getChats', options)
      
          // Get the response data from server as JSON.
          // If server returns the name submitted, that means the form works.
          const result = await response.json()

          console.log("chat page result: " + result)

          document.getElementById('chatlog').textContent = result;

    }

    
    setInterval(() => {
        console.log('Interval Triggered');

        // Form the request for sending data to the server.
        callChatPage();

    }, 1000);

  return (
    <NextUIProvider>
 <Grid.Container gap={2} justify="center">

      <Grid xs={4}>


<Card css={{ h: "$50", $$cardColor: '$colors$primary' }}>
        <Card.Body>
          <Text h6 size={15} color="white" css={{ mt: 0 }}>
            Chat System
            </Text>
            <Textarea
            label = "Chat Log"
            placeholder=''
            id="chatLog"
            />
            <form onSubmit={handleSubmit}>

            <Input minlength="4" maxlength="25"  id="username" clearable bordered labelPlaceholder="" initialValue="" />

        

            <Spacer y={2} />
            <Input minlength="20" maxlength="600" id="comment" clearable bordered labelPlaceholder="" initialValue="" />

            <Spacer y={2} />
            <Button type="submit" color="secondary" auto>
              Send
            </Button>

            </form>
        </Card.Body>
      </Card>


        
      </Grid>
    
    </Grid.Container>

   

       


        









   
    </NextUIProvider>

  )
}



