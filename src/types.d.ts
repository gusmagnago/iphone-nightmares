export { };

declare global {

    export interface ObjectI {
        position: THREE.Vector3;
        rotation: THREE.Euler | undefined;
        scale: number;
    }

    export interface ObjectPos extends Pick<ObjectI, 'position'> {}
}