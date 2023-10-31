import * as THREE from 'three';
import { JackOLanternGLTFNodes } from '../JackOLantern/JackOLantern.types';


export type CalendarGLTFNodes = {
    dateInfoGlass: THREE.Mesh;
    calendarBG: THREE.Mesh;
    calendarDate: THREE.Mesh;
    calendarDate1: THREE.Mesh;
    calendarText: THREE.Mesh;
    calendarDateText: THREE.Mesh;
    dateInfoText: THREE.Mesh;
  } & JackOLanternGLTFNodes

export type CalendarGLTFResult = {
  nodes: CalendarGLTFNodes;
};
