// cache projects' resources (image, circe colors, video/png)
function Project(
  date,
  mainTitle,
  subTitle,
  field,
  previewImage,
  previewImageMobile,
  previewVideo,
  primaryColor,
  subColor,
  thirdColor,
  heroBackground,
  app,
  frontend,
  cta,
  bullets,
  details
){
  this.date = date;
  this.mainTitle = mainTitle;
  this.subTitle = subTitle;
  this.field = field;
  this.previewImage = previewImage;
  this.previewImageMobile = previewImageMobile;
  this.previewVideo = previewVideo;
  this.primaryColor = primaryColor;
  this.subColor = subColor;
  this.thirdColor = thirdColor;
  this.heroBackground = heroBackground;
  this.app = app;
  this.frontend = frontend;
  this.cta = cta;
  this.bullets = bullets;
  this.details = details;
}


// objext that store apps' icon image url
export var apps = {
  sketch : "images/app-sketch.png",
  principle : "images/app-principle.png",
  photoshop : "images/app-photoshop.png",
  illustrator : "images/app-illustrator.png",
  afterEffects : "images/app-afterEffects.png",
  atom : "images/app-atom.png",
};


var bullets1 = {
  about    : 'about content #1',
  mission  : 'mission content #1',
  strategy : 'strategy contnet #1',
  team     : 'team content #1',
  role     : 'role contnet #1'
};
var bullets2 = {
  about    : 'DBMG works closely with BJ Restaurants on consumer-oriented promotion emails. Franchisee-oriented emails are also produced for promoting mailer ordering, trade shows and sweepstakes',
  team     : 'Vice President, Account Executives, Software Programmers, DMD, Affiliate Sales Representitives',
  role     : 'Designed and developed email content and layout'
};
var bullets3 = {
  about    : '15 plus years building selling channels on eBay and Amazon, one of the company stakeholders decided to invest in self-hosting eCommerce site to increase sales number',
  mission  : 'to establish strong brand recognition and build a pleasant experience when finding the right auto parts',
  strategy : 'besides in-site search engine, we prompt customers to input a vehicles year/make/model then present collections reside in clear categories and sub-categories',
  team     : 'Company Stakeholder, General Manager, team members',
  role     : 'web designer front-end developer, admin task trainer, project coordinator'
};
var bullets4 = {
  about    : 'The company that holds onto massive amount of personal data sets it ambition to target new homeowners, the group that has greater expenditure during transition, according to internal marketing research',
  mission  : 'A platform offers advertising partnership for corporations/local businesses. For consumers, to introduce new shopping channels that could possibly become returning customers',
  strategy : 'The project aims for clear, intuitive interface due to complex information and site structure. Utilize smart phone for redeeming offers on the go',
  team     : 'CEO, Vice President, Account Executives, Project Managers, Software Programmers',
  role     : 'Bridging multiple parties communications-wise, I produced wireframe, user flow, high/low fidelity UI mockups, interactive prototypes and eventually carried out approved designs throguh front-end codes'
};
var bullets5 = {
  about    : 'DBMG’s mailers are designed to track the redemption rates based on different deals, radius distance and many other aspects. The job report helps franchisees promote business effectively according to the best performing factor, backed by data-driven analysis',
  mission  : 'consolidate data, design and develop easy-comprehensiable information structure',
  strategy : 'interactive design to show information as necessary, color-coded cards, clear visual hierarchy, simplified table structure',
  team     : 'Vice President, Account Executives, Project Managers, Software Programmers',
  role     : 'UX/UI Designer, Front-End Developer'
};
var bullets6 = {
  about    : 'In Japanese, RISU (栗鼠 / りす) means chipmunk, a mascot selected to represent myself as a designer. Particular interested in interaction and motion design, it led me coding front end. Soon I realized I am so small in this outer space, a profound field filled with knowledge and skillful individuals. However, I greedily and ambitiously stuff all the resources inside my cheeks and hope to internalize them and eventually excel a seamless process: design ideation to coding execution',
  mission  : 'to showcase selected portfolio pieces and top it off with intricate interactions and parallax effects, all in one-page scrolling site',
  role     : 'web designer, front end developer, user experience quality assurance :)'
};
var bullets7 = {
  about    : 'BJ’s Restaurant has been a long time client for DBMG’s data-driven email marketing service. As the project progresses, DBMG developed JobTracker, a dashboard based platform to showcase data associated with the email jobs. One of the important analytics goes to customers’ clicking counts of daily sent emails',
  goal     : 'Design a heat map for project managers to easily interpret hard-cold data and analyze what sections or buttons customers respond to the most. This way, project managers can come up with strategic marketing email content on the fly',
  strategy : 'Using dashboard’s existing color theme and generate stacked circles in low opacity to simulate the clicking action. Setting up parameter to generate more circles in vibrant color on top of neutral color when a section has more clicks',
  team     : 'Programming Head, Vice President, Project Managers',
  role     : 'I designed visuals in photoshop and translated it as closely in HTML5 <canvas>. Worked side by side with programming chief for dashboard integration'
};


