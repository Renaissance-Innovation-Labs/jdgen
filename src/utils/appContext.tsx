import { useState, createContext, useEffect } from 'react';

import { AppContextType, PropsWithChildren } from './context';

const defaultContextValue: AppContextType = {
  view: '',
  jobDesc: '',
  setView: () => {},
  setJobDesc: () => {},
  isDarkMode: false,
  toggleDarkMode: () => {},
};

export const AppContext = createContext<AppContextType>(defaultContextValue);

// Function to get the current theme
const getTheme = (): boolean => {
  const savedTheme = localStorage.getItem('darkMode');
  return savedTheme ? savedTheme === 'true' : false;
};

// Function to set the theme
const setTheme = (isDark: boolean) => {
  localStorage.setItem('darkMode', isDark.toString());
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

// Apply the theme immediately on script load
setTheme(getTheme());

export const AppContextProvider = ({ children }: PropsWithChildren) => {
  const [view, setView] = useState<string>('');
  const [jobDesc, setJobDesc] = useState<string>('');

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => getTheme());

  useEffect(() => {
    setTheme(isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const value = {
    view,
    setView,
    jobDesc,
    setJobDesc,
    isDarkMode,
    toggleDarkMode,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
