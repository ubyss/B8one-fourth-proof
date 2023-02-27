import { useLazyQuery} from "@apollo/client";
import { createContext, useEffect, useState } from "react";
import { OBTER_INFO, OBTER_PRODUTOS } from "../../graphql/query/query";
import { IContext } from "../../interface/IUserContext";


export const UserContext = createContext<IContext>({
  modalStep: 0,
  setModalStep: () => null,
  clickedState: () => null,
  getInfo: () => null,
  storeRegionalization: null,
  storeInfo: null
});

const UserContextProvider = ({ children }: any) => {
  const [modalStep, setModalStep] = useState(1);

  const [clickedState, { data }] = useLazyQuery(OBTER_PRODUTOS);
  const [getInfo, { data: storeInfo }] = useLazyQuery(OBTER_INFO);

  const { storeRegionalization } = data ?? ''

  useEffect(() => {
    window.localStorage.setItem('email', 'thiago.silva@b8one.com')
    const state = window.localStorage.getItem('state')
    const email = window.localStorage.getItem('email')
    const currentLocation = window.location.pathname

    if(state) {
      clickedState({variables: {
        input: {
            email,
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
        getInfo,
        storeInfo
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
