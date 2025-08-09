// src/types/vanta.d.ts
declare module 'vanta/dist/vanta.net.min' {
  const NET: (options: {
    el: HTMLElement | string;
    THREE: any;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: number;
    backgroundColor?: number;
    points?: number;
    maxDistance?: number;
    showDots: false;
  }) => {
    destroy: () => void;
  };

  export default NET;
}