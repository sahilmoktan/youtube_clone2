// import React, { createContext, useState, useEffect } from "react";

// import {fetchDataFromApi} from "../utils/api";
// export const Context = createContext();

// export const AppContext = (props) => {
//     const [loading, setLoading] = useState(false);
//     const [searchResults, setSearchResults] = useState([]);
//     const [selectedCategory, setSelectedCategory] = useState("New");
//     const [mobileMenu, setMobileMenu] = useState(false);

//     useEffect(() => {
//         fetchSelectedCategoryData(selectedCategory);
//     }, [selectedCategory]);

//     const fetchSelectedCategoryData = (query) => {
//         setLoading(true);
//         fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
//             console.log(contents);
//             setSearchResults(contents);
//             // setSearchResults(res)
//             setLoading(false);
//         });
//     };

//     return (
//         <Context.

//             value={{
//                 loading,
//                 setLoading,
//                 searchResults,
//                 selectedCategory,
//                 setSelectedCategory,
//                 mobileMenu,
//                 setMobileMenu,
//             }}
//         >
//             {props.children}
//         </Context.>
//     );
// };


import React, { createContext, useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";

interface AppContextProps {
  children: React.ReactNode;
}

export const Context = createContext<any>(null);

export const AppContext: React.FC<AppContextProps> = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchSelectedCategoryData(selectedCategory);
  }, [selectedCategory]);

  const fetchSelectedCategoryData = (query: string) => {
    setLoading(true);
    fetchDataFromApi(`search?q=${query}`).then(({ contents }) => {
      console.log(contents);
      setSearchResults(contents);
      setLoading(false);
    });
  };

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        selectedCategory,
        setSelectedCategory,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
