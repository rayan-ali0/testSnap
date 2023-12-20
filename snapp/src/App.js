import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <h1>React Snap Demo</h1>
      <p>
        React Snap is a tool for pre-rendering SPAs to improve performance and SEO.
      </p>
      <p>
        It generates static HTML files for your app, making it faster to load and improving search engine visibility.
      </p>
      <p>
        To use React Snap, you need to configure it in your project and run the build process.
      </p>
      <p>
        Check out the official documentation for more information: <a href="https://github.com/stereobooster/react-snap" target="_blank" rel="noopener noreferrer">React Snap on GitHub</a>
      </p>
      <h3>How to implement it</h3>
      <div>
        <ol>
<li>
Use npm or yarn to add react-snap to your project: npm i react-snap
</li>
<li>
Add a postbuild script to your package.json to run react-snap after building your project: 
<p>

</p>
</li>
        </ol>
      </div>
    </header>
  </div>
  );
}

export default App;
