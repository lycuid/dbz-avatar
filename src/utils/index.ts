export const unicode2b64 = (s: string): string => {
  return btoa(
    encodeURIComponent(s)
      .replace(
        /%([0-9A-F]{2})/g,
        (_, p) => String.fromCharCode(parseInt(p, 16))
      )
  );
}

export const getSerializedSVGString = (svg: SVGSVGElement, size = 100): string => {
  const serialized = new XMLSerializer().serializeToString(svg);
  const startString = `<svg width="${size}" height="${size}"`;

  return serialized.replace(/<svg/, startString);
}

export const asyncCanvasToBlob = (canvas: HTMLCanvasElement, type: string) => (
  new Promise((f: BlobCallback) => canvas.toBlob(f, type))
);

export const getSVGDataUri = (
  svgString: string,
  prevObjectURL: string | null
) => {
  const w = window.URL || window.webkitURL || window;
  if (prevObjectURL) { w.revokeObjectURL(prevObjectURL); }

  const blob = new Blob([svgString], { type: 'image/svg+xml' });

  return w.createObjectURL(blob);
}

type Options = {
  svgString: string,
  size: Maybe<number>,
  imageObjs: { type: ImageFormat, prevUri: string | null }[]
};

export const getImageDataUri = (
  fn: (bs: DownloadableImageFormats) => void,
  options: Options
) => {
  const { svgString, size, imageObjs } = options;

  const w = window.URL || window.webkitURL || window;
  imageObjs.forEach(({ prevUri }) => {
    if (prevUri) { w.revokeObjectURL(prevUri); }
  });


  const svgUri = `data:image/svg+xml;base64,${unicode2b64(svgString)}`;
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d') as CanvasRenderingContext2D;
  canvas.width = size || 100;
  canvas.height = size || 100;

  const img = new Image();
  img.onload = () => {
    context.drawImage(img, 0, 0);

    Promise.all(imageObjs.map(({ type }) => asyncCanvasToBlob(canvas, `image/${type}`)))
      .then((blobs) => {
        return blobs.reduce((acc, blob, index) => {
          acc[imageObjs[index].type] = blob ? w.createObjectURL(blob) : '';
          return acc;
        }, {} as DownloadableImageFormats);
      })
      .then(fn);
  }
  img.src = svgUri;
}

