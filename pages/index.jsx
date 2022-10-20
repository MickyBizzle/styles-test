import Link from "next/link";
import { Button } from "../components/StyledComponent";

const HomePage = () => (
  <div>
    Using <a href="https://emotion.sh/docs/introduction">Emotion</a>
    <br />
    <br />
    <Button>Click me</Button>
    <br />
    <br />
    <Link href="/module">Go to scss module example</Link>
  </div>
);

export default HomePage;
