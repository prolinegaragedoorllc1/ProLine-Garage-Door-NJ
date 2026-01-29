import { useEffect } from 'react';

export default function SEOHead({ 
  title, 
  description, 
  keywords,
  type = 'website',
  includeBusiness = false 
}) {
  useEffect(() => {
    // Set meta tags
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (keywords) {
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        meta.content = keywords;
        document.head.appendChild(meta);
      }
    }

    // Add LocalBusiness Schema
    if (includeBusiness) {
      const existingSchema = document.getElementById('local-business-schema');
      if (existingSchema) {
        existingSchema.remove();
      }

      const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://prolinegaragedoorllc.com",
        "name": "ProLine Garage Door LLC",
        "image": "https://prolinegaragedoorllc.com/logo.png",
        "description": "Professional garage door repair and service in North New Jersey. Same-day service, licensed & insured. Specializing in spring replacement, opener repair, and maintenance.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Maywood",
          "addressRegion": "NJ",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 40.8584,
          "longitude": -74.1638
        },
        "url": "https://prolinegaragedoorllc.com",
        "telephone": "+12015033118",
        "email": "info@prolinegaragedoorllc.com",
        "priceRange": "$$",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "06:00",
            "closes": "22:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Sunday"
            ],
            "opens": "06:00",
            "closes": "22:00"
          }
        ],
        "sameAs": [
          "https://facebook.com/prolinegaragedoor",
          "https://instagram.com/prolinegaragedoor"
        ],
        "areaServed": [
          { "@type": "City", "name": "Maywood", "containedIn": { "@type": "State", "name": "New Jersey" } },
          { "@type": "City", "name": "Hackensack", "containedIn": { "@type": "State", "name": "New Jersey" } },
          { "@type": "City", "name": "Paramus", "containedIn": { "@type": "State", "name": "New Jersey" } },
          { "@type": "City", "name": "Teaneck", "containedIn": { "@type": "State", "name": "New Jersey" } },
          { "@type": "City", "name": "Ridgewood", "containedIn": { "@type": "State", "name": "New Jersey" } },
          { "@type": "City", "name": "Fair Lawn", "containedIn": { "@type": "State", "name": "New Jersey" } },
          { "@type": "City", "name": "Garfield", "containedIn": { "@type": "State", "name": "New Jersey" } },
          { "@type": "City", "name": "Lodi", "containedIn": { "@type": "State", "name": "New Jersey" } },
          { "@type": "City", "name": "Clifton", "containedIn": { "@type": "State", "name": "New Jersey" } },
          { "@type": "City", "name": "Paterson", "containedIn": { "@type": "State", "name": "New Jersey" } },
          { "@type": "City", "name": "Montclair", "containedIn": { "@type": "State", "name": "New Jersey" } },
          { "@type": "City", "name": "Morristown", "containedIn": { "@type": "State", "name": "New Jersey" } },
          { "@type": "City", "name": "Morris Township", "containedIn": { "@type": "State", "name": "New Jersey" } }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Garage Door Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Garage Door Spring Replacement",
                "description": "Professional broken spring repair and replacement service"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Garage Door Opener Repair",
                "description": "Expert garage door opener repair and installation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Garage Door Maintenance",
                "description": "Preventative maintenance and tune-up services"
              }
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "reviewCount": "500"
        }
      };

      const script = document.createElement('script');
      script.id = 'local-business-schema';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [title, description, keywords, includeBusiness]);

  return null;
}