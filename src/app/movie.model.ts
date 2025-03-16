export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
}

export interface MovieResponse {
  results: Movie[];
  page: number;
  total_results: number;
  total_pages: number;
}
