import FaceList from '../components/AvatarParts/face';
import EyeList from '../components/AvatarParts/eyes';
import NoseList from '../components/AvatarParts/nose';
import MouthList from '../components/AvatarParts/mouth';
import BackHairList from '../components/AvatarParts/backhair';
import FrontHairList from '../components/AvatarParts/fronthair';
import HairSeperatorList from '../components/AvatarParts/hairseperator';
import BackgroundList from '../components/AvatarParts/background';

// The final image formation will exactly be in the order
// of the following array.
export const AVATAR_PARTS_QUEUE: AvatarPartQueueItem[] = [
  { id: 'background', components: BackgroundList },
  { id: 'hair', components: BackHairList },
  { id: 'hair', components: HairSeperatorList },
  { id: 'face', components: FaceList },
  { id: 'eyes', components: EyeList },
  { id: 'nose', components: NoseList },
  { id: 'mouth', components: MouthList },
  { id: 'hair', components: FrontHairList },
];

export const AVATAR_PART_CONFIGS: AvatarPartConfigs = {
  background: {
    defaultColors: ['#ffdd59', '#6dbb58', '#fa8072', '#000000', '#708090'],
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
    defaultColors: ['#000000', '#d58b01', '#0b8891', '#328832', '#ff3f34'],
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
