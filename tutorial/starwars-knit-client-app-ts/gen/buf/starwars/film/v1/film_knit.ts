// @generated by protoc-gen-knit-es v0.2.0 with parameter "target=ts"
// @generated from file buf/starwars/film/v1/film.proto (package buf.starwars.film.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

export type FilmService = {
  "buf.starwars.film.v1.FilmService": {
    fetch: {
    };
    do: {
      getFilms: { $: FilmsRequest; value: FilmsResponse; };
    };
    listen: {
    };
  };
};

export interface Film {
  filmId: string;
  episodeNumber: bigint;
  title: string;
  openingText: string;
  directors: Array<string>;
  producers: Array<string>;
  characterIds: Array<string>;
  planetIds: Array<string>;
  starshipIds: Array<string>;
  vehicleIds: Array<string>;
  speciesIds: Array<string>;
};

export interface FilmsRequest {
  filmIds: Array<string>;
  limit: number;
};

export interface FilmsResponse {
  films: Array<Film>;
};

