import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CardContent, Chip } from '@mui/material';
import GutterLessList from './gutterLessList';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { ValidContext } from '../context/rootProvider';
const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 500,
   height: 500,
   backgroundColor: (theme) => theme.palette.secondary.blueGrey,
   border: '2px solid #000',
   boxShadow: 24,
   p: 2,
   color: 'white',
};

export default function BasicModal({ job }) {
   // console.log(job)
   const [open, setOpen] = React.useState(true);
   const navigate = useNavigate();
   const { page } = React.useContext(ValidContext);
   const handleClose = () => {
      setOpen(false);
      navigate(`/page/${page}`);
   };
   return (
      <Modal
         open={open}
         onClose={() => handleClose()}
         aria-labelledby='modal-modal-title'
         aria-describedby='modal-modal-description'
      >
         <Box sx={style}>
            <CardContent>
               <Typography variant='h4' component='div' textAlign='center'>
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
                        sx={{
                           backgroundColor: (theme) =>
                              theme.palette.secondary.light,
                           margin: 0.5,
                           fontSize: '1em',
                        }}
                     />
                  ))}
                  <Chip
                     key={job.yrsXPExpected}
                     label={`Years of experience: ${job.yrsXPExpected}`}
                     sx={{
                        backgroundColor: (theme) =>
                           theme.palette.secondary.light,
                        margin: 0.5,
                        fontSize: '1.1em',
                     }}
                  />
               </Box>
               <Typography variant='body2' mt={1}>
                  {job.description}
               </Typography>
            </CardContent>
            <GutterLessList job={job} />
            <ArrowBackIcon
               fontSize='large'
               edge='start'
               color='inherit'
               aria-label='open drawer'
               onClick={handleClose}
               sx={{
                  cursor: 'pointer',
                  position: 'absolute',
                  top: '10px',
                  left: '0',
               }}
            ></ArrowBackIcon>
         </Box>
      </Modal>
   );
}
