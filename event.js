export const event = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: "Fire Trail Nesselwang",
    description: "Feuerwehr-Treppen- & Berglauf auf die Alpspitz Nesselwang",
    startDate: "2025-10-18",
    endDate: "2025-10-18",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    organizer: {
      "@type": "Person",
      name: "Stefan Matheis",
      email: "mailto:stefan@mathe.is",
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
        longitude: "10.4969224"
      },
    },
    image: [
        "https://nesselwang-competition.vercel.app/images/1x1.jpg",
        "https://nesselwang-competition.vercel.app/images/4x3.jpg",
        "https://nesselwang-competition.vercel.app/images/16x9.jpg"
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
  