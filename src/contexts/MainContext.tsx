import React, { createContext, useContext, useState, ReactNode } from "react";

// Definição do tipo para o arquivo
export interface MainContextType {
  file: File | null;
  setFile: (file: File | null) => void;
  analyze: boolean;
  setAnalyze: (analyze: boolean) => void;
  previewSrc: string | undefined;
  setPreviewSrc: (previewURL: string | undefined) => void;
}

// Criação do contexto
const MainContext = createContext<MainContextType | undefined>(undefined);

// Componente provedor do contexto
export const MainProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [analyze, setAnalyze] = useState<boolean>(false);
  const [previewSrc, setPreviewSrc] = useState<string | undefined>(undefined);

  return (
    <MainContext.Provider
      value={{ file, setFile, analyze, setAnalyze, previewSrc, setPreviewSrc }}
    >
      {children}
    </MainContext.Provider>
  );
};

// Hook para utilizar o contexto
export const useMainContext = () => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("useFileContext must be used within a FileProvider");
  }
  return context;
};
