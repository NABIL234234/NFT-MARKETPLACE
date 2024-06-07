// mockData.js
import Galaxy from "../src/assets/IMAGE/SECTION/Galaxy.png";
import Astro from "../src/assets/IMAGE/SECTION/Astro.png";
import Odena from "../src/assets/IMAGE/SECTION/Odena.png";

export const mockNfts = [
  {
    id: 1,
    nftImage: Galaxy,
    name: "Distant Galaxy",
    createdAt: "2024-06-02T00:00:00Z",
    creatorUsername: "MoonDancer",
    description: "Description for Distant Galaxy",
    price: 6,
  },
  {
    id: 2,
    nftImage: Odena,
    name: "Life On Edena",
    createdAt: "2024-06-02T00:00:00Z",
    creatorUsername: "NebulaKid",
    description: "Description for Life On Edena",
    price: 4,
  },
  {
    id: 3,
    nftImage: Astro,
    name: "AstroFiction",
    createdAt: "2024-06-02T00:00:00Z",
    creatorUsername: "Spaceone",
    description: "Description for AstroFiction",
    price: 1,
  },
];

export default mockNfts;
