// import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Chip } from '@mui/material';
import React, { useContext } from 'react';
import { ValidContext } from '../context/rootProvider';
import { Link, useLocation, useParams } from 'react-router-dom';
export default function CardJob({ job }) {
   const { checkLogin, setDetailId } = useContext(ValidContext);
   let location = useLocation();
   let params = useParams();
   // console.log(params);
   return (
      <Card
         sx={{
            border: 1,
            backgroundColor: (theme) => theme.palette.secondary.blueGrey,
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            // width: '100%',
            maxWidth: '350px',
            minWidth: '250px',
            height: '280px',
            margin: 'auto',
         }}
      >
         <CardContent>
            <Typography variant='subtitle1' component='div' textAlign='center'>
               {job.title}
            </Typography>
            <Box
               sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
               }}
            >
               {job.skills.map((element, index) => (
                  <Chip
                     key={index}
                     label={element}
                     size='small'
                     sx={
                        {
                        backgroundColor: (theme) =>
                           theme.palette.secondary.light,
                        margin: 0.3,
                        fontSize: '0.6em',
                     }
                  }
                  />
               ))}
               <Chip
                  key={job.yrsXPExpected}
                  label={`Years of experience: ${job.yrsXPExpected}`}
                  size='small'
                  sx={{
                     backgroundColor: (theme) => theme.palette.secondary.light,
                     margin: 0.3,
                     fontSize: '0.6em',
                  }}
               />
            </Box>
            <Typography variant='body2' mt={1} sx={{ fontSize: '0.7em' }}>
               {job.description}
            </Typography>
         </CardContent>
         <CardActions>
            {' '}
            {checkLogin ? (
               <Button
                  variant='contained'
                  component={Link}
                  to={`detail/${job.id}`}
                  state={{ backgroundLocation: location }}
                  sx={{ width: '130px', backgroundColor: '#df9e0b' }}
               >
                  Learn More
               </Button>
            ) : (
               <Button
                  variant='contained'
                  component={Link}
                  to={`/login`}
                  sx={{ width: '130px', backgroundColor: '#df9e0b' }}
                  onClick={() =>
                     setDetailId(`/page/${params.pageId}/detail/${job.id}`)
                  }
               >
                  Learn More
               </Button>
            )}
         </CardActions>
         {/* <BasicModal open={open} setOpen={setOpen} job={job} /> */}
      </Card>
   );
}
