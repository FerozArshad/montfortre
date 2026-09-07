/** Build PageSeo for a listing detail from ListingDetail data. */

import type { ListingDetail } from "../../data/listings/types";
import type { PageSeo } from "../types";

const ORG_JSON =
  '{"@context":"https://schema.org","@type":"Organization","url":"https://montfortre.com/","sameAs":["https://www.facebook.com/montfortrealestate","https://www.instagram.com/stanleymontfort/","https://www.linkedin.com/in/stanley-p-montfort-b3675548/","https://www.youtube.com/@montfortrealestate6984"],"@id":"https://montfortre.com/#organization","name":"Montfort Real Estate","logo":"https://montfortre.com/redesign-assets/logo-transparency-black-2022.png"}';

const AGENT_JSON =
  '{"@context":"https://schema.org","@type":"RealEstateAgent","@id":"https://montfortre.com/#real-estate-agent","name":"Montfort Real Estate","url":"https://montfortre.com","email":"sm@montfortre.com","telephone":"1-646-970-1078","image":"https://montfortre.com/redesign-assets/favicon-icon.png","logo":"https://montfortre.com/redesign-assets/favicon-icon.png","address":{"@type":"PostalAddress","addressLocality":"New York","addressRegion":"NY","postalCode":"10027","streetAddress":"8 West 126th Street"}}';

export function buildListingSeo(listing: ListingDetail, description?: string): PageSeo {
  const url = `https://montfortre.com/${listing.slug}/`;
  const title = `${listing.title} | Montfort Real Estate`;
  const desc =
    description ||
    `${listing.title} in ${listing.city}, ${listing.state} ${listing.zip} — listed at ${listing.price}. Schedule a tour with Montfort Real Estate.`;
  const bedsNum = Number(listing.beds) || undefined;
  const bathsNum = Number(listing.baths) || undefined;

  const apartment = {
    "@context": "https://schema.org",
    "@type": "Apartment",
    name: listing.title,
    url,
    description: desc,
    ...(bedsNum ? { numberOfRooms: bedsNum } : {}),
    ...(bathsNum ? { numberOfBathroomsTotal: bathsNum } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: listing.street,
      addressLocality: listing.city,
      addressRegion: listing.state,
      postalCode: listing.zip,
    },
    offers: {
      "@type": "Offer",
      price: listing.priceValue,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    image: listing.heroImage,
  };

  const crumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, item: { "@id": "https://montfortre.com/", name: "Home" } },
      {
        "@type": "ListItem",
        position: 2,
        item: { "@id": "https://montfortre.com/current-listings/", name: "Current Listings" },
      },
      { "@type": "ListItem", position: 3, item: { "@id": url, name: listing.title } },
    ],
  };

  return {
    title,
    metas: [
      { name: "description", content: desc },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: desc },
      { property: "og:locale", content: "en_US" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:url", content: url },
      { property: "og:site_name", content: "Montfort Real Estate" },
      { property: "og:image", content: listing.heroImage },
    ],
    links: [
      { rel: "canonical", href: url },
      {
        rel: "icon",
        href: "https://montfortre.com/redesign-assets/favicon-32.png",
        sizes: "32x32",
      },
      {
        rel: "icon",
        href: "https://montfortre.com/redesign-assets/favicon-192.png",
        sizes: "192x192",
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
      {
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap",
        rel: "stylesheet",
      },
    ],
    jsonLd: [ORG_JSON, JSON.stringify(crumbs), AGENT_JSON, JSON.stringify(apartment)],
  };
}
