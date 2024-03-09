// YoutubeMain.tsx
import React from 'react';
import { useAppContext } from '../context/contextApi';

const YoutubeMain = () => {
  const { loading, searchResults } = useAppContext();

  // Use loading and searchResults in your component

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && searchResults && (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default YoutubeMain;
