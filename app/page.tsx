'use client'

import { useState, useEffect } from "react";

const properties: Property[] = [
  {
    id: 1,
    name: "XANADU",
    tagline: "Sun-drenched, open, tranquil",
    location: "Ravine Court · Camps Bay, Cape Town",
    locationShort: "Camps Bay",
    type: "Luxury Villa",
    status: "Available for Exclusive Stays",
    beds: 4, baths: 4, parking: 2, guests: 8,
    pool: "Private Heated Pool",
    view: "Ocean · Mountain",
    kitchen: "Fully equipped, chef-ready",
    laundry: "In-property",
    housekeeper: "Daily service included",
    petFriendly: "On request",
    description: "Xanadu is not simply a residence — it is a state of being. Perched above the Atlantic on the heights of Ravine Court, this extraordinary home commands panoramic ocean views across the full sweep of Camps Bay below. Floor-to-ceiling glass dissolves the boundary between interior and horizon, flooding every room with the kind of light that slows time.",
    shortDesc: "Panoramic Atlantic views, floor-to-ceiling glass, and four elegantly appointed bedrooms perched above Camps Bay.",
    features: ["24hr Security", "Private Chef Arrangements", "Airport Transfers", "Dedicated Host"],
    amenities: ["Pool Terrace", "Ocean Views", "Master Suite", "Chef Kitchen"],
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=85",
    thumb: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1400&q=85",
      "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?w=1400&q=85",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&q=85",
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=1400&q=85",
    ],
    channels: ["Airbnb", "Vrbo", "Direct", "Luxury Platforms"],
  },
  {
    id: 2,
    name: "STATION PENTHOUSE",
    tagline: "Urban elevation, coastal soul",
    location: "De Waterkant · Cape Town",
    locationShort: "De Waterkant",
    type: "Penthouse",
    status: "Available for Exclusive Stays",
    beds: 3, baths: 3, parking: 2, guests: 6,
    pool: "Rooftop Plunge Pool",
    view: "City · Mountain · Harbour",
    kitchen: "Fully equipped, chef-ready",
    laundry: "In-property",
    housekeeper: "Daily service included",
    petFriendly: "On request",
    description: "Rising above the cobblestoned lanes of De Waterkant, the Station Penthouse is a study in refined urban living. The rooftop terrace commands a 360° sweep of Table Mountain, the V&A Waterfront, and the Atlantic seaboard — a panorama that redefines what it means to be in Cape Town.",
    shortDesc: "Rooftop plunge pool with 360° views of Table Mountain, the Waterfront, and the Atlantic seaboard.",
    features: ["Rooftop Terrace", "Private Chef Arrangements", "Concierge Service", "Dedicated Host"],
    amenities: ["Rooftop Pool", "City Views", "Mountain Views", "Harbour Views"],
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=85",
    thumb: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=85",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=85",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1400&q=85",
    ],
    channels: ["Airbnb", "Vrbo", "Direct", "Luxury Platforms"],
  },
  {
    id: 3,
    name: "THE CUBE",
    tagline: "Architectural precision, Atlantic light",
    location: "Bantry Bay · Cape Town",
    locationShort: "Bantry Bay",
    type: "Luxury Villa",
    status: "Available for Exclusive Stays",
    beds: 5, baths: 5, parking: 2, guests: 10,
    pool: "Infinity Pool",
    view: "Ocean · Sunset",
    kitchen: "Fully equipped, chef-ready",
    laundry: "In-property",
    housekeeper: "Daily service included",
    petFriendly: "On request",
    description: "The Cube is an exercise in architectural restraint — a home where every angle is deliberate and every surface honours the light. Nestled into the Bantry Bay cliffs, the infinity pool appears to dissolve into the Atlantic at the horizon. Sunsets here are not observed, they are experienced.",
    shortDesc: "Clifftop infinity pool merging with the Atlantic horizon — architectural restraint meets raw natural beauty.",
    features: ["Infinity Pool", "Chef Service", "Airport Transfers", "Concierge"],
    amenities: ["Infinity Pool", "Ocean Views", "Sunset Terrace", "Chef Kitchen"],
    image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1200&q=85",
    thumb: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1400&q=85",
      "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=1400&q=85",
      "https://images.unsplash.com/photo-1523217582562-09d05cc7d71a?w=1400&q=85",
      "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?w=1400&q=85",
    ],
    channels: ["Airbnb", "Vrbo", "Direct", "Luxury Platforms"],
  },
  {
    id: 4,
    name: "AZURE PENTHOUSE",
    tagline: "Where the cliff meets the Atlantic",
    location: "Clifton · Cape Town",
    locationShort: "Clifton",
    type: "Penthouse",
    status: "Available for Exclusive Stays",
    beds: 3, baths: 3, parking: 2, guests: 6,
    pool: "Private Pool",
    view: "Direct Ocean · Clifton Beaches",
    kitchen: "Fully equipped, chef-ready",
    laundry: "In-property",
    housekeeper: "Daily service included",
    petFriendly: "On request",
    description: "Azure sits above Clifton's legendary beaches with the kind of unobstructed ocean exposure that most Cape Town visitors only dream of. The private pool is set at the very edge of the terrace — a liquid frame for the Atlantic. Inside, the penthouse is a composition of calm, curated materials, and considered light.",
    shortDesc: "Clifton's finest elevation — direct ocean frontage, a private pool at the terrace edge, and the beaches below.",
    features: ["Direct Ocean Access", "Private Chef Arrangements", "Concierge", "Dedicated Host"],
    amenities: ["Private Pool", "Beach Access", "Ocean Views", "Clifton Sunsets"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85",
    thumb: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=85",
      "https://images.unsplash.com/photo-1501117407287-1d77d484695f?w=1400&q=85",
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=1400&q=85",
    ],
    channels: ["Airbnb", "Vrbo", "Direct", "Luxury Platforms"],
  },
];

