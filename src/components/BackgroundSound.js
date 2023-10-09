import { useState, useEffect } from "react";
import titleFile from "../backsound/title.mp3";
import levelUpFile from "../backsound/level-up.mp3";
import gameOverFile from "../backsound/game-over.mp3";
import gameStartFile from "../backsound/game-start.mp3";

const useAudioPlayer = (file, loop = true) => {
  const [audio] = useState(() => {
    const audioElement = new Audio(file);
    audioElement.loop = loop;
    return audioElement;
  });

  const play = () => {
    audio.play().catch((e) => {
      console.warn(
        "Auto-play was prevented. Consider using user interactions to play audio."
      );
    });
  };

  const pause = () => audio.pause();

  useEffect(() => {
    return () => {
      audio.pause();
    };
  }, [audio]);

  return [play, pause];
};

export const TitleAudioPlayer = ({ startplay = false }) => {
  const [play] = useAudioPlayer(titleFile);
  useEffect(() => {
    if (startplay) play();
  }, [startplay, play]);

  return null;
};

export const LevelUpAudioPlayer = ({ startplay = false }) => {
  const [play] = useAudioPlayer(levelUpFile, false);
  useEffect(() => {
    if (startplay) play();
  }, [startplay, play]);

  return null;
};

export const GameOverAudioPlayer = ({ startplay = false }) => {
  const [play] = useAudioPlayer(gameOverFile, false);
  useEffect(() => {
    if (startplay) play();
  }, [startplay, play]);

  return null;
};

export const GameStartAudioPlayer = ({ startplay = false }) => {
  const [play] = useAudioPlayer(gameStartFile);
  useEffect(() => {
    if (startplay) play();
  }, [startplay, play]);

  return null;
};
