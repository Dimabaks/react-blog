import './App.css';
import { BlogContent } from './components/BlogContent/BlogContent';
import { Footer } from './components/Footer/footer';
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="App">

      <Header />

      <main>
        <BlogContent />
      </main>

      <Footer year = {new Date().getFullYear()}/>
    </div>
  );
}

export default App;
