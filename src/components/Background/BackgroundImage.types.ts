import { BatGLTFNodes } from '../Bat/Bat.types';
import { CatGLTFNodes } from '../Cat/Cat.types';
import { JackOLanternGLTFNodes } from '../JackOLantern/JackOLantern.types';
import { MoonGLTFNodes } from '../Moon/Moon';

export type BGGLTFNodes =
  | JackOLanternGLTFNodes
  | MoonGLTFNodes
  | CatGLTFNodes
  | BatGLTFNodes;

export type BGGLTFResult = {
  nodes: BGGLTFNodes;
};
