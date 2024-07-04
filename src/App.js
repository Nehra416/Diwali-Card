import { Card } from "./Components/Card";


function App() {
  const quates = [
    "May your Diwali be as bright as the lights that illuminate your home.",
    "Wishing you a festival full of sweet moments and memories to cherish.",
    "May the light of Diwali guide you to success and happiness.",
    "Let the divine light of Diwali bring peace, prosperity, and happiness to your life.",
    "Diwali is the festival of lights, and it brings joy and warmth to our hearts.",
    "May the beauty of Diwali fill your world with happiness.",
    "Wishing you a Diwali that’s as bright and beautiful as you are.",
    "May this Diwali bring new beginnings and endless joy.",
    "Light up your life with the joys of Diwali!",
    "May your life be filled with colors and lights of happiness on Diwali.",
    "Let the lights of Diwali brighten your path towards progress and prosperity.",
    "Wishing you and your family a Diwali filled with love, light, and laughter.",
    "May the festival of lights fill your life with the glow of happiness and the sparkle of joy.",
    "May the divine blessings of Goddess Lakshmi bring you wealth and good fortune on Diwali and always."
  ]
  return (
    <Card quates={quates} />
  );
}

export default App;
