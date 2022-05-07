import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Burst = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      options={{
        background: {
          color: {
            value: '',
          },
        },
        fpsLimit: 10,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: ['push'],
            },
            onHover: {
              enable: true,
              mode: ['bubble', 'repulse'],
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 20,
              duration: 1,
            },
            bubble: {
              opacity: 0.8,
              size: 50,
              color: {
                value: '#30D5C8',
              },
            },
            repulse: {
              distance: 150,
              duration: 100,
            },
          },
        },
        particles: {
          color: {
            value: '#000000',
          },
          // links: {
          //   color: '#ff0000',
          //   distance: 150,
          //   enable: true,
          //   opacity: 0.5,
          //   width: 1,
          // },
          collisions: {
            enable: true,
          },
          // This determines the movement of the elements that are floating on sceen
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
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 25 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Burst;
