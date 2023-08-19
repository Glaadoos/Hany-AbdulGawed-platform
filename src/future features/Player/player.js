import { useShakaPlayer } from "@limeplay/shaka-player";
import { LimeplayProvider, OverlayOutlet, MediaOutlet } from "@limeplay/core";
import PlayerOverlay from '../PlayerOverlay/playerOverlay'

export default function Player() {
	const createPlayer = useShakaPlayer();

	return (
		<LimeplayProvider>
			<OverlayOutlet createPlayer={createPlayer}>
				<PlayerOverlay /> {/* Your custom overlay component */}
			</OverlayOutlet>
			<MediaOutlet>
				<video controls={false} playsInline autoPlay={false} />
			</MediaOutlet>
		</LimeplayProvider>
	);
}