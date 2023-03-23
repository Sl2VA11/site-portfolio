import { useEffect } from "react";

export function Rain() {
  useEffect(() => {
    const rainContainer = document.getElementById('Rain');

    function createRainDrop() {
      const rainDrop = document.createElement('div');
      rainDrop.classList.add('drop');
      rainDrop.style.left = Math.random() * 100 + 'vw';
      rainDrop.style.animationDuration = Math.random() * 5.5 + 2.5 + 's';
      rainDrop.style.opacity = Math.random() * 0.6 + 0.4;
      rainContainer.appendChild(rainDrop);

      setTimeout(() => {
        rainContainer.removeChild(rainDrop);
      }, parseFloat(rainDrop.style.animationDuration) * 1000);
    }

    function generateRain() {
      createRainDrop();
      setTimeout(generateRain, Math.random() * 50);
    }

    generateRain();
  }, []);

  return null;
}
