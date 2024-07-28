import { FC } from "react";
import "./player.scss";

interface PlayerProps {
  videoUrl: string;
}

export const Player: FC<PlayerProps> = ({ videoUrl }) => {
  return (
    <video className="player" controls autoPlay loop>
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
