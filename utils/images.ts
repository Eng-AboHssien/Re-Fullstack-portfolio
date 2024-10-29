// utils/images.ts

export interface ImageData {
  src: string;
  width: number;
  height: number;
  key: number;
}

const imagesHero: ImageData[] = [
  { src: "/html.jpg", width: 110, height: 100, key: 1 },
  { src: "/css.jpg", width: 110, height: 100, key: 2 },
  { src: "/javascript.jpg", width: 110, height: 100, key: 3 },
  { src: "/react.jpg", width: 110, height: 100, key: 4 },
  { src: "/vector.jpg", width: 110, height: 100, key: 8 },
  { src: "/bootstrap.jpg", width: 110, height: 100, key: 5 },
  { src: "/tailwind.jpg", width: 110, height: 100, key: 6 },
  { src: "/sass.jpg", width: 110, height: 100, key: 7 },
  { src: "/giticon.jpg", width: 110, height: 100, key: 9 },
  { src: "/vscode.jpg", width: 110, height: 100, key: 10 },
  { src: "/golang.png", width: 110, height: 100, key: 11 },
  { src: "/github-p.jpg", width: 110, height: 100, key: 12 },
];

export default imagesHero;
