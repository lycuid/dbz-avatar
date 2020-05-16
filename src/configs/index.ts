import Faces from '../components/AvatarParts/face';
import Eyes from '../components/AvatarParts/eyes';
import Noses from '../components/AvatarParts/nose';
import Mouths from '../components/AvatarParts/mouth';
import Hairs from '../components/AvatarParts/hair';
import Backgrounds from '../components/AvatarParts/background';


export const AVATAR_PARTS: AvatarParts = {
  background: Backgrounds.map((background) => ({
    component: background,
    defaultColors: ['#6dbb58', '#fa8072', '#000000', '#ffdd59', '#708090'],
  })),
  face: Faces.map((face) => ({
    component: face,
    defaultColors: ['#e8bb9e', '#fbd2c7', '#fecd3c', '#c9e6dc', '#0be881'],
  })),
  eyes: Eyes.map((eyes) => ({
    component: eyes,
    defaultColors: ['#000000', '#ffa801', '#328832', '#ff3f34'],
  })),
  nose: Noses.map((nose) => ({
    component: nose,
    defaultColors: [],
  })),
  mouth: Mouths.map((mouth) => ({
    component: mouth,
    defaultColors: [],
  })),
  hair: Hairs.map((hair) => ({
    component: hair,
    defaultColors: ['#000000', '#ffdd59', '#6dbb58', '#708090', '#fa8072'],
  })),
};

export const AVATAR_PART_IDS = Object.keys(AVATAR_PARTS) as AvatarPartID[]

export const BOUNDS = {
  face: [55, 65, 140, 140],
  eyes: [85, 125, 80, 80],
  nose: [115, 165, 20, 20],
  mouth: [105, 165, 40, 40],
  hair: [30, 25, 185, 190],
  background: [0, 0, 250, 250],
}

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
