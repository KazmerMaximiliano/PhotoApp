import React, {createContext, useState, useContext, ReactNode} from 'react';
import {Photo, PhotoContextData} from './types';

const PhotoContext = createContext<PhotoContextData | undefined>(undefined);

export const usePhoto = (): PhotoContextData => {
  const context = useContext(PhotoContext);
  if (!context) {
    throw new Error('usePhoto must be used within a PhotoProvider');
  }
  return context;
};

interface PhotoProviderProps {
  children: ReactNode;
}

export const PhotoProvider = ({children}: PhotoProviderProps): JSX.Element => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  const addPhoto = (photo: Photo) => {
    setPhotos(prevPhotos => [...prevPhotos, photo]);
  };

  return (
    <PhotoContext.Provider value={{photos, addPhoto}}>
      {children}
    </PhotoContext.Provider>
  );
};
