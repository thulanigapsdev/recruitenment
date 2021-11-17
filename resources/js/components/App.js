
import React from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player';
import './App.css'




class Player extends React.Component {
    render () {
      return (
          <div className='Aoo'>
          <ReactPlayer url="http://www.youtube.com/watch?v=q76bMs-NwRk" />
        </div>
      )
    }
  }
  

  if (document.getElementById('root')) {
    ReactDOM.render(<Player />, document.getElementById('root'));
}