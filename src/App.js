import Header from './components/Header';
import Headline from './components/Headline';
import './app.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click the button to render posts" />
      </section>
    </div>
  );
}

export default App;
