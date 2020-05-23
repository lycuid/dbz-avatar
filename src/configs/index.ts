import Faces from '../components/AvatarParts/face';
import Eyes from '../components/AvatarParts/eyes';
import Noses from '../components/AvatarParts/nose';
import Mouths from '../components/AvatarParts/mouth';
import BackHairs from '../components/AvatarParts/backhair';
import FrontHairs from '../components/AvatarParts/fronthair';
import HairSeperators from '../components/AvatarParts/hairseperator';
import Backgrounds from '../components/AvatarParts/background';

export const AVATAR_PARTS_QUEUE: AvatarPartQueueItem[] = [
  { id: 'background', components: Backgrounds },
  { id: 'hair', components: BackHairs },
  { id: 'hair', components: HairSeperators },
  { id: 'face', components: Faces },
  { id: 'eyes', components: Eyes },
  { id: 'nose', components: Noses },
  { id: 'mouth', components: Mouths },
  { id: 'hair', components: FrontHairs },
]

export const AVATAR_PART_CONFIGS: AvatarPartConfigs = {
  background: {
    defaultColors: ['#6dbb58', '#fa8072', '#000000', '#ffdd59', '#708090'],
    previewBounds: [0, 0, 250, 250],
  },
  hair: {
    defaultColors: ['#000000', '#ffdd59', '#6dbb58', '#708090', '#fa8072'],
    previewBounds: [30, 25, 185, 190],
  },
  face: {
    defaultColors: ['#e8bb9e', '#fbd2c7', '#fecd3c', '#c9e6dc', '#0be881'],
    previewBounds: [55, 65, 140, 140],
  },
  eyes: {
    defaultColors: ['#000000', '#ffa801', '#328832', '#ff3f34'],
    previewBounds: [85, 125, 80, 80],
  },
  nose: {
    defaultColors: [],
    previewBounds: [115, 165, 20, 20],
  },
  mouth: {
    defaultColors: [],
    previewBounds: [105, 165, 40, 40],
  },
};

export const AVATAR_PART_IDS = Object.keys(AVATAR_PART_CONFIGS) as AvatarPartID[];

export const SHORT_NAMES: { [k in ImageFormat]: string } = {
  svg: 'svg',
  png: 'png',
  jpeg: 'jpg',
};

export const IMAGE_URIS: { [k in ImageFormat]: string } = {
  svg: '',
  png: '',
  jpeg: '',
};
