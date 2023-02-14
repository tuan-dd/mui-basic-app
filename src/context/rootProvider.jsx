import React, { createContext, useState } from 'react';

export const ValidContext = createContext();
function RootProvider({ children }) {
   const [checkLogin, setCheckLogin] = useState(false);
   const [detailId, setDetailId] = useState('');
   const [page, setPage] = useState(1);

   const handleCheck = () => {
      setCheckLogin((e) => !e);
   };
   return (
      <ValidContext.Provider
         value={{
            handleCheck,
            checkLogin,
            detailId,
            setDetailId,
            page,
            setPage,
         }}
      >
         {children}
      </ValidContext.Provider>
   );
}

export default RootProvider;
