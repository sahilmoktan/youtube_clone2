// contextApi.tsx
import React, { createContext, useState, useEffect } from 'react';
import { fetchDataFromApi } from '../utils/api'; 

interface AppContextProps {
  children: React.ReactNode;
}

interface AppContextState {
  loading: boolean;
  searchResults: any[]; // Adjust the type based on the API response structure
  selectedCategory: string;
  mobileMenu: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = createContext<AppContextState | undefined>(undefined);

export const AppContextProvider: React.FC<AppContextProps> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]); // Adjust the type based on the API response structure
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [mobileMenu, setMobileMenu] = useState(false);

  const fetchSelectedCategoryData = async (query: string) => {
    setLoading(true);
    try {
      const data = await fetchDataFromApi(query);
      setSearchResults(data.contents);
    } catch (error) {
      console.error('Error in fetchSelectedCategoryData:', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSelectedCategoryData(selectedCategory);
  }, [selectedCategory]);

  const contextValue: AppContextState = {
    loading,
    setLoading,
    searchResults,
    selectedCategory,
    setSelectedCategory,
    mobileMenu,
    setMobileMenu,
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

export const useAppContext = (): AppContextState => {
  const context = React.useContext(Context);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};