var detail1 = {

};
var detail2 = {
  block1: {
    style: "1-col--small",
    mainTitle: "BJ Restaruant - Birthday Promotion",
    subTitle: "",
    imageURL: "/images/detail--02_1_1.png",
  },
  block2: {
    style: "1-col--small",
    mainTitle: "McDonald - Franchisee",
    subTitle: "Mailer Ordering Promotion",
    imageURL: "/images/detail--02_2_1.png",
  },

  block3 : {
    style : "2-col--small",
    mainTitle : "Christian Brothers - Franchisee",
    subTitle : "Mailer New Design Promotion",
    imageURLLeft : "/images/detail--02_3_1.png",
    imageURLRight : "/images/detail--02_3_2.png"
  },
};
var detail3 = {
  block1 : {
    style : "1-col",
    mainTitle : "presentation #3-1 main title ",
    subTitle : "presentation #3-1 sub title",
    imageURL : "/images/detail--03_1_1.png"
  },
  block2 : {
    style : "1-col",
    mainTitle : "presentation #3-2 main title ",
    subTitle : "presentation #3-2 sub title",
    imageURL : "/images/detail--03_2_1.png"
  }
};
var detail4 = {

  block1: {
    style: "1-col",
    mainTitle: "UX Structure",
    subTitle: "Before beautiful UI design was created, there were wireframes with basic compositions, proportions and elements.",
    imageURL: "/images/detail--04_1_1.png",
  },

  block2: {
    style : "1-col",
    mainTitle : "User Flow - Redeem Offer",
    subTitle : "After defining the basics, we immediately found imperative needs to define a smooth transition when redeeming offers. It is ideal to have users to trust and love NHOO at the first sight then further sign up an account. But we think people are most likely to be attracted by the offer itself; therefor we need an alternative to facilitate users to go through as less steps as possible to complete the deal. Here is what we come up with: according to how a user signs up (phone number/social login) the account initially, we assign either SMS text or Facebook's messenger to send directions and coupon codes after clicking the redeem button.",
    imageURL : "/images/detail--04_2_1.png"
  },

  block3 : {
    style : "2-col",
    mainTitle : "Style Guide",
    subTitle : "At this step we establish the cosmetics including: color theme, typography, category icons, forms, offer cards…etc.",
    imageURLLeft : "/images/detail--04_3_1.png",
    imageURLRight : "/images/detail--04_3_2.png"
  },

  block4 : {
    style : "1-col",
    mainTitle : "Interface Design",
    subTitle : "Carefully crafted responsive layouts with 12-columns grid, making sure every piece of information displays properly in all devices",
    imageURL : "/images/detail--04_4_1.png",
  },

  block5: {
    style: "video",
    mainTitle: "App In Action",
    subTitle: "",
    videoURL: "/videos/detail-video--04_5_1.mp4"
  },

  block6: {
    style: "video",
    mainTitle: "Redeem offer",
    subTitle: "",
    videoURL: "/videos/detail-video--04_6_1.mp4"
  },

  block7: {
    style: "video",
    mainTitle: "Interactive Design - Signup Form",
    subTitle: "",
    videoURL: "/videos/detail-video--04_7_1.mp4"
  },

  block8: {
    style: "video",
    mainTitle: "Interactive Design - Catergories & Offers",
    subTitle: "Triggered by hovering, clicking and scrolling, the instant feedback of highlighted categories shows the relation of offers in focus",
    videoURL: "/videos/detail-video--04_8_1.mp4"
  },


};
var detail5 = {
  block1:{
    style: "1-col",
    mainTitle: "Dashboard Interface Design",
    subTitle: "",
    imageURL: "/images/detail--05_1_1.png",
  },

  block2: {
    style: "video",
    mainTitle: "Dashboard In Action",
    subTitle: "",
    videoURL: "/videos/detail-video--05_2_1.mp4"
  },

  block3: {
    style: "video",
    mainTitle: "Data Table In Action",
    subTitle: "",
    videoURL: "/videos/detail-video--05_3_1.mp4"
  },
};
var detail6 = {
  block1: {
    style: "1-col",
    mainTitle: "Landing Page Design",
    subTitle: "",
    imageURL: "/images/detail--06_1_1.png"
  }
};
var detail7 = {
  block1 : {
    style : "2-col",
    mainTitle : "Exploring the design possibilities",
    subTitle : "Composed with various visual elements and effects, it is a neccessary step to find out what are the options that commuinicate 'heatmap' the best. Besides hierracy/scale of visual impact, a smooth transition of gradient colors stands as a crucial part conveying the idea",
    imageURLLeft : "/images/detail--07_1_1.png",
    imageURLRight : "/images/detail--07_1_2.png"
  },

  block2 : {
    style : "2-col",
    mainTitle     : "SVG duotone filter",
    subTitle      : 'SVG filter seems to be the best option when it comes to dialing down the color palette of email design. This front end approach also goes seamlessly with finding an button’ s relative location on a HTML email. This not only gives the optimal presentation of the heat map and avoid repetitive tasks such as generating duotone images using gradient map in photoshop. By using SVG’s <feColorMatrix> tag and supplying the corresponding values, this super light weighted filter can be called repeatedly on all pages inside JobTracker',
    imageURLLeft  : "/images/detail--07_2_1.png",
    imageURLRight : "/images/detail--07_2_2.png"
  },

  block3: {
    style: "video",
    mainTitle: "More clicks, bigger bubbles, more red!",
    subTitle: "With a bit of Javascript, we can dynamically scale the color ratio, radius increments and spread according to the given counts of the circles",
    videoURL: "/videos/detail-video--07_3_1.mp4"
  },

  block4: {
    style: "1-col",
    mainTitle: "Dashboard integration",
    subTitle: "",
    imageURL: "/images/detail--07_4_1.png",
  },

  block5: {
    style: "video",
    mainTitle: "Showcase necessary info via interaction",
    subTitle: "Hover over to temporarily reveal the email buttons underneath the bubbles",
    videoURL: "/videos/detail-video--07_5_1.mp4"
  }

};



