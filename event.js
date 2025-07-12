const eventName = "Fire Trail Nesselwang";

export const event = {
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  name: eventName,
  description: "Feuerwehr-Treppen- & Berglauf auf die Alpspitz Nesselwang",
  startDate: "2025-10-18",
  endDate: "2025-10-18",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  organizer: {
    "@type": "Person",
    name: "Stefan Matheis",
    email: "mailto:stefan.matheis@fire-trail-nesselwang.de",
    telephone: "+49 160 970 48 114",
  },
  location: {
    "@type": "Place",
    name: "Alpspitzbahn Nesselwang",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Alpspitzweg 5",
      postalCode: "87484",
      addressLocality: "Nesselwang",
      addressRegion: "BY",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "47.6182629",
      longitude: "10.4969224",
    },
  },
  image: [
    "https://nesselwang-competition.vercel.app/images/1x1.jpg",
    "https://nesselwang-competition.vercel.app/images/4x3.jpg",
    "https://nesselwang-competition.vercel.app/images/16x9.jpg",
  ],
  offers: [
    {
      "@type": "Offer",
      name: eventName + ": Einzel (1 Person)",
      price: 40.0,
      priceCurrency: "EUR",
      validFrom: "2025-07-12",
      availability: "https://schema.org/InStock",
      url: "http://www.fire-trail-nesselwang.de/anmeldung",
    },
    {
      "@type": "Offer",
      name: eventName + ": 2er-Staffel (2 Personen)",
      price: 90.0,
      priceCurrency: "EUR",
      validFrom: "2025-07-12",
      availability: "https://schema.org/InStock",
      url: "http://www.fire-trail-nesselwang.de/anmeldung",
    },
  ],
};
export const formattedDate = new Date(event.startDate).toLocaleDateString(
  "de-DE",
  {
    weekday: "long",
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  },
);
