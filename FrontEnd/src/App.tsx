import './Assets/Css/Main.css';
import ContexProvider from './Utils/ContextProvider';
import { Router } from './Utils/Router';

function App() {

  return (
    <ContexProvider>
        <Router />
    </ContexProvider>
  );
}

export default App;
