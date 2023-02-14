import { useState, useContext, useEffect } from 'react';
import SearchAppBar from '../components/SearchAppBar';
import { Pagination, Stack } from '@mui/material';
import Container from '@mui/material/Container';
import { getJobs } from '../data/fetchData';
import { Outlet, useNavigate, useLocation, useParams } from 'react-router-dom';
import { ValidContext } from '../context/rootProvider';
// import Detail from './detail';
function Root() {
   const navigate = useNavigate();
   const { page, setPage } = useContext(ValidContext);
   const [total, setTotal] = useState(0);
   const [on, setOn] = useState(false);
   let location = useLocation();
   const params = useParams();
   // let state = location.state;
   // console.log(location.state);
   // console.log(location);
   useEffect(() => {
      console.log('run');
      const getData = async (page) => {
         const { totalPage } = await getJobs(page, location.search, '');
         setTotal((e) => totalPage);
      };
      if (location.pathname === '/') {
         navigate(`page/${page}`);
      }
      getData(page);
   }, [page, location, navigate]);

   return (
      <>
         <Container
            sx={{ bgcolor: on ? 'black' : 'white',}}
            disableGutters
            maxWidth='false'
         >
            <SearchAppBar on={on} setOn={setOn} />
            {/* <Homepage jobs={jobs} /> */}
            {/* {state?.backgroundLocation && (
               <Routes location={state.backgroundLocation}>
                  <Route path='detail/:detailId' element={<Detail />} />
               </Routes>
            )} */}
            <Outlet />
            <Stack justifyContent='flex-end' direction='row'>
               <Pagination
                  sx={{
                     bgcolor: on ? 'pink' : 'white',
                  m: 2,
                  p: 1,
                  borderRadius: 2,
                  }}
                  variant='outlined'
                  color='primary'
                  defaultValue={params.pageId}
                  onChange={(event, value) => {
                     setPage(value);
                     navigate(`page/${value}`);
                  }}
                  count={total}
                  hidden={
                     location.pathname.includes('page/') ||
                     location.pathname === '/'
                        ? false
                        : true
                  }
               />
            </Stack>
         </Container>
      </>
   );
}

export default Root;

// return (
//    <>
//      <Routes
//        location={
//          location.state?.backgroundLocation
//            ? location.state.backgroundLocation
//            : location
//        }
//      >
//        <Route path="/" element={<Layout />}>
//          <Route index element={<Home />} />
//          {/* <Route path="job/:id" element={<JobDetail />} /> */}
//          <Route path="login" element={<Login />} />
//        </Route>
//        <Route
//          path="*"
//          element={
//            <main>
//              <p>There's nothing here!</p>
//            </main>
//          }
//        />
//      </Routes>
//      {state && auth.user ? (
//        <Routes>
//          <Route path="/job/:id" element={<JobDetailModal />}></Route>
//        </Routes>
//      ) : (
//        <Routes>
//          <Route path="/job/:id" element={<LoginModal />}></Route>
//        </Routes>
//      )}
//    </>
//  );
// }
