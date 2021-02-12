import img from './techify.png';
import img2 from './link.png';
import { usestate } from "react";
import {Segment,Image,Grid, Container,Item, Menu, Button,Input, Form, Divider,Icon,Header} from 'semantic-ui-react';

function App() {
  return (
    <Container fluid>
    <Item.Group divided style={{backgroundColor:'black'}} attached='top'>
    <Item>
          <Item.Image src={img} />
          <Item.Content>
           
          <Menu inverted pointing secondary style={{paddingTop:10}}>
          <Container>
                <Menu.Item as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item as='a'>About</Menu.Item>
                <Menu.Item as='a'>Contact</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a'  inverted>
                    Log in
                  </Button>
                  <Button as='a'  inverted style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
        </Menu>
        
          </Item.Content>
    </Item>
    <Segment attached='bottom' attached='top' stackable style={{backgroundColor:'teal',textAlign:'center',fontSize:45,color:'white'}}>
      <p style={{marginBottom:2}}>Shorten Your Long URL's</p><hr style={{width:350 ,borderWidth:3,color:'white'}}/>
      <Form>
      <Input type='text' placeholder='Enter Your Long URl.. ' style={{fontSize:20}} fluid action><input/><Button color='green' style={{fontSize:20}}>Shorten</Button></Input>
      </Form>
    </Segment>
    <Segment attached='bottom' stackable style={{textAlign:'center',fontSize:45}}>
    <p style={{marginBottom:2}}>How It Works</p><hr style={{width:350 ,borderWidth:3}}/>
    <Grid stackable>
    <Grid.Row columns={2}>
        <Grid.Column width={5}>
          <Divider horizontal/>
           <Image src={img2}  />
        </Grid.Column>
        <Grid.Column width={10}>
            <Divider horizontal>
      <Header as='h2'>
        <Icon name='magic' />
      </Header>
    </Divider>
      <p style={{fontSize:26,color:'grey'}}>Transforms Lengthy URLs Into Short URLs</p>
      <p style={{fontSize:17,color:'cadetblue'}}><u>https://techcrunch.com/2017/10/24/youll-be-able-to-get-the-iphone-x-at-an-apple-store-on-launch-day-if-you-get-there-early/</u></p>
      <p style={{fontSize:24}}><Icon name='arrow down'/></p>
      <p style={{fontSize:17,color:'cadetblue'}}><u>https://techify.com/YourKeyword</u></p>
        </Grid.Column>
        
      </Grid.Row>
      </Grid>
      </Segment>
    </Item.Group> 
    
    </Container>
  );
}

export default App;
