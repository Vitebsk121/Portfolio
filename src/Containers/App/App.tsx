import './App.scss';

import React from 'react';

import avatarPic from '/resources/images/Avatar.jpeg';

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <div className="App">
      <img src={avatarPic} alt={'myPhoto'} />
    </div>
  );
};

export default App;
