import { useFormContext, Controller } from 'react-hook-form';
import { Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';

function FCheckBox({ name, ...other }) {
   const { Control } = useFormContext();
   return (
      <FormControlLabel
         control={
            <Controller
               name={name}
               control={Control}
               render={({ field }) => (
                  <Checkbox {...field} checked={field.value} />
               )}
            />
         }
         {...other}
      />
   );
}

export default FCheckBox;
