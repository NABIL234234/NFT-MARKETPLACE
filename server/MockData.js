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
    dollarPrice: 14,
    ethereumPrice: 0.0039,
  },
  {
    id: 2,
    nftImage: Odena,
    name: "Life On Edena",
    createdAt: "2024-06-02T00:00:00Z",
    creatorUsername: "NebulaKid",
    description: "Description for Life On Edena",
    dollarPrice: 18,
    ethereumPrice: 0.0052,
  },
  {
    id: 3,
    nftImage: Astro,
    name: "AstroFiction",
    createdAt: "2024-06-02T00:00:00Z",
    creatorUsername: "Spaceone",
    description: "Description for AstroFiction",
    dollarPrice: 14,
    ethereumPrice: 0.0039,
  },
];

export default mockNfts;
