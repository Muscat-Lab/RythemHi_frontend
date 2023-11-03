export type ArtistType = {
  id: string;
  name: string;
  profileImageUrl: string;
  type: string;
};

export type AllArtistType = {
  choices: Array<ArtistType>;
  nextCursor: string;
};
