type AvatarPartID = 'face' | 'eyes' | 'nose' | 'mouth' | 'hair' | 'background';

interface AvatarPartObject {
  component: React.FC<any>,
  defaultColors: string[]
}

type AvatarParts = { [index in AvatarPartID]: AvatarPartObject[] };
type AvatarPart = {
  cIndex: number
  fill: string
}
type Maybe<T> = T | undefined;

type AvatarPartState = { [name in AvatarPartID]: AvatarPart }

type AvatarAppContext = {
  updateAvatar: (name: AvatarPartID, newState: any) => void,
  getAvatarPart: (partID: AvatarPartID) => {
    cIndex: number;
    fill: string;
    component: React.FC<any>;
    defaultColors: string[];
  }
}

type ImageFormat = 'svg' | 'png' | 'jpeg';

type DownloadableImageFormats = { [k in ImageFormat]: string };
