import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BasicModal from '../components/basicModal';
import { getJobs } from '../data/fetchData';
export async function loader({ params }) {
   const job = await getJobs('','',params.detailId);
   // console.log(job)
   return job;
}
function Detail() {
   const job = useLoaderData();
   return (
      <div>
         <BasicModal job={job} />
      </div>
   );
}

export default Detail;