interface Property {
  id: number;
  name: string;
  tagline: string;
  location: string;
  locationShort: string;
  type: string;
  status: string;
  beds: number;
  baths: number;
  parking: number;
  guests: number;
  pool: string;
  view: string;
  kitchen: string;
  laundry: string;
  housekeeper: string;
  petFriendly: string;
  description: string;
  shortDesc: string;
  features: string[];
  amenities: string[];
  image: string;
  thumb: string;
  gallery: string[];
  channels: string[];
}

function Grain() {
  return (
<<<<<<< HEAD
    <div style={{ background: '#08080a', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <p style={{ color: '#c9a96e', fontFamily: 'sans-serif' }}>The Hive — Coming Soon</p>
=======
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999, pointerEvents: "none",
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E")`,
      opacity: 0.3,
    }} />
  );
}

function Header({ onHome, view }: { onHome: () => void; view: string }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const solid = scrolled || view !== "hero";
  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 48px", height: "72px",
      background: solid ? "rgba(8,8,10,0.92)" : "transparent",
      backdropFilter: solid ? "blur(20px)" : "none",
      borderBottom: solid ? "1px solid rgba(201,169,110,0.12)" : "none",
      transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
    }}>
      {view !== "hero" ? (
        <button onClick={onHome} style={{
          background: "none", border: "none", cursor: "pointer",
          fontFamily: "'DM Sans', sans-serif", fontSize: "10px",
          letterSpacing: "0.25em", textTransform: "uppercase",
          color: "rgba(245,240,232,0.5)",
        }}>← All Properties</button>
      ) : (
        <div style={{ width: "120px" }} />
      )}
      <button onClick={onHome} style={{ background: "none", border: "none", cursor: "pointer", textAlign: "center" }}>
        <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "15px", fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase", color: "#f5f0e8" }}>THE HIVE</div>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "8px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#c9a96e", marginTop: "2px" }}>LUXURY MANAGEMENT</div>
      </button>
      <button style={{
        background: "transparent", border: "1px solid rgba(201,169,110,0.5)",
        borderRadius: "1px", padding: "9px 22px", cursor: "pointer",
        fontFamily: "'DM Sans', sans-serif", fontSize: "9px",
        letterSpacing: "0.25em", textTransform: "uppercase", color: "#c9a96e",
      }}>Inquire Now</button>
    </header>
  );
}

