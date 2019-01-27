const Sound = require('react-native-sound');

Sound.setCategory('Playback');

const soundFiles = ['song0.mp3', 'song1.mp3', 'song2.mp3', 'song3.mp3'];

export default class MusicPlayer {
    loadedCount = 0;
    sounds = [];

    constructor() {
        this.sounds = soundFiles.map(file => {
            return new Sound(file, Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    console.log('failed to load the sound', error);
                } else {
                    this.onSoundLoaded();
                }
            });
        })
    }

    onSoundLoaded() {
        this.loadedCount++;
        if (this.loadedCount == soundFiles.length) {
            this.sounds.forEach(sound => {
                sound.play();
                sound.setVolume(0);
                sound.setNumberOfLoops(-1);
            });
        }
    }

}


