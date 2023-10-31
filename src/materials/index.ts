export type MaterialsType = {
  metallics: MaterialPalette;
  glossy: MaterialPalette;
  glass: MaterialPalette;
};

export interface MaterialPalette {
  greenMold?: string;
  black?: string;
  blackLight?: string;
  purple?: string;
  gray?: string;
  brown?: string;
  brownLight?: string;
  redBloody?: string;
  redBloodstain?: string;
  white?: string;
  orangePumpkins?: string
  ambar?: string
  grayLight?: string;
  greenEw?: string;
  yellow?: string;
  glass?: string
  light?: string;
}

export const palette: MaterialPalette = {
	greenMold: '#5C5B57',
	black: '#171718',
	blackLight: '#303045',
	purple: '#333399',
	gray: '#797981',
	grayLight: '#d1d6dc',
	brown: '#6D4D2D',
	brownLight: '#C4926B',
	redBloody: '#df1313',
	redBloodstain: '#680909',
	white: '#f4ecdb',
	orangePumpkins: '#f27d14',
	ambar: '#FDC07B',
	greenEw: '#59D703',
	yellow: '#EAA11B',
	glass: '#eeeeee',
	light: '#fbdfb5'
};
