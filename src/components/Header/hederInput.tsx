import React, { useEffect, useState } from "react";
import {Container, TextField, makeStyles, Stack, Button} from "@mui/material"
import { BASE_URL } from "../../redux/actions/actionNewBooks.ts";
import axios from "axios"
import { useDispatch } from "react-redux";
import { fetchSearch } from "../../redux/actions/actionSearch.ts";



const Search = () => {

const [query, setQuery] = useState('');
const dispatch = useDispatch(); 




  const handleSearch = () => {
    dispatch(fetchSearch(query)); 
  };

    return(
        
        <Container id='container'>
            <TextField  fullWidth label="Search" value={query} onChange={(e) =>setQuery(e.target.value)} />
            <Button id='buttonSearch' onClick={handleSearch}>Search</Button>
        </Container>
    )
}


export default Search 