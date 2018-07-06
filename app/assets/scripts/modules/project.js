// cache projects' resources (image, circe colors, video/png)
function Project(data, mainTitle, subTitle, previewImage, previewVideo, primaryColor, subColor, heroBackground){
  this.data = data;
  this.mainTitle = mainTitle;
  this.subTitle = subTitle;

  this.previewImage = previewImage;
  this.previewVideo = previewVideo;

  this.primaryColor = primaryColor;
  this.subColor = subColor;

  this.heroBackground = heroBackground;
}

var project1 = new Project(
  "1",
  "main title - 1",
  "sub title - 1",
  "images/previewImage-1.png",
  "video/previewVideo-1.mp4",
  "#9AB999",
  "#C5DEC4",
  "images/heroBackground-1.jpg"
);
var project2 = new Project(
  "2",
  "main title - 2",
  "sub title - 2",
  "images/previewImage-2.png",
  "video/previewVideo-2.mp4",
  "#EC7F7A",
  "#FFB3AF",
  "images/heroBackground-2.jpg"
);
var project3 = new Project(
  "3",
  "main title - 3",
  "sub title - 3",
  "images/previewImage-3.png",
  "video/previewVideo-3.mp4",
  "#E4475C",
  "#C45C6A",
  "images/heroBackground-3.jpg"
);
var project4 = new Project(
  "4",
  "main title - 4",
  "sub title - 4",
  "images/previewImage-4.png",
  "video/previewVideo-4.mp4",
  "#234E77",
  "#53DEE9",
  "images/heroBackground-4.jpg"
);
var project5 = new Project(
  "5",
  "main title - 5",
  "sub title - 5",
  "images/previewImage-5.png",
  "video/previewVideo-5.mp4",
  "#355D7D",
  "6DA2CC",
  "images/heroBackground-5.jpg"
);
var project6 = new Project(
  "6",
  "main title - 6",
  "sub title - 6",
  "images/previewImage-6.png",
  "video/previewVideo-6.mp4",
  "#283338",
  "#638B9E",
  "images/heroBackground-6.jpg"
);
var project7 = new Project(
  "7",
  "main title - 7",
  "sub title - 7",
  "images/previewImage-7.png",
  "video/previewVideo-7.mp4",
  "#CDE377",
  "#AAB67A",
  "images/heroBackground-7.jpg"
);

export var projects = [project1, project2, project3, project4, project5, project6, project7];
