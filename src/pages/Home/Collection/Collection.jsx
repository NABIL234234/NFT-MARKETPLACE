import React from "react";
import CardCollection from "../../../components/Card-Collection/CardCollection";

// images
import Dog from "../../../../src/assets/IMAGE/SECTION/DOG.png";
import Cat from "../../../../src/assets/IMAGE/SECTION/CAT.png";
import Bear from "../../../../src/assets/IMAGE/SECTION/BEAR.png";
import mrFox from "../../../../src/assets/IMAGE/PLAY.SVG/nav//Avatar-fox.svg";
import Grib1 from "../../../../src/assets/IMAGE/SECTION/GRIB1.png";
import Grib2 from "../../../../src/assets/IMAGE/SECTION/GRIB2.png";
import Grib3 from "../../../../src/assets/IMAGE/SECTION/GRIB3.png";
import ShroomieAvatar from "../../../../src/assets/IMAGE/SECTION/shroomieAvatar.png";
import Robot1 from "../../../../src/assets/IMAGE/SECTION/ROBOT1.png";
import Robot2 from "../../../../src/assets/IMAGE/SECTION/ROBOT2.png";
import Robot3 from "../../../../src/assets/IMAGE/SECTION/ROBOT3.png";
import RobotAvatar from "../../../../src/assets/IMAGE/SECTION/robotava.png";

export default function Collection() {
  return (
    <section className="pt-36 ">
      <div className="max-w-6xl mx-auto font-mono">
        <div>
          <div className="text-white">
            <h2 className="font-semibold text-5xl">Trending Collection</h2>
            <p className="text-xl pt-3">
              Checkout our weekly updated trending collection.
            </p>
          </div>
          <div className="flex gap-20 ">
            <CardCollection
              imgUrl={Dog}
              imgUrl2={Cat}
              imgUrl3={Bear}
              CollectionName="DSGN Animals"
              avatarUrl={mrFox}
              nickName="Mr Fox"
            />
            <CardCollection
              imgUrl={Grib1}
              imgUrl2={Grib2}
              imgUrl3={Grib3}
              CollectionName="Magic Mushrooms"
              avatarUrl={ShroomieAvatar}
              nickName="Shroomie Aang"
            />
            <CardCollection
              imgUrl={Robot1}
              imgUrl2={Robot2}
              imgUrl3={Robot3}
              CollectionName="Disco Machines"
              avatarUrl={RobotAvatar}
              nickName="BeKind2Robots"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
