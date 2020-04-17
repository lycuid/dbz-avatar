import Faces from '../components/AvatarParts/face';
import Eyes from '../components/AvatarParts/eyes';
import Noses from '../components/AvatarParts/nose';
import Mouths from '../components/AvatarParts/mouth';
import Hairs from '../components/AvatarParts/hair';


export const AVATAR_PARTS: AvatarParts = {
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
  face: [30, 40, 140, 140],
  eyes: [60, 100, 80, 80],
  nose: [90, 140, 20, 20],
  mouth: [80, 140, 40, 40],
  hair: [5, 0, 185, 190],
}
