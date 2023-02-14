import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
const style = {
   textTransform: 'capitalize',
   fontSize: '0.7em',
};

export default function GutterLessList({ job }) {
   return (
      <List
         sx={{
            width: '100%',
            pl: 2,
            pr: 2,
            margin: '30px auto',
            fontSize: 20,
         }}
      >
         {Object.keys(job).map((value, index) => {
            const item = ['city'];
            const itemTwo = ['salaryHigh'];
            const itemThree = ['remote'];
            if (item.includes(value)) {
               // console.log(value);
               return (
                  <ListItem
                     sx={style}
                     key={value}
                     disableGutters
                     secondaryAction={
                        <Typography>{Object.values(job)[index]}</Typography>
                     }
                  >
                     <ListItemText primary={`${value} :`} />
                  </ListItem>
               );
            } else if (itemTwo.includes(value)) {
               return (
                  <ListItem
                     sx={style}
                     key={value}
                     disableGutters
                     secondaryAction={
                        <Typography>{`${Object.values(job)[index]} $`}</Typography>
                     }
                  >
                     <ListItemText primary={`salary up to :`} />
                  </ListItem>
               );
            } else if (itemThree.includes(value)) {
               return (
                  <ListItem
                     sx={style}
                     key={value}
                     disableGutters
                     secondaryAction={
                        <Typography>
                           {Boolean(Object.values(job)[index]) ? 'Yes' : 'No'}
                        </Typography>
                     }
                  >
                     <ListItemText primary={`${value} :`} />
                  </ListItem>
               );
            } else {
               return '';
            }
         })}
      </List>
   );
}
