import { useLimeplayStore } from "@limeplay/core";
import { useEffect } from "react";

export default function PlayerOverlay() {
  const playback = useLimeplayStore((state) => state.playback);
  const player = useLimeplayStore((state) => state.player);
  const demoPlabackUrl =
    "https://storage.googleapis.com/nodejs-streaming.appspot.com/uploads/f6b7c492-e78f-4b26-b95f-81ea8ca21a18/1642708128072/manifest.mpd";

  useEffect(() => {
    if (player && player.getLoadMode() === 1) {
      const playerConfig = player.getConfiguration();

      player.load(demoPlabackUrl);
    }
  }, [player, playback]);
}
