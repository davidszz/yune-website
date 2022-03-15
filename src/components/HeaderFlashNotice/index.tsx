import { ReactNode, useEffect, useState } from 'react';

import { FLASH_NOTICE_KEY_REGEX, FLASH_NOTICE_KEY_TEMPLATE } from '@utils/Constants';

import { Container, Notice, CloseBtn } from './styles';

interface IProps {
  children?: ReactNode;

  storeKey: string;
  removeOthersKey?: boolean;
  removeKeys?: string[];

  backgroundColor?: string;
}

export function HeaderFlashNotice({
  children,
  storeKey,
  removeOthersKey,
  removeKeys,
  backgroundColor
}: IProps) {
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    if (removeOthersKey) {
      for (let i = 0; i < localStorage.length; i++) {
        const storedKey = localStorage.key(i);
        if (storedKey && FLASH_NOTICE_KEY_REGEX.test(storedKey)) {
          const realKey = storedKey.replace(FLASH_NOTICE_KEY_REGEX, '$1');
          if (realKey !== storeKey && (!removeKeys?.length || removeKeys.includes(realKey))) {
            localStorage.removeItem(storedKey);
          }
        }
      }
    }
    
    const fullKey = FLASH_NOTICE_KEY_TEMPLATE.replace('{key}', storeKey);
    if (!Boolean(localStorage.getItem(fullKey))) {
      setShow(true);
    }
  }, [storeKey, removeOthersKey, removeKeys]);

  function handleCloseBtnClick() {
    localStorage.setItem(FLASH_NOTICE_KEY_TEMPLATE.replace('{key}', storeKey), 'true');
    setShow(false);
  }

  return (
    <>
      {show && (
        <Container color={backgroundColor}>
          <Notice>
            {children}
          </Notice>
          <CloseBtn onClick={handleCloseBtnClick}/>
        </Container>
      )}
    </>
  );
}