export interface PixabayImage {
  largeImageURL: string;
  webformatURL: string;
  tags: string;
}

export interface PixabayResponse {
  totalHits: number;
  hits: PixabayImage[];
}
