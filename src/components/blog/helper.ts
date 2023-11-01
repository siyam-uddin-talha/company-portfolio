type RandomUrl<T extends string> = `https://source.unsplash.com/random/?${T}`;

enum Image {
  user = "https://source.unsplash.com/random/?user",
  code = "https://source.unsplash.com/random/?code",
}

const UseRandomImage = <T extends string>(name: T): RandomUrl<T> => {
  return `https://source.unsplash.com/random/?${name}`;
};

type Catagory =
  | "node.js"
  | "python"
  | "web"
  | "backend"
  | ".net"
  | "database"
  | "blockchain"
  | "game"
  | "mobile"
  | "machine lerning";

type Auter = "Abro Shukla" | "Hardik chopra" | "Payal roy" | " Chintan Patel";

type TopicTable = {
  title?: string;
  data: string | string[];
};

// <- -------------------------- convert link ----------------------->

// <- -------------------------- convert link ----------------------->

export interface IBlog {
  author: Auter;
  autherImg: Image.user | string;
  catagory: Catagory;
  thumb: Image.code | string;
  bannerImage: Image.code | string;

  title: string;
  subTitle: string;
  date: string;
  // ------------------- Information ------------------
  topic: string[];
  topicTable: TopicTable[];
}

export const BlogData: IBlog[] = [
  {
    author: "Payal roy",
    catagory: "blockchain",
    date: "20 may 2021",
    title: "Why you should use blockchain",
    subTitle:
      "A blockchain is a distributed database or ledger that is shared among the nodes of a computer network. Blockchains are best known for their crucial role in cryptocurrency systems, ",
    autherImg: Image.user,
    thumb: UseRandomImage("blockchain"),
    bannerImage: UseRandomImage("blockchain"),
    topic: [
      "How Does a Blockchain Work?",
      "Blockchain Decentralization",
      "Benefits of blockchain",
    ],
    topicTable: [
      {
        title: "How Does a Blockchain Work?",
        data: [
          `As each transaction occurs, it is recorded as a “block” of data
Those transactions show the movement of an asset that can be tangible (a product) or intangible (intellectual). The data block can record the information of your choice: who, what, when, where, how much and even the condition — such as the temperature of a food shipment.`,
          "The goal of blockchain is to allow digital information to be recorded and distributed, but not edited. In this way, a blockchain is the foundation for immutable ledgers, or records of transactions that cannot be altered, deleted, or destroyed. This is why blockchains are also known as a distributed ledger technology (DLT).",

          "First proposed as a research project in 1991, the blockchain concept predated its first widespread application in use: Bitcoin, in 2009. In the years since, the use of blockchains has exploded via the creation of various cryptocurrencies, decentralized finance (DeFi) applications, non-fungible tokens (NFTs), and smart contracts.",
        ],
      },
      {
        title: "Blockchain Decentralization",
        data: [
          "No participant can change or tamper with a transaction after it’s been recorded to the shared ledger. If a transaction record includes an error, a new transaction must be added to reverse the error, and both transactions are then visible.",
          "All network participants have access to the distributed ledger and its immutable record of transactions. With this shared ledger, transactions are recorded only once, eliminating the duplication of effort that’s typical of traditional business networks.",
          "Each additional block strengthens the verification of the previous block and hence the entire blockchain. This renders the blockchain tamper-evident, delivering the key strength of immutability. This removes the possibility of tampering by a malicious actor — and builds a ledger of transactions you and other network members can trust.",
        ],
      },
      {
        title: "Benefits of blockchain",
        data: [
          "Operations often waste effort on duplicate record keeping and third-party validations. Record-keeping systems can be vulnerable to fraud and cyberattacks. Limited transparency can slow data verification. And with the arrival of IoT, transaction volumes have exploded. All of this slows business, drains the bottom line — and means we need a better way. Enter blockchain.",

          "With blockchain, as a member of a members-only network, you can rest assured that you are receiving accurate and timely data, and that your confidential blockchain records will be shared only with network members to whom you have specifically granted access.",
          "Consensus on data accuracy is required from all network members, and all validated transactions are immutable because they are recorded permanently. No one, not even a system administrator, can delete a transaction.",
          "With a distributed ledger that is shared among members of a network, time-wasting record reconciliations are eliminated. And to speed transactions, a set of rules — called a smart contract — can be stored on the blockchain and executed automatically.",
        ],
      },
    ],
  },
  {
    author: "Abro Shukla",
    catagory: ".net",
    date: "20 may 2021",
    title: "Usage of compiled code (instead of interpreted code)",
    subTitle:
      "It is a web development platform, which provides a programming model, a comprehensive software infrastructure and various services required to build up robust web applications for PC, as well as mobile devices.",
    autherImg: UseRandomImage("man"),
    thumb: Image.code,
    bannerImage: UseRandomImage("asp.net"),

    topic: [
      "Common Language Runtime or CLR",
      "Components of .Net Framework 3.5",
      "State Management",
      "Caching",
    ],
    topicTable: [
      {
        title: "Common Language Runtime or CLR",
        data: [
          "It performs memory management, exception handling, debugging, security checking, thread execution, code execution, code safety, verification, and compilation. The code that is directly managed by the CLR is called the managed code. When the managed code is compiled, the compiler converts the source code into a CPU independent intermediate language (IL) code. A Just In Time(JIT) compiler compiles the IL code into native code, which is CPU specific.",
          "It contains a huge library of reusable types. classes, interfaces, structures, and enumerated values, which are collectively called types",
          "It is the technology used for building and executing connected systems.",
          "It imparts data querying capabilities to .Net languages using a syntax which is similar to the tradition query language SQL.",
        ],
      },
      {
        title: "Components of .Net Framework 3.5",
        data: [
          "It provides guidelines for declaring, using, and managing types at runtime, and cross-language communication.",
          "Metadata is the binary information describing the program, which is either stored in a portable executable file (PE) or in the memory. Assembly is a logical unit consisting of the assembly manifest, type metadata, IL code, and a set of resources like image files.",
          "Windows Forms contain the graphical representation of any window displayed in the application",
          "It is the technology used for building and executing connected systems.",
        ],
      },
      {
        title: "State Management",
        data: [
          "ASP.Net has the facility to control state management. HTTP is known as a stateless protocol. Let’s take an example of a shopping cart application. Now, when a user decides what he wants to buy from the site, he will press the submit button.",
          "The application needs to remember the items the user choose for the purchase. This is known as remembering the state of an application at a current point in time. HTTP is a stateless protocol.",
          " When the user goes to the purchase page, HTTP will not store the information on the cart items. Additional coding needs to be done to ensure that the cart items can be carried forward to the purchase page.",
        ],
      },
      {
        title: "Caching",
        data: " can implement the concept of Caching. This improve’s the performance of the application. By caching those pages which are often requested by the user can be stored in a temporary location. These pages can be retrieved faster and better responses can be sent to the user. So caching can significantly improve the performance of an application.",
      },
    ],
  },
  {
    author: "Hardik chopra",
    catagory: "node.js",
    date: "7 july 2022",
    title: "Should you use node.js in 2022",
    subTitle:
      "A JavaScript-based development platform for creating server-side Web applications. JavaScript is traditionally associated with Web pages and executed by the browser.",
    autherImg: UseRandomImage("user"),
    thumb: UseRandomImage("javascript"),
    bannerImage: UseRandomImage("javascript"),
    topic: [
      "What is Node.js (and why does it matter)?",
      "Node.js Architecture and How It Works",
      "Features Of Node.js",
      "Interesting facts",
      "The Pros and Cons of Node.js",
    ],
    topicTable: [
      {
        title: "What is Node.js (and why does it matter)?",
        data: [
          "It is used for server-side programming, and primarily deployed for non-blocking, event-driven servers, such as traditional web sites and back-end API services, but was originally designed with real-time, push-based architectures in mind. Every browser has its own version of a JS engine, and node.js is built on Google Chrome’s V8 JavaScript engine. ",
          "Node.js is a single-threaded, open-source, cross-platform runtime environment for building fast and scalable server-side and networking applications. It runs on the V8 JavaScript runtime engine, and it uses event-driven, non-blocking I/O architecture, which makes it efficient and suitable for real-time applications.",
        ],
      },
      {
        title: "Node.js Architecture and How It Works",
        data: [
          "Node.js uses the “Single Threaded Event Loop” architecture to handle multiple clients at the same time. To understand how this is different from other runtimes, we need to understand how multi-threaded concurrent clients are handled in languages like Java.",
          "In a multi-threaded request-response model, multiple clients send a request, and the server processes each one before sending the response back. However, multiple threads are used to process concurrent calls. These threads are defined in a thread pool, and each time a request comes in, an individual thread is assigned to handle it.",
          "Node.js maintains a limited thread pool to serve requests. Whenever a request comes, Node.js places it into a queue. Now, the single-threaded “Event loop”—the core component—comes into the picture. This event loop waits for requests indefinitely. When a request comes in, the loop picks it up from the queue and checks whether it requires a blocking input/output (I/O) operation. If not, it processes the request and sends a response.",
        ],
      },
      {
        title: "Features Of Node.js",
        data: [
          "Node.js is quite easy to start with. It’s a go-to choice for web development beginners. With a lot of tutorials and a large community—getting started is very easy. It provides vast scalability for applications. Node.js, being single-threaded, is capable of handling a huge number of simultaneous connections with high throughput.",
          "Non-blocking thread execution makes Node.js even faster and more efficient. A vast set of open-source Node.js packages is available that can simplify your work. There are more than one million packages in the NPM ecosystem today. Node.js is written in C and C++, which makes it speedy and adds features like networking support.",
          "Cross-platform support allows you to create SaaS websites, desktop apps, and even mobile apps, all using Node.js. Node.js is an easy choice for developers since both the frontend and backend can be managed with JavaScript as a single languag",
        ],
      },
      {
        title: "Interesting facts",
        data: [
          "Node.js is used by big business and small enterprises alike. While the likes of Amazon, Netflix, eBay, Reddit and Paypal all use it, over 43% of developers using Node.JS do so for enterprise applications.",
          "Some of the most common words users associate with Node.js are: fast, simple, easy, powerful and flexible. Node.js is not perfect for every project, of course, but with all of this in mind it’s easy to see why it’s so popular with start-ups and globals alike.",
        ],
      },
      {
        title: "The Pros and Cons of Node.js",
        data: [
          "JavaScript, which underpins Node.js, has been one of the most popular programming languages available for some time. While it has more commonly been used for front-end web development, it has also gained ground in different areas of application and on distinct platforms, such as Node.js.",

          "Even though Node.js was originally written in 2009, it wasn’t widely adopted until recently. Currently, numerous successful brands have leveraged Node.js to develop both front and back-end applications, including Walmart, Netflix, Medium, LinkedIn or Groupon.",
          "The avalanche of requests and data coming from IoT devices does not block Node.js servers thanks to their event-driven architecture and asynchronous processing suitable for I/O-heavy operations on the IoT network. This makes Node.js fast as an application layer between these devices and the databases that store data from them.",
        ],
      },
    ],
  },

  {
    author: "Abro Shukla",
    catagory: "game",
    date: "14 june 2022",
    title: "Game development with unity",
    subTitle:
      "If you’re interested in a career in gaming, like creating video games, then you might be interested in Unity game development.",
    autherImg: UseRandomImage("women"),
    thumb: UseRandomImage("game"),
    bannerImage: UseRandomImage("game"),
    topic: [
      "What is Unity? & Game engine",
      "What language does Unity use?",
      "Unity vs. Other Game Development Engines",
      "How to Get Started with Unity Game Development",
    ],
    topicTable: [
      {
        title: "What is Unity? & Game engine",
        data: [
          "Unity is a 3D/2D game engine and powerful cross-platform IDE for developers. Let’s break down what this means. As a game engine, Unity is able to provide many of the most important built-in features that make a game work. That means things like physics, 3D rendering, and collision detection. From a developer’s perspective, this means that there is no need to reinvent the wheel. Rather than starting a new project by creating a new physics engine from scratch–calculating every last movement of each material, or the way light should bounce off of different surfaces.",

          `What makes Unity even more powerful though, is that it also includes a thriving “Asset Store.” This is essentially a place where developers can upload their creations and make them available to the community.

Want a beautiful looking fire effect but don’t have time to build one from scratch? Check the asset store and you’ll probably find something. Want to add tilt controls to your game without going through the laborious process of fine tuning the sensitivity? There’s probably an asset for that as well!

All this means that the game developer is free to focus on what matters: designing a unique and fun experience, while coding only the features unique to that vision.`,
        ],
      },
      {
        title: "What language does Unity use?",
        data: [
          "Unreal uses C# to handle code and logic, with a whole bunch of classes and APIs unity to Unity that you will need to learn. The good news is that it’s possible to get an awful lot done in Unity without needing to handle a lot of code. That said, understanding how to program will create many more options for what you can achieve, and Unity gives you the flexibility to change almost everything.",
          "Still, users don’t need to have extensive coding knowledge to be able to use Unity. C# is relatively beginner-friendly, so you can get by without using a lot of code, but Unity will give you a good introduction to C# if it’s new to you or you want more exposure to the language",
        ],
      },
      {
        title: "Unity vs. Other Game Development Engines",
        data: [
          "Unity isn’t the only game development platform out there, so how does it measure up to its competition? Other popular game development engines include Cryengine or Unreal, and each one has its own strengths and weaknesses.",
          "For starters, Unity works well as both a 3D and 2D development tool. Additionally, Unity handles graphics really well so that you can even adjust gaming experiences to lower-grade hardware.Plus, Unity can be used to develop games across multiple platforms, such as PC, iOS, and other game consoles.",
          "However, like any engine, Unity game development has its weaknesses. While the graphics are good, they don’t lend themselves as well to top-end graphics. But, when compared to other engines like Cryengine or Unreal which aren’t as beginner-friendly, Unity is more welcoming to developers of all skill levels.",
        ],
      },
      {
        title: "How to Get Started with Unity Game Development",
        data: [
          "After learning C#, it’s relatively simple to get started with Unity game development. All you need to do is download Unity and get a license. There are free versions for you to get started with, or paid versions if you need more functionality or you’re on a team and you need more seats.",
          "Unity can run on Windows, OS X, and Linux, so make sure you have a compatible device. Beyond that, your skills or video game production background doesn’t really matter all that much since Unity can be used by anybody, from beginners to developers with more experience. So download the engine and get started to see what it’s all about",
        ],
      },
    ],
  },

  {
    author: "Hardik chopra",
    catagory: "mobile",
    date: "1 feb 2022",
    title: "Future in mobile application",
    subTitle:
      "In opposition to applications intended for desktop computers, mobile applications move away from incorporated software systems",
    autherImg: Image.user,
    thumb: UseRandomImage("app"),
    bannerImage: UseRandomImage("android"),
    topic: [
      "Abstract",
      "Native applications",
      "Hybrid applications",
      "Mobile gaming applications",
    ],
    topicTable: [
      {
        title: "Abstract",
        data: [
          "Mobile applications have become highly pervasive in recent years. Their quality is essential since application failures can lead to serious consequences, such as damage of corporate reputation or financial loss. The goal of this work is to identify and expose approaches that address the issue of quality assurance for mobile applications",
          "The number of mobile application–based health interventions has grown along with an increasing proportion of mobile phone users. However, findings related to the effectiveness of such interventions have been inconsistent, which leaves unanswered the question of whether mobile application–based health interventions are more effective than comparison conditions.",
        ],
      },
      {
        title: "Native applications",
        data: [
          "The native mobile application is the kind of app in which it is created and developed for a specific type of device platform such as Android or IOS, using a specialized coding language. To build a native application, the coding language that is chosen by developers must be given access by the device platform. Typical application features for this category could be offline mobile games, dictionary apps, etc.",
          "The main advantage of native applications is their superior and magnificent user experience. All things considered, designers who build them utilize native UI devices. Access to an expansive range of APIs likewise assists with quickening the development work and broadens the limits of application utilization. Native applications must be downloaded from application stores and introduced straightforwardly into devices. That is the reason they first need to pass a severe distributing process.",
          "Normally, in the game, all the images, sounds, and levels are downloaded so the user can play the game without an internet connection (some games require you to have an internet connection because they need to log in, buy or sell items inside, or because they are online games). Another common example of a native mobile app that everyone knows is Facebook.",
        ],
      },
      {
        title: "Mobile gaming applications",
        data: [
          "This is the most famous classification of portable applications. You would be astonished to figure out the number of clients who install games on their telephones. Organizations invest/use a huge amount of time and assets into making games and mobile versions of well-known stationary games since it is a particularly lucrative market. According to a new report from Sensor Tower, mobile game downloads reach 12 billion, which is nearly 7 times higher than the second most downloaded category on Google Play. ",
          "The share of the mobile games would reach 40% in 2020 in the total mobile application downloaded. Of all application downloads, 84% of casual games were downloaded, and the rest of them were spent on core game mobile applications. The best mobile games like Candy Crush Saga or Angry Birds have become known everywhere in the world.",
        ],
      },
      {
        title: "Hybrid applications",
        data: [
          "Hybrid App combines the advantages of mobile web and native app. It is built using HTML, CSS, and Javascript, running on mobile WebView. However, the Hybrid App can still take advantage of the device’s features like capture, GPS, vibration, etc.",
          "These are web applications that closely resemble native applications. They may have a home screen application symbol, responsive design, fast performance, and even have the option to function disconnected, however, they are truly web applications made to look native.",
        ],
      },
    ],
  },
  {
    author: "Abro Shukla",
    catagory: "database",
    date: "10 March 2022",
    title: "Dabase design & management",
    subTitle:
      "This includes logical (entity relationship) and physical (table, column and key) design tools for data. Physical data modeling is becoming almost mandatory for applications using relational database management systems ",
    autherImg: Image.user,
    thumb: UseRandomImage("software"),
    bannerImage: UseRandomImage("software"),

    topic: ["What is Database Design?", "Database development life cycle"],
    topicTable: [
      {
        title: "What is Database Design?",
        data: [
          "Database Design is a collection of processes that facilitate the designing, development, implementation and maintenance of enterprise data management systems. Properly designed database are easy to maintain, improves data consistency and are cost effective in terms of disk storage space. The database designer decides how the data elements correlate and what data must be stored.",
          "The main objectives of database design in DBMS are to produce logical and physical designs models of the proposed database system.The logical model concentrates on the data requirements and the data to be stored independent of physical considerations. It does not concern itself with how the data will be stored or where it will be stored physically.",
        ],
      },
      {
        title: "Database development life cycle",
        data: [
          "Planning This stages of database design concepts are concerned with planning of entire Database Development Life Cycle. It takes into consideration the Information Systems strategy of the organization.System definition This stage defines the scope and boundaries of the proposed database system.",
          "Logical model This stage is concerned with developing a database model based on requirements. The entire design is on paper without any physical implementations or specific DBMS considerations.Physical model This stage implements the logical model of the database taking into account the DBMS and physical implementation factors.",
        ],
      },
    ],
  },

  {
    author: "Hardik chopra",
    catagory: "python",
    date: "10 March 2022",
    title: "Building by python",
    subTitle:
      " Python is a great language for the beginner-level programmers and supports the development of a wide range of applications from simple text processing to WWW browsers to games.",
    autherImg: UseRandomImage("user"),
    thumb: UseRandomImage("code"),
    bannerImage: Image.code,

    topic: [
      "Python Use Cases",
      "Features and Benefits of Python",
      "Data analysis and machine learning",
      "Software testing and prototyping",
      "Why is Python so popular?",
    ],
    topicTable: [
      {
        title: "Python Use Cases",
        data: [
          "Professionally, Python is great for backend web development, data analysis, artificial intelligence, and scientific computing. Developers also use Python to build productivity tools, games, and desktop apps.",
          "Creating web applications on a server. Building workflows that can be used in conjunction with software. Connecting to database systems. Reading and modifying files. Performing complex mathematics. Fast prototyping. Developing production-ready software",
        ],
      },
      {
        title: "Features and Benefits of Python",
        data: [
          "Compatible with a variety of platforms including Windows, Mac, Linux, Raspberry Pi, and others. Uses a simple syntax comparable to the English language that lets developers use fewer lines than other programming languages",
          "Operates on an interpreter system that allows code to be executed immediately, fast-tracking prototypingCan be handled in a procedural, object-orientated, or functional way",
        ],
      },
      {
        title: "Data analysis and machine learning",
        data: [
          "Python has become a staple in data science, allowing data analysts and other professionals to use the language to conduct complex statistical calculations, create data visualizations, build machine learning algorithms, manipulate and analyze data, and complete other data-related tasks.",

          "Python can build a wide range of different data visualizations, like line and bar graphs, pie charts, histograms, and 3D plots. Python also has a number of libraries that enable coders to write programs for data analysis and machine learning more quickly and efficiently, like TensorFlow and Keras.",
        ],
      },
      {
        title: "Software testing and prototyping",
        data: "In software development, Python can aid in tasks like build control, bug tracking, and testing. With Python, software developers can automate testing for new products or features. Some Python tools used for software testing include Green and Requestium.",
      },
      {
        title: "Why is Python so popular?",
        data: [
          "It has a simple syntax that mimics natural language, so it’s easier to read and understand. This makes it quicker to build projects, and faster to improve on them.It’s versatile. Python can be used for many different tasks, from web development to machine learning.",
          "It’s beginner friendly, making it popular for entry-level coders. It’s open source, which means it’s free to use and distribute, even for commercial purposes. Python’s archive of modules and libraries—bundles of code that third-party users have created to expand Python’s capabilities—is vast and growing.",
          "Python has a large and active community that contributes to Python’s pool of modules and libraries, and acts as a helpful resource for other programmers. The vast support community means that if coders run into a stumbling block, finding a solution is relatively easy; somebody is bound to have run into the same problem before.",
        ],
      },
    ],
  },

  {
    author: " Chintan Patel",
    catagory: "machine lerning",
    date: "10 Dec 2021",
    title: "Robot & Ai design",
    subTitle:
      "robot, any automatically operated machine that replaces human effort, though it may not resemble human beings in appearance or perform functions in a humanlike manner.",
    autherImg: Image.user,
    thumb: UseRandomImage("robot"),
    bannerImage: UseRandomImage("robot"),

    topic: [
      "Robotics Defined",
      "Robotics research",
      "The future",
      "What Is a Bot? & AI",
    ],
    topicTable: [
      {
        title: "Robotics Defined",
        data: [
          "Robots consist of some sort of mechanical construction. The mechanical aspect of a robot helps it complete tasks in the environment for which it’s designed. For example, the Mars 2020 Rover’s wheels are individually motorized and made of titanium tubing that help it firmly grip the harsh terrain of the red planet.Robots need electrical components that control and power the machinery. Essentially, an electric current — a battery, for example — is needed to power a large majority of robots.",
          "Robots contain at least some level of computer programming. Without a set of code telling it what to do, a robot would just be another piece of simple machinery. Inserting a program into a robot gives it the ability to know when and how to carry out a task.",
        ],
      },
      {
        title: "Robotics research",
        data: [
          "Dexterous industrial manipulators and industrial vision have roots in advanced robotics work conducted in artificial intelligence (AI) laboratories since the late 1960s. Yet, even more than with AI itself, these accomplishments fall far short of the motivating vision of machines with broad human abilities. Techniques for recognizing and manipulating objects, reliably navigating spaces, and planning actions have worked in some narrow, constrained contexts, but they have failed in more general circumstances.",
          "The first robotics vision programs, pursued into the early 1970s, used statistical formulas to detect linear boundaries in robot camera images and clever geometric reasoning to link these lines into boundaries of probable objects, providing an internal model of their world. Further geometric formulas related object positions to the necessary joint angles needed to allow a robot arm to grasp them, or the steering and drive motions to get a mobile robot around (or to) the object. This approach was tedious to program and frequently failed when unplanned image complexities misled the first steps. An attempt in the late 1970s to overcome these limitations by adding an expert system component for visual analysis mainly made the programs more unwieldy—substituting complex new confusions for simpler failures.",
        ],
      },
      {
        title: "The future",
        data: [
          "The year 2020 the process will have produced the first broadly competent “universal robots” with lizardlike minds that can be programmed for almost any routine chore. With anticipated increases in computing power, by 2030 second-generation robots with trainable mouselike minds may become possible. Besides application programs, these robots may host a suite of software “conditioning modules” that generate positive- and negative-reinforcement signals in predefined circumstances.",
          "By 2040 computing power should make third-generation robots with monkeylike minds possible. Such robots would learn from mental rehearsals in simulations that would model physical, cultural, and psychological factors. Physical properties would include shape, weight, strength, texture, and appearance of things and knowledge of how to handle them.",
        ],
      },
      {
        title: "What Is a Bot? & AI",
        data: [
          "Software robotics, also called bots, are computer programs which carry out tasks autonomously. One common use case of software robots is a chatbot. A chatbot is a computer program that simulates conversation both online and over the phone and is often used in customer service scenarios. Chatbots can either be simple services that answer questions with an automated response or more complex digital assistants that learn from user information.",
          "Robots are built to present solutions to a variety of needs and fulfill several different purposes, and therefore, require a variety of specialized components to complete these tasks.",
          "Sensors provide a robot with stimuli in the form of electrical signals that are processed by the controller and allow the robot to interact with the outside world. Common sensors found within robots include video cameras that function as eyes, photoresistors that react to light and microphones that operate like ears. These sensors allow the robot to capture its surroundings and process the most logical conclusion based on the current moment and allows the controller to relay commands to the additional components.",
        ],
      },
    ],
  },
  {
    author: "Payal roy",
    catagory: "web",
    date: "10 Nobember 2021",
    title: "full stack with ~ MERN, MEAN, MEVE, Django, PHP",
    subTitle:
      "Full stack developers are the Swiss army knives of the development world. As masters of multiple programming languages, these savvy professionals are capable of transitioning seamlessly from one development environment to the next.",
    autherImg: UseRandomImage("man"),
    thumb: UseRandomImage("computer"),
    bannerImage: UseRandomImage("react"),

    topic: ["Full stack overview", "MERN Stack", "Frontend", "Backend"],
    topicTable: [
      {
        title: "Full stack overview",
        data: [
          "Full stack technology refers to the entire depth of a computer system application, and full stack developers straddle two separate web development domains: the front end and the back end.The front end includes everything that a client, or site viewer, can see and interact with. By contrast, the back end refers to all the servers, databases, and other internal architecture that drives the application; usually, the end-user never interacts with this realm directly.",
          "Today, modern businesses often rely on entire teams of developers to operate network equipment, work with virtual machines, and manage enormous databases. It takes time to develop a comprehensive, nuts-and-bolts understanding of all these emerging technologies. The developers who do so are, for that reason, versatile enough to shift fluidly between front and back end development and take on any task that their team might need them to tackle. ",
        ],
      },
      {
        title: "MERN Stack",
        data: [
          "There are many good reasons to use the MERN Stack. For example, it allows the creation of a 3-tier architecture that includes frontend, backend, and database using JavaScript and JSON.MongoDB, which is the base of the MERN stack, is designed to store JSON data natively. Everything in it, including CLI and query language, is built using JSON and JS. The NoSQL database management system works well with NodeJS and thus, allows manipulating, representing, and storing JSON data at every tier of the application.",
          "It comes in a variant called MongoDB Atlas that further eases database management by offering an auto-scaling MongoDB cluster on any cloud provider and with just a few clicks.Express is a server-side framework that wraps HTTP requests and responses and makes mapping URLs to server-side functions easy. This perfectly complements the ReactJS framework, a front-end JS framework for developing interactive UIs in HTML while communicating with the server.",
          "Every MERN stack developer can use this process to develop apps using a quicker process. As this is an open-source technology, developers do not need to build anything from the beginning. You’re only required to make some customization for developing a digital platform.",
          "Learning and mastering the MERN skills allows you to complete the full-stack development process. You can cover both Front-end and Back-end development processes through it. Businesses are using this to develop an application or API that works on many devices with full-stack app development.",
        ],
      },
      {
        title: "Frontend",
        data: [
          "React JS- It is an open-source JavaScript library for developing single-page websites. MERN stack developer has expertise in using this JavaScript and the ability to use the same code on multiple platforms. Moreover, this application is fast and highly scalable. React makes it easier to create dynamic web applications because it requires less coding and offers more functionality, as opposed to JavaScript, where coding often gets complex very quickly. React uses Virtual DOM, thereby creating web applications faster. Virtual DOM compares the components’ previous states and updates only the items in the Real DOM that were changed, instead of updating all of the components again, as conventional web applications do. Components are the building blocks of any React application, and a single app usually consists of multiple components. These components have their logic and controls, and they can be reused throughout the application, which in turn dramatically reduces the application’s development time.",

          "Angular is an open-source, JavaScript framework written in TypeScript. Google maintains it, and its primary purpose is to develop single-page applications. As a framework, Angular has clear advantages while also providing a standard structure for developers to work with. It enables users to create large applications in a maintainable manner. ",
          "Angular enables users to build their own components that can pack functionality along with rendering logic into reusable pieces. It also plays well with web components. Angular enables users to effortlessly move data from JavaScript code to the view, and react to user events without having to write any code manually. ",
        ],
      },
      {
        title: "Backend",
        data: [
          " It is a runtime environment operating with features of being open-source and cross-platform. It comes with a utility that this code can run outside the server without any problem and on a server.It comes with the node package manager or npm, enabling users to select from a wide selection of node modules or packages. Being developed on the Chrome JavaScript Engine enables Node to execute code faster. A lightweight framework to assist in building mobile applications. Express JS is a server-side JavaScript framework for designing faster and more secure applications. It is considered for the faster speed and use of minimal architecture.",
          "Server-side Script is PHP’s main strength. If you are just learning to code and want to explore server-side scripting, PHP is a great language to learn. To get cracking with PHP server-side scripting you’ll need to have a PHP parser, web server and web browser. PHP is probably not the best language to use to create desktop applications but for the advanced web developer, it provides you with many more options than its competitors. It offers great load times for websites: With website performance becoming more and more tied to speed, PHP’s quick load can really help you succeed.",
        ],
      },
    ],
  },
  {
    author: " Chintan Patel",
    catagory: "database",
    date: "10 Oct 2021",
    title: "Mysql vs Mongodb & which should be use",
    subTitle:
      "MySQL and MongoDB are two of the most in-demand and competitive database services for web applications. Both are database management systems (DBMS) that enable you to extract data and create reports from a site or application, but they are designed in different ways",

    autherImg: Image.user,
    thumb: UseRandomImage("system"),
    bannerImage: UseRandomImage("code"),

    topic: [
      "Database similarities",
      "Database differences",
      "How MySQL and MongoDB work",
      "Benefits of MySQL",
      "Benefits of MongoDB",
    ],
    topicTable: [
      {
        title: "Database similarities",
        data: [
          "There’s much about these two systems that are alike. At their core, both are database management systems (DBMs) that serve as the ground-level information network for any type of digital site or space. They store data on a computer system or network as part of the foundation of web applications. Web apps require a data foundation as database services to run successfully. Both MongoDB and MySQL enable organizations to distribute, modify or deploy cloud-native applications, for example. Moreover, developers for both systems originally created these as open-source databases, where code is free for anyone to use and to distribute. In sum, these are both fundamentally open-source database management options, but that is where similarities end. The driving difference is in the way each one is designed.",
        ],
      },
      {
        title: "Database differences",
        data: [
          "MongoDB is a document-based non-relational database management system. It’s also called an object-based system. It was designed to supplant the MySQL structure as an easier way to work with data. On the other hand, MySQL is a table-based system (or open-source relational database). The table-based design is the data query structure for search and is considered an SQL database. Also, data is searchable and accessible in relation to another data point or set.",
          "As data management and data volume needs grew, businesses began to perceive MySQL as a more rigid architecture and not as flexible for reformatting data structures. This sentiment is largely due to the table-based design, which enables sites and apps to apply a finite set of multivariate search queries. ",
          "In MongoDB, you don’t need to define the schema. Instead, you just drop in documents don’t even need to have the same fields. MongoDB has a pre-defined structure that can be defined and adhered to, but also, if you need different documents in a collection, it can have different structures.",
          "MySQL requires you to define your tables and columns before you can store anything, and every row in a table must have the same columns.MySQL uses Structured Query Language (SQL) for database access. You can’t change the schema.",
          "",
        ],
      },
      {
        title: "How MySQL and MongoDB work",
        data: [
          "MySQL is designed with SQL and designed on a B-tree table structure, meaning that logarithmic interactions within the structure enable the server engine to quickly scan and search data sets for related data.MySQL has two main components: A type of storage engine and the language used to work with data. The storage engine is where data is created, retrieved, sent and stored. The language is how to access it.MySQL is also node-based, so that search for data is hastened by the tree structure, creating an efficient search, index and query experience. MySQL employs this structure to store data in fields, or data sets, that are relational to other data.",
          "MongoDB is known as a NoSQL database, or non-relational system. It’s founded upon documents as the unit of data for search, thus making it an object-based system. It is written with and employs binary JSON language; it also uses MongoDB query language, which many view as a universal, lighter or more flexible structure with which to work. Additionally, MongoDB employs BSON — JSON-like documents that are binary coded into typically smaller files. Many developers find these easier to manipulate, making data management faster. MongoDB is a particularly useful system for both structured and unstructured data. Structured data is straightforward — written content is an example. Unstructured data is more difficult to store and organize. Rich media or facial recognition are just a few types that MongoDB seeks to better manage as this type becomes even more prevalent in big data.",
        ],
      },
      {
        title: "Benefits of MySQL",
        data: [
          "MySQL is enterprise-grade and powerful across platforms and networks. It is a leader in the space and continues to create and release comparable database options, such as an upgraded blend of NoSQL DBM capabilities. It is also known to be compatible with more systems because of its time on market and mobility. Therefore, it is also viewed as a scalable solution.",
          "Because of its cross-section of API, server, programmatic and administrative tools and options, MySQL is considered highly accessible and typically runs with no downtime.Finally, it is created with data authentication, with secure socket layer (SSL) security. The security layer makes sensitive data more protected in transmission.",
          "MySQL allows replication and clustering that help improve application scalability and performance via different synchronization types. You can also copy data from a SQL server to other replica SQL servers. This also lets you backup data in multiple databases to avoid data loss.",
        ],
      },
      {
        title: "Benefits of MongoDB",
        data: [
          "MongoDB’s use of dynamic schema design fosters a more flexible environment for data search, coding, integration and database development. Additionally, it features easy-to-change fields, which enables users to avoid large-scale overhaul or re-calibration for changing organizational or data needs. ",
          "The document data model also provides businesses with a more sophisticated experience in storing, accessing, indexing and combining any type of data, for both code-friendly and native data models. Thus, conversion mapping is not necessary for greater durability and easier scaling. ",
          " MongoDB allows you to make several copies of your data using replication (replica sets) and deploy them on various servers. This feature is helpful for data backups and disaster management. In case of a server failure, you can always retrieve your data from the copies stored in other servers.",
          "MongoDB is capable of scaling horizontally with the help of sharding, a method of distributing large datasets across different data collections. Here, users can choose a shard key (a master key with single or multiple replicas) to determine the data distribution in a collection and split the data into different ranges across shards. Each shard functions as an individual database, forming one single database using other shards contributes to load balancing and executes complicated queries.Load balancing: MongoDB facilitat",
        ],
      },
    ],
  },
  {
    author: "Hardik chopra",
    catagory: "mobile",
    date: "10 April 2022",
    title: "Building mobile application with React-Native",
    subTitle:
      "For several years now, React Native has been a hot topic in the mobile development world. No wonder – it took the tech world by storm by offering a way to develop mobile apps for both iOS and Android simultaneously.",

    autherImg: UseRandomImage("women"),
    thumb: UseRandomImage("android"),
    bannerImage: UseRandomImage("code"),

    topic: [
      "What Is React Native?",
      "The history of React Native",
      "How does React Native work?",
      "Benefits of React Native",
      "React Native Risks and Drawbacks",
    ],
    topicTable: [
      {
        title: "What Is React Native?",
        data: [
          "React Native (also known as RN) is a popular JavaScript-based mobile app framework that allows you to build natively-rendered mobile apps for iOS and Android. The framework lets you create an application for various platforms by using the same codebase.React Native was first released by Facebook as an open-source project in 2015. In just a couple of years, it became one of the top solutions used for mobile development. React Native development is used to power some of the world’s leading mobile apps, including Instagram, Facebook, and Skype. ",
        ],
      },
      {
        title: "The history of React Native",
        data: [
          "When Facebook first decided to make its service available on mobile devices, instead of building out a native app like many top tech players at the time, they decided to run with a mobile webpage based on HTML5. However, the solution didn’t stand the test of time, leaving much room for UI and performance improvements. In fact, in 2012, Mark Zuckerberg admitted that “the biggest mistake we made as a company was betting too much on HTML as opposed to native.”",
          "Soon after, in 2013, Facebook developer Jordan Walke made a groundbreaking discovery – he found a method of generating UI elements for iOS apps by using JavaScript. This sparked a fire, and a special Hackathon was organized to further discover how much mobile development could be done using (so far, traditionally web-based) JavaScript solutions.",
          "That’s how React Native came to life. Initially developed just for iOS, Facebook quickly followed it up with Android support, before taking the framework public in 2015.",
        ],
      },
      {
        title: "How does React Native work?",
        data: [
          "React Native is written with a mixture of JavaScript and JXL, a special markup code resemblant of XML. The framework has the ability to communicate with both realms – JavaScript-based threads and existent, native app threads.How does this communication work? React Native uses a so-called “bridge”. While JavaScript and Native threads are written in completely different languages, it’s the bridge feature that makes bidirectional communication possible.",
          "For instance, because React Native is “just” JavaScript, you don’t need to rebuild your application in order to see your changes reflected; instead, you can hit Command+R to refresh your application just as you would any other web page. All of those minutes spent waiting for your application to build can really add up, and in contrast React Native’s quick iteration cycle feels like a godsend.",
        ],
      },
      {
        title: "Benefits of React Native",
        data: [
          "Being able to reuse code is the biggest advantage of React Native, and it indicates that apps can run effectively on multiple platforms – which is something that CEOs and Product Owners truly appreciate. They can integrate 90% of the native framework for reusing the code for both operational systems.",
          "Another great piece of news is that it’s possible to use the web application code for mobile app development if they’re both using React Native. It also speeds up development time as it includes pre-developed components, which are included in the open-source library.",
          "React Native is an open-source JavaScript platform that allows developers to contribute their knowledge to the framework’s development, which is freely accessible to all.If any developer experiences a problem while developing an app, then they can turn to the community for support (as of mid-2020, there are nearly 50,000 active contributors to the React Native tag in Stack Overflow).",
          "Another advantage of React Native development is greater cost efficiency. As mentioned earlier, this is because developers are able to use the same code to build applications for iOS and Android.It means you don’t have to hire two separate iOS and Android dev teams to finalize your project; a small team is enough to build it. The cost of developing apps in React Native is much lower than apps built using languages that don’t allow for cross-platform development.",
        ],
      },
      {
        title: "React Native Risks and Drawbacks",
        data: [
          "While React Native has been around for several years now, some custom modules either leave room for improvement or are entirely missing. This means that you might need to run three separate codebases (for React Native, iOS, and Android) instead of just one.That being said, it’s not a common occurrence. Unless you’re developing your app from scratch or trying to hack an existing one, you likely won’t come across these issues.",
          "While it may come as a surprise – after all, React Native is used by top tech players – it’s still in beta phase. Your developers might come across various issues with package compatibility or debugging tools. If your developers aren’t proficient in React Native, this might negatively impact your development as they spend time on lengthy troubleshooting.",
          "Most of the time, React Native will work very well for you even if your app eventually grows into a highly-sophisticated, complex solution. After all, companies like Facebook and Skype have found much success with the framework and have been using it consistently for many years. That being said, some companies have decided to back out from using React Native.",
        ],
      },
    ],
  },
];
