import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './components/main/MainPage';
import VideoDetail from './components/details/VideoDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={MainPage} />
        <Route path="/videos" component={VideoDetail} />
      </Router>
    </div>
  );
}

export default App;
