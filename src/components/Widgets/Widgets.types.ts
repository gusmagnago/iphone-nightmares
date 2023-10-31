import { CalendarGLTFNodes } from '../Calendar/Calendar.types';
import { WeatherGLTFNodes } from '../Weather/Weather.types';

export type WidgetGLTFNodes =
  | WeatherGLTFNodes | CalendarGLTFNodes

export type WidgetGLTFResult = {
  nodes: WidgetGLTFNodes;
};
