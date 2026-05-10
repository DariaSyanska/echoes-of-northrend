"use client";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export function Snowfall() {
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="snow"
      init={particlesInit}
      options={{
        fullScreen: false,
        background: {
          color: "transparent",
        },
        particles: {
          number: {
            value: 80,
          },
          color: {
            value: "#ffffff",
          },
          opacity: {
            value: 0.4,
          },
          size: {
            value: { min: 1, max: 4 },
          },
          move: {
            enable: true,
            speed: 1,
            direction: "bottom",
            straight: false,
          },
        },
      }}
      className="absolute inset-0 z-0"
    />
  );
}