var project1 = new Project(
  "",
  "hello! my name is dylan",
  "",
  ["I am a <b>UX/UI Designer</b> with special interests in <b>Interaction Design</b>. My curiosity equips me 3 years experience in <b>Front-End Development</b>. I am currently enhancing Javascript skills, getting a solid understanding of what's under the hood and will soon move onto React.js. If you think I got what it takes for your project, please shoot me a message via: <b>dylansiao@gmail.com</b>"],
  "images/previewImage-01.png",
  "images/previewImage-01--m.png",
  "videos/previewVideo-01.mp4",
  "#9AB999",
  "#C5DEC4",
  "#35324E",
  "",
  "",
  "",
  { cta : false,
    type: "github",
    url: "https://www.msn.com",
    get text(){ return `see project on ${this.type}`;}
  },
  bullets1,
  detail1
);
var project2 = new Project(
  "September, 2017 - May, 2018",
  "email marketing",
  "call-to-action oriented emails targeted at franchisees and consumers",
  ["Email Design & Developement", ],
  "images/previewImage-02.png",
  "images/previewImage-02--m.png",
  "videos/previewVideo-02.mp4",
  "#60395A",
  "#292742",
  "#60395A",
  "images/heroBackground-02.png",
  "photoshop, atom",
  "HTML, responsive&#32table, Email&#32on&#32Acid",
  { cta : false,
    type: "github",
    url: "https://www.msn.com",
    get text(){ return `see project on ${this.type}`;}
  },
  bullets2,
  detail2
);
var project3 = new Project(
  "October, 2016",
  "one big outlet",
  "shopping auto parts effortlessly via optimized product categorization and filter system",
  ["UX/UI", "eCommerce", "Magento-1.9.2"],
  "images/previewImage-03.png",
  "images/previewImage-03--m.png",
  "videos/previewVideo-03.mp4",
  "#F1656A",
  "#282828",
  "#1f1f1f",
  "images/heroBackground-03.png",
  "photoshop, illustrator, atom",
  "HTML, CSS3, Magento-1.9.2",
  { cta : false,
    // type: "gogole",
    // url: "http://www.google.com",
    // get text(){ return `see project on ${this.type}`;}
  },
  bullets3,
  detail3
);
var project4 = new Project(
  "May, 2018",
  "nhoo.com",
  "Web App Connects Adjacent Retail Stores And New Homeowners With Exclusive Offers",
  ["UX / UI", "Interaction Design", "Mobile Design", "Frontend Development"],
  "images/previewImage-04.png",
  "images/previewImage-04--m.png",
  "videos/previewVideo-04.mp4",
  "#234E77",
  "#53DEE9",
  "#234E77",
  "images/heroBackground-04.png",
  "sketch, principle, photoshop, illustrator, atom",
  "HTML, CSS/SASS, Bootstrap, Github",
  { cta : true,
    type: "github",
    url: "https://github.com/greedylan/nhoo",
    get text(){ return `see project on ${this.type}`;}
  },
  bullets4,
  detail4
);
var project5 = new Project(
  "April, 2018",
  "job tracker",
  "Dashboard design makes job's performance evaluation easy, even with great number of data or items",
  ["UI", "Interaction Design", "Dashboard", "Front-End Development"],
  "images/previewImage-05.png",
  "images/previewImage-05--m.png",
  "videos/previewVideo-05.mp4",
  "#FFF7A3",
  "#247485",
  "#2b4452",
  "images/heroBackground-05.png",
  "sketch, principle, illustrator, afterEffects, atom",
  "HTML, CSS/SASS, Javascript/jQuery",
  { cta : true,
    type: "link",
    url: "http://dylanhsiao.com/demo/jobTracker/table.html",
    get text(){ return `see table in action`;}
  },
  bullets5,
  detail5
);
var project6 = new Project(
  "August, 2017",
  "risu ( 栗鼠 / りす )",
  "Design portfolio - mid 2017",
  ["UX/UI", "Web Design", "Parallax Effect"],
  "images/previewImage-06.png",
  "images/previewImage-06--m.png",
  "videos/previewVideo-06.mp4",
  "#316871",
  "#282828",
  "#316871",
  "images/heroBackground-06.png",
  "photoshop, illustrator, atom",
  "HTML, CSS/SASS, Javascript/jQuery",
  { cta : true,
    type: "link",
    url: "http://dylanhsiao.com/demo/risu/index.html",
    get text(){ return `see project in action`;}
  },
  bullets6,
  detail6
);
var project7 = new Project(
  "March, 2018",
  "Heat Map",
  "Turning complex data into intuitive, easy comprehensible visuals for analytic marketing decisions",
  ["Interaction Design", "Data Visualization"],
  "images/previewImage-07.png",
  "images/previewImage-07--m.png",
  "videos/previewVideo-07.mp4",
  "#E9E9E9",
  "#E96983",
  "#35324E",
  "images/heroBackground-07.png",
  "principle, photoshop, atom",
  "HTML5 &#60;canvas&#62;, CSS3, Javascript",
  { cta : true,
    type: "codepen",
    url: "https://codepen.io/dylanhsiao/pen/gxNMOd/",
    get text(){ return `see prototype on ${this.type}`;}
  },
  bullets7,
  detail7
);

export var projects = [project1, project2, project3, project4, project5, project6, project7];
