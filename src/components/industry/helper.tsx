import { BsClockHistory, BsFillCloudFog2Fill, BsWallet2 } from "react-icons/bs";
import {
  CgCommunity,
  CgDisplayFlex,
  CgPerformance,
  CgRowFirst,
} from "react-icons/cg";
import {
  GiGrowth,
  GiCogsplosion,
  GiReceiveMoney,
  GiTimeTrap,
} from "react-icons/gi";
import {
  MdConnectWithoutContact,
  MdManageSearch,
  MdOutlineThumbsUpDown,
  MdOutlineUpdate,
  MdOutlineWifiProtectedSetup,
  MdSecurity,
  MdTransgender,
  MdWeb,
} from "react-icons/md";
import {
  RiDeviceRecoverLine,
  RiShieldUserLine,
  RiUserLocationLine,
} from "react-icons/ri";
import { IoIosApps } from "react-icons/io";
import { BiRepost, BiSupport } from "react-icons/bi";
import {
  TbBuildingBank,
  TbDeviceMobileMessage,
  TbDeviceMobileVibration,
  TbReportMoney,
  TbZoomMoney,
} from "react-icons/tb";
import { SiDatabricks, SiPaloaltosoftware } from "react-icons/si";
import { DiGoogleAnalytics } from "react-icons/di";
import {
  AiOutlineAppstoreAdd,
  AiOutlineCloudSync,
  AiOutlineMobile,
} from "react-icons/ai";
import { GrIntegration } from "react-icons/gr";
import { FaUsers } from "react-icons/fa";
import { GoReport } from "react-icons/go";
import { FiLock } from "react-icons/fi";

export interface IIndustry {
  title: string;
  subTitle: string;
  overViewText: string[];
  benefit: {
    title: string;
    subTitle: string;
    explore: Explore[];
  };
  // --------- this arry should not be more then 3
  solutions: {
    title: string;
    subTitle: string;

    explore: Explore[];
  };
  backward: {
    title: string;
    description: string[];
  };
  cost: {
    title: string;
    description: string[];
  };
  frequently: {
    question: string;
    answer: string;
  }[];
}

type Explore = {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
};

