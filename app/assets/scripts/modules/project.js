// cache projects' resources (image, circe colors, video/png)
export default function Project(url, defaultColor, subColor){
  this.url = url;
  this.defaultColor = defaultColor;
  this.subColor = subColor;
}

export var project1 = new Project("images/preview--1.png", "#9AB999", "#C5DEC4");
export var project2 = new Project("images/preview--2.png", "#EC7F7A", "#FFB3AF");
export var project3 = new Project("images/preview--3.png", "#E4475C", "#C45C6A");
export var project4 = new Project("images/preview--4.png", "#00999E", "#35CFD4");
export var project5 = new Project("images/preview--5.png", "#355D7D", "6DA2CC");
export var project6 = new Project("images/preview--6.png", "#283338", "#638B9E");
export var project7 = new Project("images/preview--7.png", "#CDE377", "#AAB67A");
export var projects = [project1, project2, project3, project4, project5, project6, project7];
