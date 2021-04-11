import React, {createContext, useState} from 'react';

export const ModalContext = createContext();

const ModalProvider = ({children}) => {
    const modalsStatus = {
        order: false,
        filter: false
    }
    const [modals, setModals] = useState(modalsStatus)

    const orderModalOn =() =>{
        setModals({...modals, order: true})
    }
    const filterModalOn =() =>{
        setModals({...modals, filter: true})
    }
    const modalsOff = () => {
        setModals(modalsStatus);
    }

    return (
        <ModalContext.Provider value={{modals, orderModalOn, filterModalOn, modalsOff}}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;
