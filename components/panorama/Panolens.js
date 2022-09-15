/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from 'react';

export const Panolens = () => {
  // const hotspot = ({
  //   PANOLENS,
  //   panorama,
  //   position,
  //   hoverText,
  //   hoverTextPosition,
  //   onClick,
  //   onHover,
  //   onLeave,
  //   icon,
  //   iconSize,
  // }) => {
  //   const infospot = new PANOLENS.Infospot(
  //     iconSize || 600, // size
  //     icon || undefined // custom icon
  //   );
  //   infospot.position.set(...position);
  //   infospot.addHoverText(
  //     hoverText,
  //     hoverTextPosition || 0 // if 0 the text will be exact on the dot
  //   );
  //   infospot.addEventListener('click', () => {
  //     // this.focus();
  //     onClick();
  //   });
  //   infospot.addEventListener('hoverenter', onHover);
  //   infospot.addEventListener('hoverleave', onLeave);
  //   panorama.add(infospot);
  // };
  const usePano = async () => {
    const PANOLENS = await import('panolens');
    const panorama = new PANOLENS.ImagePanorama('pano3.jpg');
    // hotspot({
    //   PANOLENS,
    //   panorama,
    //   icon: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png',
    //   position: [525.65, -176.81, -4965.11],
    //   onClick: () => console.log('clicked'),
    //   onHover: () => console.log('hovered'),
    //   onLeave: () => console.log('left'),
    //   hoverText: 'go there',
    //   hoverTextPosition: 0,
    // });
    // hotspot({
    //   PANOLENS,
    //   panorama,
    //   icon: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png',
    //   position: [525.65, -176.81, -4965.11],
    //   // onClick: () => console.log('clicked'),
    //   // onHover: () => console.log('hovered'),
    //   // onLeave: () => console.log('left'),
    //   hoverText: 'go there',
    //   hoverTextPosition: 0,
    //   iconSize: 150,
    // });
    const viewer = new PANOLENS.Viewer({
      container: document.querySelector('#panolens'),
      // controlBar: true,             // Vsibility of bottom control bar
      controlButtons: ['fullscreen'], // Buttons array in the control bar. Default to ['fullscreen', 'setting', 'video']
      // autoHideControlBar: false,        // Auto hide control bar
      // autoHideInfospot: true,            // Auto hide infospots
      // horizontalView: false,            // Allow only horizontal camera control
      // cameraFov: 60,                // Camera field of view in degree
      // reverseDragging: false,            // Reverse orbit control direction
      // enableReticle: false,            // Enable reticle for mouseless interaction
      // dwellTime: 1500,            // Dwell time for reticle selection in millisecond
      // autoReticleSelect: true,        // Auto select a clickable target after dwellTime
      // viewIndicator: false,            // Adds an angle view indicator in upper left corner
      // indicatorSize: 30,            // Size of View Indicator
      output: 'console', // Whether and where to output infospot position. Could be 'console' or 'overlay'
    });
    const width = document.querySelector('.panolens-canvas').offsetWidth;
    const height = document.querySelector('.panolens-canvas').offsetHeight;
    viewer.getCamera().aspect = width / height;
    viewer.getRenderer().setSize(width, height);
    viewer.getCamera().updateProjectionMatrix();
    viewer.add(panorama);
  };
  useEffect(() => {
    usePano();
  }, []);

  return (
    <div id='panolens' style={{ height: 500}} />
  );
};
