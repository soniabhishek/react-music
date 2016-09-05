import React from 'react'
import ClassNames from 'classnames'

class Player extends React.Component{
  render(){
    const playPauseClass = ClassNames({
        'fa fa-play': this.props.playStatus == 'PLAYING' ? false : true,
        'fa fa-pause': this.props.playStatus == 'PLAYING' ? true : false
      });
    return(
      <div >
        <div >
          <button onClick={this.props.backward}><i className="fa fa-backward">Back</i></button>
        </div>
        <div >
          <button onClick={this.props.togglePlay}><i className={playPauseClass}>Toggle</i></button>
          <button onClick={this.props.stop}><i className="fa fa-stop">Stop</i></button>
          <button onClick={this.props.random}><i className="fa fa-random">Random</i></button>
        </div>
        <div >
          <button onClick={this.props.forward}><i className="fa fa-forward">Forward</i></button>
        </div>
      </div>
    )
  }
}

export default Player