function Hero({ onExplore }: { onExplore: () => void }) {
  const [mounted, setMounted] = useState(false);
  const [imgIdx, setImgIdx] = useState(0);
  useEffect(() => { setTimeout(() => setMounted(true), 150); }, []);
  useEffect(() => {
    const t = setInterval(() => setImgIdx(i => (i + 1) % properties.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {properties.map((p, i) => (
        <img key={p.id} src={p.image} alt={p.name} style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          objectFit: "cover", filter: "brightness(0.38) saturate(0.75)",
          opacity: imgIdx === i ? 1 : 0,
          transition: "opacity 1.8s cubic-bezier(0.16,1,0.3,1)",
        }} />
      ))}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(8,8,10,0.15) 0%, rgba(8,8,10,0.5) 55%, rgba(8,8,10,0.92) 100%)" }} />
      <div style={{ position: "absolute", left: "48px", top: "50%", transform: "translateY(-50%)", width: "1px", height: "120px", background: "linear-gradient(to bottom, transparent, rgba(201,169,110,0.5), transparent)" }} />
      <div style={{
        position: "absolute", inset: 0, display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(20px)",
        transition: "all 1.4s cubic-bezier(0.16,1,0.3,1)",
      }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "9px", letterSpacing: "0.5em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "24px" }}>
          Cape Town · Luxury Property Management
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(56px, 8vw, 108px)", fontWeight: 300, lineHeight: 0.95, textAlign: "center", color: "#f5f0e8", letterSpacing: "-0.02em", marginBottom: "8px" }}>
          Effortless<br />
          <em style={{ color: "rgba(245,240,232,0.55)", fontStyle: "italic" }}>Luxury,</em><br />
          Lived.
        </h1>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "rgba(245,240,232,0.5)", letterSpacing: "0.05em", marginTop: "24px", maxWidth: "420px", textAlign: "center", lineHeight: 1.7 }}>
          Professionally managed villas and penthouses across Cape Town&apos;s most coveted addresses.
        </p>
        <div style={{ display: "flex", gap: "16px", marginTop: "44px" }}>
          <button onClick={onExplore} style={{ background: "#c9a96e", border: "none", borderRadius: "1px", padding: "14px 36px", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#08080a", fontWeight: 600 }}>
            View Properties
          </button>
          <button style={{ background: "transparent", border: "1px solid rgba(245,240,232,0.2)", borderRadius: "1px", padding: "14px 36px", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(245,240,232,0.7)" }}>
            Inquire Now
          </button>
        </div>
        <div style={{ display: "flex", gap: "8px", marginTop: "48px" }}>
          {properties.map((_, i) => (
            <button key={i} onClick={() => setImgIdx(i)} style={{ width: imgIdx === i ? "24px" : "6px", height: "2px", background: imgIdx === i ? "#c9a96e" : "rgba(245,240,232,0.2)", border: "none", cursor: "pointer", padding: 0, transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)" }} />
          ))}
        </div>
      </div>
      <div style={{ position: "absolute", bottom: "36px", left: "48px", opacity: mounted ? 0.6 : 0, transition: "opacity 1s 0.8s" }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "4px" }}>Currently Showing</p>
        <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "16px", color: "#f5f0e8", fontWeight: 300 }}>{properties[imgIdx].name}</p>
      </div>
    </section>
  );
}

function PropertyCard({ property, onClick, index }: { property: Property; onClick: (p: Property) => void; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), index * 100 + 100); }, [index]);
  return (
    <div onClick={() => onClick(property)} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ cursor: "pointer", opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.7s, transform 0.7s cubic-bezier(0.16,1,0.3,1)" }}>
      <div style={{ position: "relative", height: "320px", overflow: "hidden", marginBottom: "20px" }}>
        <img src={property.thumb} alt={property.name} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.82) saturate(0.8)", transform: hovered ? "scale(1.05)" : "scale(1)", transition: "transform 0.8s cubic-bezier(0.16,1,0.3,1)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(8,8,10,0.6) 100%)", opacity: hovered ? 1 : 0.6, transition: "opacity 0.4s" }} />
        <div style={{ position: "absolute", top: "16px", left: "16px", background: "rgba(8,8,10,0.75)", backdropFilter: "blur(12px)", border: "1px solid rgba(201,169,110,0.3)", padding: "4px 12px", fontFamily: "'DM Sans', sans-serif", fontSize: "8px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a96e" }}>{property.type}</div>
        <div style={{ position: "absolute", bottom: "16px", left: "16px", right: "16px", display: "flex", gap: "16px", opacity: hovered ? 1 : 0, transform: hovered ? "translateY(0)" : "translateY(6px)", transition: "all 0.3s" }}>
          {[{ label: "Beds", val: property.beds }, { label: "Baths", val: property.baths }, { label: "Guests", val: property.guests }].map(({ label, val }) => (
            <div key={label} style={{ background: "rgba(8,8,10,0.7)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.08)", padding: "6px 12px", textAlign: "center" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "18px", color: "#f5f0e8" }}>{val}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "8px", letterSpacing: "0.15em", color: "rgba(245,240,232,0.5)", textTransform: "uppercase" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "8px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "6px" }}>{property.locationShort}</p>
        <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "28px", fontWeight: 400, color: "#f5f0e8", margin: 0, lineHeight: 1, borderBottom: hovered ? "1px solid rgba(201,169,110,0.3)" : "1px solid transparent", paddingBottom: "10px", marginBottom: "10px", transition: "border-color 0.3s" }}>{property.name}</h3>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "rgba(245,240,232,0.45)", lineHeight: 1.5, letterSpacing: "0.02em" }}>{property.tagline}</p>
      </div>
