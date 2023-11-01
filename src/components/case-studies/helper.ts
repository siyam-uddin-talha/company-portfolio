export type CaseContentType = {
  img: string;
  title: string;
  subTitle: string;
  catagory: string;
  route: string;
  problem: string[] | string;
  solution: string;
  overview: string[] | string;
};

export const CaseStudiesFullData: CaseContentType[] = [
  {
    title: "Cloud computing",
    subTitle:
      "Simply put, cloud computing is the delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence",
    img: "/assets/case/case-9.jpg",
    route: "/case-studies/",
    catagory: "Full stack",
    overview: [
      " delivery of different services through the Internet, including data storage, servers, databases, networking, and software.",
      "Cloud-based storage makes it possible to save files to a remote database and retrieve them on demand.",
      "Services can be both public and private—public services are provided online for a fee while private services are hosted on a network to specific clients.",
      "Cloud storage has grown increasingly popular among individuals who need larger storage space and for businesses seeking an efficient off-site data back-up solution.",
    ],
    problem: [
      "Emailing",
      "Storage, backup, and data retrieval",
      "Creating and testing apps",
      "Analyzing data",
      "Audio and video streaming",
      "Delivering software on demand",
    ],
    solution: `There are various types of clouds, each of which is different from the other. Public clouds provide their services on servers and storage on the Internet. These are operated by third-party companies, who handle and control all the hardware, software, and the general infrastructure. Clients access services through accounts that can be accessed by just about anyone.

Private clouds are reserved for specific clientele, usually one business or organization. The firm's data service center may host the cloud computing service. Many private cloud computing services are provided on a private network.`,
  },
  {
    title: "Smart contract",
    subTitle:
      "A smart contract is a self-executing contract with the terms of the agreement between buyer and seller being directly written into lines of code. The code and the agreements contained therein exist across a distributed, decentralized blockchain network. ",
    img: "/assets/case/case-2.jpg",
    route: "/case-studies/",
    catagory: "Full stack",
    overview: [
      "Smart contracts are self-executing lines of code with the terms of an agreement between buyer and seller automatically verified and executed via a computer network.",
      `Nick Szabo, an American computer scientist who invented a virtual currency called "Bit Gold" in 1998,
 defined smart contracts as computerized transaction protocols that execute terms of a contract.`,
      "Smart contracts deployed to blockchains render transactions traceable, transparent, and irreversible.",
    ],
    problem:
      "Whatever your learning style, there’s a course that can help you become a crypto expert. With Udemy, you’ll be able to take courses that span over 65 languages and cover just about anything you’d want to know about cryptocurrency. You’ll also be able to set up a crypto wallet to hold your digital coins and choose an exchange that fits your trading needs",
    solution: `Smart contracts permit trusted transactions and agreements to be carried out among disparate, anonymous parties without the need for a central authority, legal system, or external enforcement mechanism.

While blockchain technology has come to be thought of primarily as the foundation for bitcoin​, it has evolved far beyond underpinning the virtual currency.`,
  },
  {
    title: "Cyber security",
    subTitle:
      "It is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks",
    img: "/assets/case/case-3.jpg",
    route: "/case-studies/",
    catagory: "Full stack",
    overview: [
      "Malware, such as ransomware, botnet software, RATs (remote access Trojans), rootkits and bootkits, spyware, Trojans, viruses, and worms.",
      "Backdoors, which allow remote access.",
      "Formjacking, which inserts malicious code into online forms.",
      "Cryptojacking, which installs illicit cryptocurrency mining software.",
    ],
    problem: [
      "Network security is the practice of securing a computer network from intruders, whether targeted attackers or opportunistic malware.",
      " Application security focuses on keeping software and devices free of threats. A compromised application could provide access to the data its designed to protect. Successful security begins in the design stage, well before a program or device is deployed.",
      "  Information security protects the integrity and privacy of data, both in storage and in transit.",
      "Operational security includes the processes and decisions for handling and protecting data assets.",
    ],
    solution:
      "Critical infrastructure organisations are often more vulnerable to attack than others because SCADA (supervisory control and data acquisition) systems often rely on older software. Network security involves addressing vulnerabilities affecting your operating systems and network architecture, including servers and hosts, firewalls and wireless access points, and network protocols.",
  },

  {
    title: "Robot designing",
    subTitle:
      "As in architectural blueprints, engineering drawing, operation process, circuit diagrams",
    img: "/assets/case/case-10.jpg",
    route: "/case-studies/",
    catagory: "Embedded",
    overview: [
      "Get a clear picture of the Parameters of the problem.",
      "Make a list of the Objectives and rank them in order of importance.",
      "Define the Constraints of the problem.",
      ".Many times a robot cannot do everything that a problem presents. It is important to prioritize and design a machine that can do the most things and do a few things very well.",
    ],
    problem: [
      "Design has different connotations in different fields.",
      ". In some cases the direct construction of an object (as in pottery, engineering, management, graphic design) is also considered to be design.",
    ],
    solution:
      "Research must be focused and incorporate new ideas and a thorough exploration of old similar ideas. Sometimes the old ideas are the best. Ever heard the saying, “Don’t reinvent the wheel?” Old ideas that failed are sometimes great research gold mines; that idea may have failed due to a lack of new technology that may exist now.",
  },

  {
    title: "Admin management",
    subTitle:
      "Differs management from the administration is that the former is concerned with directing or guiding the operations of the organization,",
    img: "/assets/case/case-4.jpg",
    route: "/case-studies/",
    catagory: "Full stack web app",
    overview: [
      "Concerned with	Policy Implementation",
      "Profit making organizations, i.e. business organizations.",
      "	Making best possible allocation of limited resources.",
    ],
    problem: `The main function of administration is the formation of plans, policies, and procedures, setting up of goals and objectives, enforcing rules and regulations, etc.`,
    solution:
      "The nature of administration is bureaucratic. It is a broader term as it involves forecasting, planning, organizing and decision-making functions at the highest level of the enterprise. Administration represents the top layer of the management hierarchy of the organization. These top level authorities are the either owners or business partners who invest their capital in starting the business",
  },
  {
    title: "Cross platrorm",
    subTitle:
      "practice of developing software products or services for multiple platforms or software environments. We use various methods to accommodate different operating systems or environments for one application or product.",
    img: "/assets/case/case-5.jpg",
    route: "/case-studies/",
    catagory: "App Android & IOS",
    overview: `Development include compiling different versions of the same program for different operating systems, or in other cases, the use of sub-tree files to apply or fit the product to different operating systems. Another major approach is to make the program abstract at certain levels in order to accommodate different software environments.`,
    problem: [
      "should work well in more than one specific digital habitat",
      "This capability is typically pursued in order to sell software for more than one proprietary operating system",
      "make a program less efficient",
    ],
    solution:
      "The least desired method for developers is to maintain separate sets of source code for the same application; however, it is done routinely when the machine platforms are diverse.  If C++ is used to write a program for Windows and Mac, two separate sets of source code are typically used; one for Windows, one for Mac.",
  },
  {
    title: "Ecommerce platform",
    subTitle:
      "It involves more than one party along with the exchange of data or currency to process a transaction",
    img: "/assets/case/case-6.jpg",
    route: "/case-studies/",
    catagory: "Web application",
    overview: `Providing goods and services isn't as easy as it may seem. It requires a lot of research about the products and services you wish to sell, the market, audience, competition, as well as expected business costs.`,
    problem: [
      "buying and selling of goods and services over the Internet",
      "over computers, tablets, smartphones, and other smart devices",
      "It can be a substitute for brick-and-mortar stores, though some businesses choose to maintain both.",
    ],
    solution:
      "It has changed the way people shop and consume products and services. More and more people are turning to their computers and smart devices to order goods, which can easily be delivered to their homes. ",
  },
  {
    title: "Crypto & currency exchange",
    subTitle:
      "virtual currency that is secured by cryptography, which makes it nearly impossible to counterfeit or double-spend.",
    img: "/assets/case/case-7.jpg",
    route: "/case-studies/",
    catagory: "blockchain",
    overview: `Central to the appeal and functionality of Bitcoin and other cryptocurrencies is blockchain technology. As its name indicates, blockchain is essentially a set of connected blocks or an online ledger. Each block contains a set of transactions that have been independently verified by each member of the network. Every new block generated must be verified by each node before being confirmed, making it almost impossible to forge transaction histories`,
    problem: [
      "network that is distributed across a large number of computers",
      " include cheaper and faster money transfers and decentralized systems that do not collapse at a single point of failure.",
      "Elliptical curve encryption, public-private key pairs, and hashing functions.",
    ],
    solution:
      "In this system, centralized intermediaries, such as banks and monetary institutions, are not necessary to enforce trust and police transactions between two parties. Thus, a system with cryptocurrencies eliminates the possibility of a single point of failure, such as a large bank, setting off a cascade of crises around the world",
  },
  {
    title: "Ride sharing",
    subTitle:
      " So if you need to improve the speed and efficiency of your IT system, contact us for professional and unbiased.",
    img: "/assets/case/case-8.jpg",
    route: "/case-studies/",
    catagory: "App Android & IOS",
    overview: `Most scheduling algorithms aren't sophisticated enough to perform this, especially amidst the variables that accompany service to vulnerable populations. Modernizing with a next-generation scheduling software ensures these services actually function.`,
    problem: `Demand-response transportation (DRT) modes like paratransit face unique operational challenges, often operating with fixed variables (like scheduled dialysis appointments) and serving customers who may have challenges even entering a vehicle. Amidst these challenges, DRT often operates as ride-hailing services rather than ride-sharing as well`,
    solution:
      "While sharing economy companies do their best to ensure the safety of everyone involved, unfortunate things still happen. Therefore, you will need to exercise precaution",
  },
  {
    title: "Ai based assistant",
    subTitle:
      "Application program that understands natural language voice commands and completes tasks for the user.",
    img: "/assets/case/case-1.jpg",
    route: "/case-studies/",
    catagory: "Ai intelligence",
    overview: [
      "Perform include scheduling appointments, making phone calls, making travel arrangements, and managing email accounts.",
      "Access the necessary planning documents, such as shared calendars, remotely.",
    ],
    problem: [
      "Make specialize in offering graphic design, blog writing, bookkeeping, social media, and marketing services.",
      "Offering administrative services to clients from a remote location, usually a home office.",
      "Handle clerical and bookkeeping tasks",
    ],
    solution:
      "While there are no hard-and-fast educational requirements to become a virtual assistant, many clients will look for virtual assistants who have some higher-level education or specialized training. A few online companies and community colleges offer courses and certification for virtual assistant skills",
  },
];
