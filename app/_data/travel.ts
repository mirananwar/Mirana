export type Destination = {
  city: string;
  country: string;
  year: string;
  note: string;
};

export type FeaturedDestination = Destination & {
  img: string;
};

export const featuredDestination: FeaturedDestination = {
  city: "Milos",
  country: "Greece",
  year: "2025",
  note: "One week across Athens, Mykonos, and Milos. Bluest water I've ever seen, and some of the best food I've ever had.",
  img: "/travel-featured.jpg",
};

export const otherDestinations: Destination[] = [
  { city: "Istanbul",   country: "Turkey",      year: "2025", note: "Cats in every corner" },
  { city: "San Juan",   country: "Puerto Rico",  year: "2025", note: "Bad Bunny's city" },
  { city: "Split",      country: "Croatia",      year: "2024", note: "Walked through Daenerys's city" },
  { city: "Port Louis", country: "Mauritius",    year: "2023", note: "Beach, mountain, safari — all before lunch" },
  { city: "Lisbon",     country: "Portugal",     year: "2023", note: "Had a pastel de nata every hour" },
  { city: "Budapest",   country: "Hungary",      year: "2023", note: "Buda on one side, Pest on the other" },
  { city: "Paris",      country: "France",       year: "2023", note: "City of love and even better pastries" },
  { city: "Vienna",     country: "Austria",      year: "2023", note: "Every corner is a museum" },
];
