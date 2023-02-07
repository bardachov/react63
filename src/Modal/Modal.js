import { PureComponent } from 'react';
import { ModalContent, ModalWrapper } from './Modal.styled';

export class Modal extends PureComponent {
  closeCallback = (event) => {
    const { togleHandler } = this.props;

    if (event.key === 'Escape') {
      togleHandler(false);
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.closeCallback);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeCallback);
  }

  render() {
    const { children } = this.props;
    return (
      <ModalWrapper>
        <ModalContent>{children}</ModalContent>
      </ModalWrapper>
    );
  }
}
