import Modal from 'react-modal'
import { Container } from './styles'

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