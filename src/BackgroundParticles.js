// src/components/BackgroundParticles.js
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function BackgroundParticles() {
  const init = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={init}
      options={{
        fullScreen: { enable: true, zIndex: -1 }, // stays behind everything
        background: {
          color: { value: "#f8fafc" }, // light base
        },
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#0f172a" },
          links: { enable: true, color: "#64748b", distance: 150, opacity: 0.4 },
          move: { enable: true, speed: 1.2 },
          opacity: { value: 0.6 },
          size: { value: 2 },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100 },
            push: { quantity: 4 },
          },
        },
      }}
    />
  );
}

export default BackgroundParticles;
