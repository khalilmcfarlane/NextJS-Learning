// Example of nested dynamic route

interface Props {
  params: {
    // You can take all params from route
    gameId: string;
    genreId: string;
  };
}
export default function GenreDetails({ params }: Props) {
  return <h1>Details about game {params.gameId} and genre {params.genreId}</h1>;
}
