export interface Photo {
  uri: string;
  location: {
    latitude: number;
    longitude: number;
  };
}

export interface PhotoContextData {
  photos: Photo[];
  addPhoto: (photo: Photo) => void;
}
