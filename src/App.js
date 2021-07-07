import logo from "./logo.svg";
import "./App.css";

function App() {
  const proverbs = [
    "좌절감으로 배움을 늦추지 마라.",
    "배우고 때때로 익히면 또한 즐겁지 아니한가?",
    "가장 유능한 사람은 가장 배움에 힘쓰는 사람이다.",
    "뭔가를 철저하게 알고 싶거든 누군가에게 그것을 가르쳐라.",
    "배운 사람은 항상 자기 속에 재산이 있다.",
  ];

  const getRandomIndex = (max) => parseInt(Math.random() * max);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.js</code> 파일을 고치고 저장하면 새로운 명언을 볼 수 있습니다.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          {proverbs[getRandomIndex(proverbs.length)]}
        </a>
      </header>
    </div>
  );
}

export default App;
