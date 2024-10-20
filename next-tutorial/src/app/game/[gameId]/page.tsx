interface Props {
    params: {
        gameId: string;
    }
}
export default function GameDetails({ params }: Props) {
  return <h1>Details about game {params.gameId}</h1>;
}

