import Editor from './Editor'
import {Box,styled} from '@mui/material'
import {DataContext}from "../context/DataProvider";
import { useContext } from 'react';

const Container=styled(Box)`
display:flex;
background-color:#060606;
height:53vh
`

const Code=()=>{

    const{html,setHtml,css,setCss,js,setJs}=useContext(DataContext);

    return (
        <Container>
            <Editor heading="HTML"
            icon='/'
            color="#FF3C41"
            value={html}
            onChange={setHtml}/>

            <Editor heading="CSS"
            icon="*"
            color="#109ff7"
            value={css}
            onChange={setCss}/>

            <Editor heading="JavaScript"
            icon="{}"
            color="#FCD000"
            value={js}
            onChange={setJs}/>
        </Container>  
    )
}
export default Code;