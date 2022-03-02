import { MutableRefObject, ReactNode, useRef, MouseEvent } from 'react';
import { CSSTransition } from 'react-transition-group';
import { MdOutlineClose } from 'react-icons/md';

import { IModalProps, Overlay, Container, ModalHeader, CloseBtn, ModalTitle, ModalBody } from './styles';

interface IProps extends IModalProps {
  children?: ReactNode;
  open?: boolean;
  title?: ReactNode | string;
  handleClose?: () => void;
}

export function Modal({
  children,
  open = false,
  title,
  width = 400,
  handleClose,
}: IProps) {
  const overlayRef = useRef() as MutableRefObject<HTMLDivElement>;
  const nodeRef = useRef() as MutableRefObject<HTMLDivElement>;
  
  function handleModalClose() {
    if (open && handleClose) {
      handleClose();
    }
  }

  function handleOverlayClick(event: MouseEvent) {
      if (overlayRef.current === event.target) {
        handleModalClose();
      }
  }

  return (
    <CSSTransition 
      in={open} 
      timeout={300}
      classNames="transition"
      nodeRef={nodeRef}
      mountOnEnter
      unmountOnExit
    >
      <Overlay ref={overlayRef} onClick={handleOverlayClick}>
        <Container ref={nodeRef} width={width}>
          <ModalHeader>
            {title && (
              <ModalTitle>
                {title}
              </ModalTitle>
            )}
            <CloseBtn onClick={handleModalClose}>
              <MdOutlineClose size="24px"/>
            </CloseBtn>
          </ModalHeader>
          <ModalBody>
            {children}
          </ModalBody>
        </Container>
      </Overlay>
    </CSSTransition>
  );
}