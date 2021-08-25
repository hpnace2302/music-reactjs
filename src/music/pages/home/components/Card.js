import React from 'react'
// import AudioPlayer from 'react-h5-audio-player';

const CardMusic = ({data}) => {
  // const audioElement = new Audio(audio source);
  // const [isPlaying, setPlaying ] = useState(false);
  // const play = () => {
  //   setPlaying(true)
  // }
  // console.log(data);
  return (
    <>
      <div class="song l-2" data-index={data.id}>
          <img src={data.image} alt="" class="container__music-img"></img>
          <div class="container__music--detail">
              <div class="container__music--heading">
              {data.name}
              </div>
              <div class="singer">
              {data.singer}
              </div>
          </div>
      </div>
    </>
  )
}

export default React.memo(CardMusic)