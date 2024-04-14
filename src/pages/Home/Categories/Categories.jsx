import React from "react";
import CardCotegories from '../../../components/CardCotegories/CardCotegories'

// images

import Artback from '../../../../src/assets/IMAGE/SECTION/Art-back.png'
import PaintBrush from '../../../../src/assets/IMAGE/PLAY.SVG/nav/PaintBrush.svg'
import Collectiblse from '../../../../src/assets/IMAGE/SECTION/Collectiblse.png'
import Swatches from '../../../../src/assets/IMAGE/PLAY.SVG/nav/Swatches.svg'
import Musicback from '../../../../src/assets/IMAGE/SECTION/music-back.png'
import MusicNotes from '../../../../src/assets/IMAGE/PLAY.SVG/nav/MusicNotes.svg'
import Photography  from '../../../../src/assets/IMAGE/SECTION/Photography.png'
import Camera from '../../../../src/assets/IMAGE/PLAY.SVG/nav/Camera.svg'
import Videoback from '../../../../src/assets/IMAGE/SECTION/Video-back.png'
import VideoCamera  from '../../../../src/assets/IMAGE/PLAY.SVG/nav/VideoCamera.svg'
import UtilityBack  from '../../../../src/assets/IMAGE/SECTION/Utility-back.png'
import MagicWand  from '../../../../src/assets/IMAGE/PLAY.SVG/nav/MagicWand.svg'
import SportBack  from '../../../../src/assets/IMAGE/SECTION/Sport-back.png'
import Basketball from '../../../../src/assets/IMAGE/PLAY.SVG/nav/Basketball.svg'
import VirtualWorlds  from '../../../../src/assets/IMAGE/SECTION/Virtual-Worlds.png'
import Planet from '../../../../src/assets/IMAGE/PLAY.SVG/nav/Planet.svg'


export default function Categories() {
  return (
    <>
      <div className="pt-40 ">
        <div className="max-w-6xl mx-auto font-mono">
          <div className="text-white pb-[60px]">
            <h2 className="font-semibold text-4xl">Browse Categories</h2>
          </div>
          <div className="sm:flex justify-between">
            <CardCotegories
              imgUrl={Artback}
              secondImgUrl={PaintBrush}
              desc="Art"
            />
            <CardCotegories
              imgUrl={Collectiblse}
              secondImgUrl={Swatches}
              desc="Collectibles"
            />
            <CardCotegories
              imgUrl={Musicback}
              secondImgUrl={MusicNotes}
              desc="Music"
            />
            <CardCotegories
              imgUrl={Photography}
              secondImgUrl={Camera}
              desc="Photography"
            />
          </div>
          <div className="sm:flex justify-between pt-[30px]">
            <CardCotegories
              imgUrl={Videoback}
              secondImgUrl={VideoCamera}
              desc="Video"
            />
            <CardCotegories
              imgUrl={UtilityBack}
              secondImgUrl={MagicWand}
              desc="Utility"
            />
            <CardCotegories
              imgUrl={SportBack}
              secondImgUrl={Basketball}
              desc="Sport"
            />
            <CardCotegories
              imgUrl={VirtualWorlds}
              secondImgUrl={Planet}
              desc="Virtual Worlds"
            />
          </div>
        </div>
      </div>
    </>
  );
}
