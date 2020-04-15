import Faces from '../components/AvatarParts/face';
import Eyes from '../components/AvatarParts/eyes';
import Noses from '../components/AvatarParts/nose';
import Mouths from '../components/AvatarParts/mouth';
import Hairs from '../components/AvatarParts/hair';


export const AVATAR_PARTS: AvatarParts = {
  face: Faces.map((face) => ({
    component: face,
    defaultColors: ['#e8bb9e', '#708090', '#fa8072'],
  })),
  eyes: Eyes.map((eyes) => ({
    component: eyes,
    defaultColors: ['#000000', '#00ffff', '#00ff00', '#ff0000'],
  })),
  nose: Noses.map((nose) => ({
    component: nose,
    defaultColors: ['#000000'],
  })),
  mouth: Mouths.map((mouth) => ({
    component: mouth,
    defaultColors: [],
  })),
  hair: Hairs.map((hair) => ({
    component: hair,
    defaultColors: ['#000000', '#00ff00', '#0000ff', '#ff0000', '#708090', '#fa8072'],
  })),
};

export const BOUNDS = {
  face: [30, 40, 140, 140],
  eyes: [60, 100, 80, 80],
  nose: [90, 140, 20, 20],
  mouth: [80, 140, 40, 40],
  hair: [5, 0, 185, 190],
}
