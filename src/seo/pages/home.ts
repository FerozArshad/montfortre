/** Frozen SEO for / — do not edit values. */

import type { PageSeo } from "../types";

export const HOME_TITLE = "Montfort Real Estate | New York Realtor";

export const HOME_METAS = [
  {
    "name": "description",
    "content": "Our Realtors will help you find on and off market NYC real estate that meet your criteria while avoiding costly mistakes during the home buying process."
  },
  {
    "name": "twitter:card",
    "content": "summary_large_image"
  },
  {
    "name": "twitter:title",
    "content": "Montfort Real Estate | New York Realtor"
  },
  {
    "name": "twitter:description",
    "content": "Our Realtors will help you find on and off market NYC real estate that meet your criteria while avoiding costly mistakes during the home buying process."
  },
  {
    "property": "og:locale",
    "content": "en_US"
  },
  {
    "property": "og:type",
    "content": "website"
  },
  {
    "property": "og:title",
    "content": "Montfort Real Estate"
  },
  {
    "property": "og:description",
    "content": "Our Realtors will help you find on and off market NYC real estate that meet your criteria while avoiding costly mistakes during the home buying process."
  },
  {
    "property": "og:url",
    "content": "https://montfortre.com/"
  },
  {
    "property": "og:site_name",
    "content": "Montfort Real Estate"
  },
  {
    "property": "og:image",
    "content": "https://montfortre.com/og-home.jpg"
  },
  {
    "property": "og:image:width",
    "content": "1200"
  },
  {
    "property": "og:image:height",
    "content": "630"
  },
  {
    "property": "og:image:type",
    "content": "image/jpeg"
  },
  {
    "name": "twitter:image",
    "content": "https://montfortre.com/og-home.jpg"
  },
  {
    "name": "author",
    "content": "Montfort Real Estate"
  }
] as const;

export const HOME_LINKS = [
  {
    "rel": "canonical",
    "href": "https://montfortre.com/"
  },
  {
    "rel": "icon",
    "href": "/redesign-assets/favicon.png",
    "sizes": "32x32"
  },
  {
    "rel": "icon",
    "href": "/redesign-assets/favicon.png",
    "sizes": "192x192"
  },
  {
    "rel": "preconnect",
    "href": "https://fonts.googleapis.com"
  },
  {
    "rel": "preconnect",
    "href": "https://fonts.gstatic.com",
    "crossorigin": ""
  },
  {
    "href": "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap",
    "rel": "stylesheet"
  },
  {
    "rel": "alternate",
    "type": "application/rss+xml",
    "title": "Montfort Real Estate » Feed",
    "href": "https://montfortre.com/feed/"
  }
] as const;

