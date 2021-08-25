import React from 'react'
// import playerContext from '../../../context/playerContext'

const Player = () => {
  // const { currentSong, songs } = useContext(playerContext);
  // console.log(currentSong, songs)
  
  return (
    <>
      {/* {player.map((item) => ( */}
      <div className="player">
          {/* <!-- CD --> */}
          <div className="music__detail">
            <div className="cd">
              <div className="cd-thumb" style={{backgroundImage: 'url()'}}>
              </div>
            </div>
            {/* <!-- Dashboard --> */}
            <div className="dashboard">
              {/* <!-- Header --> */}
              <header>
                <h4>Now playing:</h4>
                {/* <h2>{songs[currentSong][0]}</h2> */}
                {/* <h3>{item.singer}</h3> */}
              </header>
            </div>
          </div>
        
            {/* <!-- Control --> */}
            <div className="control2">
              <div className="progress__item">
                <div className="time">
                  <p className="playing-time">00:00</p>
                  <p className="duration-time">--:--</p>
              </div>
              <input id="progress" className="progress" type="range" value="0" step="1" min="0" max="100"></input>
              </div>
              <div className="control">
                <div className="btn btn-repeat">
                  <i className="fas fa-redo"></i>
                </div>
                <div className="btn btn-prev">
                  <i className="fas fa-step-backward"></i>
                </div>
                <div className="btn btn-toggle-play">
                  <i className="fas fa-pause icon-pause"></i>
                  <i className="fas fa-play icon-play"></i>
                </div>
                <div className="btn btn-next">
                  <i className="fas fa-step-forward"></i>
                </div>
                <div className="btn btn-random">
                  <i className="fas fa-random"></i>
                </div>
              </div>
            </div>
            <div className="volume">
              <div className="btn active btn-volume-mute" title="Unmute" style={{display: 'none'}}>
                  <i className="fas fa-volume-mute"></i>
              </div>
              
              <div className="btn active btn-volume-down" title="Mute" style={{display: 'none'}}>
                  <i className="fas fa-volume-down"></i>
              </div>

              <div className="btn active btn-volume-up" title="Mute">
                  <i className="fas fa-volume-up"></i>
              </div>

              <input id="volume-progress" className="volume-progress" type="range" value="100" step="1" min="0" max="100"></input>

              <span className="volume-value-text">Vol: </span>
              <span className="volume-value">100</span>
            </div>
        
            <audio id="audio" src=""></audio>
        </div>
      {/* ))} */}
    </>
  )
}

export default React.memo(Player)