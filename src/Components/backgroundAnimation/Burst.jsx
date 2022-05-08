import { useMemo } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Burst = ({ changeBg }) => {
  const particlesInit = async (main) => {
    // console.log('Particles init called!');
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    // console.log('Particles Loaded');
    container.addClickHandler(() => {
      changeBg();
      // setTimeout(() => {
      //   changeBg();
      // }, 1000);
    });
  };

  return useMemo(
    () => (
      <Particles
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 10,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: ['push'],
              },
              onHover: {
                enable: true,
                mode: ['repulse'],
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 20,
                duration: 1,
              },
              // bubble: {
              //   opacity: 0.8,
              //   size: 50,
              //   color: {
              //     value: '#30D5C8',
              //   },
              // },
              repulse: {
                distance: 150,
                duration: 100,
              },
            },
          },
          particles: {
            // life: {
            //   count: 1,
            //   duration: {
            //     value: {
            //       min: 1,
            //       max: 2,
            //     },
            //   },
            // },

            color: {
              value: '#000000',
            },
            collisions: {
              enable: true,
            },
            // This determines the movement of the elements that are floating on 
            // screen
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'none',
              },
              random: false,
              speed: 0.2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              // number of circles on page load
              value: 0,
            },
            opacity: {
              value: 0.5,
              animation: {
                enable: true,
                speed: 6,
                minimumValue: 0.1,
                sync: false,
                startValue: 'max',
                destroy: 'min',
              },
            },
            shape: {
              type: ['circle'],
            },
            // to get back to burst animation bool:false animations within 
            // opacity and size and change max size value to 25
            size: {
              value: { min: 1, max: 2000 },
              // value: 4000,
              animation: {
                enable: true,
                speed: 400,
                minimumValue: 0.1,
                sync: false,
                startValue: 'min',
                // destroy: 'max',
              },
            },
          },
          detectRetina: true,
        }}
      />
    ),
    []
  );
};

export default Burst;
