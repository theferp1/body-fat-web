import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useRef,
} from "react";

// Definição do tipo para o arquivo
export interface MainContextType {
  file: File | null;
  setFile: (file: File | null) => void;
  analyze: boolean;
  setAnalyze: (analyze: boolean) => void;
  previewSrc: string | undefined;
  setPreviewSrc: (previewURL: string | undefined) => void;
  mainRef: React.RefObject<HTMLDivElement>;
  documentationRef: React.RefObject<HTMLDivElement>;
  scrollToMain: () => void;
  scrollToDocumentation: () => void;
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
  const mainRef = useRef<HTMLDivElement>(null);
  const documentationRef = useRef<HTMLDivElement>(null);

  function scrollToMain() {
    if (mainRef.current) {
      mainRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  const scrollToDocumentation = () => {
    if (documentationRef.current) {
      documentationRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <MainContext.Provider
      value={{
        file,
        setFile,
        analyze,
        setAnalyze,
        previewSrc,
        setPreviewSrc,
        mainRef,
        documentationRef,
        scrollToDocumentation,
        scrollToMain,
      }}
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
