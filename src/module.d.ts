type PartName = 'face' | 'eyes' | 'nose' | 'mouth' | 'hair';

interface Part {
  component: React.FC<any>,
  defaultColors: string[]
}

type AvatarParts = { [index in PartName]: Part[] };
