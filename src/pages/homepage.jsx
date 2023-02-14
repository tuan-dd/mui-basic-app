import CardJob from '../components/cardJob';
import { getJobs } from '../data/fetchData';
import { Outlet, useLoaderData } from 'react-router-dom';
import { Grid } from '@mui/material';
export async function loader({ params }) {
   const { jobsPage, totalPage } = await getJobs(params.pageId);
   return { jobsPage, totalPage };
}
function Homepage() {
   const { jobsPage } = useLoaderData();
   return (
      <Grid
         container
         spacing={2}
         sx={{ display: 'flex', justifyContent: 'center', padding: 1.5 }}
      >
         {jobsPage.map((job) => (
            <Grid item lg={3} md={4} sm={5} xs={12} key={job.id}>
               <CardJob job={job} />
            </Grid>
         ))}
         <Outlet />
      </Grid>
   );
}

export default Homepage;
