import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react'

function SearchBar() {
    
const [searchquery,setsearchquery]=useState("")
console.log(searchquery);

  return (
    <div>
        <Paper
                      component="form"
                      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 350 }}
                    >
                      <InputBase
                        sx={{ ml: 2, flex: 1 }}
                        placeholder="Search Your Wishes.."
                        inputProps={{ 'aria-label': 'search google maps' }}
                        value={searchquery}
                        onChange={(e)=>{setsearchquery(e.target.value)}}
                      />
                      <IconButton color="primary" type="button" sx={{ p: '10px' }} aria-label="search">
                      </IconButton>
                      {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                      <IconButton onClick={handleClose} color="primary" sx={{ p: '10px' }} aria-label="directions">
                        <ClearIcon/>
                      </IconButton> */}
                    </Paper>
    </div>
  )
}

export default SearchBar
