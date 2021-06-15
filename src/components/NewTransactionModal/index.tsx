import Modal from 'react-modal'
import closeImag from '../../assets/close.svg'
import { Container } from '../NewTransactionModal/styles'

interface NewTransactionModalProps {
    isOpen: boolean;
    OnRequestClose: () => void;
}


export function NewTransactionModal({isOpen, OnRequestClose}: NewTransactionModalProps){

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