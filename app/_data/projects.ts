export type Project = {
  name: string;
  desc: string;
  tech: string;
  comingSoon?: boolean;
};

export const projects: Project[] = [
  {
    name: "Coming Soon",
    comingSoon: true,
    desc: "Something new in the works! Check back soon.",
    tech: "",
  },
  {
    name: "Spotify Song Recommender",
    desc: "Multilingual music recommendation engine using KNN with tunable α weighting across 50K+ songs in 5 languages via Spotify and Google Translate APIs.",
    tech: "Python · KNN · Spotify API",
  },
  {
    name: "NEUFriends",
    desc: "Social platform for Northeastern students to find events and co-attendees, with a Neo4j-powered recommendation engine that surfaces friends and events by shared interests.",
    tech: "Django · MongoDB · Neo4j",
  },
];
