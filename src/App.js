import './App.css';
import LeftSidebar from './Components/LeftSidebar';
import MainContainer from './Components/MainContainer';
import RightSidebar from './Components/RightSidebar';

function App() {
    return (
        <div className="App">
            <LeftSidebar />
            <MainContainer />
            <RightSidebar />

            <div className="background"></div>
        </div>
    );
}

export default App;
