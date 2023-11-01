import { UseRandomImage } from "../utils/UseImage";

export interface IService {
  title: string;
  subTitle: string;
  bannerImage: string;
  _route: string;
  overview: string;
  whyus: string;
  services: ServiceTable[];
  teachTable?: TeachTable[];
  topDemand: DemandTable[];
  frequently: {
    question: string;
    answer: string;
  }[];
}

type ServiceTable = {
  title: string;
  description: string;
};
type TeachTable = {
  tableName: string;
  description: string[];
};
type DemandTable = {
  title: string;
  subTitle: string;
  features?: string[];
  link?: string;
};

export const ServiceData: IService[] = [
  {
    title: "Move on with Web Development",
    subTitle:
      "Web development skills are in high demand worldwide and well paid too – making development a great career option. It is one of the easiest accessible higher paid fields as you do not need a traditional university degree to become qualified.",
    bannerImage: UseRandomImage("code"),
    _route: "web-development",
    overview:
      "The basic tools involved in web development are programming languages called HTML (Hypertext Markup Language), CSS (Cascading Style Sheets), and JavaScript. There are, however, a number of other programs used to “manage” or facilitate the construction of sites that would otherwise have to be done “from scratch” by writing code. A number of content management systems (CMS) fall into this category, including WordPress, Joomla!, Drupal, TYPO3, and Adobe Experience Manager, among others.",
    whyus:
      "Technology plays an integral part in our day-to-day lives. It surrounds us in the simplest of places to perform ordinary tasks and make room for great inventions. All the web pages and software that we use to make our lives easier are developed by Web Developers. However, the Web Development meaning is still not clear to many of us, so let’s start there and learn more about what Web Development is.",
    services: [
      {
        title: "Discovery",
        description:
          "During the initial stage, the development team must form a clear understanding of the purpose of the project, its scope, goals, and target audience. This requires in-depth research of the industry, competition, preferences and online habits of the target consumer. These insights must guide all subsequent efforts. ",
      },
      {
        title: "Planning & Analysis",
        description:
          "Based on the research findings and conclusions, the team builds sitemaps. It suggests the best tools and technologies based on the client’s requirements. These are documented as “use cases” — potential scenarios in which the website may be used. At the next stage, the developers must integrate them into the approved site structure.",
      },
      {
        title: "Designing and Wireframing",
        description:
          "The creative team works on the facade — the elements determining user interface (UI) and user experience (UX). First, they create a sketch of the design concept showing the structure of information, including content appearance and basic features. ",
      },
      {
        title: "Content Creation ",
        description:
          "This stage involves generating and editing new text to ensure value for the reader. A website is filled with content that includes key messages and calls to actions. The team creates eye-catching headlines, effective page titles, and captions. It also lays the foundation for SEO (search engine optimization), which is crucial for driving traffic. Sometimes, content may be ported over from other sites. ",
      },
      {
        title: "Online Launch",
        description:
          "After implementing the desired functionality and views, the team launches the first version of the website. There are two key conditions: registering a domain name and subscribing to web hosting. ",
      },
      {
        title: "Beta Testing",
        description:
          "To ensure stable performance on the server, your team conducts a series of tests. This concerns different aspects of website experience: testing of back-end and front-end elements, databases, servers, etc. Rigorous testing is crucial for success. Based on the results and feedback, the team makes the necessary improvements to perfect the website and prepare it for public launch.",
      },
      {
        title: "Maintenance",
        description:
          "As we have already mentioned, maintenance is an indefinite task. Every website needs improvements to provide an excellent user experience, stay relevant, and keep up with the changes in ranking algorithms.",
      },
    ],
    teachTable: [
      {
        tableName: "Frontend",
        description: [
          "React.js",
          "Angular.js",
          "Next.js",
          "Gatsby",
          "Vue.js",
          "Laraval",
          "Mangato",

          "Flask",
          "ASP.NET",
          "D3.js",
          "Moment.js",
          "Three.js",
        ],
      },
      {
        tableName: "Framework",
        description: [
          "Bootstrap",
          "Tailwind css",
          "Ant Design",
          "Material Ui",
          "Sementic Ui",
          "Ember.js",
        ],
      },
      {
        tableName: "Backend",
        description: ["Node.js", "Express.js", "PHP", "Python"],
      },
      {
        tableName: "Database",
        description: [
          "MongoDB",
          "MySQL",
          "Postgres",
          "Redis",
          "Oracle",
          "Microsoft SQL",
          "MariaDB",
          "OrientDB",
        ],
      },
    ],
    topDemand: [
      {
        title: "React.js",
        subTitle:
          " React makes it easier to create dynamic web applications because it requires less coding and offers more functionality, as opposed to JavaScript, where coding often gets complex very quickly.",
        link: "/technology/react-developer",
      },
      {
        title: "Angular",
        subTitle:
          "Angular has clear advantages while also providing a standard structure for developers to work with. It enables users to create large applications in a maintainable manner.",
        link: "/technology/angular-developer",
      },
      {
        title: "Firebase",
        subTitle:
          "Google Firebase is a Google-backed application development software that enables developers to develop iOS, Android and Web apps. Firebase provides tools for tracking analytics, reporting and fixing app crashes, creating marketing and product experiment",
      },
    ],
    frequently: [
      {
        question: "What is a CMS?",
        answer:
          "A content management system (CMS) is a web application or a series of programs used to create and manage web content.",
      },
      {
        question: "What is cybersecurity in web",
        answer:
          "There are always malicious actors looking to find vulnerabilities in websites to expose private information, steal data, and crash servers. Cybersecurity is the practice of securing data, networks, and computers from these threats.",
      },
      {
        question: "What is cybersecurity in web",
        answer:
          "There are always malicious actors looking to find vulnerabilities in websites to expose private information, steal data, and crash servers. Cybersecurity is the practice of securing data, networks, and computers from these threats.",
      },
      {
        question: "What is an IP address?",
        answer:
          "To access a website, you need to know its Internet Protocol (IP) address. An IP address is a unique string of numbers. Each device has an IP address to distinguish itself from the billions of websites and devices connected via the Internet.",
      },
    ],
  },
  {
    title: "Design User Interface &  Eser experience",
    subTitle:
      "UX/UI design has become more “trendy” as more and more things move online. Now, with the “internet of things,” nearly everything needs some sort of attention to the user experience.",
    bannerImage: UseRandomImage("code"),
    _route: "ux-ui-design",

    overview:
      "So a UX designer decides how the user interface works while the UI designer decides how the user interface looks. This is a very collaborative process, and the two design teams tend to work closely together. As the UX team is working out the flow of the app, how all of the buttons navigate you through your tasks, and how the interface efficiently serves up the information user’s need",
    whyus:
      "In today’s workplace, both hard and soft skills are equally important. If you are a career changer, you will find the following soft skills you have honed to your benefit.  UI designers must conceptualize ideas in a visual manner. This means taking sometimes complex ideas or roadblocks and presenting them in a simple, beautiful, and user-friendly way. This takes creativity",
    services: [
      {
        title: "Researching",
        description:
          "Research is a key UX design skill. Designers must make actionable Research insights from the data they collect, both in the initial phases and when testing with real people ",
      },
      {
        title: "Problem-solving",
        description:
          "UX designers explore many different approaches to solving a specific user problem in a process known as “ideate.” They not only solve problems during initial prototyping, but they constantly develop and improve products or services as needed to make them more user-friendly.",
      },
      {
        title: "Communication",
        description:
          " Communication is crucial as UX design is a highly collaborative process. UX designers also need a level of empathy that lets them look at a product from the user’s point of view. This includes understanding the user’s needs and goals when using the product and being able to communicate them clearly within the team and to stakeholders.",
      },
      {
        title: "Adaptability",
        description:
          "Technology is constantly changing. Good UI designers embrace change and stay on top of industry trends in order to continuously improve their products and services.",
      },
    ],

    topDemand: [
      {
        title: "Sketch",
        subTitle:
          "If you have any UI design experience, you've heard of Sketch. And there are quite a few reasons why it’s one of the design tools that’s so revered. Being able to make universal changes — whether it's through their library of symbols, layer styles, or text styles, or its smooth resizing and alignment features — saves designers time to deliver consistent prototypes",
      },
      {
        title: " InVision Studio",
        subTitle:
          "With a full suite of applications, InVision gives designers all of the UI design tools they need to create fully realized and functional prototypes with dynamic elements and animations.Another useful aspect of InVision is the digital whiteboard that allows team members to get their ideas out there, interact, and get that all important sign-off before moving forward.",
      },
      {
        title: "Axure",
        subTitle:
          "Axure offers many of the other features of popular prototyping and UI design tools. It allows for testing of functionality and puts everything together for an easy developer handoff. This, combined with an emphasis on communication, ensures that everyone on a project is kept up-to-date with progress and changes as they happen in real time, making Axure a solid choice for UI design.",
      },
      {
        title: "Craft",
        subTitle:
          "Craft, a plugin from InVision, works right alongside what you might be doing in Photoshop or Sketch, with a sync function that updates what you’re working on. Along with this time-saving feature, Craft offers everything you need for prototyping and collaboration. Changes in styling, edits, and other tweaks are updated across the board so that everyone is referring to and working from the same version of a project.",
      },
      {
        title: "Adobe XD",
        subTitle:
          "Adobe XD has many sophisticated tools for UI designers, but it is also stocked with what designers need to whip up interactions and other dynamic elements that can be integrated into prototypes or mockups. It’s one of the rare design platforms that can combine different disciplines together, without anything lacking.",
      },
    ],
    frequently: [
      {
        question: "What does a UX/UI designer do?",
        answer:
          "UX/UI designers work across all industries to create and improve both digital and physical products. They participate in research and design in order to create user-friendly products and services. UX Designers are focused on the overall user experience, whereas UI Designers are responsible for the visual aspects that users interact with.",
      },
      {
        question: "Is UX/UI in demand?",
        answer:
          "UX/UI design skills are highly sought after. In fact, they are some of the top skills in 2021 as cited by LinkedIn. As more people spend more time online, businesses are shifting to be able to serve these users. This means companies are increasingly looking for UX, UI, and product designers.",
      },
      {
        question: "Does UX design require coding?",
        answer:
          "UX design does not require coding. However, it’s always helpful to have a basic understanding of code, including HTML and CSS. Knowing a little code helps you communicate with developers and develop realistic expectations",
      },
      {
        question: "Is UX/UI design a good career?",
        answer:
          "Yes, both UX and UI design are good career paths. They are both in-demand careers that pay well with a good job outlook. They are also great for the altruistic because you can do what you love while helping people with everyday challenges!",
      },
    ],
  },
  {
    title: "Game Development!",
    subTitle:
      "In a nutshell, it’s the process of designing, creating, and releasing games for a variety of platforms. Of course, there’s a lot of moving parts to this. And there’s different ways to define the overall process.",
    bannerImage: UseRandomImage("game"),
    _route: "game-development",

    overview:
      "To get involved in the Game Development process, you do not need to write code. Artists may create and design assets, while a Developer might focus on programming a health bar. A Tester may get involved to see that the game works as expected.  Game developers typically play a role in several elements of game development, including visuals, artificial intelligence, user interface, and game logic. ",
    whyus:
      "Games Development pipelin is simply the stages of Game Development. From concept to seeing that game on the shelf and ready to buy (a beautiful feeling!!). There can be overlap between these different stages of game development. Sometimes tasks from one stage may need to be revisited or tweaked as the development progresses. (Of courses, In a perfect world – the pipeline is sequential – but things are rarely perfect!)",
    services: [
      {
        title: "Creating Story",
        description:
          "To build any game you have to start with a story. It can have a linear or non-linear structure. The important thing is that there should be an interesting story, which the player can connect with.",
      },
      {
        title: "Making Characters",
        description:
          "If you create a story then there should be characters in it. These are the key parts of any video game. You have to decide on the characteristics of every character in the story.",
      },
      {
        title: "Implement Audio",
        description:
          "Audio is an essential part of video games that drives emotion, subjugates the human psyche, and establishes the tone of an unfolding story. Audio in video games may not make a game excellent, but develops the setting, builds emotion, and provides a tool to tell a story.",
      },
      {
        title: "Art",
        description:
          "Art decides the feel of the game. Art in video games can include game texture, game lighting, 3D modelling of characters, objects, and particle systems to create fire, fog, snow, etc.",
      },
      {
        title: "Lighting management",
        description:
          "In video games, lighting is really necessary as it sets the mood for the player. Less lighting can be used in association with horror or thriller games while increased lighting can denote adventurous or fun games.",
      },
      {
        title: "chack Levels",
        description:
          "In most of the games there are multiple levels that increase the challenge as time goes on. Levels can be indicated in games by multiple floors, different buildings and each level can have many potential paths that eventually lead to the next level.",
      },
    ],

    topDemand: [
      {
        title: "Unity",
        subTitle:
          "It is a cross-platform game engine that allows you to develop 2D and 3D games. Unity is particularly popular for indie and mobile games. It’s free for students and for personal use, so you can start creating games (and gaining experience) before you get hired.",
      },
      {
        title: "Unreal Engine",
        subTitle:
          "While initially developed for first-person shooters, has grown into a 3D creation platform used for games across a range of platforms. Unreal uses C++ as its programming language.",
      },
      {
        title: "C#",
        subTitle:
          "It is a programming language frequently used for game development and mobile applications, particularly with the Unity engine.",
      },
      {
        title: "C++",
        subTitle:
          "C++ Is a general-purpose programming language often used to develop not only games, but operating systems and applications as well.",
      },
    ],
    frequently: [
      {
        question: "Do game developers get apid well?",
        answer:
          " Yes, game developers can earn a lot of money, especially if they create and work on the big projects. As the gaming industry is growing at a rapid pace – there is a constant need for new and innovative games.",
      },
      {
        question:
          "What’s the difference between a game developer and a game designer?",
        answer:
          "While the two terms are sometimes used interchangeably, game designers are typically responsible for the creative aspects of a game, and game developers are involved with the coding and technical work of building a game. The term “game developer” can also refer to a gaming company. ",
      },
      {
        question: "Does game design require coding?",
        answer:
          "It’s not strictly necessary that you know how to code to work as a game designer. Some game developers might work on areas of a game that don’t involve programming, like art, user experience, or writing. But since every video game is made with some form of coding, knowing at least one programming language could be highly beneficial. Some options include C++, C#, JavaScript, and HTML5.",
      },
      {
        question: "How long does it take to become a game developer?",
        answer:
          "There’s more than one path toward a career in video games. The amount of time it takes you to get that first developer job will depend on several factors, including your current programming skills, game development experience, and education level. While there will always be something new to learn in the world of game development, it’s possible to build proficiency in tools like Unity or C# in as little as a few months.",
      },
    ],
  },
  {
    title: "Developing a new mobile app for Android or iOS",
    subTitle:
      "Mobile application development is the process to making software for smartphones and digital assistants, most commonly for Android and iOS.",
    bannerImage: UseRandomImage("mobile"),
    _route: "mobile-development",

    overview:
      "Mobile app development is rapidly growing. From retail, telecommunications and e-commerce to insurance, healthcare and government, organizations across industries must meet user expectations for real-time, convenient ways to conduct transactions and access information. Today, mobile devices—and the mobile applications that unlock their value—are the most popular way for people and businesses to connect to the internet. To stay relevant, responsive and successful, organizations need to develop the mobile applications that their customers, partners and employees demand.",
    whyus:
      "Yet mobile application development might seem daunting. Once you’ve selected the OS platform or platforms, you need to overcome the limitations of mobile devices and usher your app all the way past the potential hurdles of distribution. Fortunately, by following a few basic guidelines and best practices, you can streamline your application development journey.",
    services: [
      {
        title: "Development platforms",
        description:
          "The two most important mobile app platforms are iOS from Apple Inc. and Android from Google. iOS is Apple’s proprietary mobile operating system built specifically for iPhones. Android, however, runs on mobile devices manufactured by various OEMs, including Google.",
      },
      {
        title: "Development and IBM Cloud",
        description:
          "Mobile application development is necessary for most enterprises. When you build your application with both operating systems in mind, try to make judicious use of APIs and understand the specifics of the required developer programs. That approach will help you deliver to your users an app that’s flexible, convenient and lightweight—the perfect way to serve information or services—along with an excellent user experience.",
      },
      {
        title: "Prototype ",
        description:
          "The prototype is also referred to as evolutionary design or incremental development. This mobile app development approach is the improved verson of the waterfall methodology. It enables team members to make changes during the design phase. ",
      },
      {
        title: "Spiral",
        description:
          "This is a type of risk-driven mobile app development methodology. It depends on the project’s risk pattern and applies more than one method during its process. To some extent, spiral app development approach combines waterfall methodology and iteration.",
      },
      {
        title: "Agile Methodology",
        description:
          "Agile is a mobile app development approach designed for sophisticated projects. It allows for iterations, which aids in reducing errors. ",
      },
      {
        title: "Testing",
        description:
          "An exploratory or structured mobile testing to make sure your apps perform as expected on every device and in every use case.functionality or testing that requires testing once or twice should be tested manually.",
      },
    ],

    topDemand: [
      {
        title: "Native Apps",
        subTitle:
          "Native applications are built using the tools and SDKs offered by platform owners like Apple and Google. These apps run natively on the platform of your choice.",
      },
      {
        title: "Cross-Platform Apps",
        subTitle:
          "Cross-platform mobile applications can be written on various programming languages and then compiled for each platform separately.",
      },
      {
        title: "Hybrid Apps",
        subTitle:
          "Hybrid Applications are built using the latest web technologies like JavaScript, CSS, HTML, and then bundled as mobile applications for the required platforms. Hybrid Apps are different from Cross-Platform Apps in the sense that they work using web containers using browser runtime.",
      },
      {
        title: "React native",
        subTitle:
          "React Native (also known as RN) is a popular JavaScript-based mobile app framework that allows you to build natively-rendered mobile apps for iOS and Android.The framework lets you create an application for various platforms by using the same codebase.",
        link: "/technology/react-native",
      },
      {
        title: "Flutter",
        subTitle:
          "Flutter is a free and open-source mobile UI framework created by Google and released in May 2017. In a few words, it allows you to create a native mobile application with only one codebase. This means that you can use one programming language and one codebase to create two different apps (for iOS and Android).",
        link: "/technology/flutter",
      },
    ],
    frequently: [
      {
        question: "Should you buy or build APIs?",
        answer:
          "There are two ways to integrate APIs to your mobile application. You can either build it yourself or you can buy from an existing API provider.",
      },
      {
        question: "What does a Front-end Development Workflow Looks Like?",
        answer:
          "Depending on the size of the team developing the mobile app, many people can be involved in the process of creating the front-end. The team size can range from one who handles everything to tens or hundreds, each having different roles and skillsets.",
      },
      {
        question: "What is Pros?",
        answer:
          "Web and mobile apps sharing the same code base. Utilizing web development languages for developing mobile apps",
      },
      {
        question: "What is Cons?",
        answer:
          "Lower performance compared to native apps. Limited support for native device features",
      },
    ],
  },
  {
    title: "Blockchain development",
    subTitle:
      "A blockchain is a decentralized digital ledger that saves transactions on thousands of computers around the globe",
    bannerImage: UseRandomImage("blockchain"),
    _route: "blockchain",

    overview:
      "The Blockchain developer’s responsibility is to develop innovative solutions to challenging problems, including solutions for command and control, and high integrity. The developer also performs complex analysis, design, development, testing, and computer software debugging, specifically for distinct product hardware or for technical service lines of businesses. Develops perform software design, operating architecture integration, and computer system selection. Finally, they operate on multiple systems and apply knowledge of one or more platforms and",
    whyus:
      "To train yourself to become a blockchain developer, understanding the basic concepts and terminologies in the field of blockchain is very important. It is a prerequisite skill, without proper domain knowledge, one cannot proceed further in the blockchain industry. So, learn the fundamental concepts of blockchain, gain a deeper and clearer understanding of them, and also learn about real-time blockchain applications, the working mechanism of various consensus protocols. Examine recent advancements in blockchain technology.",
    services: [
      {
        title: "Learn about cryptonomics",
        description:
          "In blockchain technology, the data is cryptographically secured with the help of various security protocols. Cryptonomics is the combination of economics and cryptography. Strong mathematics and computer science concepts are required to build strong cryptography protocols",
      },
      {
        title: "Createing blocks",
        description:
          " A transaction occurs and is transmitted to the distributed network of nodes. Each of the nodes in the network must verify the transaction, and if there’s a consensus, they approve the transaction and all of its corresponding data gets recorded in a block. ",
      },
      {
        title: "Add to the chain",
        description:
          "All transactions are blocked together in a completely fixed fashion to form a blockchain. Every time a block is added to the chain, the network uses the same consensus approach to further confirm the previous block(s) and thus adds validity to the overall blockchain",
      },
      {
        title: "Decentralized ",
        description:
          "Blockchain doesn’t depend on an intrusive middle man. This means no government currency and also no third parties for verification. In addition, transactions are spread across thousands, or perhaps even millions of computers – although only your blockchain network can access it. Thanks to this decentralization, data is never lost. ",
      },

      {
        title: "Immutable ",
        description:
          "The data structure of a blockchain uses an append-only format. Ill-intentioned parties can not alter or delete data that has already been recorded. Naturally, this provides an extra layer of security.",
      },
      {
        title: "Transparent ",
        description:
          "As blockchain is a distributed ledger, everyone in the network has access to the same documentation. These digital copies all root back to the same digital information so you don’t have a dozen individual copies of sensitive information.",
      },
    ],

    topDemand: [
      {
        title: "Ethereum",
        subTitle:
          "Ethereum is designed to be scalable, programmable, secure, and decentralized. It is the blockchain of choice for developers and enterprises that are creating technology based upon it to change the way many industries operate and how we go about our daily lives.",
      },
      {
        title: "Solidity",
        subTitle:
          "The beauty of the Ethereum ecosystem is that so many different cryptocurrencies and decentralized applications can use it. Smart contracts make it possible for unique technologies to be made on Ethereum for all kinds of businesses and organizations.",
      },
      {
        title: "STO ",
        subTitle:
          "An STO is a method of selling digital tokens on a blockchain that meets the characteristics of securities. This means that the token's owner receives the same set of rights as a stock owner, including the right to a share in the company, part of its profits, and decisions about business changes.",
      },
      {
        title: "IEO",
        subTitle:
          "A crypto exchange that acts as an intermediary between the project's developers and investors. The crypto exchange evaluates startups that have applied for an IEO and manages the sale of tokens.",
      },
    ],
    frequently: [
      {
        question: "Is blockchain front-end or back-end?",
        answer:
          "Blockchain isn’t a programming or scripting language so the terminology of this kind doesn’t quite fit. That said, if you’re plugging blockchain tech into an app, you’ll probably need a back-end developer. But a front-end developer must make a user interface (UI) that functions well with the back-end.",
      },
      {
        question: "When was blockchain invented?",
        answer:
          "Blockchain was invented in 2008 just after the Great Recession under the name Satoshi Nakamoto. As of today, this name has not been found to be officially associated with any one person or group.",
      },
      {
        question: "Is blockchain easy to use?",
        answer:
          "Easy is not a common adjective for blockchain technology. Blockchain isn’t exceedingly difficult but you need to be well-versed in the technology to operate blockchain systems.",
      },
      {
        question: "Is blockchain free?",
        answer:
          "For the most part. Think of blockchain as a database – that’s not something you can charge money for. And most blockchain dapps like Bitcoin are open-source. But you will need to hire developers despite all this. Enterprise versions such as IBM’s Hyperledger have costs tied to them such as using IBM Cloud.",
      },
    ],
  },
  {
    title: "Cloud computing",
    subTitle:
      "over the Internet (the cloud) to offer faster innovation, flexible resources, and economies of scale.",
    bannerImage: UseRandomImage("computing"),
    _route: "cloud-computing",

    overview:
      "Cloud-computing services cover a vast range of options now, from the basics of storage, networking and processing power, through to natural language processing and artificial intelligence as well as standard office applications. Pretty much any service that doesn't require you to be physically close to the computer hardware that you are using can now be delivered via the cloud – even quantum computing.",
    whyus:
      "Building the infrastructure to support cloud computing now accounts for a significant chunk of all IT spending, while spending on traditional, in-house IT slides as computing workloads continue to move to the cloud, whether that is public cloud services offered by vendors or private clouds built by enterprises themselves",
    services: [
      {
        title: "Public cloud",
        description:
          "Third-party cloud vendors own and manage public clouds for use by the general public. They own all the hardware, software, and infrastructure that constitute the cloud. Their customers own the data and applications that live on the cloud.",
      },
      {
        title: "Private cloud",
        description:
          "From corporations to universities, organizations can host private clouds (also known as corporate clouds, internal clouds, and on-premise clouds) for their exclusive use. When they do, they own the cloud’s underlying infrastructure and host it either onsite or at a remote location.",
      },
      {
        title: "Hybrid cloud ",
        description:
          "Hybrid clouds fuse private clouds with public clouds for the best of both worlds. Generally, organizations use private clouds for critical or sensitive functions and public clouds to accommodate surges in computing demand. Data and applications often flow automatically between them. This gives organizations increased flexibility without requiring them to abandon existing infrastructure, compliance, and security.",
      },
      {
        title: "Multicloud",
        description:
          "A multicloud exists when organizations leverage many clouds from several providers.This affords many potential benefits. Using multiple different vendors.",
      },
    ],

    topDemand: [
      {
        title: "Infrastructure as a Service",
        subTitle:
          "IaaS contains the basic building blocks for cloud IT. It typically provides access to networking features, computers (virtual or on dedicated hardware), and data storage space. IaaS gives you the highest level of flexibility and management control over your IT resources. It is most similar to the existing IT resources with which many IT departments and developers are familiar. ",
      },
      {
        title: "Platform as a service",
        subTitle:
          "PaaS removes the need for you to manage underlying infrastructure (usually hardware and operating systems), and allows you to focus on the deployment and management of your applications. This helps you be more efficient as you don’t need to worry about resource procurement, capacity planning, software maintenance, patching, or any of the other undifferentiated heavy lifting involved in running your application.",
      },
      {
        title: "Software as a Service",
        subTitle:
          "SaaS provides you with a complete product that is run and managed by the service provider. In most cases, people referring to SaaS are referring to end-user applications (such as web-based email). With a SaaS offering, you don’t have to think about how the service is maintained or how the underlying infrastructure is managed. You only need to think about how you will use that particular software.",
      },
      {
        title: "AWS",
        subTitle:
          "AWS provides a comprehensive portfolio of solutions that help you solve common problems and build faster using the AWS platform. Every AWS Solution comes with detailed architecture, a deployment guide, and instructions for both automated and manual deployment.",
      },
    ],
    frequently: [
      {
        question: "Is cloud cost savings?",
        answer:
          "Once you're on the cloud, easy access to your company's data will save time and money in project startups. And, for those who are worried that they'll end up paying for features that they neither need nor want, most cloud-computing services are pay as you go",
      },
      {
        question: "Is it secure",
        answer:
          "A cloud host's full-time job is to carefully monitor security, which is significantly more efficient than a conventional in-house system, ",
      },
      {
        question: "Is it secure",
        answer:
          "A cloud host's full-time job is to carefully monitor security, which is significantly more efficient than a conventional in-house system, ",
      },
    ],
  },
  {
    title: "Become an (AI) Engineer",
    subTitle:
      "We implement machine learning concepts to build AI solutions that can gather unstructured data and convert it into actionable insights to drive business growth.",
    bannerImage: UseRandomImage("ai"),
    _route: "artificial-intelligence",
    overview:
      "The major limitation in defining AI as simply “building machines that are intelligent” is that it doesn't actually explain what AI is and what makes a machine intelligent. AI is an interdisciplinary science with multiple approaches, but advancements in machine learning and deep learning are creating a paradigm shift in virtually every sector of the tech industry.",
    whyus:
      "Intellias applies deep technological expertise in machine learning and artificial intelligence development services to help clients deliver personalization and customer convenience at scale. Our R&D capabilities and artificial intelligence software development for rapid prototyping and custom machine learning solutions empower clients to tap into unseen market segments, become more efficient, and achieve measurable business outcomes. Intellias strives to delight customers and augment businesses by delivering AI software solutions and machine learning development services.",
    services: [
      {
        title: "Linear Algebra, Probability, and Statistics ",
        description:
          "To understand and implement different AI models—such as Hidden Markov models, Naive Bayes, Gaussian mixture models, and linear discriminant analysis—you must have detailed knowledge of linear algebra, probability, and statistics.",
      },
      {
        title: "Algorithms and Frameworks ",
        description:
          "To build AI models with unstructured data, you should understand deep learning algorithms (like a convolutional neural network, recurrent neural network, and generative adversarial network) and implement them using a framework",
      },
      {
        title: "Software Design",
        description:
          "The next step in the AI software development process is the design phase, this is very time-consuming and will require the AI development lead.",
      },
      {
        title: "Perception",
        description:
          "Machine perception is the ability to use input from sensors (such as cameras, microphones, wireless signals, and active lidar, sonar, radar, and tactile sensors) to deduce aspects of the world. Applications include speech recognition, facial recognition, and object recognition. Computer vision is the ability to analyze visual input.",
      },
    ],

    topDemand: [
      {
        title: "Business Intelligence",
        subTitle:
          "Our AI engineers build strategies to execute optimization, customer analysis, forecasting and performance analysis.",
      },
      {
        title: "Natural Language Processing",
        subTitle:
          "With NLP and NLU, our AI developers help organizations to analyze customer feedback and sentiments to improve customer engagement and increase business revenue.",
      },
      {
        title: "Computer Vision",
        subTitle:
          "Our AI developers are experienced in developing solutions for the recognition of objects and classification of images using Amazon Rekognition and Deep Learning-based Visual Search.",
      },
      {
        title: "ChatBot Development",
        subTitle:
          "Our AI development team develops chatbots that facilitate personalized interaction to increase loyalty and customer retention.",
      },
      {
        title: "AI Development Voice Assistant",
        subTitle:
          "Our AI developers also build voice assistants using NLP and voice recognition that enhance brand awareness and boost productivity through voice search.",
      },
    ],
    teachTable: [
      {
        tableName: "DL FRAMEWORKS",
        description: [
          "PyTorch",
          "MXNet",
          " Nvidia Caffe",
          "Chainer ",
          "Theano",
        ],
      },
      {
        tableName: "MODULES/TOOLKITS",
        description: [
          "Microsoft Cognitive Toolkit",
          "Core ML ",
          "Kurento’s computer  vision module",
        ],
      },
      {
        tableName: "LIBRARIES",
        description: ["OpenNN", "Neuroph", "Sonnet", "tf-slim", "Tensorlfow "],
      },
      {
        tableName: "ALGORITHMS",
        description: [
          "Supervised/unsupervised learning",
          "Clustering (density-based, Hierarchical, partitioning)",
          "Metric learning ",
          "Few-shot learning ",
        ],
      },
      {
        tableName: "NEURAL NETWORKS",
        description: [
          "CNN",
          "RNN",
          "Representation learning",
          "Manifold learning",
          "Bayesian networks",
        ],
      },
    ],
    frequently: [
      {
        question: "What is the AI development life cycle?",
        answer:
          "It is the development cycle to create AI solutions. It includes 3 parts: Project scoping, Design, Build phase",
      },
      {
        question: "Which SDLC model is best?",
        answer:
          "The answer really depends on your project scope and your development priorities. Generally speaking, Agile is preferred by software programmers due to its time and flexibility focus.",
      },
    ],
  },
];
