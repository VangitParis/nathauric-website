'use client';

import { useEffect, useState } from 'react';
import styles from '../styles/_cookieBanner.module.scss';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  
  

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.banner}>
      <p>Ce site utilise uniquement des cookies techniques nécessaires à son bon fonctionnement.</p>
      <button onClick={acceptCookies}>J’ai compris</button>
    </div>
  );
}

