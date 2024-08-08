import { ReactNode } from 'react';

export type ModalProps = {
  name: string;
  status: boolean;
};

export interface OpenModalProps {
  setOpenModal: (modalState: { name: string; status: boolean }) => void;
}

export interface AIResponse {
  response?: string;
  error?: string;
}

export interface PropsWithChildren {
  children: ReactNode;
}

export type AppContextType = {
  view: string;
  jobDesc: string;
  setView: Dispatch<SetStateAction<string>>;
  setJobDesc: Dispatch<SetStateAction<string>>;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};
