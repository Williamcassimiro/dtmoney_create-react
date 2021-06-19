import Modal from 'react-modal';
import incomeImag from '../../assets/income.svg';
import outcomeImag from '../../assets/outcome.svg';
import closeImag from '../../assets/close.svg';
import { Container, TransactionTypeContainer, RadioBox } from '../NewTransactionModal/styles';

import { useState} from 'react'

interface NewTransactionModalProps {
    isOpen: boolean;
    OnRequestClose: () => void;
}


export function NewTransactionModal({isOpen, OnRequestClose}: NewTransactionModalProps){
    
    const [type, setType] = useState('deposit');    

    

    return(
        <Modal 
          isOpen={isOpen} 
          onRequestClose={OnRequestClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
        >
        
            <button type="button" onClick={OnRequestClose} className="react-modal-close">
                <img src={closeImag} alt="Fechar modal" />
            </button>



          <Container>

            <h2>Cadastrar transação</h2>

                <input
                    placeholder="Título"
                />
                <input
                    type="number"
                    placeholder="Valor"
                />
                
                <TransactionTypeContainer>
                    <RadioBox 
                    
                    type ="button"
                    onClick={() => { setType ('withdraw');}}
                    isActive = { type === 'withdraw'}
                    
                    >
                        <img src={incomeImag} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <TransactionTypeContainer>
                    <RadioBox 
                    
                    type="button"
                    onClick = { () => { setType ('deposit'); }}
                    isActive = { type === 'deposit'}

                    >
                        <img src={outcomeImag} alt="Sainda" />
                        <span>Sainda</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    placeholder="Categoria"
                />
                <button type="submit">
                   cadastrar
                </button>

          </Container>


       </Modal>
    );
}