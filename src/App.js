// App.js
// import React from 'react';
import './styles/App.css';
import UserList from './components/UserList';
import { UserProvider } from './contexts/UserContext';
import React, { useState ,useContext} from 'react';
import ThemeContext from './contexts/ThemeContext'

function Header() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
      <header>
          {/* ... other header elements ... */}
          <button onClick={toggleTheme}>
              {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
      </header>
  );
}
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
      setDarkMode(prevMode => !prevMode);
  };

  return (

    <div className="App">
       <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
    {/* rest of the app */}
    <Header/>
</ThemeContext.Provider>
      <header className="App-header">
        User Management Dashboard
    
      </header>
      <main>
        <UserList />
        <UserProvider></UserProvider>
      </main>
    </div>
  );
}

export default App;