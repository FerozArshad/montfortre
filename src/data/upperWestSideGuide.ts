/** Upper West Side neighborhood-guide data from live WP + HTTrack capture. */

export const UWS_MAP_CENTER = { lat: 40.787184131199, lng: -73.976150651496 };

export const UWS_MAP_DEFAULT_QUERY = "Upper West Side, Manhattan, New York, NY";

export const UWS_POI_FILTERS = [
  { id: "hospital", title: "Hospitals", query: "hospitals near Upper West Side New York NY" },
  { id: "school", title: "Schools", query: "schools near Upper West Side New York NY" },
  { id: "park", title: "Parks", query: "parks near Upper West Side New York NY" },
  { id: "station", title: "Transit Stations", query: "subway stations near Upper West Side New York NY" },
  { id: "restaurant", title: "Restaurants", query: "restaurants near Upper West Side New York NY" },
  { id: "supermarket", title: "Supermarkets", query: "supermarkets near Upper West Side New York NY" },
] as const;

export const UWS_AREA_LINKS = [
  { href: "#featured-listings", label: "Featured Listings" },
  { href: "#market-report", label: "Market Report" },
  { href: "#advice", label: "Local Advice" },
] as const;

export const UWS_NEIGHBORHOODS = [
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

export const UWS_AGENT = {
  name: "Stanley Montfort",
  photo: "/redesign-assets/stanley-portrait.webp",
  phoneDisplay: "(908) 414-6006",
  phoneHref: "tel:908-414-6006",
  email: "sm@montfortre.com",
  socials: [
    {
      label: "Facebook",
      href: "https://m.facebook.com/montfortrealestate/?ref=page_internal&mt_nav=0",
    },
    { label: "Instagram", href: "https://www.instagram.com/uptownbrownstones/?hl=en" },
    { label: "Youtube", href: "https://www.youtube.com/channel/UCPe-WKQmSHxmQy0lWYH8qqw/featured" },
    { label: "Linkedin", href: "https://www.linkedin.com/in/stanley-p-montfort-b3675548" },
  ],
} as const;

export const UWS_YELP_CATS = [
  { id: "dine", label: "Dine", term: "restaurants" },
  { id: "drink", label: "Drink", term: "bars" },
  { id: "shop", label: "Shop", term: "shopping" },
  { id: "perk", label: "Perk", term: "coffee" },
  { id: "sweat", label: "Sweat", term: "fitness" },
  { id: "groom", label: "Groom", term: "hair" },
  { id: "wag", label: "Wag", term: "pets" },
] as const;

export function googleMapsEmbedSrc(query: string) {
  const { lat, lng } = UWS_MAP_CENTER;
  const center = `${lat},${lng}`;
  if (query === UWS_MAP_DEFAULT_QUERY) {
    return `https://maps.google.com/maps?ll=${center}&z=14&hl=en&t=m&output=embed&iwloc=near`;
  }
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&ll=${center}&z=14&hl=en&output=embed&iwloc=near`;
}
