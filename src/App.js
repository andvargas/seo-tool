import React from 'react';
import AddDescription from './components/Form/AddDescription';
import AddTitle from './components/Form/AddTitle';
import AddUrl from './components/Form/AddUrl';
import Footer from './components/UI/Footer';
import Logo from './components/UI/Logo'


function App() {
  return (
    <div>
      <Logo />
      <AddUrl />
      <AddTitle />
      <AddDescription />
      <Footer />
    </div>
  );
}

export default App;
