type Maybe<T> = T | undefined;

type AvatarPartID = 'face' | 'eyes' | 'nose' | 'mouth' | 'hair' | 'background';

type AvatarPartQueueItem = {
  id: AvatarPartID;
  components: React.FC<any>[];
};

type AvatarPartConfig = {
  defaultColors: string[];
  previewBounds: [number, number, number, number];
};
type AvatarPartConfigs = { [n in AvatarPartID]: AvatarPartConfig };

interface AvatarPartConfigSelected {
  index: number;
  fill: string;
}

type AvatarParts = { [n in AvatarPartID]: AvatarPartConfigSelected };

interface AvatarPartComplete
  extends AvatarPartConfig,
    AvatarPartConfigSelected {}

type AvatarHandler = {
  get: (partID: AvatarPartID) => AvatarPartComplete;
  update: (
    name: AvatarPartID,
    state: Partial<AvatarPartConfigSelected>
  ) => void;
};
type AvatarAppContext = { avatar: AvatarHandler };

type ImageFormat = 'svg' | 'png' | 'jpeg';
type DownloadableImageFormats = { [k in ImageFormat]: string };
