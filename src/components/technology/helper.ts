import { UseRandomImage } from "../utils/UseImage";

type Catagory =
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

export interface ITechnology {
  title: string;
  subTitle: string;
  bannerImage: string;
  catagory: Catagory;
  _route: string;
  whyThis: WhyThis[];
  services: ServiceTable[];
  teachTable?: TeachTable[];
  frequently: {
    answer: string;
    question: string;
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
type WhyThis = {
  title: string;
  subTitle: string;
  img: string;
};

export const TechnologyData: ITechnology[] = [
  {
    title: "Hire React developer",
    subTitle:
      "ReactJS is a component-based library where components make our code reusable and split our UI into different pieces.",
    bannerImage: UseRandomImage("code"),
    catagory: "react.js",
    _route: "/technology/react-developer",
    whyThis: [
      {
        img: "/assets/technology/ok.svg",
        title: "Easy creation of dynamic applications",
        subTitle:
          " React makes it easier to create dynamic web applications because it requires less coding and offers more functionality, as opposed to JavaScript, where coding often gets complex very quickly.",
      },
      {
        img: "/assets/technology/elements.svg",
        title: "Improved performance",
        subTitle:
          " React uses Virtual DOM, thereby creating web applications faster. Virtual DOM compares the components’ previous states and updates only the items in the Real DOM that were changed, instead of updating all of the components again, as conventional web applications do. ",
      },
      {
        img: "/assets/technology/interface.svg",
        title: "Reusable components",
        subTitle:
          "Components are the building blocks of any React application, and a single app usually consists of multiple components. These components have their logic and controls, and they can be reused throughout the application, which in turn dramatically reduces the application’s development time.",
      },
      {
        img: "/assets/technology/idea.svg",
        title: "Unidirectional data flow",
        subTitle:
          " React follows a unidirectional data flow. This means that when designing a React app, developers often nest child components within parent components. Since the data flows in a single direction, it becomes easier to debug errors and know where a problem occurs in an application at the moment in answer.",
      },
      {
        img: "/assets/technology/project.svg",
        title: "Small learning curve",
        subTitle:
          "React is easy to learn, as it mostly combines basic HTML and JavaScript concepts with some beneficial additions. Still, as is the case with other tools and frameworks, you have to spend some time to get a proper understanding of React’s library.",
      },
    ],
    services: [
      {
        title: "Architecture",
        description:
          "In a Model View Controller(MVC) architecture, React is the 'View' responsible for how the app looks and feels. MVC is an architectural pattern that splits the application layer into Model, View, and Controller. The model relates to all data-related logic; the view is used for the UI logic of the application, and the controller is an interface between the Model and View.",
      },
      {
        title: "Data Binding",
        description:
          "Since React employs one-way data binding, all activities stay modular and quick. Moreover, the unidirectional data flow means that it's common to nest child components within parent components when developing a React project.",
      },
      {
        title: "Speedless",
        description:
          "React allows developers to use individual parts of their application on both the client and server sides, and any changes they make will not affect the application’s logic. This makes the development process extremely fast.",
      },
      {
        title: "Ultimate flexibility and compatibility",
        description:
          "Using React.js for web development may come in extremely convenient because React is one of those cases where you get the hang of a single technology to easily reuse it across a range of platforms. And all due to being a library by nature, with the primary purpose of creating separate web design elements and components",
      },
    ],
    frequently: [
      {
        question: "Why is React popular?",
        answer:
          "React initially skyrocketed 🚀 to fame because it made fetching and showing data in your JavaScript apps much easier than before. Because React is just a library instead of an elaborate framework, it was - and still is - relatively easy to learn.",
      },
      {
        question: "What is React used for?",
        answer:
          "React is used for frontend web apps to detect user input, fetch data, and update the user interface with data. React does all this with maximum performance.",
      },
      {
        question: "How soon can I land a real-world job?",
        answer:
          "It’s not uncommon for Codecademy learners to land web development jobs within 6 months. You can find how and read more in-depth success stories in the community forums.",
      },
      {
        question: "What isn't good about React?",
        answer:
          "You will find there is no predefined way to structure your app. To ensure you get the most from React, you'll need to spend a little more time researching and implementing popular and effective ways to structure your app.",
      },
      {
        question: "How much do React developers get paid?",
        answer:
          "Salaries can vary greatly from $40K to $100k and beyond. It depends on your aptitude, attitude, and location!",
      },
      {
        question: "Who uses React?",
        answer:
          "Facebook built React for their own products, which include Facebook, Instagram, and WhatsApp . React is also used by Netflix, The New York Times, AirBnb, Discord, DropBox, and many other big companies you've heard of.",
      },
      {
        question: "What can React do?",
        answer:
          "React mainly gives you a structured way to create reusable frontend UI components, handle user input, update UI components efficiently, and manage your data.",
      },
    ],
    teachTable: [
      {
        tableName: "Libraries",
        description: ["Socket.IO", "Canvas", "Redux", "KendoReact"],
      },
      {
        tableName: "UI Libraries/ Framework",
        description: [
          "Material kit",
          "Chakra-UI",
          "ReactAntDesign",
          "semantic UI",
          "Prime React",
          "React-bootstrap",
        ],
      },
      {
        tableName: "Major Libraries",
        description: ["Drupa", "Springboot", "Next.js", "Gatsby", "SOAP"],
      },
      {
        tableName: "Testing",

        description: ["Jest", "Mocha", "Enzyme"],
      },
      {
        tableName: "Database",

        description: ["MongoDB", "PostgreSQ", "MySQL", "DynamoDB"],
      },
      {
        tableName: "Hosting Platforms",

        description: [
          "AWS ",
          "Docker",
          "Heroku",
          "Firebase",
          "AWS Lambda",
          "Google Cloud Platform (GCP)",
        ],
      },
    ],
  },
  {
    title: "Hire a proffessional Angular developer",
    subTitle:
      "AngularJS is a client side JavaScript MVC framework to develop a dynamic web application. AngularJS was originally started as a project in Google but now, it is open source framework.",
    bannerImage: UseRandomImage("code"),
    catagory: "angular.js",
    _route: "/technology/angular-developer",

    whyThis: [
      {
        img: "/assets/technology/project.svg",
        title: "MVC",
        subTitle:
          "The framework is built on the famous concept of MVC (Model-View-Controller). This is a design pattern used in all modern day web applications. This pattern is based on splitting the business logic layer, the data layer, and presentation layer into separate sections. The division into different sections is done so that each one could be managed more easily.",
      },
      {
        img: "/assets/technology/working.svg",
        title: "Writing less code",
        subTitle:
          " When carrying out DOM manipulation a lot of JavaScript was required to be written to design any application. But with Angular, you will be amazed with the lesser amount of code you need to write for DOM manipulation.",
      },
      {
        img: "/assets/technology/convart.svg",
        title: "Dependency Injection",
        subTitle:
          "AngularJS has a built-in dependency injection subsystem that helps the developer to create, understand, and test the applications easily.",
      },
      {
        img: "/assets/technology/ok.svg",
        title: "Validators",
        subTitle:
          "Form and controls provide validation services and a better user experience. Through this, a user gets a warning on entering invalid input before submitting a form. AngularJS uses client-side validation where users get instant feedback on how to correct the error.",
      },
      {
        img: "/assets/technology/multitasking.svg",
        title: "Controller",
        subTitle:
          " A controller is a JavaScript constructor function that contains attributes/properties, and functions and is used to augment AngularJS Scope. Each controller accepts $scope as a parameter, which refers to the application/module that the controller needs to handle.",
      },
    ],
    services: [
      {
        title: "Access to the POJO Model",
        description:
          "POJO stands for Plain Old JavaScript Objects which is a self-sufficient and highly functional model. It offers planned objects and logics and developers just need to create loops with the right properties to get highly interactive applications.",
      },
      {
        title: "Unit Testing Facilitie",
        description:
          "With AngularJS, the testing process has become a lot easier and simpler. Before AngularJS, testing was done by creating single test pages and by testing the behaviour of each component. But with Angular, dependency injections are used to bind the application together.",
      },
      {
        title: "Keeping up with speed",
        description:
          "The no. 1 demand of 21st Century … fast food, fast load speed and fast Internet. Can AngularJS keep up? The version 2.0 is focused on speed. Object.observer is a proposal to add native support for model change listeners and data binding. AngularJS 2.0 will totally use this to significantly speed up the whole data-binding and update cycle",
      },
      {
        title: "Community",
        description:
          "Right from the beginning, AngularJS became extremely popular among engineers. A strong community provided enough training materials, discussions, and third-party tools to embark on using AngularJS as well as find a solution to nearly every arising issue.",
      },
      {
        title: "Reusability",
        description:
          "Components of similar nature are well encapsulated, in other words, self-sufficient. Developers can reuse them across different parts of an application. This is particularly useful in enterprise-scope applications where different systems converge but may have many similar elements like search boxes, date pickers, sorting lists, etc.",
      },
    ],
    frequently: [
      {
        question: "What is the Future Scope of Angular?",
        answer:
          "Angular is the most widely used JavaScript framework for building mobile, desktop, and web applications. There is no doubt that it is worth learning AngularJS which will help you grab your dream job in the IT sector offering you a handsome salary",
      },
      {
        question: "What is AngularJS Used For?",
        answer:
          "Generally speaking, Angular.js for beginners is used for interactive website components. Due to its efficiency, simplicity, adaptability, and constant updates, it is a highly favored framework.",
      },
      {
        question: "Is AngularJS Hard to Learn?",
        answer:
          "Angular.js for beginners is thought to have a much steeper learning curve when compared with React. The Angular framework is verbose in comparison and its complex component management system necessitates numerous repetitive actions.",
      },
      {
        question: "How Many Days Will It Take to Learn AngularJS?",
        answer:
          "This answer has no definitive answer because it depends on each individual's motivation and learning capacities, including attention and retention spans. However, if you are willing to dedicate at least 2-3 hours per day to learning Angular, 2-3 months should be enough. It might take fewer weeks if you put in more time each day",
      },
      {
        question: "Is it Worth Learning AngularJS in 2022?",
        answer:
          "Angular, one of the most popular programming languages in recent memory, has remained popular over time.  Numerous powerhouse companies and institutions use Angular in their app development pipeline, including Google (of course), Microsoft Office, Gmail, Forbes, Delta, Deutsche Bank, PayPal, and Samsung.",
      },
    ],
  },
  {
    title: "Hire a Vue.js developer",
    subTitle:
      "Dubbed the ‘progressive’ framework, Vue.js is most notable for its particular design philosophy, which centers incremental adoption in regards to the software development process. ",
    bannerImage: UseRandomImage("code"),
    catagory: "vue.js",
    _route: "/technology/vue-developer",

    whyThis: [
      {
        img: "/assets/technology/interface.svg",
        title: "Fast Renderization",
        subTitle:
          "The lightweight nature of Vue.js — its package size being only 21 KBs — makes it faster than its competitors. Its virtual DOM, in particular, speeds up rendering.",
      },
      {
        img: "/assets/technology/elements.svg",
        title: "Easy Learning Curve",
        subTitle:
          "Learning Vue.js doesn’t require a lot of background when it comes to libraries and JavaScript variations. Nope. The classic CSS, HTML, and JavaScript do just fine here. Rely on popular code editors like Visual Studio and Atom if you want to make coding in Vue.js even easier than it already is. ",
      },
      {
        img: "/assets/technology/project.svg",
        title: "Convenient Conventions",
        subTitle:
          "Writing boilerplate code is always exhausting and time-consuming. But that’s not the case for Vue.js since the framework provides you with a lot of built-in solutions and saves you some time.",
      },
    ],
    services: [
      {
        title: "Solid Tooling System",
        description:
          "Vue.js supports lots of frontend development tools right out of the box with little to no configuration from you. For example, Vue.js supports tools such as Babel and Webpack. In addition, it provides unit testing, end-to-end testing libraries, flexible and easy-to-use routing systems, state managers, server-side rendering (SSR), and more.",
      },
      {
        title: "Evolution and Growth",
        description:
          "Vue was released way back in 2014. Since then, it is continuously evolving. At the beginning of 2018, Vue.js started beating Angular and becoming more famous in the market. Later, in September 2018, Evan You decided to announce the release of Vue 3.0. Vue.js is continuously evolving with the rapid growth in the usage and community of this framework.",
      },
      {
        title: "Modular and reusable code",
        description:
          "This component-based approach was basically inspired by and picked from the ReactJS. We write code in the form of components to import that component and reuse it wherever we need it. Vue.js offers a single-file component, which makes it a loosely coupled and reusable code.",
      },
      {
        title: "Directives",
        description:
          "VueJS has built-in directives such as v-if, v-else, v-show, v-on, v-bind, and v-model, which are used to perform various actions on the frontend.",
      },
      {
        title: "Watchers",
        description:
          "Watchers are applied to data that changes. For example, form input elements. Here, we don’t have to add any additional events. Watcher takes care of handling any data changes making the code simple and fast.",
      },
    ],
    frequently: [
      {
        question: "What is Vue.js?",
        answer:
          "Vue.js is a JavaScript framework for building user interfaces (UI) and single-page applications (SPAs).",
      },
      {
        question: "What are the advantages of Vue.js?",
        answer:
          "The advantages of Vue.js include its simplicity, library support, speed, small learning curve, and collaborative community.",
      },
      {
        question: "What are the cons of Vue.js?",
        answer:
          "Cons of Vue.js is that it is too new, too limited, and too flexible.",
      },
      {
        question: "What is a singe-page applications (SPA)?",
        answer:
          "The easiest way to explain single-page applications is to envision them as web pages that don’t need refreshing. Hence, they look a lot like mobile applications.",
      },
    ],
  },
  {
    title: "Hire a Python programmer",
    subTitle:
      "Python is a popular general-purpose programming language that can be used for a wide variety of applications. It includes high-level data structures, dynamic typing, dynamic binding, and many more features that make it as useful for complex application development",
    bannerImage: UseRandomImage("code"),
    catagory: "python",
    _route: "/technology/python-developer",

    whyThis: [
      {
        img: "/assets/technology/idea.svg",
        title: "Popularity and access",
        subTitle:
          "Python has a huge community to support it, which helps maintain its accessibility to any skill level — it's also free and open-source software.",
      },
      {
        img: "/assets/technology/multitasking.svg",
        title: "Scalability",
        subTitle:
          "You can start a program in Python without having to worry about the arduous task of rewriting or adapting code for other platforms as you scale up.",
      },
      {
        img: "/assets/technology/elements.svg",
        title: " AI & Machine Learning",
        subTitle:
          "It is widely thought that Python is the best programming language for Artificial Intelligence (AI) because of its syntaxes being simple and quickly learnt. When it comes to machine learning, the ideas exchange platform, “Towards Data Science”, tells us that 57% of data scientists and machine learning developers utilise Python, with 33% prioritising it for development",
      },
      {
        img: "/assets/technology/project.svg",
        title: "Blockchain",
        subTitle:
          "While there may be a few popular languages for blockchain development, including Javascript, Java, C++, and more, Python is proving itself as a strong language. As with other uses, Python recommends itself well for blockchain development because of its high flexibility and functionality, reinforced by its security.",
      },
      {
        img: "/assets/technology/interface.svg",
        title: "Game Development",
        subTitle:
          "Python’s simplicity makes it great for creating basic games or rapid prototyping complex ones. Popular games written in Python include The Sims 4, World of Tanks, EVE Online, and Civilization IV. The beginner-friendly and simple syntax means rookie game developers can learn Python quickly and use it to create graphical user interfaces, build 2D and 3D games, as well as make visual novel and physics-based games.",
      },
    ],
    services: [
      {
        title: "Data sciences",
        description:
          "This field makes up a sizable user base of Python for both its computing and compiling of data libraries.",
      },
      {
        title: "Readability",
        description:
          "Lines of code written in Python are also easy to read. For instance, Python uses a nice, clean break in the form of a new line of code to complete a command, rather than semicolons or parentheses.",
      },
      {
        title: "Data mining",
        description:
          "Python's nimbleness and scalability also makes it an attractive program to process and mine big data, which has seen a lot of mileage in the finance sector.",
      },
      {
        title: "Automation",
        description:
          "Outside the above uses, Python can be useful to just about anyone who interacts with big data sets, in or out of work. It can automate tedious tasks, including checking information in databases, data visualisations, financial analysis and much, much more.",
      },
      {
        title: "Software Testing",
        description:
          "One of the most important parts of developing software is the quality assurance process. To maintain excellent customer satisfaction, software companies must ensure their product offers a high-quality, consistent, and smooth user experience",
      },
    ],
    frequently: [
      {
        question: "What Type of Language Is Python?",
        answer:
          "Python is an interpreted, object-oriented, and high-level programming language. Interpreted means the language uses a piece of software called the interpreter to read the code line by line when the Python program is executed, instead of reading it all at once.",
      },
      {
        question: "Is Python the Same as Java?",
        answer:
          "Python is not the same as Java. While both are general-purpose, high-level, and object-oriented, they are two separate programming languages with many differences. For example, Python is an interpreted language, while Java can be considered both a compiled and an interpreted one.",
      },
      {
        question: "What Should I Learn First for Coding?",
        answer:
          "You should learn a high-level programming language when you first start coding. Besides being more portable, they also tend to be simpler to debug and maintain compared to their low-level counterparts. The best programming languages to learn for beginners include Python, JavaScript, and Java.",
      },
    ],
  },
  {
    title: "Hire .NET developer",
    subTitle:
      "It’s a popular free platform currently used for a lot of different types of applications as it provides the programming environment for most software development phases. ",
    bannerImage: UseRandomImage("code"),
    catagory: ".net",
    _route: "/technology/dot-net-developer",

    whyThis: [
      {
        img: "/assets/technology/convart.svg",
        title: "Common language runtime",
        subTitle:
          "Common Language Runtime (CLR) is the heart of .NET, an application virtual machine that manages memory, implements code access security, verifies code safety, and provides execution of threads and code. CLR is what makes the .NET code a managed one.",
      },
      {
        img: "/assets/technology/ok.svg",
        title: "Cross-platform design of .NET",
        subTitle:
          ".NET Core is a cross-platform .NET implementation that allows the code to run on macOS, Windows, and Linux. Unlike the original .NET framework – which is not completely open – .NET Core has a fully open-source code that ensures that a wide engineering community can continuously contribute to its development.",
      },
      {
        img: "/assets/technology/project.svg",
        title: "Automatic monitoring in ASP.NET",
        subTitle:
          "ASP.NET has built-in automatic monitoring. The Windows Web Server strictly monitors web pages and applications that run on it. In case any issues such as memory leaks or infinite loops occur, it immediately alerts about them. This allows for directly correcting these behaviors and creating new processes. The monitoring ensures higher stability and transparency of .NET applications.",
      },
      {
        img: "/assets/technology/working.svg",
        title: "Enterprise-scale infrastructures",
        subTitle:
          " It’s still a debatable point whether .NET is designed mostly for enterprise use. But Microsoft makes sure it provides the widest toolset possible to build and cross-integrate enterprise products, both internal and public ones. It also supports a robust enterprise mobility ecosystem.",
      },
      {
        img: "/assets/technology/idea.svg",
        title: "Interoperability",
        subTitle:
          "The .Net framework provides a lot of backward support. Suppose if you had an application built on an older version of the .Net framework, say 2.0. And if you tried to run the same application on a machine which had the higher version of the .Net framework, say 3.5. The application would still work. This is because with every release, Microsoft ensures that older framework versions gel well with the latest version.",
      },
    ],
    services: [
      {
        title: "Scalable products",
        description:
          " Usually, business needs are growing and your software has to scale with it. .NET provides a scalable environment and allows for redesigning ongoing applications in order to match the growing needs of the business.",
      },
      {
        title: "Open Source Development",
        description:
          ".NET became much more powerful when it became an open-source solution. As an open-source solution, it has the support of an extremely large community and has experienced many improvements throughout the years.",
      },
      {
        title: "Reliable and simple caching system",
        description:
          "The caching system in .NET is robust and simple to use. It’s also designed to be extensible. The Object Cache class allows developers to create a custom cache implementation to be used for improving the performance and scalability of Windows client and server applications.",
      },
      {
        title: " Memory management",
        description:
          "The Common Language runtime does all the work or memory management. The .Net framework has all the capability to see those resources, which are not used by a running program. It would then release those resources accordingly. This is done via a program called the “Garbage Collector” which runs as part of the .Net framework. The garbage collector runs at regular intervals and keeps on checking which system resources are not utilized, and frees them accordingly.",
      },
    ],
    frequently: [
      {
        question: "What is .NET Framework used for?",
        answer:
          ".NET Framework is used to create and run software applications. .NET apps can run on many operating systems, using different implementations of .NET. .NET Framework is used for running .NET apps on Windows.",
      },
      {
        question: "What is the future of .NET jobs?",
        answer:
          "There are plenty of .NET jobs in marketing. Almost every fortune 500 company uses .NET for the development of its software applications. Currently, there are close to 20,000 open positions available for .NET developer position on indeed.",
      },
      {
        question: "What is the salary of a .NET developer?",
        answer:
          "The annual average salary of a .NET developer in the United States is $98,541, according to indeed.com. The salary of .NET developers depends on the location, company, and number of years of experience.",
      },
      {
        question: "Why do I need .NET Framework?",
        answer:
          "You need .NET Framework installed to run applications on Windows that were created using .NET Framework. It's already included in many versions of Windows. You only need to download and install .NET Framework if prompted to do so.",
      },
      {
        question: "How does .NET Framework work?",
        answer:
          ".NET Framework applications are written in C#, F#, or Visual Basic and compiled to Common Intermediate Language (CIL). The Common Language Runtime (CLR) runs .NET applications on a given machine, converting the CIL to machine code",
      },
      {
        question: "How much does .NET Framework cost?",
        answer:
          ".NET Framework is free, like the rest of the .NET platform. There are no fees or licensing costs, including for commercial use",
      },
    ],
  },
  {
    title: "Hire a Ruby On Rails developer",
    subTitle:
      "Modern web applications can be very complex with many layers. Rails makes web development easier, providing a pre-built structure for development and everything you need to build a web app. ",
    bannerImage: UseRandomImage("code"),
    catagory: "ruby on rails",
    _route: "/technology/ruby-developer",

    whyThis: [
      {
        img: "/assets/technology/idea.svg",
        title: "Cost-effective",
        subTitle:
          "Ruby on Rails is a 100% free and open-source framework. From a developer’s point of view, it is easy to use, and with the add-on advantage of tons of gems, the developer can save plenty of time and effort.",
      },
      {
        img: "/assets/technology/ok.svg",
        title: "Secure",
        subTitle:
          "The framework is by default, installed and enabled with some security measures. When you use Ruby in Rails, you are following a secure development process",
      },
      {
        img: "/assets/technology/elements.svg",
        title: "Flexibility",
        subTitle:
          " While creating web applications in Rails, it uses frontend and backend abilities; these are simpler and easier to create. A single-page web application uses Rails at the backend and maybe any other framework like Angular for the front end. This makes the application depend on Rails for the best qualities.",
      },
      {
        img: "/assets/technology/interface.svg",
        title: "Productivity",
        subTitle:
          "Employing Ruby to create your web application permits you to develop features extremely fast. This happens because Ruby effortlessly combines the 3rd party software libraries. It is amongst the most productive programming languages.",
      },
    ],
    services: [
      {
        title: "ROR Migration Services",
        description:
          "We have vast experience in developing distinctive applications implementing the latest tools and technologies of RoR.",
      },
      {
        title: "ROR Maintenance Support",
        description:
          "We offer complete QA testing and maintenance to help support and upgrade your existing platform.",
      },
      {
        title: "Custom ROR Programming",
        description:
          "Our Ruby developers are knowledgeable on monolithic systems, containers, serverless solutions, AWS and have experience to apply this knowledge to build scalable applications for you.",
      },
      {
        title: "ROR Consultation",
        description:
          "Get your issues resolved with on-demand consultation from our experienced Ruby on Rails tech team.",
      },
      {
        title: "ROR Optimization & Upgradation",
        description:
          "We can optimize your existing RoR platform with updates and integrate with the latest version of RoR.",
      },
      {
        title: "Experienced Ecosystem",
        description:
          "When you engage with a Mindbowser developer, you engage with our complete ecosystem which involves product architects, growth hackers, community support and more.",
      },
    ],
    frequently: [
      {
        question: "How can I choose the Ruby on Rails Developers of my choice?",
        answer:
          "If you want to technology a Ruby on Rails developer, you have to focus on finding a developer with all-round experience.  The strategic implementation of RoR can help build faster, scalable and secure development of web applications. The developer should indeed have a good understanding of the framework. ",
      },
      {
        question: "How long post- launch support and maintenance do you cover?",
        answer:
          "Up to 3 months post-launch support is available by default. Feel free to discuss any extension or addon support with your project manager.",
      },
      {
        question: "What kind of performance guarantees are in place?",
        answer:
          "We have SLAs defined for projects. This includes performance parameters for individuals as well as key goals for the overall project. We keep revisiting this SLA at regular intervals to make sure that we are in line with the plan. Any deviation is immediately fixed",
      },
      {
        question: "Why Hire Ruby on Rails Developers from Mindbowser?",
        answer:
          "Our dedicated Ruby on Rails programmers provide the best-in-class, high-performance, and secured RoR development Services at affordable rates.",
      },
    ],
  },
  {
    title: "Hire a Node.js developer",
    subTitle:
      "Node.js can be used to build different types of applications such as command line application, web application, real-time chat application, REST API server etc. ",
    bannerImage: UseRandomImage("code"),
    catagory: "node.js",
    _route: "/technology/nodejs-developer",

    whyThis: [
      {
        img: "/assets/technology/elements.svg",
        title: "Data streaming",
        subTitle:
          "In more traditional web platforms, HTTP requests and responses are treated like isolated event; in fact, they’re actually streams. This observation can be utilized in Node.js to build some cool features. For example, it’s possible to process files while they’re still being uploaded, as the data comes in through a stream and we can process it in an online fashion.",
      },
      {
        img: "/assets/technology/interface.svg",
        title: "Queued inputs",
        subTitle:
          "If you’re receiving a high amount of concurrent data, your database can become a bottleneck. As depicted above, Node.js can easily handle the concurrent connections themselves. But because database access is a blocking operation (in this case), we run into trouble. The solution is to acknowledge the client’s behavior before the data is truly written to the database.",
      },
      {
        img: "/assets/technology/elements.svg",
        title: "NPM",
        subTitle:
          "When discussing Node.js, one thing that definitely should not be omitted is built-in support for package management using NPM, a tool that comes by default with every Node.js installation. The idea of NPM modules is quite similar to that of Ruby Gems: a set of publicly available, reusable components, available through easy installation via an online repository, with version and dependency management.",
      },
      {
        img: "/assets/technology/ok.svg",
        title: "Immaturity of tooling",
        subTitle:
          "Although the core Node.js modules are quite stable and can be considered mature, there are many tools in the npm registry which are either of poor quality or not properly documented/tested. Moreover, the registry itself isn’t structured well enough to offer the tools based on their rating or quality. Hence it might be difficult to find the best solution for your purposes without knowing what to look for.",
      },
    ],
    services: [
      {
        title: "Rich ecosystem",
        description:
          "The Node.js ecosystem is quite rich. The same stats point out that 97 percent of modern web applications consist of npm modules. And that’s proof of its undisputable popularity among developers.",
      },
      {
        title: "V8 engine",
        description:
          "The engine used in Node.js implementation was originally developed for the Chrome browser. Written in C++, Chrome’s V8 is used to compile functions written in JavaScript into machine code, and it does the job at an impressive speed",
      },
      {
        title: "Corporate support",
        description: `As mentioned above, the development of Node.js was supported by Joyent. In 2015, the Node.js Foundation was created to “enable widespread adoption and help accelerate the development of Node.js.” IBM, Microsoft, PayPal, Fidelity, and SAP became the founding members of the organization.`,
      },
      {
        title: "Corporate support",
        description: `As mentioned above, the development of Node.js was supported by Joyent. In 2015, the Node.js Foundation was created to “enable widespread adoption and help accelerate the development of Node.js.” IBM, Microsoft, PayPal, Fidelity, and SAP became the founding members of the organization.`,
      },
    ],
    frequently: [
      {
        question: "What is Node.js?",
        answer:
          "Node.js is a server-side JavaScript run-time environment. It's open-source, including Google's V8 engine, libuv for cross-platform compatibility, and a core library. Notably, Node.js does not expose a global window object, since it does not run within a browser.",
      },
      {
        question: "What is Node.js used for?",
        answer:
          "Node.js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.",
      },
      {
        question: "What is a web framework?",
        answer:
          "Web frameworks like Angular and React are libraries that help organize and generate the front-end code that runs in a web browser. They reduce development time, reusing code for common operations. Some web frameworks are 'full stack', meaning they also generate the back-end code that runs on a web server.",
      },
      {
        question: "Is Node.js a framework?",
        answer:
          "No, it's an environment, and back-end frameworks run within it. Popular ones include Express.js (or simply Express) for HTTP servers and Socket.IO for WebSocket servers.",
      },
      {
        question: "Is Node.js a programming language?",
        answer:
          "No, the '.js; means that the programming language you use with Node.js is JavaScript (or anything that can transpile to it, like TypeScript, Haxe, or CoffeeScript.)",
      },
      {
        question: "Why is Node.js popular?",
        answer:
          "Aside from being effective at what it does, Node.js is popular because it has a huge, active, open-source, JavaScript-based ecosystem. Also, it doesn't tend to break compatibility between versions in major ways.",
      },
      {
        question:
          "What is the difference between Node.js and Angular/AngularJS?",
        answer:
          "Node.js executes JavaScript code in its environment on the server, whereas Angular is a JavaScript framework that gets executed on the client (i.e. within a web browser.)",
      },
    ],
  },
  {
    title: "Hire a Php Laravel developer",
    subTitle:
      "Laravel is a free and open-source PHP framework that provides a set of tools and resources to build modern PHP applications",
    bannerImage: UseRandomImage("code"),
    catagory: "laravel",
    _route: "/technology/laravel-developer",

    whyThis: [
      {
        img: "/assets/technology/interface.svg",
        title: "Built-In Authentication and Authorization",
        subTitle:
          "Laravel provides an out-of-the-box configuration for the Authentication and Authorization system. That is, in just a few artisan commands your application will be equipped with secure Authentication and Authorization.",
      },
      {
        img: "/assets/technology/idea.svg",
        title: "Packaging System",
        subTitle:
          "A packaging system deals with the multiple support software or libraries that help the web application to automate the process. Laravel uses a composer as a dependency manager, which manages all the information needed to manage packages. Packages are a great way to accelerate development is to provide the functionality we need out of the box. Image, Laravel Debug bar and Laravel IDE helper are some of the best Laravel packages.",
      },
      {
        img: "/assets/technology/multitasking.svg",
        title: "Multiple File System",
        subTitle:
          "Laravel also has a built-in support for the cloud storage system such as Amazon S3 and Rack space Cloud Storage and of course for local storage. It's amazingly simple to switch between these storage options as the API remains the same for each system. One can use all three systems in one application to serve files from multiple locations like in a distributed environment.",
      },
      {
        img: "/assets/technology/ok.svg",
        title: "Artisan Console",
        subTitle:
          "Laravel has its own command line interface called as Artisan. Common uses of Artisan include publishing package assets,technology/ok.svg managing database migrations, seeding and generating boilerplate code for new controllers, models, and migrations. This feature frees the developer from creating proper code skeletons. One can extend the functionality and capabilities of Artisan by implementing new custom commands.",
      },
      {
        img: "/assets/technology/project.svg",
        title: "Templating engine",
        subTitle:
          "Laravel comes with the inbuilt template engine known as Blade Template Engine. Blade templating engine combines one or more templates with a data model to produce resulting views, doing that by transpiring the templates into cached PHP code for improved performance. Blade also provides a set of its own control structures such as conditional statements and loops, which are internally mapped to their PHP counterparts.",
      },
    ],
    services: [
      {
        title: "Quicker Web Application",
        description:
          "Because it is easy to integrate with the tools, Laravel promises quicker web projects. This means it supports all of the main backend caches, allowing Laravel to deliver a quicker application.",
      },
      {
        title: "Simplified Construction",
        description:
          "The authentication of web apps is a straightforward procedure. Laravel also guarantees a simple and rapid authorization procedure. There is also complete control over the level of access given to users. Laravel PHP is a popular choice among developers because of all of these advantages.",
      },
      {
        title: "Testing Work Made Easier",
        description:
          "The Laravel framework has full testing support. As a consequence, the program will be able to promote users’ behavior quickly and easily. Finally, there’s the convenience of delivering requests through apps or controlling various types of outputs using applications.",
      },
      {
        title: "Modularity",
        description:
          "Laravel comes with 20 built-in libraries and modules to help you improve your application. Every module has a Composer dependency management built in, which makes updating a breeze.",
      },
      {
        title: "Configuration Management:",
        description:
          "A Laravel-based web application will function in a variety of settings, requiring continuous configuration changes. Laravel has a standardized approach to handling settings.",
      },
    ],
    frequently: [
      {
        question: "Job Salary of Laravel Developer?",
        answer:
          " The average Job Salary of a Laravel Job Developer is $80K Per Year almost all over the world",
      },
      {
        question: "Why is Laravel Used?",
        answer:
          "Mainly build custom websites or applications using PHP, alongside other languages. Of course, writing the code from scratch in custom projects could take ages, so a framework like Laravel is used to save time. ",
      },
      {
        question: "What does a Laravel developer do?",
        answer:
          "Using the Laravel framework, Laravel developers design and build tools, services, and applications for the web and websites. They create modern applications and use innovative workarounds for issues in collaboration with their team of developers.",
      },
      {
        question: "What is a Laravel developer responsible for?",
        answer:
          "Designing and building well-functioning web applications using development tools and high-level programming languages,Writing modular codes that are secular,Maintaining and designing databases",
      },
      {
        question: "Which skills are required to be a Laravel developer?",
        answer:
          "With the responsibilities of Laravel developers in mind, it’s important to search for someone with the right skills to ensure they can complete these tasks. As well as some essential technical skills, you must also find out whether your candidates have the right soft skills.",
      },
    ],
  },
  {
    title: "Hire a React-Native developer to buid Android & Ios",
    subTitle:
      "React Native is a mobile app development framework that enables the development of multi-platform Android and iOS apps using native UI elements.s",
    bannerImage: UseRandomImage("mobile"),
    catagory: "react-native",
    _route: "/technology/react-native-developer",

    whyThis: [
      {
        img: "/assets/technology/ok.svg",
        title: "Timesaving",
        subTitle:
          "The primary advantage of this system is that it is timesaving. Initially, it spares the developers from recompiling with each change, since the application reloads right away amid the improvement stage. An Android designer can comprehend the torment.",
      },
      {
        img: "/assets/technology/elements.svg",
        title: "Easier",
        subTitle:
          "The framework empowers the making of a solitary code base that can be blended for iOS and Android. It enables the engineer to invest less energy in coding.",
      },
      {
        img: "/assets/technology/interface.svg",
        title: "User Experience",
        subTitle:
          "A mobile application, imagined with this framework guarantees high caliber, phenomenal execution, and streamlined user experience.",
      },
      {
        img: "/assets/technology/working.svg",
        title: "One ecosystem",
        subTitle:
          "Besides that, an all-around prepared JavaScript engineer can develop a versatile application utilizing this framework without diving into the ecosystem and language specifics of each OS.",
      },
    ],
    services: [
      {
        title: "Cross-Platform",
        description:
          "Initially invented for iOS development, the REACT Native Framework sees the popularity and success and hence Facebook, later on, decided to provide support for the Android platform as well.",
      },
      {
        title: " Class Performance",
        description:
          "At the initial stages, ‘hybrid’ or ‘mobile web’ apps were popular for their uncommonness mainly. However, when it comes to performance, the complicated the apps, the more lags it experienced. Hence, REACT Native came into the picture to break the ice! ",
      },
      {
        title: "Its Existence is Uncertain",
        description:
          "Since the social media giant Facebook has developed this framework, its existence remained uncertain as Facebook has all the rights to kill off the project anytime. Though with the current popularity of the technology, it is unlikely to happen.",
      },
      {
        title: "Doesn't Need a Compiler",
        description:
          "React Native has a hot reload feature that lets you see your results after every change you make in your code, unlike a native app where you have to compile your code every time you make your changes.",
      },
    ],
    frequently: [
      {
        question: "What is React Native?",
        answer:
          "It is a framework for creating native mobile apps with JavaScript. A key feature is that it lets you build applications for different platforms with the same codebase. What’s more, is that React Native is open source, meaning you can enjoy support from other developers and the wider community.",
      },
      {
        question: "Why is React Native so populer?",
        answer:
          "It’s simple to use and allows you to share it across different platforms, making it easier to build applications with the same codebase. That saves you time, and money, as it removes much of the legwork in development.",
      },
      {
        question: "Will I need a specialized team for every platform?",
        answer:
          "Among the essential advantages of React Native is cross-compatibility. That means you will only need a single dedicated team. Whether you begin on iOS, or Android, or both, a React Native team will help deliver in record time.",
      },
    ],
  },
  {
    title: "Hire a Flutter developer",
    subTitle:
      "Flutter is Google’s open-source technology for creating mobile, desktop, and web apps with a single codebase.",
    bannerImage: UseRandomImage("mobile"),
    catagory: "flutter",
    _route: "/technology/flutter-developer",

    whyThis: [
      {
        img: "/assets/technology/elements.svg",
        title: "No need for XML files",
        subTitle:
          "In Android development, the work is separated into layout and code. The layout should be written in XML as Views that are then referenced in the Java code. Dart takes care of that by keeping the layout and code in one place. Since everything in Flutter is a widget, the layout is also created in Dart.",
      },
      {
        img: "/assets/technology/working.svg",
        title: "No need for intermediate bridges",
        subTitle:
          "Dart compiles into native code directly  — unlike React Native which uses a JavaScript bridge to talk to native widgets. The bridge complicates debugging and is very expensive in terms of performance. Dart doesn’t need mediators which makes Flutter faster and more efficient than its competitors.",
      },
      {
        img: "/assets/technology/interface.svg",
        title: "High performance",
        subTitle:
          "Many factors go into assessing an app’s performance: central processing unit (CPU) usage, number of requests per second, average response time, number of frames per second, and more. The Flutter team promises a constant 60fps (or 120 fps performance on devices capable of 120Hz updates), which is the rate at which modern screens display a smooth picture.",
      },
      {
        img: "/assets/technology/convart.svg",
        title: "Portability",
        subTitle:
          "With the aforementioned release of Flutter 3, the SDK completed its transformation from mobile-focused to portable and platform-agnostic. Due to Dart’s portability and compilation capabilities, the same codebase can be deployed across the web and five main operating systems: iOS, Android, Linux, macOS, and Windows. Moreover, Google is working on expanding Flutter’s embedding potential to cover cars, TVs, smart home appliances, and so on.",
      },
    ],
    services: [
      {
        title: "Increased productivity",
        description:
          "Using the same codebase for iOS and Android saves both time and resources. Flutter’s native widgets also minimize time spent on testing by ensuring there is little to no compatibility issues with different OS versions.",
      },
      {
        title: "Great performance",
        description:
          " Users report that it is difficult to notice the difference between a Flutter app and a native mobile app.",
      },
      {
        title: "Great documentation & community",
        description:
          "Flutter has many great resources to answer your questions, thanks to its ample documentation with easy-to-follow use cases. Flutter users also benefit from community hubs like Flutter Community and Flutter Awesome for exchanging ideas.  ",
      },
      {
        title: "Maintenance",
        description:
          "To keep clients satisfied, every app should have regular updates to maintain full compatibility with new versions of platforms operating systems and fix any appearing bugs (there are always some). Before starting the development, it is recommended to put aside 15-20% of the app’s initial budget for maintenance.",
      },
      {
        title: "One codebase for all platforms",
        description:
          "Gone are the days of having to write a code for Android and another codebase for iOS devices. Flutter’s code reusability allows you to write just one codebase and use it on not only for mobile Android and iOS but even for web, desktop and more. This cuts development time significantly, removes cost and enables you launch your app that much faster.",
      },
    ],
    frequently: [
      {
        question: "What is Flutter used for?",
        answer:
          "Flutter is one of the best solutions to develop apps for Android and iOS, without having to write in a different codebase for each platform",
      },
      {
        question: "What programming language is Flutter based on?",
        answer:
          "The Flutter SDK is based on the Dart programming language, also developed by Google. It's intent is to supplant classic JavaScript. On a server, Dart programs can be run directly, while in the browser they are converted to JavaScript using the Dart2js transcompiler.",
      },
      {
        question: "Should I use Xamarin?",
        answer:
          "Xamarin is a cross-platform mobile development framework that enables developers to create native Android and iOS apps from a single codebase. Xamarin works with the existing code and allows developers to reuse their existing C# skills and code to build high-quality native apps.",
      },
    ],
  },
  {
    title: "Hire a Java developer",
    subTitle:
      "Java is an object-oriented programming language that produces software for multiple platforms.",
    bannerImage: UseRandomImage("mobile"),
    catagory: "java",
    _route: "/technology/java-developer",

    whyThis: [
      {
        img: "/assets/technology/elements.svg",
        title: "Applications",
        subTitle:
          "Most Android applications use Java API or are written in Java, so much so that Java is often regarded as the official programming language for mobile app development.",
      },
      {
        img: "/assets/technology/convart.svg",
        title: "Desktop GUI Applications",
        subTitle:
          "Many desktop applications are developed in Java. Swing, Abstract Windowing Toolkit (AWT) and JavaFX are the main tools used for easy GUI development.",
      },
      {
        img: "/assets/technology/interface.svg",
        title: "Web-Based Applications",
        subTitle:
          "Java is often employed to develop a broad range of interactive websites and web-based apps found in the insurance, social security, education and health sectors.",
      },
      {
        img: "/assets/technology/ok.svg",
        title: "Science and Research",
        subTitle:
          " Java is the scientific community’s favored language for a broad range of mathematical calculations and other scientific operations. It can deal with huge datasets and big data technologies since it’s used for MATLAB and the Hadoop MapReduce framework.",
      },
      {
        img: "/assets/technology/multitasking.svg",
        title: "Java and the Art of Driving Digital Transformation",
        subTitle:
          "Get insights on how to leverage Java to support your modernization and transformation efforts. Learn how to get the most out of open source, cloud native, and support service capabilities in this Omdia technical brief.",
      },
    ],
    services: [
      {
        title: "Long-Term Success and Security with Java",
        description:
          "Java continues to be the #1 choice for developers according to a recent report from VDC Research. Read the study to find out how Java compares to 22 other languages across top tech trends around security, data management, cloud, analytics, blockchain, and microservices.",
      },
      {
        title: "Two-Stage Execution",
        description:
          "The Java language has two stages in its execution process. First, it is compiled and then interpreted into a format usable by its target operating system.",
      },
      {
        title: "Distributed",
        description:
          "Java is a language built with distributed operation in mind. It can connect devices over the internet and prompt them for specific program functions. This means that many devices — such as computers — can run the same program and tap into each other for resources and information.",
      },
      {
        title: "Multithreaded",
        description:
          "Java is a multithreaded language with its own set of synchronization primitive objects. These objects make using the multiple threads in unison more manageable, resulting in simpler use and better performance.",
      },
      {
        title: "Versatility",
        description:
          "Java has long been the de-facto programming language for creating Web apps, Android apps, and software development tools such as Eclipse, IntelliJ IDEA, and NetBeans IDE.",
      },
      {
        title: "IoT applications",
        description:
          "IoT applications are everywhere—smart TVs, cars, heavy machinery, work facilities, and beyond—and Java is used to program many of them. Java is a popular choice for IoT developers because of how easily its code can be transferred between platforms.",
      },
    ],
    frequently: [
      {
        question: "Why is Java so popular?",
        answer:
          "The answer lies primarily with the exhaustive testing, updating and consistency of delivery that Java has historically provided. Java has been tested, refined, extended, and proven by a dedicated community of Java developers, architects and enthusiasts. Despite origins dating back almost two decades, Java has consistently evolved over the years.",
      },
      {
        question: "When was Java created?",
        answer:
          "Java was invented by James Gosling in 1995 while he was working at Sun Microsystems. Though it quickly gained popularity after its release, Java didn't start out as the powerhouse programming language it is today.",
      },
      {
        question: "What is the Java programming language used for?",
        answer:
          "Java is an extremely transferable programming language used across platforms and different types of devices, from smartphones to smart TVs. It's used for creating mobile and web apps, enterprise software, Internet of Things (IoT) devices, gaming, big data, distributed, and cloud-based applications among other types.",
      },
      {
        question: "What does Java do?",
        answer:
          "Java is an extremely versatile programming language. It can be used to program software and applications for many different operating systems and devices, including IoT devices, mobile phones, and computers.",
      },
      {
        question: "How does Java work?",
        answer:
          "Java code is processed through a compiler, which translates it into bytecode that an operating system reads. Bytecode from Java is processed by a Java virtual machine, which verifies the code and provides a runtime environment for Java apps.",
      },
    ],
  },
];
