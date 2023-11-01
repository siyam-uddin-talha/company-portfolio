import { UseRandomImage } from "../utils/UseImage";

type Skills =
  | "react.js"
  | "angular.js"
  | "vue.js"
  | "python"
  | ".net"
  | "ruby on rails"
  | "node.js"
  | "laravel"
  | "react-native"
  | "flutter"
  | "java";

export interface IMember {
  img: string;
  name: string;
  profession: string;
  social: {
    facebook: "https://www.facebook.com/";
    instagram: "https://www.instagram.com/";
    twitter: "http://www.twitter.com/";
  };
  skill: Skills[];
}

export const TeamMembers: IMember[] = [
  {
    name: "David Cooper",
    img: "/assets/team/team-member-1.jpg",
    profession: "Full-Stack Developer",
    social: {
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      twitter: "http://www.twitter.com/",
    },
    skill: [".net", "angular.js", "python", "react.js"],
  },
  {
    name: "Mike Hardson",
    img: "/assets/team/team-member-2.jpg",
    profession: "Designer",
    social: {
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      twitter: "http://www.twitter.com/",
    },
    skill: ["laravel", "angular.js", "vue.js"],
  },
  {
    name: "Susi saku",
    img: UseRandomImage("women"),
    profession: "Frontend developer",
    social: {
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      twitter: "http://www.twitter.com/",
    },
    skill: ["react.js", "vue.js", "angular.js", "ruby on rails"],
  },
  {
    name: "Hardik Shah",
    img: "/assets/team/team-member-3.jpg",
    profession: "Full-Stack Developer",
    social: {
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      twitter: "http://www.twitter.com/",
    },
    skill: ["node.js", "react.js", "react-native", "java"],
  },
  {
    name: "Maitrik Kataria",
    img: "/assets/team/team-member-4.jpg",
    profession: "Side Manager",
    social: {
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      twitter: "http://www.twitter.com/",
    },
    skill: ["python", "vue.js", "java", "react-native"],
  },
  {
    name: "Jordan Walker",
    img: "/assets/team/team-member-5.jpg",
    profession: "Tech Consultant",
    social: {
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      twitter: "http://www.twitter.com/",
    },
    skill: [".net", "ruby on rails", "laravel", "python"],
  },
  {
    name: "Mary Hoag",
    img: "/assets/team/team-member-6.jpg",
    profession: "Project Manager",
    social: {
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      twitter: "http://www.twitter.com/",
    },
    skill: ["ruby on rails", "flutter", "java", "laravel"],
  },
  {
    name: "Kelly Powell",
    img: "/assets/team/team-member-7.jpg",
    profession: "Backend developer",
    social: {
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      twitter: "http://www.twitter.com/",
    },
    skill: ["node.js", "java", "laravel", ".net"],
  },
  {
    name: "Manis paul",
    img: UseRandomImage("boy"),
    profession: "Mobile developer",
    social: {
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      twitter: "http://www.twitter.com/",
    },
    skill: ["flutter", "java", ".net", "react-native"],
  },
  {
    name: "Alexa parker",
    img: UseRandomImage("women"),
    profession: "Backend developer",
    social: {
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      twitter: "http://www.twitter.com/",
    },
    skill: ["java", "python", "node.js"],
  },
];
