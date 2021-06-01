import Modal from 'react-modal'
import { useState } from 'react'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

import {NewTransactionModal} from "./components/NewTransactionModal";
 
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setisNewTransactionModalOpen ] = useState(false);

  function handleOpenNewTransactionModal(){
      setisNewTransactionModalOpen(true);
  }
  function handleClosenNewTransactionModal(){
      setisNewTransactionModalOpen(false);
  }

  return (
    <>
       <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />


       <Dashboard />

       <NewTransactionModal 
       
          isOpen={isNewTransactionModalOpen}
          OnRequestClose={handleClosenNewTransactionModal}
       
       />

       <GlobalStyle />  
    </>
  );
}

