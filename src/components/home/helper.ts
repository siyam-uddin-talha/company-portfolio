export type BannerContent = {
  img: string;
  title: string;
  subTitle: string;
  route: string;
};

export type AboutShowContent = {
  img: string;
  title: string;
  subTitle: string;
};
export type Content = {
  img: string;
  title: string;
  subTitle: string;
  description?: string;
};

export type WhyUsContent = {
  tab: string;
  img: string;
  title: string;
  subTitle: string;
  description?: string;
};

export type CaseContent = {
  img: string;
  title: string;
  subTitle: string;
  route: string;
};

export const CaseStudiesContents: CaseContent[] = [
  {
    title: "Crypto & currency exchange",
    subTitle:
      " We’ll identify where potential problems might occur and provide you with a detailed set of recommendations.",
    img: "/assets/case/case-1.jpg",
    route: "/case-studies/",
  },
  {
    title: "Smart contract",
    subTitle:
      " If you have decided to upgrade or extend your IT infrastructure, we can ensure that the project goes smoothly.",
    img: "/assets/case/case-2.jpg",
    route: "/case-studies/",
  },
  {
    title: "Ride sharing",
    subTitle:
      "Achieve faster development, fewer bugs and frequent delivery of products with our DevOps services.",
    img: "/assets/case/case-3.jpg",
    route: "/case-studies/",
  },
  {
    title: "Admin management",
    subTitle:
      "If you’ve built up your IT system over a period of time, you probably have a mix of different hardware and software.",
    img: "/assets/case/case-4.jpg",
    route: "/case-studies/",
  },
  {
    title: "Cross platrorm",
    subTitle:
      " So if you need to improve the speed and efficiency of your IT system, contact us for professional and unbiased.",
    img: "/assets/case/case-5.jpg",
    route: "/case-studies/",
  },
];
