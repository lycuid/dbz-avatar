type Maybe<T> = T | undefined;

type AvatarPartID
  = 'face'
  | 'eyes'
  | 'nose'
  | 'mouth'
  | 'hair'
  | 'background';

interface AvatarPartObject {
  readonly components: React.FC<any>[]
  readonly previewGroup?: string
  readonly defaultColors: string[]
}
interface AvatarPartSelection {
  id: number
  fill: string
}
interface AvatarpartComplete extends AvatarPartSelection {
  component: React.FC<any>,
  defaultColors: string[]
}

type AvatarParts = { [name in AvatarPartID]: AvatarPartObject };
type AvatarPartState = { [name in AvatarPartID]: AvatarPartSelection }


type AvatarPartHandler = {
  get: (partID: AvatarPartID) => AvatarpartComplete,
  update: (name: AvatarPartID, state: Partial<AvatarPartSelection>) => void,
}
type AvatarAppContext = { avatarPart: AvatarPartHandler }

type ImageFormat = 'svg' | 'png' | 'jpeg';
type DownloadableImageFormats = { [k in ImageFormat]: string };
