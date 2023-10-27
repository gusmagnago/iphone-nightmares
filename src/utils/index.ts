import * as THREE from 'three';

export const arrayToVector3 = (positionVal: number[] | undefined) => {
	if (Array.isArray(positionVal) && positionVal.length === 3) {
		const [x, y, z] = positionVal;
		return new THREE.Vector3(x, y, z);
	} else {
		return new THREE.Vector3(0, 0, 0);
	}
};

export const arrayToEuler = (eulerArray: number[] | undefined) => {
	if (eulerArray?.length === 3) {
		const [x, y, z] = eulerArray;
		return new THREE.Euler(x, y, z);
	} else {
		return new THREE.Euler(0, 0, 0);
	}
};
