import { FC } from "react";
import ReactPlayer from "react-player";
import "./player.scss";

interface PlayerProps {
  videoUrl: string;
}

export const Player: FC<PlayerProps> = ({ videoUrl }) => {
  return (
    <ReactPlayer
      className="player"
      light={true}
      url={videoUrl}
      playing={true}
      controls
      width={"100vw"}
      height={"70svh"}
    />
    // <iframe
    //   src="https://drive.usercontent.google.com/u/0/uc?id=1ruRPBGta_gbtaAsBoS_I3qc8bjg0T5Wn&export=download"
    //   allow="autoplay; encrypted-media; screen-wake-lock"
    // ></iframe>
  );
};
