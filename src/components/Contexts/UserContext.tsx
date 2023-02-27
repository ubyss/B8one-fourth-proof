import { useLazyQuery, useQuery } from "@apollo/client";
import { createContext, useEffect, useMemo, useState } from "react";
import { OBTER_PRODUTOS } from "../../graphql/query/query";
import { IContext } from "../../interface/IUserContext";


export const UserContext = createContext<IContext>({
  modalStep: 0,
  setModalStep: () => null,
  clickedState: () => null,
  storeRegionalization: null,
  loading: false
});

const UserContextProvider = ({ children }: any) => {
  const [modalStep, setModalStep] = useState(1);

  const [clickedState, { data, loading }] = useLazyQuery(OBTER_PRODUTOS);

  const { storeRegionalization } = data ?? ''

  useEffect(() => {
    const state = window.localStorage.getItem('state')
    const currentLocation = window.location.pathname

    if(state) {
      clickedState({variables: {
        input: {
            email: 'teste@hotmail.com',
            state
        }
    }})

    if(currentLocation === '/' || currentLocation !== `/home/${state}`) window.location.replace(`/home/${state}`);

    setModalStep(0)
    } 

    if(!state && currentLocation !== '/') window.location.replace(`/`);
  }, [])

  return (
    <UserContext.Provider
      value={{
        modalStep,
        setModalStep,
        clickedState,
        storeRegionalization,
        loading
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
