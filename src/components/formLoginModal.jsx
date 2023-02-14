import { useForm } from 'react-hook-form';
import { FormProvider, FTextField, FCheckBox } from '../form';
import React, { useState, useContext } from 'react';
import { Alert, InputAdornment, Stack, Typography, Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoadingButton from '@mui/lab/LoadingButton';
import { checkUser } from '../data/fetchData';
import { useNavigate } from 'react-router-dom';
import { ValidContext } from '../context/rootProvider';
const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   height: 400,
   backgroundColor: 'white',
   border: '2px solid #000',
   boxShadow: 24,
   p: 2,
   color: 'black',
};
function FormLogin() {
   const navigate = useNavigate();
   const [openForm, setOpenFrom] = React.useState(true);
   const { handleCheck, detailId, page } = useContext(ValidContext);
   const handleClose = () => {
      setOpenFrom((e) => !e);
      navigate(detailId ? detailId : `/page/${page}`);
   };
   const defaultValues = {
      email: 'tuandd@gmail.com',
      password: '123',
      remember: true,
   };
   const methods = useForm({ defaultValues });
   const {
      setError,
      handleSubmit,
      clearErrors,
      formState: { errors, isSubmitting },
   } = methods;
   const [showPassword, setShowPassword] = useState(false);
   const onSubmit = async (data) => {
      const valid = await checkUser(data);
      // console.log('run');
      if (valid) {
         handleClose();
         handleCheck();
      } else {
         navigate(`/login`);
         setError('afterSubmit', { message: 'Wrong' });
      }
   };
   return (
      <Modal
         open={openForm}
         onClose={handleClose}
         aria-labelledby='modal-modal-title'
         aria-describedby='modal-modal-description'
      >
         <Box sx={style}>
            <Typography
               variant='h2'
               textAlign='center'
               md={3}
               mb={1}
               sx={{
                  fontFamily: (theme) => theme.palette.typography.fontFamily,
               }}
            >
               Login in
            </Typography>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
               <Stack spacing={3}>
                  {!!errors.afterSubmit && (
                     <Alert severity='error'>
                        {errors.afterSubmit.message}
                     </Alert>
                  )}
                  <FTextField name='email' label='Email address' />

                  <FTextField
                     name='password'
                     label='Password'
                     type={showPassword ? 'text' : 'password'}
                     InputProps={{
                        endAdornment: (
                           <InputAdornment position='end'>
                              <IconButton
                                 aria-label='toggle password visibility'
                                 onClick={() => setShowPassword((e) => !e)}
                                 onMouseDown={(e) => e.preventDefault()}
                                 edge='end'
                              >
                                 {showPassword ? (
                                    <VisibilityOff />
                                 ) : (
                                    <Visibility />
                                 )}
                              </IconButton>
                           </InputAdornment>
                        ),
                     }}
                  />
               </Stack>
               <Stack spacing={3}>
                  <FCheckBox name='remember' label='Remember me' />
               </Stack>
               <LoadingButton
                  size='large'
                  type='submit'
                  variant='contained'
                  loading={isSubmitting}
                  onClick={()=> clearErrors()}
                  sx={{
                     display: 'flex',
                     m: '0 auto',
                  }}
               >
                  Login
               </LoadingButton>
            </FormProvider>
         </Box>
      </Modal>
   );
}

export default FormLogin;
