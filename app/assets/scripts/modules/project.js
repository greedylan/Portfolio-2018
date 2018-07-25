// cache projects' resources (image, circe colors, video/png)
function Project(
  mainTitle,
  subTitle,
  field,
  previewImage,
  previewVideo,
  primaryColor,
  subColor,
  heroBackground,
  app,
  frontend,
  cta,
  bullets,
  details
){
  this.mainTitle = mainTitle;
  this.subTitle = subTitle;
  this.field = field;
  this.previewImage = previewImage;
  this.previewVideo = previewVideo;
  this.primaryColor = primaryColor;
  this.subColor = subColor;
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
  about    : 'about content #2',
  mission  : 'mission content #2',
  strategy : 'strategy contnet #2',
  team     : 'team content #2',
  role     : 'role contnet #2'
};
var bullets3 = {
  about    : 'about content #3',
  mission  : 'mission content #3',
  strategy : 'strategy contnet #3',
  team     : 'team content #3',
  role     : 'role contnet #3'
};
var bullets4 = {
  about    : 'The company that holds onto massive amount of personal data sets it ambition to target new homeowners, the group that has greater expenditure during transition, according to internal marketing research',
  mission  : 'A platform offers advertising partnership for corporations/local businesses. For consumers, to introduce new shopping channels that could possibly become returning customers',
  strategy : 'The project aims for clear, intuitive interface due to complex information and site structure. Utilize smart phone for redeeming offers on the go',
  team     : 'CEO, Vice President, Account Executives, Project Managers, Software Programmers',
  role     : 'Bridging multiple parties communications-wise, I produced wireframe, user flow, high/low fidelity UI mockups, interactive prototypes and eventually carried out approved designs throguh front-end codes'
};
var bullets5 = {
  about    : 'about content #5',
  mission  : 'mission content #5',
  strategy : 'strategy contnet #5',
  team     : 'team content #5',
  role     : 'role contnet #5'
};
var bullets6 = {
  about    : 'about content #6',
  mission  : 'mission content #6',
  strategy : 'strategy contnet #6',
  team     : 'team content #6',
  role     : 'role contnet #6'
};
var bullets7 = {
  about    : 'about content #7',
  mission  : 'mission content #7',
  strategy : 'strategy contnet #7',
  team     : 'team content #7',
  role     : 'role contnet #7'
};


var detail1 = {
  blockCount : 1,
};
var detail2 = {
  blockCount : 2,
};
var detail3 = {
  block1 : {
    style : "1-col",
    mainTitle : "presentation #3-1 main title ",
    subTitle : "presentation #3-1 sub title",
    imageUrl : "/images/detail-image--1@3x.png"
  },
  block2 : {
    style : "2-col",
    mainTitle : "presentation #3-2 main title ",
    subTitle : "presentation #3-2 sub title",
    imageUrlLeft : "/images/detail-splitImage--left@3x.png",
    imageUrlRight : "/images/detail-splitImage--right@3x.png"
  }
};
var detail4 = {
  // block1 : {
  //   style : "1-col",
  //   mainTitle : "Style Guide",
  //   subTitle : "",
  //   imageUrl : "/images/detail-image--1@3x.png"
  // },

  block1: {
    style: "1-col",
    mainTitle: "UX Structure",
    subTitle: "Before beautiful UI design was created, there were wireframes with basic compositions, proportions and elements.",
    imageURL: "/images/detail--04_1_1.png",
    imageURL_m: "",
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
  blockCount : 3,
};
var detail6 = {
  blockCount : 2,
};
var detail7 = {
  blockCount : 1,
};


var project1 = new Project(
  "main title - 1",
  "sub title - 1",
  ["UX/UI"],
  "images/previewImage-01.png",
  "videos/previewVideo-01.mp4",
  "#9AB999",
  "#C5DEC4",
  "images/heroBackground-01.jpg",
  "sketch",
  "HTML",
  { cta : false,
    type: "github",
    url: "https://www.msn.com",
    get text(){ return `see project on ${this.type}`;}
  },
  bullets1,
  detail1
);
var project2 = new Project(
  "main title - 2",
  "sub title - 2",
  ["UX/UI"],
  "images/previewImage-02.png",
  "videos/previewVideo-02.mp4",
  "#EC7F7A",
  "#FFB3AF",
  "images/heroBackground-02.jpg",
  "sketch, principle",
  "HTML, CSS/SASS",
  { cta : false,
    type: "github",
    url: "https://www.msn.com",
    get text(){ return `see project on ${this.type}`;}
  },
  bullets2,
  detail2
);
var project3 = new Project(
  "main title - 3",
  "sub title - 3",
  ["UX/UI"],
  "images/previewImage-03.png",
  "videos/previewVideo-03.mp4",
  "#E4475C",
  "#6C000E",
  "images/heroBackground-03.jpg",
  "principle, sketch, photoshop",
  "HTML, CSS/SASS, Github",
  { cta : true,
    type: "gogole",
    url: "http://www.google.com",
    get text(){ return `see project on ${this.type}`;}
  },
  bullets3,
  detail3
);
var project4 = new Project(
  "NHOO.com",
  "Web App Connects Adjacent Retail Stores And New Homeowners With Exclusive Offers",
  ["UX / UI", "Interaction Design", "Frontend Development"],
  "images/previewImage-04.png",
  "videos/previewVideo-04.mp4",
  "#234E77",
  "#53DEE9",
  "images/heroBackground-04.jpg",
  "sketch, principle, photoshop, illustrator, atom",
  "HTML, CSS/SASS, Bootstrap, Github",
  { cta : true,
    type: "github",
    url: "https://www.msn.com",
    get text(){ return `see project on ${this.type}`;}
  },
  bullets4,
  detail4
);
var project5 = new Project(
  "main title - 5",
  "sub title - 5",
  ["UX/UI"],
  "images/previewImage-05.png",
  "videos/previewVideo-05.mp4",
  "#355D7D",
  "#6DA2CC",
  "images/heroBackground-05.jpg",
  "",
  "",
  { cta : true,
    type: "github",
    url: "https://www.msn.com",
    get text(){ return `see project on ${this.type}`;}
  },
  bullets5,
  detail5
);
var project6 = new Project(
  "main title - 6",
  "sub title - 6",
  ["UX/UI"],
  "images/previewImage-06.png",
  "videos/previewVideo-06.mp4",
  "#283338",
  "#638B9E",
  "images/heroBackground-06.jpg",
  "",
  "",
  { cta : false,
    type: "github",
    url: "https://www.msn.com",
    get text(){ return `see project on ${this.type}`;}
  },
  bullets6,
  detail6
);
var project7 = new Project(
  "main title - 7",
  "sub title - 7",
  ["UX/UI"],
  "images/previewImage-07.png",
  "videos/previewVideo-07.mp4",
  "#CDE377",
  "#AAB67A",
  "images/heroBackground-07.jpg",
  "",
  "",
  { cta : false,
    type: "github",
    url: "https://www.msn.com",
    get text(){ return `see project on ${this.type}`;}
  },
  bullets7,
  detail7
);


export var projects = [project1, project2, project3, project4, project5, project6, project7];
