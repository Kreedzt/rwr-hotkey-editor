import React, { FC, createContext, useMemo, useRef, useContext } from 'react';
import { DashboardStore } from './store';

interface IDashboardContextValue {
  store: DashboardStore;
}

const DashboardContext = createContext<IDashboardContextValue>(
  {} as IDashboardContextValue
);

export const useDashboardContext = () => {
  return useContext(DashboardContext);
};

type DashboardContextProps = {
  children: React.ReactNode;
};
const DashboardProvider: FC<DashboardContextProps> = ({ children }) => {
  const storeRef = useRef(new DashboardStore());

  const values = useMemo(() => {
    return {
      store: storeRef.current,
    };
  }, []);

  return (
    <DashboardContext.Provider value={values}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
