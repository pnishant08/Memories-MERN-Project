import React from 'react';
import {Container , AppBar, Typography, Grow, Grid} from '@mui/material';
import memories  from './images/memo.webp';
import Posts from './Posts/Posts.js';
import Form from './Form/Form.js';

const App=()=>{
    return ( 
        <Container maxWidth="lg">
            <AppBar position='static' color='inherit'>
                <Typography variant='h2' align='center'>Memories</Typography>
                <img src={memories} alt='memories' />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing='3'>
                       <Grid item xs={12} sm={7}>
                           <Posts/>
                       </Grid>
                       <Grid item xs={12} sm={4}>
                           <Form/>
                       </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;