export const IndustryData: IIndustry[] = [
  {
    title: "Medical SoftwareDevelopment Services",
    subTitle:
      "We has been partnering with companies in the healthcare sector, helping them leverage technological innovation to automate internal processes, enhance the customer experience, and manage medical information more efficiently.",
    overViewText: [
      "With a full range of software engineering services, we can help you with everything from prototyping to deployment and maintenance. To streamline information exchange between doctors, patients, and other healthcare practitioners, as a healthcare software company our engineers develop feature-rich and powerful Software Development Solutions.",
      "Healthcare IT is now a necessity and an inseparable part of the healthcare industry. Healthcare IT solutions facilitate communication between patients and doctors, ensuring a constant flow of information and access to important data. Healthcare software solutions offer assistance, guidance, better management of data, and higher patient engagement.",
      "As a healthcare software development company, our team manages medical software projects from start to finish, from conception to company-wide deployment and continual support. As a safety measure, we design medical software based on healthcare IT standards, such as HIPAA, GDPR, FDA, HL7, HITECH, and FHIR.",
    ],
    benefit: {
      title: "Healthcare Software Benefits",
      subTitle:
        "Explore the benefits of investing in medical software development.",
      explore: [
        {
          icon: <MdOutlineWifiProtectedSetup />,
          title: "Simplified processes",
        },
        {
          icon: <GiGrowth />,
          title: "Increased efficiency",
        },
        {
          icon: <GiReceiveMoney />,
          title: "Cost savings",
        },
        {
          icon: <BsFillCloudFog2Fill />,
          title: "Easy access to data",
        },
        {
          icon: <CgCommunity />,
          title: "Improved communication",
        },
        {
          icon: <RiDeviceRecoverLine />,
          title: "Integrated digital records",
        },
      ],
    },
    solutions: {
      title: "What is Possible?",
      subTitle:
        "Medical software development offers varied solutions to ensure the best healthcare experience.",
      explore: [
        {
          title: "E-health Applications",
          subtitle:
            "Invest in a mobile application to improve user experience on smartphones.",
          icon: <IoIosApps />,
        },
        {
          title: "Custom Software",
          subtitle: "Develop an online solution with a global reach.",
          icon: <GiCogsplosion />,
        },
        {
          title: "Wearable Tech",
          subtitle: "Connect medical devices with software solutions.",
          icon: <MdConnectWithoutContact />,
        },
      ],
    },
    cost: {
      title: "The Cost of Medical Software Development",
      description: [
        "The overall cost of your project depends on the time needed to deliver it, and the number of software developers included. Based on the scope of your project, software developers estimate the workload and use hourly rates to calculate the cost of mobile or web app development.",
        "The cost of medical software development services can be estimated similarly to other software development projects.",
        "Commonly-used billing options include a fixed price or time and material. With a fixed price model, the budget doesn’t depend on any changes in time. Time and material, on the other hand, will take delivery time into account, even if it changes during the project.",
        "Commonly-used billing options include a fixed price or time and material. With a fixed price model, the budget doesn’t depend on any changes in time. Time and material, on the other hand, will take delivery time into account, even if it changes during the project.",
      ],
    },
    backward: {
      title: "How does Technology Change the Healthcare Industry?",
      description: [
        "Healthcare IT digitalizes numerous processes and provides patients with online services such as e-pharmacies and online consultancies.",
        "Technology has revolutionized the healthcare industry. It is a driving force behind improvements and innovations. One of the most tangible and important changes introduced to the healthcare industry is facilitated accessibility to treatment. Solutions ensured by medical appointments software facilitate the process of arranging doctor’s appointments and streamlines the flow of information. ",
        "Moreover, healthcare IT ensures constant access to patients’ data and medical history. In addition, wearable healthcare technology allows patients to self-monitor their blood pressure, heart rhythms, and measure ECGs. Healthcare wearables can also aid physicians, allowing them to perform some of the processes remotely or to keep a safe distance.",
      ],
    },
    frequently: [
      {
        question: "What is possible with medical software development?",
        answer:
          "Medical software development offers a wide range of solutions facilitating communication between doctors and patients, access to medical records, and self-monitoring. Medical software development allows creating online and mobile solutions for patients and doctors.The list goes on, and medical software development can be used to develop various websites and apps, such as mobile patient record app, e-pharmacies, platforms for e-appointments, and web services for doctors.",
      },
      {
        question: "What is Medtech?",
        answer:
          "Medical software development offers a wide range of solutions facilitating communication between doctors and patients, access to medical records, and self-monitoring. Medical software development allows creating online and mobile solutions for patients and doctors.The list goes on, and medical software development can be used to develop various websites and apps, such as mobile patient record app, e-pharmacies, platforms for e-appointments, and web services for doctors.",
      },
      {
        question: "What software is most frequently used by medical practices?",
        answer:
          "Medical software development offers a wide range of solutions facilitating communication between doctors and patients, access to medical records, and self-monitoring. Medical software development allows creating online and mobile solutions for patients and doctors.The list goes on, and medical software development can be used to develop various websites and apps, such as mobile patient record app, e-pharmacies, platforms for e-appointments, and web services for doctors.",
      },
      {
        question: "What are the healthcare development trends of 2022?",
        answer:
          "The Healthcare industry is one of the fastest-growing industries in the world. Healthcare providers and patients can work efficiently, accurately, and safely thanks to the development of new technologies. Today, users can research healthcare options, obtain medical advice, and ask questions over the Internet whenever they like.",
      },
    ],
  },
  {
    title: "Travel Software Development Services",
    subTitle:
      "Invest in travel software development solutions and give flight to your business",
    overViewText: [
      "Due to immense competition, the travel industry almost entirely depends on customized services as well as exceptional customer experience. Clients demand instantaneous advice and support. Thanks to travel software development services, they can expect it.",
      "Travel software development services provide clients with reliable platforms to organize their own unique travel experience. Thanks to these services, clients can book hotels, flights, and cars freely, from the comfort of their home.",
      "Clients are no longer limited to travel agencies and package tours. Many apps and websites offer bots, effectively substituting travel agents. It’s no wonder the soaring popularity of such solutions",
    ],
    benefit: {
      title: "Travel Software Benefits",
      subTitle:
        "Explore the benefits to your voyage with expert travel software development.",
      explore: [
        {
          icon: <BiSupport />,
          title: "24/7 interactions with customers",
        },
        {
          icon: <RiUserLocationLine />,
          title: "emmediate booking",
        },
        {
          icon: <SiDatabricks />,
          title: "Real-time data access",
        },
        {
          icon: <DiGoogleAnalytics />,
          title: "Minimized order processing cost",
        },
        {
          icon: <CgRowFirst />,
          title: "Decisive for growth of the business",
        },
        {
          icon: <TbReportMoney />,
          title: "Controlled maintenance cost",
        },
      ],
    },
    solutions: {
      title: "Travel Solutions",
      subTitle:
        "Travel software development offers varied solutions to ensure the best travel experience.",
      explore: [
        {
          title: "Travel Apps",
          subtitle:
            "Improve UX by facilitating booking and searching for offers.",
          icon: <AiOutlineMobile />,
        },
        {
          title: "Travel Website",
          subtitle:
            "Create an SEO-optimized website and attract more customers.",
          icon: <MdWeb />,
        },
        {
          title: "Integrations",
          subtitle: "Ensure the real-time flow of data.",
          icon: <GrIntegration />,
        },
      ],
    },

    cost: {
      title: "The Cost of Travel Software Development",
      description: [
        "The cost of travel software development services can be estimated similarly to other software development projects.",
        "Commonly used billing options include a fixed price or time and material. With a fixed price model, the budget doesn’t depend on any changes in time. Time and material, on the other hand, will take delivery time into account, even if it changes during the project.",
        "The overall cost of your project depends on the time needed to deliver it, and the number of software developers included. Based on the scope of your project, software developers estimate the workload and use hourly rates to calculate the cost of mobile or web app development.",
      ],
    },
    backward: {
      title: "How Does Technology Change the Travel Industry?",
      description: [
        "Rely on our mature practices and proven frameworks to supplement your development environments, ensure smooth releases, and guarantee the flawless operation of your infrastructure.",
        "Travel apps provide 24/7 interaction frequency with customers and ensure full integration of real-time data. They also allow for immediate bookings and minimum order processing costs.",
        "Digital transformation revolutionizes many industries, with the travel sector being no exception. Digital solutions are replacing traditional ones due to their versatility and accessibility. In the case of the travel industry, this revolution is beneficial for both clients and business owners.",
      ],
    },
    frequently: [
      {
        question: "When do you need custom travel app software development?",
        answer:
          "Starting to build your travel management software development strategy earlier is your way to get ahead of the fierce competition. Custom travel management application development helps you integrate divided and fragmented supply chain processes, enabling fleet managers to put a huge amount of data under the microscope",
      },
      {
        question:
          "Can you describe the collaboration models provided by your company?",
        answer:
          "At Tekorio, we work with travel management application development projects of any size, scale, and complexity. We pick the cooperation model that’s most suitable depending on a client’s previous experience and needs as well as the project’s goals. It could be dedicated development team, managed delivery, or product development model.",
      },
      {
        question:
          "Communication process while delivering travel management application development services",
        answer:
          "Tekorio will establish a framework for remote communication between your in-house team and your remote travel management application development team at the start of the project",
      },
    ],
  },
  {
    title: "E-commerce Development Services",
    subTitle:
      "Invest in e-commerce development solutions to boost your business",
    overViewText: [
      "E-commerce has taken cyberspace by storm. The idea of shopping comfortably from home attracted many customers, as the benefits for them are obvious. What about the advantages for your business?",
      "E-commerce development solutions increase accessibility. It not only allows the companies to easily reach their regular audience, but also beyond that, thanks to Search Engine Visibility. Companies can also overcome geographical limitations and search for customers nearly everywhere. There are also no time constraints; the products and services are available 24/7.",
      "At a lower startup cost, e-commerce solutions ensure high performance, SEO optimisation, and tailor-made UX. Either custom or pre-existing platforms can greatly improve the quality of your business.",
    ],
    benefit: {
      title: "E-commerce Development Benefits",
      subTitle: "Empower your online business with modern solutions.",
      explore: [
        {
          icon: <TbReportMoney />,
          title: "Low Cost",
        },
        {
          icon: <MdManageSearch />,
          title: "SEO Optimisation",
        },
        {
          icon: <BsClockHistory />,
          title: "24/7 Accessibility",
        },
        {
          icon: <CgPerformance />,
          title: "High Performance",
        },
        {
          icon: <DiGoogleAnalytics />,
          title: "Custom UX",
        },
        {
          icon: <FaUsers />,
          title: "Broader Reach",
        },
      ],
    },
    solutions: {
      title: "E-commerce Development Solutions",
      subTitle:
        "Travel software development offers varied solutions to ensure the best travel experience.",
      explore: [
        {
          title: "Web Development",
          subtitle: "Create SEO-optimized website and attract more customers.",
          icon: <MdWeb />,
        },
        {
          title: "Mobile Development",
          subtitle: "Improve UX and facilitate online shopping even more.",
          icon: <TbDeviceMobileVibration />,
        },
        {
          title: "Integrations",
          subtitle:
            "Achieve success by implementing two-way, real-time flow of data.",
          icon: <GrIntegration />,
        },
      ],
    },

    cost: {
      title: "The Cost of E-commerce Development",
      description: [
        "The cost of e-commerce development services can be estimated similarly to other software development projects.",
        "The overall cost of your project depends on the time needed to deliver it, and the number of software developers included. Based on the scope of your project, software developers estimate the workload and use hourly rates to calculate the cost of mobile or web app development.",
        "Commonly used billing options include a fixed price or time and material. With a fixed price model, the budget doesn’t depend on any changes in time. Time and material, on the other hand, will take delivery time into account, even if it changes during the project.",
      ],
    },
    backward: {
      title: "Best Platform for E-commerce Development",
      description: [
        "By developing an e-commerce platform, you have to define your needs. Depending on your requirements, you can choose either a custom platform, pre-existing, customizable platforms such as Shopify, or CMS like Drupal or Magento.",
        "The most known e-commerce platform, Shopify, helps to seamlessly set up an online store. It offers a wide range of features and themes that enable basic customisation. It’s optimised for mobile shopping and offers data reporting.",
        "Custom ecommerce platforms include most of the advantages of pre-existing platforms but take customisation to the next level. It allows building a website from scratch, which can be beneficial for businesses with specific needs or offering a special product.",
      ],
    },
    frequently: [
      {
        question: "How do I get more e-commerce customers?",
        answer:
          "To attract new customers, invest in SEO. Search Engine Optimisation increases the quality and quantity of traffic on your website, as well as the visibility to the users.It’s also advisable to consider developing an app. Many customers prefer using mobile apps than websites on their phones, so it’s a good idea to meet their needs.",
      },
      {
        question: "How can a web development compnay help you with E-commerce?",
        answer:
          "Web development companies are experts in their field. If you want to ensure the highest quality of your product, it is advisable to use their help.Experienced web developers know how to ensure the safety of your clients, how to build a stable architecture, and handle heavy website traffic. They can also optimise your website and conduct a UX audit.",
      },
      {
        question: "Which is the best CMS for an E-commerce website?",
        answer:
          "It’s hard to choose the best CMS, as the selection is extensive. Some of the most popular options are Shopify, Magento, Drupal, and Vue Storefront.Take your time and choose the CMS that fits your needs best.",
      },
    ],
  },
  {
    title: "Building Real Estate Development Software",
    subTitle:
      "Invest in e-commerce development solutions to boost your business",
    overViewText: [
      "The real estate business continues to change, and realtors, site managers, and real estate vendors need to have real estate software development companies transform digitally.",
    ],
    benefit: {
      title: "Real Estate Development Benefits",
      subTitle:
        "A futuristic technology plan can also use the best of real estate technology trends to your advantage.",
      explore: [
        {
          icon: <AiOutlineAppstoreAdd />,
          title: "Portable Application",
        },
        {
          icon: <GoReport />,
          title: "Reports & Analytics",
        },
        {
          icon: <BiRepost />,
          title: "Compliance Management",
        },
        {
          icon: <FiLock />,
          title: "Data Security",
        },
        {
          icon: <AiOutlineCloudSync />,
          title: "Cloud Solution",
        },
        {
          icon: <GrIntegration />,
          title: "Sale Integration",
        },
      ],
    },
    solutions: {
      title: "Features Of Real Estate Software",
      subTitle:
        "Advantages of real estate software development in transforming your company operations to productive states.",
      explore: [
        {
          title: "Real-Time Information",
          subtitle:
            "Analysis and proposes that you can use to choose the profitable prospect.",
          icon: <MdOutlineUpdate />,
        },
        {
          title: "Mobility Solutions",
          subtitle:
            "Our application developers have successfully created many mobile applications to help customers increase engagement with their clients",
          icon: <MdOutlineThumbsUpDown />,
        },
        {
          title: "Vendor Management Software",
          subtitle:
            "Our solutions enable faster assessment for making better decisions through automation.",
          icon: <SiPaloaltosoftware />,
        },
      ],
    },

    cost: {
      title: "Why Mindbowser For Real Estate Software Development?",
      description: [
        "As a leading Real Estate Software Development Company, our mission is to offer a one-stop solution to all technology needs of a real estate company. We provide customizable software development services to fulfill your business needs. We leverage our tech expertise, experience, and enthusiasm to assist our clients.",
        "Real estate development software was created as project-oriented accounting, with the assignment perspective receiving equal watch as the financial outlook. All the software functionalities are aware. That every module can provide the required project perspective to complete the general ledger outlook. It found the autonomous perspectives to be the major to address the real estate business needs.",
      ],
    },
    backward: {
      title: "Building a brighter future with real estate software",
      description: [
        "As the digitization happens at increased pace, real estate companies now have access to an array of data sources. However, the bigger data is growing, the harder it is to establish what information truly matters, where and how it is stored, what’s the best way to gain access to it, and how to make corporate real estate software solutions compliant with the latest industry regulations.",
        "The real estate market is on the brink of the new evolutionary stage. Learn how new-gen technologies such as IoT, location-based services, big data, and predictive analytics can be effectively woven into your current operations. Intellias is one of the few real estate software companies that have expertise across all of these domains",
        "Process automation can generate a lot of short-term wins. Deeper, more disruptive transformations will create the most value during the upcoming decade. Use emerging technologies to disrupt the fundamentals of the real estate sector and choose the best approach to transforming potential threats into new opportunities for real estate software development",
      ],
    },
    frequently: [
      {
        question: "What is real estate development software?",
        answer:
          "Real estate software development offers a good solution for analyzing and managing all aspects of diverse projects by allowing managers to utilize various tools and chances to keep all things under their regime. ",
      },
      {
        question:
          "What is the best accounting software for property developers?",
        answer:
          "Real estate software development can get very convoluted very fast. If you are an agency, then you understand that you need to heed rules designated by your condition and/or local agents.",
      },
      {
        question:
          "What is the best software to control the finances of real estate development?",
        answer:
          "Real estate financing represents several financial strategies used by possible investors for ensuring their independent funds’ investment. Thus, it contains long-term economic methods used to ensure capital while purchasing and renovating possessions from outside authorities",
      },
      {
        question:
          "What are the accounting and reporting issues real estate developers are looking to solve today?",
        answer:
          "The accounting software feature is an integral element of every company. It is important for keeping the financial records of the business and supporting the more elevated management in managing the prospect.",
      },
      {
        question: "Do you sign a NDA?",
        answer:
          "Yes, we do. Our developers too are covered under NDAs and confidentiality clauses.",
      },
    ],
  },
  {
    title: "Finance Development Services",
    subTitle: "Manage your finances wisely with fintech solutions",
    overViewText: [
      "With the general trend of digitalization upon us, the financial sector is prime for improvements. Online banking and fintech solutions are gaining increasing publicity – and rightfully so – as they work to improve and streamline financials significantly.",
      "Fintech is a highly customer-oriented industry due to constant demand for further personalization of fintech software. It’s a challenging sector; however, thanks to the ever-growing popularity of these solutions, it offers many business opportunities. Fintech is the future of the finance industry",
    ],
    benefit: {
      title: "The Benefits of Fintech Development",
      subTitle: "Explore the benefits of fintech solutions.",
      explore: [
        {
          icon: <TbZoomMoney />,
          title: "Lower Costs",
        },
        {
          icon: <GiTimeTrap />,
          title: "Enhanced Efficiency",
        },
        {
          icon: <CgDisplayFlex />,
          title: "Flexibility",
        },
        {
          icon: <MdSecurity />,
          title: "Advanced Security",
        },
        {
          icon: <RiShieldUserLine />,
          title: "Personalization",
        },
        {
          icon: <MdTransgender />,
          title: "Convenience of Transactions",
        },
      ],
    },
    solutions: {
      title: "What is Possible?",
      subTitle:
        "Finance offers varied solutions to ensure the best experience.",
      explore: [
        {
          title: "Mobile Apps",
          subtitle:
            "Develop a mobile app and facilitate financial transactions.",
          icon: <TbDeviceMobileMessage />,
        },
        {
          title: "Personal Finance",
          subtitle:
            "Invest in personal finance to offer a tailored experience.",
          icon: <BsWallet2 />,
        },
        {
          title: "Online Banking",
          subtitle: "Facilitate and streamline all banking services.",
          icon: <TbBuildingBank />,
        },
      ],
    },

    cost: {
      title: "The Cost of Fintech Software Development",
      description: [
        "The cost of fintech software development services can be estimated similarly to other software development projects.",
        "The overall cost of your project depends on the time needed to deliver it, and the number of software developers included. Based on the scope of your project, software developers estimate the workload and use hourly rates to calculate the cost of mobile or web app development.",
        "Commonly-used billing options include a fixed price or time and material. With a fixed price model, the budget doesn’t depend on any changes in time. Time and material, on the other hand, will take delivery time into account, even if it changes during the project.",
      ],
    },
    backward: {
      title: "Fintech Trends and Forecasts",
      description: [
        "The digital revolution is spreading across different industries and sectors. With the development of ever-new solutions facilitating everyday life, customers’ expectations are continually increasing. The same applies to the finance industry: as clients expect cutting-edge fintech solutions that ensure the highest security of their financials.",
        "According to FinancesOnline, in the coming years, the popularity of digital-only banking will increase exponentially. No need to visit any bank agency, or agonizing paperwork. Thanks to digital-only banks, convenience is possible. Moreover, global finance will be heavily influenced by blockchain fintech and AI solutions. With the implementation of cutting-edge solutions, further regulations ensuring security can be expected. Fortunately, digital innovations no longer arouse suspicion, enabling the implementation of revolutionary solutions.",
      ],
    },
    frequently: [
      {
        question: "Is fintech a good investment ?",
        answer:
          "Fintech is taking the world by storm and is one of the most dynamically developing sectors. Right now, fintech is all around us, whether you pay for your coffee with your phone, or check your bank account on your computer.",
      },
      {
        question:
          "I have little technical knowledge. Can I still build an app?",
        answer:
          "Why Not? We have the complete process to take your idea from just scribbling on a paper to a complete application. All you have to work on during this process is to participate in discussions, understand your users, get an advisory board, plan a launch strategy, get funded. During all of these things, you are not required to be technical at all. ",
      },
      {
        question: "What are examples of Fintech?",
        answer:
          "As previously mentioned, fintech is a broad sector. There are many promising examples of fintech, such as crowdfunding platforms (Kickstarter or Patreon), blockchain and cryptocurrencies, mobile payments, insurance, AI financial advising, and budgeting apps.",
      },
    ],
  },
];
