import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Button } from '@mui/material';
import {
   Form,
   Link,
   // useNavigation,
   // useNavigate,
   useLocation,
   useSubmit,
} from 'react-router-dom';
import { ValidContext } from '../context/rootProvider';
const Search = styled('div')(({ theme }) => ({
   position: 'relative',
   borderRadius: theme.shape.borderRadius,
   backgroundColor: alpha(theme.palette.common.white, 0.15),
   '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
   },
   marginLeft: 0,
   width: '100%',
   [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
   },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
   padding: theme.spacing(0, 2),
   height: '100%',
   position: 'absolute',
   pointerEvents: 'none',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
   color: 'inherit',
   '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
         width: '12ch',
         '&:focus': {
            width: '20ch',
         },
      },
   },
}));

export default function SearchAppBar({ on, setOn }) {
   const { checkLogin, handleCheck } = React.useContext(ValidContext);
   // const navigation = useNavigation();
   // const navigate = useNavigate();
   let location = useLocation();
   const submit = useSubmit();
   React.useEffect(() => {
      document.getElementById('q').value = location.search.slice(3);
   }, [location]);
   // const searching =
   //    navigation.location &&
   //    new URLSearchParams(navigation.location.search).has('q');
   // console.log(searching);
   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar position='static'>
            <Toolbar>
               <Typography
                  variant='h6'
                  noWrap
                  component='div'
                  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
               >
                  New Jobs
               </Typography>
               <Button
                  variant='contained'
                  disableElevation={on}
                  onClick={() => setOn((e) => !e)}
               >
                  <LightModeIcon sx={{ color: on ? 'black' : '' }} />
               </Button>
               <Form role='search' action='search?id='>
                  <Search>
                     <SearchIconWrapper>
                        <SearchIcon />
                     </SearchIconWrapper>
                     <StyledInputBase
                        id='q'
                        placeholder='Search…'
                        inputProps={{ 'aria-label': 'search' }}
                        name='q'
                        defaultValue={location.search.slice(3)}
                        onChange={(event) => {
                           const isFirstSearch =
                              location.search.slice(3) == null;
                           submit(event.currentTarget.form, {
                              replace: !isFirstSearch,
                           });
                        }}
                     />
                  </Search>
               </Form>

               {!checkLogin ? (
                  <Link
                     to={`/login`}
                     style={{ cursor: 'pointer', color: 'white' }}
                  >
                     <LoginIcon
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='open drawer'
                        sx={{ ml: 2, mt: 1 }}
                     ></LoginIcon>
                  </Link>
               ) : (
                  <LogoutIcon
                     size='large'
                     edge='start'
                     color='inherit'
                     aria-label='open drawer'
                     sx={{ ml: 2, cursor: 'pointer' }}
                     onClick={handleCheck}
                  ></LogoutIcon>
               )}
            </Toolbar>
         </AppBar>
      </Box>
   );
}
// export async function loader({ request }) {
//    const url = new URL(request.url);
//    const q = url.searchParams.get('search');
//    console.log(q);
//    // const jobs = await getJobs(q);
//    // return jobs;
// }
