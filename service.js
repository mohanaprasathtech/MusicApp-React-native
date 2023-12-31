import TrackPlayer, {Event, RepeatMode} from 'react-native-track-player';
import songs from './data/data';

export async function setupPlayer() {
  issetup = false;
  try {
    await TrackPlayer.getActiveTrackIndex();
    issetup = true;
  } catch (error) {
    await TrackPlayer.setupPlayer();
    issetup = true;
  } finally {
    return issetup;
  }
}

export const addTrack = async () => {
  await TrackPlayer.add(songs);
};

export async function playbackService() {
  try {
    TrackPlayer.addEventListener(Event.RemotePlay, () => {
      TrackPlayer.play();
    });

    TrackPlayer.addEventListener(Event.RemotePause, () => {
      TrackPlayer.pause();
    });

    TrackPlayer.addEventListener(Event.RemoteNext, () => {
      TrackPlayer.skipToNext();
    });

    TrackPlayer.addEventListener(Event.RemotePrevious, () => {
      TrackPlayer.skipToPrevious();
    });

    TrackPlayer.addEventListener(Event.RemoteStop, () => {
      TrackPlayer.destroy();
    });
  } catch (error) {
    console.log(error,"something failed")
  }
}
