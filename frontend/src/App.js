import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import HomeScreen from './screens/HomeScreen.js';
import { Container} from 'react-bootstrap';

const App = () => {
  return (
    <div>
      <Header />
      <main className='py-3'>
        <Container>
          <HomeScreen />      
        </Container>
      </main>
      <Footer />      
    </div>

  );
}

export default App;
