type AvatarPartID = 'face' | 'eyes' | 'nose' | 'mouth' | 'hair';

interface AvatarPartObject {
  component: React.FC<any>,
  defaultColors: string[]
}

type AvatarParts = { [index in AvatarPartID]: AvatarPartObject[] };

type Maybe<T> = T | undefined;
