import React, { useContext } from 'react';
import { AppContext } from '../../utils/appContext';

const ThemeProvider = () => {
  const { isDarkMode, toggleDarkMode } = useContext(AppContext);

  return (
    <button onClick={toggleDarkMode} className="p-2 rounded-md">
      {isDarkMode ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.03009 12.42C2.39009 17.57 6.76009 21.76 11.9901 21.99C15.6801 22.15 18.9801 20.43 20.9601 17.72C21.7801 16.61 21.3401 15.87 19.9701 16.12C19.3001 16.24 18.6101 16.29 17.8901 16.26C13.0001 16.06 9.00009 11.97 8.98009 7.14C8.97009 5.84 9.24009 4.61 9.73009 3.49C10.2701 2.25 9.62009 1.66 8.37009 2.19C4.41009 3.86 1.70009 7.85 2.03009 12.42Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.5 23.8958C20.1369 23.8958 23.8958 20.1369 23.8958 15.5C23.8958 10.8631 20.1369 7.10416 15.5 7.10416C10.8631 7.10416 7.10413 10.8631 7.10413 15.5C7.10413 20.1369 10.8631 23.8958 15.5 23.8958Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.7225 24.7225L24.5546 24.5546M24.5546 6.44542L24.7225 6.2775L24.5546 6.44542ZM6.27754 24.7225L6.44546 24.5546L6.27754 24.7225ZM15.5 2.68667V2.58334V2.68667ZM15.5 28.4167V28.3133V28.4167ZM2.68671 15.5H2.58337H2.68671ZM28.4167 15.5H28.3134H28.4167ZM6.44546 6.44542L6.27754 6.2775L6.44546 6.44542Z"
            stroke="#292D32"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
};

export default ThemeProvider;
