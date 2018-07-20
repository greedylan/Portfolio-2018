// cache projects' resources (image, circe colors, video/png)
function Project(
  mainTitle,
  subTitle,
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
  about    : 'I love you I love you I love you I love you I love you I love you I love you ',
  mission  : 'do you really do you really do you really do you really do you really',
  strategy : 'yes I do yes I do yes I doyes I doyes I doyes I doyes I do',
  team     : 'ok then ok thenok thenok thenok thenok thenok thenok then',
  role     : 'come give daddy a hug come give daddy a hugcome give daddy a hugcome give daddy a hug'
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
  block1 : {
    style : "1-col",
    mainTitle : "presentation #4-1 main title ",
    subTitle : "presentation #4-1 sub title",
    imageUrl : "/images/detail-image--1@3x.png"
  },
  block2 : {
    style : "2-col",
    mainTitle : "presentation #4-2 main title ",
    subTitle : "presentation #4-2 sub title",
    imageUrlLeft : "/images/detail-splitImage--left@3x.png",
    imageUrlRight : "/images/detail-splitImage--right@3x.png"
  }
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
  "images/previewImage-1.png",
  "videos/previewVideo-01.mp4",
  "#9AB999",
  "#C5DEC4",
  "images/heroBackground-1.jpg",
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
  "images/previewImage-2.png",
  "videos/previewVideo-02.mp4",
  "#EC7F7A",
  "#FFB3AF",
  "images/heroBackground-2.jpg",
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
  "images/previewImage-3.png",
  "videos/previewVideo-03.mp4",
  "#E4475C",
  "#C45C6A",
  "images/heroBackground-3.jpg",
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
  "A freaking title that going be so awesome that you gonna go wow is this for real",
  "images/previewImage-4.png",
  "videos/previewVideo-04.mp4",
  "#234E77",
  "#53DEE9",
  "images/heroBackground-4.jpg",
  "sketch, principle, photoshop, illustrator, atom",
  "HTML, CSS/SASS, Github, Bootstrap",
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
  "images/previewImage-5.png",
  "videos/previewVideo-05.mp4",
  "#355D7D",
  "#6DA2CC",
  "images/heroBackground-5.jpg",
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
  "images/previewImage-6.png",
  "videos/previewVideo-06.mp4",
  "#283338",
  "#638B9E",
  "images/heroBackground-6.jpg",
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
  "images/previewImage-7.png",
  "videos/previewVideo-07.mp4",
  "#CDE377",
  "#AAB67A",
  "images/heroBackground-7.jpg",
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
