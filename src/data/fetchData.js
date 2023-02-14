import jobs from './jobs.json';
const defaultValues = {
   email: 'tuandd@gmail.com',
   password: '123',
   remember: true,
};
export const getJobs = async (page, q = '', detail) => {
   await fakeNetwork(page);
   if (parseInt(page) && !q) {
      // console.log(parseInt(page));
      // console.log('run')
      const jobsPage = jobs.slice((page - 1) * 4, page * 4);
      const totalPage =
         jobs.length % 4 === 0
            ? jobs.length / 4
            : parseInt(jobs.length / 4) + 1;
      return { jobsPage, totalPage };
   } else if (q) {
      const totalPage = 0;
      const jobsPage = jobs.filter((item) => {
         if (
            item.city.includes(q) ||
            item.title.includes(q) ||
            item.skills.toString().includes(q)
         ) {
            return item;
         } else {
            return '';
         }
      });
      return { jobsPage, totalPage };
   } else if (detail) {
      const job = jobs.find((job) => detail === job.id);
      return job;
   } else if (!q) {
      return '' ;
   }
   // console.log(detail);
   // console.log(q);
   // console.log(page);
};
export const getJob = async (q) => {
   await fakeNetwork(q);
   if (q) {
      const job = jobs.find((job) => q === job.id);
      console.log(job);
      return job;
   } else {
      return 'no job';
   }
};
export const checkUser = async (user) => {
   // console.log(user)
   await fakeNetwork(user);
   if (
      user.email === defaultValues.email &&
      user.password === defaultValues.password
   ) {
      defaultValues.remember = user.remember;
      return true;
   } else {
      return false;
   }
};

const fakeNetwork = async (key) => {
   if (!key) {
      return;
   }
   return new Promise((resolve) => {
      setTimeout(resolve, Math.random() * 1000);
   });
};
