type Maybe<T> = T | undefined;

type AvatarPartID
  = 'face'
  | 'eyes'
  | 'nose'
  | 'mouth'
  | 'hair'
  | 'background';

interface AvatarPartObject {
  component: React.FC<any>,
  defaultColors: string[]
}
interface AvatarPartSelection {
  id: number
  fill: string
}
interface AvatarpartComplete
  extends AvatarPartObject, AvatarPartSelection { }

type AvatarParts = { [name in AvatarPartID]: AvatarPartObject[] };
type AvatarPartState = { [name in AvatarPartID]: AvatarPartSelection }


type AvatarPartHandler = {
  get: (partID: AvatarPartID) => AvatarpartComplete,
  update: (name: AvatarPartID, state: Partial<AvatarPartSelection>) => void,
}
type AvatarAppContext = { avatarPart: AvatarPartHandler }

type ImageFormat = 'svg' | 'png' | 'jpeg';
type DownloadableImageFormats = { [k in ImageFormat]: string };
