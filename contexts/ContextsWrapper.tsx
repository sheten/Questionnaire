import { ActiveModalContext } from 'contexts';
import { Fragment, useState } from 'react';
import { EActiveModal } from 'utils/enums';

type Props = {
  children: React.ReactNode,
}

const ContextsWrapper: React.FC<Props> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<string>(EActiveModal.None);

  return (
    <Fragment>
      <ActiveModalContext.Provider value={{ activeModal, setActiveModal }}>
        {children}
      </ActiveModalContext.Provider>
    </Fragment>
  );
};


export default ContextsWrapper;