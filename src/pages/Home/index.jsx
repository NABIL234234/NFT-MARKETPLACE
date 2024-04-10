import React from "react";
import Discover from "./Discover/Discover";
import Collection from "./Collection/Collection";
import TopCreators from "./TopCreators/TopCreators";
import Categories from "./Categories/Categories";
import MoreNft from "./MoreNtf/MoreNft";
import Mashroom from "./Mashroom/Mashroom";
import Guide from './Guide/Guide'
import Digest from "./Digest/Digest";


export default function Content() {
  return (
    <>
      <main>
        <Discover />
        <Collection />
        <TopCreators />
        <Categories />
        <MoreNft />
        <Mashroom />
        <Guide />
        <Digest />
      </main>
    </>
  );
}
