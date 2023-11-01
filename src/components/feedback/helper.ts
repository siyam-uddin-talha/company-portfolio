import UseRandomImage from "../hooks/UseRandomImage";

export type ReviewTypes = {
  description: string;
  img?: string;
  name: string;
  profession: string;
  star: number;
};

export const FeedbackReview: ReviewTypes[] = [
  {
    description:
      "“They helped the client achieve their goal of calling the attention of mobile network operators. The expert team was also able to develop an app with commendable UI/UX. The client appreciates their flexibility in terms.”",
    img: "/assets/client-1.jpg",
    name: "Arnold Burner",
    star: 4,
    profession: "Founder of UQI",
  },
  {
    description:
      "“Ordered my first mobile app development to ITSoft Solutions. I was inexperienced contractor but they carefully listened to my request and try to deliver the best quality of service. All phone calls and emails are answered very professionally. ”",
    img: "/assets/client-2.jpg",
    name: "Sachin Diwar",
    star: 5,
    profession: "Manganer of BIWTA",
  },
  {
    description:
      "The big difference with “Tekorio is that they really implement everything about structures and processes which are quite important to get things done. They to maintain great amount of creativity. What we have got from “Tekorio is twice the quality in half the time. ”",
    img: UseRandomImage("client"),
    name: "Magnus Hansen",
    star: 5,
    profession: "Owner at IT Services Company, Denmark",
  },
  {
    description:
      "“Working with several word press themes and templates the last years, I only can say this is the best in every level. I use it for my company and the reviews that I have already are all excellent. Support is helping to fix my issues now.”",
    img: "/assets/client-3.png",
    name: "Fritz Thielemann",
    star: 5,
    profession: "Seniour developer",
  },
  {
    description:
      "“Tekorio within years of work together was able to be a successful technical partner.”",
    img: UseRandomImage("man"),
    name: "Ahmad Qusay Sabri",
    star: 4,
    profession: "CEO Academy Advisory Group, UAE",
  },
  {
    description:
      "“Their requirement understanding and suggesting the suitable solutions skill is outstanding”",
    name: "Shadi Bafadel",
    star: 5,
    profession: "Project Manager, Software Company, UK",
  },
  {
    description:
      "“It’s great to work with a company that is professional, knowledgeable and responsive. An incredibly organized team that is easy to communicate with – Congratulations on your 16 year anniversary!”",
    img: UseRandomImage("boy"),
    name: "Kishan Maharaj",
    star: 5,
    profession: "Manager at IT Firm, SA",
  },
  {
    description:
      "“Tekorio has been an outstanding partner on our software project and truly shares our vision for a visually appealing and easy-to-use application. Their professionalism and dedication to our goals and requirements is commendable. If you’re looking for a company that consistently exceeds your expectations, look no further.”",
    img: UseRandomImage("women"),
    name: "Jana L. Bauer",
    star: 5,
    profession: "MIS Director at Collection Agency, USA",
  },
  {
    description:
      "“If there’s work to be completed, they will spend all night working on it to hit deliverables.”",

    name: "Ebbe Gorin",
    star: 5,
    profession: "CEO sy BrainStorm, USA",
  },
];
