export interface Entries {
  after: string | null;
  before: string | null;
  data: Entry[];
}

export interface Entry {
  id: string;
  name: string;
  thumbnail: string;
  created: number;
  num_comments: number;
  author: string;
  score: number;
  title: string;
  selftext: string;
}

export interface EntriesQueryParams {
  limit: string;
  after?: string;
  before?: string;
  count?: number;
}
