import { useContext, useState, useEffect } from 'react';

import { AppContext } from '../utils/appContext';

import JDForm from './JDForm';
import JDGenerated from './JDGenerated';

const JDWidget = () => {
  const { view, setView } = useContext(AppContext);

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const openModal = () => {
      setView('form');
    };
    const elements = document.getElementsByClassName('jd-widget-trigger');

    if (
      document
        ?.getElementById('jdgen-widget-root')
        ?.getAttribute('data-hide-button')
    ) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }

    Array.from(elements).forEach(function (element) {
      element.addEventListener('click', openModal);
    });

    return () => {
      Array.from(elements).forEach(function (element) {
        element.removeEventListener('click', openModal);
      });
    };
  }, []);

  return (
    <div>
      {view === 'form' && <JDForm />}

      {view === 'result' && <JDGenerated />}

      {showButton && (
        <button
          onClick={() => setView('form')}
          className="fixed bottom-4 md:bottom-12 right-2 md:right-24 z-[996]"
        >
          <img src={`https://jdgen.vercel.app/jd-logo.svg`} alt="Logo" />
        </button>
      )}
    </div>
  );
};

export default JDWidget;
