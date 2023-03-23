import rain from '../../sounds/rain.mp3'
export function RainSound() {
  return (
    <audio >
      <source src={rain} type="audio/mpeg" />
    </audio>
  );
};
