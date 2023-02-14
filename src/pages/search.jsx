import CardJob from '../components/cardJob';
import { getJobs } from '../data/fetchData';
import { useLoaderData, redirect } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
export async function loader({ request }) {
   const url = new URL(request.url);
   const q = url.searchParams.get('q');
   // console.log(q);
   if (!q) {
      return redirect('/page/1');
   }
   const { jobsPage } = await getJobs(0, q);
   return { jobsPage };
}
function Search() {
   const { jobsPage } = useLoaderData();
   return (
      <div>
         <Grid
            container
            spacing={2}
            sx={{ display: 'flex', justifyContent: 'center', padding: 1.5 }}
         >
            {jobsPage.length ? (
               jobsPage.map((job) => (
                  <Grid item lg={4} md={4} sm={5} xs={12} key={job.id}>
                     <CardJob job={job} />
                  </Grid>
               ))
            ) : (
               <Typography
                  variant='h3'
                  sx={{
                     mt: 4,
                     fontFamily: (theme) => theme.palette.typography.fontFamily,
                  }}
               >
                  No Job
               </Typography>
            )}
         </Grid>
      </div>
   );
}

export default Search;