export const HOME_JSON_LD = [
  "{\n  \"@context\": \"https://schema.org\",\n  \"@graph\": [\n    {\n      \"@type\": \"RealEstateAgent\",\n      \"@id\": \"https://montfortre.com/#realestateagent\",\n      \"name\": \"Stanley Montfort Real Estate\",\n      \"alternateName\": \"Montfort Real Estate\",\n      \"url\": \"https://montfortre.com/\",\n      \"telephone\": \"+1-646-970-1078\",\n      \"priceRange\": \"$$$\",\n      \"description\": \"New York City real estate agency helping buyers, sellers, homeowners, and investors navigate residential and multifamily real estate across Manhattan and Brooklyn.\",\n      \"address\": {\n        \"@type\": \"PostalAddress\",\n        \"streetAddress\": \"8 West 126th Street\",\n        \"addressLocality\": \"New York\",\n        \"addressRegion\": \"NY\",\n        \"postalCode\": \"10027\",\n        \"addressCountry\": \"US\"\n      },\n      \"areaServed\": [\n        {\n          \"@type\": \"City\",\n          \"name\": \"New York City\"\n        },\n        {\n          \"@type\": \"AdministrativeArea\",\n          \"name\": \"Manhattan\"\n        },\n        {\n          \"@type\": \"AdministrativeArea\",\n          \"name\": \"Brooklyn\"\n        }\n      ],\n      \"sameAs\": [\n        \"https://www.instagram.com/stanleymontfort/\"\n      ],\n      \"hasOfferCatalog\": {\n        \"@type\": \"OfferCatalog\",\n        \"name\": \"New York City Real Estate Services\",\n        \"itemListElement\": [\n          {\n            \"@type\": \"Offer\",\n            \"itemOffered\": {\n              \"@type\": \"Service\",\n              \"@id\": \"https://montfortre.com/nyc-buyers-agent-service/#service\",\n              \"name\": \"NYC Buyer’s Agent Service\",\n              \"url\": \"https://montfortre.com/nyc-buyers-agent-service/\",\n              \"provider\": {\n                \"@id\": \"https://montfortre.com/#realestateagent\"\n              },\n              \"areaServed\": {\n                \"@type\": \"City\",\n                \"name\": \"New York City\"\n              }\n            }\n          },\n          {\n            \"@type\": \"Offer\",\n            \"itemOffered\": {\n              \"@type\": \"Service\",\n              \"@id\": \"https://montfortre.com/nyc-listing-agent/#service\",\n              \"name\": \"NYC Listing Agent Service\",\n              \"url\": \"https://montfortre.com/nyc-listing-agent/\",\n              \"provider\": {\n                \"@id\": \"https://montfortre.com/#realestateagent\"\n              },\n              \"areaServed\": {\n                \"@type\": \"City\",\n                \"name\": \"New York City\"\n              }\n            }\n          },\n          {\n            \"@type\": \"Offer\",\n            \"itemOffered\": {\n              \"@type\": \"Service\",\n              \"@id\": \"https://montfortre.com/nyc-multifamily-real-estate-agent/#service\",\n              \"name\": \"NYC Multifamily Real Estate Agent\",\n              \"url\": \"https://montfortre.com/nyc-multifamily-real-estate-agent/\",\n              \"provider\": {\n                \"@id\": \"https://montfortre.com/#realestateagent\"\n              },\n              \"areaServed\": {\n                \"@type\": \"City\",\n                \"name\": \"New York City\"\n              }\n            }\n          },\n          {\n            \"@type\": \"Offer\",\n            \"itemOffered\": {\n              \"@type\": \"Service\",\n              \"@id\": \"https://montfortre.com/whats-my-home-worth/#service\",\n              \"name\": \"NYC Free Home Valuation\",\n              \"url\": \"https://montfortre.com/whats-my-home-worth/\",\n              \"provider\": {\n                \"@id\": \"https://montfortre.com/#realestateagent\"\n              },\n              \"areaServed\": {\n                \"@type\": \"City\",\n                \"name\": \"New York City\"\n              }\n            }\n          }\n        ]\n      }\n    },\n    {\n      \"@type\": \"WebSite\",\n      \"@id\": \"https://montfortre.com/#website\",\n      \"url\": \"https://montfortre.com/\",\n      \"name\": \"Montfort Real Estate\",\n      \"publisher\": {\n        \"@id\": \"https://montfortre.com/#realestateagent\"\n      },\n      \"inLanguage\": \"en-US\"\n    },\n    {\n      \"@type\": \"WebPage\",\n      \"@id\": \"https://montfortre.com/#webpage\",\n      \"url\": \"https://montfortre.com/\",\n      \"name\": \"Montfort Real Estate | New York Realtor\",\n      \"description\": \"New York City real estate guidance for buyers, sellers, homeowners, and investors across Manhattan and Brooklyn.\",\n      \"isPartOf\": {\n        \"@id\": \"https://montfortre.com/#website\"\n      },\n      \"about\": {\n        \"@id\": \"https://montfortre.com/#realestateagent\"\n      },\n      \"mainEntity\": {\n        \"@id\": \"https://montfortre.com/#realestateagent\"\n      },\n      \"inLanguage\": \"en-US\"\n    }\n  ]\n}",
  "{\"@context\":\"https://schema.org\",\"@type\":\"WebSite\",\"@id\":\"https://montfortre.com/#website\",\"url\":\"https://montfortre.com/\",\"name\":\"Montfort Real Estate\",\"potentialAction\":{\"@type\":\"SearchAction\",\"target\":\"https://montfortre.com/?s={search_term_string}\",\"query-input\":\"required name=search_term_string\"}}",
  "{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"url\":\"https://montfortre.com/\",\"sameAs\":[\"https://www.facebook.com/montfortrealestate\",\"https://www.instagram.com/stanleymontfort/\",\"https://www.linkedin.com/in/stanley-p-montfort-b3675548/\",\"https://www.youtube.com/@montfortrealestate6984\"],\"@id\":\"https://montfortre.com/#organization\",\"name\":\"Montfort Real Estate\",\"logo\":\"https://assets.agentfire3.com/uploads/sites/312/2022/10/Logo-Transparency-black.png\"}",
  "{\"@context\":\"https://schema.org\",\"@type\":\"RealEstateAgent\",\"@id\":\"https://montfortre.com/#real-estate-agent\",\"name\":\"Montfort Real Estate\",\"description\":\"NYC's brownstone and townhouse specialists with nearly a decade of experience serving Harlem, the Upper West Side and Brooklyn. We represent buyers and sellers with equal dedication \\u2014 from first-time brownstone purchases to multifamily investment acquisitions, with condos and co-ops as part of our full-service offering. Our edge: block-by-block neighborhood expertise, exclusive off-market property access and a vetted network of trusted inspectors, attorneys and contractors. Buying a brownstone in Harlem, Crown Heights or Bed-Stuy? Selling a townhouse on the Upper West Side or in Brooklyn Heights? Our white-glove concierge approach delivers a seamless experience from first conversation to closing day. Call (646) 970-1078.\",\"url\":\"https://montfortre.com\",\"email\":\"sm@montfortre.com\",\"telephone\":\"1-646-970-1078\",\"faxNumber\":\"\",\"priceRange\":\"\",\"image\":\"https://assets.agentfire3.com/uploads/sites/312/2021/11/Icon-Favicon-black.png\",\"logo\":\"https://assets.agentfire3.com/uploads/sites/312/2021/11/Icon-Favicon-black.png\",\"address\":{\"@type\":\"PostalAddress\",\"addressLocality\":\"New York\",\"addressRegion\":\"NY\",\"postalCode\":\"10027\",\"streetAddress\":\"8 West 126th Street\"},\"sameAs\":[\"https://www.facebook.com/montfortrealestate\",\"https://www.linkedin.com/in/stanley-p-montfort-b3675548/\",\"https://www.youtube.com/@montfortrealestate6984\",\"https://www.instagram.com/stanleymontfort/\"],\"contactPoint\":{\"@type\":\"ContactPoint\",\"contactType\":\"Customer Service\",\"email\":\"sm@montfortre.com\",\"telephone\":\"646-970-1078\"}}",
  "{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"name\":\"Montfort Real Estate | New York Realtor\",\"description\":\"New York Realtor buying assistance to avoid overpaying for real estate We\\u2019ll make sure you make a smart real estate purchase by saving money and avoid owning real estate with maintenance and violation issues Value Your Home Find a HomeSearch Please wait while we generate your report Property TypeProperty TypeSingle-FamilyCondoMulti-FamilyTownhouseMobile/ManufacturedTimeshareLandCommercialOtherBedsBeds 1 Bedroom 2 Bedrooms 3 Bedrooms 4 Bedrooms 5 Bedrooms\",\"inLanguage\":\"en-US\",\"datePublished\":\"2021-05-27T00:20:18+00:00\",\"dateModified\":\"2026-08-04T16:46:20+00:00\",\"isPartOf\":{\"@type\":\"WebSite\",\"name\":\"Montfort Real Estate\",\"url\":\"https://montfortre.com/\"}}"
] as const;

export const HOME_SEO: PageSeo = {
  title: HOME_TITLE,
  metas: HOME_METAS,
  links: HOME_LINKS,
  jsonLd: HOME_JSON_LD,
};
