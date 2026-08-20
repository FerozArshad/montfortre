/** Listing data for /523-west-121st-street-2/ — values matched to live montfortre.com. */

import { LISTING_AGENT, parsePriceValue, type ListingDetail } from "./types";

const CDN = "https://assets.agentfire3.com/uploads/sites/312/2026/06";

export const LISTING_523_WEST_121ST_2: ListingDetail = {
  slug: "523-west-121st-street-2",
  title: "523 West 121st Street #2",
  status: "",
  price: "$799,000",
  priceValue: parsePriceValue("$799,000"),
  beds: "2",
  baths: "1",
  propertyType: "",
  street: "523 West 121st Street #2",
  city: "New York",
  state: "NY",
  zip: "10027",
  neighborhood: "Morningside Heights",
  heroImage: `${CDN}/1a-Living-room-2.jpg`,
  heroAlt: "1a. Living room",
  sortOrder: 1,
  gallery: [
    { src: `${CDN}/1a-Living-room-2.jpg`, alt: "1a. Living room" },
    { src: `${CDN}/1b-living-room.jpg`, alt: "1b. living room" },
    { src: `${CDN}/2a-dining-room.jpg`, alt: "2a dining room" },
    { src: `${CDN}/2b-dining-room.png`, alt: "2b. dining room" },
    { src: `${CDN}/2c-dining.png`, alt: "2c. dining" },
    { src: `${CDN}/3-living-room-with-wall-up.jpg`, alt: "3. living room with wall up" },
    { src: `${CDN}/4-kitchen.jpg`, alt: "4. kitchen" },
    { src: `${CDN}/5a-bedroom.jpg`, alt: "5a bedroom" },
    { src: `${CDN}/5b-bedroom.jpg`, alt: "5b bedroom" },
    { src: `${CDN}/6a-bedroom.jpg`, alt: "6a bedroom" },
    { src: `${CDN}/staged-image-1-4.jpg`, alt: "staged-image-1 (4)" },
    { src: `${CDN}/staged-image-3-3.jpg`, alt: "staged-image-3 (3)" },
    { src: `${CDN}/8lobby.jpg`, alt: "8.lobby" },
    { src: `${CDN}/9a-front-door.jpg`, alt: "9a front door" },
    { src: `${CDN}/staged-image-2-3.jpg`, alt: "staged-image-2 (3)" },
    { src: `${CDN}/10-building.jpg`, alt: "10 building" },
    {
      src: `${CDN}/523-West-121st-Street-2-Floorplan-1.jpg`,
      alt: "523 West 121st Street, 2 Floorplan (1)",
    },
    {
      src: `${CDN}/523-West-121st-Street-2-Floorplan-2.jpg`,
      alt: "523 West 121st Street, 2 Floorplan (2)",
    },
  ],
  facts: [
    { label: "Price", value: "$799,000" },
    { label: "Bedrooms", value: "2" },
    { label: "Bathrooms", value: "1" },
    { label: "City", value: "New York" },
    { label: "State", value: "NY" },
    { label: "ZIP", value: "10027" },
  ],
  overviewParas: [
    "Welcome to this beautifully detailed 2-bedroom, 1-bath home in the heart of Morningside Heights, located on West 121st Street between Broadway and Amsterdam. With generous proportions, classic pre-war character, and the flexibility to explore a potential 3-bedroom configuration, this home offers the space, charm, and long-term versatility that is increasingly hard to find in Manhattan.",
    "The apartment opens with a gracious foyer and leads into a massive living and dining area that was formerly configured as separate living and formal dining rooms. Today, the space lives beautifully as an expansive open entertaining area, with tall ceilings, hardwood floors, oversized windows, and rich pre-war details throughout. The scale of the room also creates a compelling opportunity for buyers to consider an alternate 3-bedroom layout, while still preserving comfortable living and dining space.",
    "Original-style wainscoting, transoms, picture moldings, and substantial base moldings add warmth and architectural texture throughout the home. These details give the apartment a sense of character and craftsmanship that newer homes often lack, while the current layout provides the openness and functionality today’s buyers want.",
    "The windowed kitchen offers excellent storage, abundant countertop space, wood cabinetry, and a practical layout that makes everyday cooking easy. Both existing bedrooms are true bedrooms, and the home also offers abundant closet space, including a walk-in closet. The beautifully tiled bathroom features a Jacuzzi tub.",
    "A major added benefit is the large private storage closet included with the sale. Unlike a typical storage bin, this is a robust private storage space with built-in shelving, making it especially useful for seasonal items, luggage, sports equipment, bulk household goods, or anything you want close by but out of the apartment.",
    "Set within a lovely turn-of-the-century elevator co-op, the building offers attended front desk coverage, a live-in super, in-building laundry, bike storage, and pet-friendly policies welcoming both dogs and cats. Mail is delivered directly to each owner’s door, adding another layer of convenience.",
    "Perfectly positioned between the Upper West Side and Harlem, Morningside Heights offers a rare mix of neighborhood charm, architectural beauty, green space, and cultural energy. Enjoy easy access to Columbia University, Barnard College, Teachers College, Morningside Park, Riverside Park, local cafes, restaurants, Saturday farmers markets, and world-class cultural institutions. The 1, A, B, C, and D subway lines are all within reach, making this a highly convenient Manhattan home with space, character, flexibility, and strong long-term appeal.",
  ],
  insights: [
    { title: "Bedrooms", body: "2" },
    { title: "Bathrooms", body: "1" },
  ],
  location: {
    mapQuery: "523 West 121st Street, New York, NY 10027",
    blurb:
      "Perfectly positioned between the Upper West Side and Harlem, Morningside Heights offers a rare mix of neighborhood charm, architectural beauty, green space, and cultural energy. Enjoy easy access to Columbia University, Barnard College, Teachers College, Morningside Park, Riverside Park, local cafes, restaurants, Saturday farmers markets, and world-class cultural institutions. The 1, A, B, C, and D subway lines are all within reach, making this a highly convenient Manhattan home with space, character, flexibility, and strong long-term appeal.",
    nearby: [
      "Columbia University",
      "Barnard College",
      "Teachers College",
      "Morningside Park",
      "Riverside Park",
      "Local cafes & restaurants",
      "Saturday farmers markets",
      "1, A, B, C, and D subway lines",
    ],
  },
  agent: { ...LISTING_AGENT },
  tourHref: "https://montfortre.com/523-west-121st-street-2/",
};
