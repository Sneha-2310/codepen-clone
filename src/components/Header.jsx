import {AppBar,Toolbar,styled} from '@mui/material';

const Container=styled(AppBar)`
background:rgb(5, 169, 210);
height:10vh
`

const Header=()=> {
        const logo = 'https://i.pinimg.com/originals/0f/8b/28/0f8b2870896edcde8f6149fe2733faaf.jpg';

  return (
    <Container position='static'>
         <Toolbar>
         <img src={logo} alt="logo" style={{ width: 50 }} />
         </Toolbar>
     </Container>
  )
}

export default Header