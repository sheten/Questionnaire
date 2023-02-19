import React, { useContext } from "react";
import styles from 'styles/components/common/Header.module.scss';
import { ActiveModalContext } from "contexts";
import { EActiveModal } from "utils/enums";
import { FaUserAstronaut } from 'react-icons/fa'
import Image from "next/image";

const Header: React.FC = () => {
  // UseContexts
  const { setActiveModal } = useContext(ActiveModalContext);

  // Returns
  return (
    <div className={styles.wrap}>
      <div className={styles.innerWrap}>
        <div className={styles.logoWrapper}>
          <Image alt="logo" fill src={'/logo.svg'} />
        </div>
        <div>Questionnaire</div>
        <div className={styles.userIconWrap}>
          <FaUserAstronaut onClick={() => setActiveModal(EActiveModal.Auth)} />
        </div>
      </div>
    </div>
  )
}

export default Header;