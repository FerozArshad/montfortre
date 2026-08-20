/** Harlem neighborhood-guide data from live WP capture (index-original.html). */

export const HARLEM_MAP_CENTER = { lat: 40.81082249373, lng: -73.946041862749 };

export const HARLEM_MAP_DEFAULT_QUERY = "Harlem, Manhattan, New York, NY";

export const HARLEM_POI_FILTERS = [
  { id: "hospital", title: "Hospitals", query: "hospitals near Harlem New York NY" },
  { id: "school", title: "Schools", query: "schools near Harlem New York NY" },
  { id: "park", title: "Parks", query: "parks near Harlem New York NY" },
  { id: "station", title: "Transit Stations", query: "subway stations near Harlem New York NY" },
  { id: "restaurant", title: "Restaurants", query: "restaurants near Harlem New York NY" },
  { id: "supermarket", title: "Supermarkets", query: "supermarkets near Harlem New York NY" },
] as const;

export const HARLEM_AREA_LINKS = [
  { href: "#featured-listings", label: "Featured Listings" },
  { href: "#market-report", label: "Market Report" },
  { href: "#advice", label: "Local Advice" },
] as const;

export const HARLEM_NEIGHBORHOODS = [
  { href: "/bedford-stuyvesant/", label: "Bedford-Stuyvesant" },
  { href: "/brooklyn-heights/", label: "Brooklyn Heights" },
  { href: "/chelsea/", label: "Chelsea" },
  { href: "/crown-heights/", label: "Crown Heights" },
  { href: "/downtown-brooklyn/", label: "Downtown Brooklyn" },
  { href: "/dumbo/", label: "Dumbo" },
  { href: "/harlem/", label: "Harlem" },
  { href: "/park-slope/", label: "Park Slope" },
  { href: "/upper-east-side/", label: "Upper East Side" },
  { href: "/upper-west-side/", label: "Upper West Side" },
  { href: "/williamsburg/", label: "Williamsburg" },
] as const;

export const HARLEM_AGENT = {
  name: "Stanley Montfort",
  photo: "/redesign-assets/stanley-portrait.webp",
  phoneDisplay: "(908) 414-6006",
  phoneHref: "tel:908-414-6006",
  email: "sm@montfortre.com",
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/montfortrealestate" },
    { label: "Instagram", href: "https://www.instagram.com/uptownbrownstones/?hl=en" },
    { label: "Youtube", href: "https://www.youtube.com/channel/UCPe-WKQmSHxmQy0lWYH8qqw/featured" },
    { label: "Linkedin", href: "https://www.linkedin.com/in/stanley-p-montfort-b3675548" },
  ],
} as const;

export const HARLEM_ABOUT_PARAS = [
  "Harlem is one of New York City’s most vibrant and historically rich neighborhoods, located in Upper Manhattan. Known for its deep cultural roots and iconic role in the Harlem Renaissance, the area blends historic charm with modern energy. Tree-lined streets are filled with classic brownstones, pre-war buildings, and a growing number of new developments, offering a variety of housing options for residents.",
  "Harlem is home to world-renowned landmarks such as the Apollo Theater and Studio Museum, as well as a thriving arts and music scene that continues to shape its identity. The neighborhood also features an excellent selection of restaurants, cafes, and local shops, reflecting a diverse and dynamic community.",
  "Residents enjoy convenient access to Central Park, Marcus Garvey Park, and multiple subway lines, making it easy to commute throughout Manhattan and beyond. With its strong sense of community, rich history, and ongoing growth, Harlem offers a unique blend of tradition and opportunity for those looking to call it home.",
] as const;

export const HARLEM_YELP_CATS = [
  { id: "dine", label: "Dine", term: "restaurants" },
  { id: "drink", label: "Drink", term: "bars" },
  { id: "shop", label: "Shop", term: "shopping" },
  { id: "perk", label: "Perk", term: "coffee" },
  { id: "sweat", label: "Sweat", term: "fitness" },
  { id: "groom", label: "Groom", term: "hair" },
  { id: "wag", label: "Wag", term: "pets" },
] as const;

export function googleMapsEmbedSrc(query: string) {
  const { lat, lng } = HARLEM_MAP_CENTER;
  const center = `${lat},${lng}`;
  if (query === HARLEM_MAP_DEFAULT_QUERY) {
    return `https://maps.google.com/maps?ll=${center}&z=14&hl=en&t=m&output=embed&iwloc=near`;
  }
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&ll=${center}&z=14&hl=en&output=embed&iwloc=near`;
}

export function googleMapsSearchUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function yelpSearchUrl(term: string) {
  return `https://www.yelp.com/search?find_desc=${encodeURIComponent(term)}&find_loc=${encodeURIComponent("Harlem, New York, NY")}`;
}