>>>>>>> e763584b9f69640ea6c05e20027835e6518a0599
    </div>
  );
}

function CollectionPage({ onSelect }: { onSelect: (p: Property) => void }) {
  return (
    <div style={{ minHeight: "100vh", background: "#08080a", paddingTop: "72px" }}>
      <div style={{ padding: "64px 48px 48px", maxWidth: "1300px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "9px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "14px" }}>The Collection</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(40px, 4.5vw, 64px)", fontWeight: 300, color: "#f5f0e8", margin: 0, lineHeight: 1, letterSpacing: "-0.01em" }}>
              Cape Town&apos;s Most<br /><em style={{ color: "rgba(245,240,232,0.5)" }}>Coveted Addresses</em>
            </h2>
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "rgba(245,240,232,0.35)", maxWidth: "280px", textAlign: "right", lineHeight: 1.7 }}>
            Each property is professionally managed by The Hive — discretion assured, response within 2 hours.
          </p>
        </div>
        <div style={{ marginTop: "40px", height: "1px", background: "linear-gradient(to right, rgba(201,169,110,0.4), rgba(201,169,110,0.05))" }} />
      </div>
      <div style={{ padding: "0 48px 80px", maxWidth: "1300px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "60px 48px" }}>
        {properties.map((p, i) => <PropertyCard key={p.id} property={p} onClick={onSelect} index={i} />)}
      </div>
      <div style={{ borderTop: "1px solid rgba(201,169,110,0.1)", borderBottom: "1px solid rgba(201,169,110,0.1)", padding: "40px 48px", background: "rgba(201,169,110,0.03)" }}>
        <div style={{ maxWidth: "1300px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {[
            { icon: "◎", label: "Privacy & Security", sub: "Gated estate, 24hr security" },
            { icon: "⊹", label: "Concierge Services", sub: "Dedicated host, private chef" },
            { icon: "◇", label: "Professionally Managed", sub: "The Hive Luxury Management" },
            { icon: "○", label: "Channel Listed", sub: "Airbnb · Vrbo · Direct" },
          ].map(({ icon, label, sub }) => (
            <div key={label} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
              <span style={{ color: "#c9a96e", fontSize: "16px", marginTop: "2px" }}>{icon}</span>
              <div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", letterSpacing: "0.1em", color: "#f5f0e8", margin: 0 }}>{label}</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", color: "rgba(245,240,232,0.35)", margin: "2px 0 0" }}>{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DetailPage({ property, onBack, onOther }: { property: Property; onBack: () => void; onOther: (p: Property) => void }) {
  const [galleryIdx, setGalleryIdx] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [inquired, setInquired] = useState(false);
  const others = properties.filter(p => p.id !== property.id);
  useEffect(() => { window.scrollTo(0, 0); setTimeout(() => setMounted(true), 100); }, [property]);
  return (
    <div style={{ minHeight: "100vh", background: "#08080a", paddingTop: "72px" }}>
      <div style={{ position: "relative", height: "80vh", overflow: "hidden", opacity: mounted ? 1 : 0, transition: "opacity 1s" }}>
        {property.gallery.map((img, i) => (
          <img key={i} src={img} alt={`${property.name} ${i + 1}`} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.75) saturate(0.8)", opacity: galleryIdx === i ? 1 : 0, transition: "opacity 1s cubic-bezier(0.16,1,0.3,1)" }} />
        ))}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(8,8,10,0.1) 0%, rgba(8,8,10,0.35) 60%, rgba(8,8,10,0.92) 100%)" }} />
        <div style={{ position: "absolute", bottom: "48px", left: "48px", opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(16px)", transition: "all 0.8s 0.3s cubic-bezier(0.16,1,0.3,1)" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "9px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "8px" }}>{property.location}</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(48px, 6vw, 84px)", fontWeight: 300, color: "#f5f0e8", margin: 0, lineHeight: 0.95, letterSpacing: "-0.02em" }}>{property.name}</h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "rgba(245,240,232,0.5)", marginTop: "10px" }}>{property.tagline}</p>
        </div>
        <div style={{ position: "absolute", bottom: "48px", right: "48px", display: "flex", gap: "6px" }}>
          {property.gallery.map((img, i) => (
            <button key={i} onClick={() => setGalleryIdx(i)} style={{ width: "56px", height: "40px", padding: 0, border: "none", cursor: "pointer", overflow: "hidden", outline: galleryIdx === i ? "1px solid #c9a96e" : "1px solid rgba(255,255,255,0.1)", outlineOffset: "2px" }}>
              <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.7)" }} />
            </button>
          ))}
        </div>
        <div style={{ position: "absolute", top: "24px", right: "48px", background: "rgba(8,8,10,0.75)", backdropFilter: "blur(12px)", border: "1px solid rgba(201,169,110,0.35)", padding: "6px 16px", fontFamily: "'DM Sans', sans-serif", fontSize: "8px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#c9a96e" }}>{property.status}</div>
      </div>

      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "64px 48px 80px", display: "grid", gridTemplateColumns: "1fr 380px", gap: "80px", opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s 0.2s cubic-bezier(0.16,1,0.3,1)" }}>
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid rgba(201,169,110,0.15)", borderBottom: "1px solid rgba(201,169,110,0.15)", marginBottom: "48px" }}>
            {[{ label: "Bedrooms", val: property.beds }, { label: "Bathrooms", val: property.baths }, { label: "Parking", val: property.parking }, { label: "Max Guests", val: property.guests }].map(({ label, val }, i) => (
              <div key={label} style={{ padding: "24px 0", textAlign: "center", borderRight: i < 3 ? "1px solid rgba(201,169,110,0.1)" : "none" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "44px", fontWeight: 300, color: "#f5f0e8", lineHeight: 1 }}>{val}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "8px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(245,240,232,0.35)", marginTop: "4px" }}>{label}</div>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "22px", fontWeight: 300, lineHeight: 1.75, color: "rgba(245,240,232,0.8)", marginBottom: "48px" }}>{property.description}</p>
          <div style={{ marginBottom: "48px" }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "8px", letterSpacing: "0.35em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "16px" }}>Highlights</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {property.amenities.map(a => <span key={a} style={{ background: "rgba(201,169,110,0.07)", border: "1px solid rgba(201,169,110,0.2)", padding: "7px 16px", fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "0.08em", color: "rgba(245,240,232,0.65)" }}>{a}</span>)}
            </div>
          </div>
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "8px", letterSpacing: "0.35em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "16px" }}>Property Details</p>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              {[["Location", property.locationShort + ", Cape Town"], ["Property Type", property.type], ["Pool", property.pool], ["View", property.view], ["Kitchen", property.kitchen], ["Laundry", property.laundry], ["Housekeeper", property.housekeeper], ["Pet Friendly", property.petFriendly]].map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(245,240,232,0.35)" }}>{k}</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "rgba(245,240,232,0.7)" }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div style={{ background: "rgba(245,240,232,0.03)", backdropFilter: "blur(20px)", border: "1px solid rgba(201,169,110,0.12)", padding: "36px", position: "sticky", top: "90px" }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "8px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "6px" }}>Check Availability</p>
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "28px", fontWeight: 300, color: "#f5f0e8", margin: "0 0 4px" }}>{property.name}</h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "rgba(245,240,232,0.4)", marginBottom: "28px" }}>{property.locationShort}</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", marginBottom: "1px" }}>
              {["Check-in", "Check-out"].map(label => (
                <div key={label} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", padding: "14px 16px" }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "8px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(245,240,232,0.3)", margin: "0 0 4px" }}>{label}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "rgba(245,240,232,0.5)", margin: 0 }}>Select date</p>
                </div>
              ))}
            </div>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", padding: "14px 16px", marginBottom: "20px" }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "8px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(245,240,232,0.3)", margin: "0 0 4px" }}>Guests</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "rgba(245,240,232,0.5)", margin: 0 }}>Up to {property.guests} guests</p>
            </div>
            <button onClick={() => setInquired(!inquired)} style={{ width: "100%", padding: "16px", background: inquired ? "rgba(201,169,110,0.1)" : "#c9a96e", border: inquired ? "1px solid #c9a96e" : "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: inquired ? "#c9a96e" : "#08080a", fontWeight: 600, transition: "all 0.3s", marginBottom: "14px" }}>
              {inquired ? "✓ Request Received" : "Inquire for Exclusive Access"}
            </button>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "9px", textAlign: "center", color: "rgba(245,240,232,0.3)", letterSpacing: "0.1em" }}>Discretion assured · Response within 2 hours</p>
            <div style={{ marginTop: "28px", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "24px" }}>
              {property.features.map(f => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                  <span style={{ color: "#c9a96e", fontSize: "10px" }}>◎</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "rgba(245,240,232,0.45)" }}>{f}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "20px", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "20px" }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "8px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(245,240,232,0.25)", marginBottom: "10px" }}>Channel Listed</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {property.channels.map(c => <span key={c} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", padding: "3px 10px", fontFamily: "'DM Sans', sans-serif", fontSize: "9px", color: "rgba(245,240,232,0.3)", letterSpacing: "0.05em" }}>{c}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(201,169,110,0.1)", padding: "64px 48px", maxWidth: "1300px", margin: "0 auto" }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "8px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "8px" }}>Continue Exploring</p>
        <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "36px", fontWeight: 300, color: "#f5f0e8", margin: "0 0 40px" }}>More from the Collection</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {others.map(p => (
            <div key={p.id} onClick={() => onOther(p)} style={{ cursor: "pointer" }}>
              <div style={{ position: "relative", height: "200px", overflow: "hidden", marginBottom: "14px" }}>
                <img src={p.thumb} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.7) saturate(0.8)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent, rgba(8,8,10,0.5))" }} />
                <div style={{ position: "absolute", bottom: "12px", left: "12px", fontFamily: "'DM Sans', sans-serif", fontSize: "8px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a96e" }}>{p.locationShort}</div>
              </div>
              <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "20px", color: "#f5f0e8", margin: "0 0 4px" }}>{p.name}</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "rgba(245,240,232,0.35)" }}>{p.tagline}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: "rgba(201,169,110,0.04)", borderTop: "1px solid rgba(201,169,110,0.1)", padding: "60px 48px", textAlign: "center" }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "8px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "14px" }}>Ready to Experience {property.name.split(" ")[0]}?</p>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "rgba(245,240,232,0.4)", maxWidth: "480px", margin: "0 auto 28px", lineHeight: 1.7 }}>Our team is available to discuss your stay, arrange private viewings, and curate every detail of your Cape Town experience.</p>
        <button onClick={() => setInquired(true)} style={{ background: "transparent", border: "1px solid rgba(201,169,110,0.5)", padding: "13px 36px", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a96e" }}>Check Availability</button>
      </div>
    </div>
  );
}

export default function Home() {
  const [view, setView] = useState("hero");
  const [selected, setSelected] = useState<Property | null>(null);
  const handleSelect = (property: Property) => { setSelected(property); setView("detail"); };
  return (
    <div style={{ background: "#08080a", minHeight: "100vh", color: "#f5f0e8" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #08080a; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #08080a; }
        ::-webkit-scrollbar-thumb { background: rgba(201,169,110,0.25); }
      `}</style>
      <Grain />
      <Header onHome={() => setView(view === "hero" ? "collection" : "hero")} view={view} />
      {view === "hero" && <Hero onExplore={() => setView("collection")} />}
      {view === "collection" && <CollectionPage onSelect={handleSelect} />}
      {view === "detail" && selected && <DetailPage property={selected} onBack={() => setView("collection")} onOther={handleSelect} />}
    </div>
  );
}
