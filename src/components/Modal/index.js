import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Overlay, Container, ModalContent, Actions,
} from './styles';

class Modal extends Component {
  static propTypes = {
    onCancel: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
  };

  state = {
    userInput: '',
  };

  render() {
    const { userInput } = this.state;
    const { onCancel, onSave } = this.props;
    return (
      <Overlay>
        <Container>
          <ModalContent>
            <strong>Adicionar novo usuário</strong>
            <input
              type="text"
              placeholder="Usuário no Github"
              value={userInput}
              onChange={e => this.setState({ userInput: e.target.value })}
            />
            <Actions>
              <button type="button" className="cancel" onClick={() => onCancel()}>
                Cancelar
              </button>
              <button type="button" className="add" onClick={() => onSave(userInput)}>
                Salvar
              </button>
            </Actions>
          </ModalContent>
        </Container>
      </Overlay>
    );
  }
}

export default Modal;
