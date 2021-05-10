import Header from './components/Header';
import Headline from './components/Headline';
import './app.scss';

const user = [
  {
    firstName: 'Muhanned',
    lastName: 'Noman',
    email: 'muhanned.noman@gmail.com',
    age: 27,
    onlineStatus: true,
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline
          header="Posts"
          desc="Click the button to render posts"
          user={user}
        />
      </section>
    </div>
  );
}

export default App;
