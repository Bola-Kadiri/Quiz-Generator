import Home from "../src/Pages/home-page/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header} from './components/index';
import { ComputerScienceQuiz, MathematicsQuiz, MythologyQuiz } from './Pages/quiz-page';

import "./App.css";

function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path='/ComputerScienceQuiz' element={<ComputerScienceQuiz />}></Route>
          <Route path='/MathematicsQuiz' element={<MathematicsQuiz />}></Route>
          <Route path='/MythologyQuiz' element={<MythologyQuiz />}></Route>
         
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


