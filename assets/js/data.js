let interests = [];
let skills = [];
let projects = [];
let experiences = [];
let educations = [];
let certificates = [];
let referencePersons = [];

let shortTarget =
  "Must pass the interview round and become an official employee of the company. Must complete the tasks well and become Junior in 1 year trying to stay with the Company to practice skills and full knowledge.";
let longTarget =
  "Participate in many mid and large projects to develop more leadership knowledge and skills to become a Senior in 4-5 years and a Leader for 7-8 years with the company.";
let introduce =
  "An active, sociable cheerful person with a great passion for programming, like to think to solve problems. Ability to self-search and learn quite high.As a gentle, honest, eager to learn new things, persistent.";

var person = {};

person.id = 1;
person.avatar = "assets/images/avtcv.jpeg";
person.name = "Do Quang Phuoc";
person.dob = "15/12/2001";
person.phone = "037 9494 687";
person.email = "doquangphuoc9999@gmail.com";
person.address = "Huong Toan- Huong Tra- Thua Thien Hue";
person.facebook = "https://www.facebook.com/profile.php?id=100026972359836";
person.instagram = "https://www.instagram.com/doquangphuoc1512/";
person.gitHub = "https://bit.ly/3bHIBbd";
person.qrCode = "assets/img/qrCode.PNG";
person.cvOffline = "https://bit.ly/3bIPAjT";
person.shortTarget = shortTarget;
person.longTarget = longTarget;
person.introduce = introduce;

let interest_football = new Interest(1, "Soccer", "assets/img/football.png", 1);
let interest_lol = new Interest(
  2,
  "League Of Legends",
  "assets/img/lol.png",
  1
);

let interest_read_book = new Interest(
  3,
  "Reading books",
  "assets/img/readBook.jpg",
  1
);
let interest_pes = new Interest(3, "PES", "assets/img/pes.png", 1);
interests.push(interest_football, interest_lol, interest_read_book);
person.interests = interests;

let discription_javaServlet =
  "Know how to use Java Servlet combined with JSP, JSTL and other technologies for blogging Web sites.";
let skill_javaServlet = new Skill(
  1,
  "Java Servlet/JSP/JSTL",
  40,
  discription_javaServlet,
  1
);

let discription_javaSpringBoot =
  "Know how to use Spring Freamwork with client technologies like ajax, jQuery to write sales management website";
let skill_javaSpringboot = new Skill(
  2,
  "Spring Freamwork",
  50,
  discription_javaSpringBoot,
  1
);

let discription_db =
  "Know how to use the database to store data and dump data on the website. Have basic knowledge of query statements.";
let skill_dataBase = new Skill(3, "MySQL", 40, discription_db, 1);

let discription_javaScript =
  "Know how to use JavaScript, CSS, HTML to create effects, get data, and process asynchronously.";
let skill_js_css_html = new Skill(
  4,
  "HTML/CSS/JS",
  50,
  discription_javaScript,
  1
);

let discription_git_teamwork =
  "Manage github source code, high ability to work in groups.";

let skill_git_teamwork = new Skill(
  5,
  "Git/Teamwork",
  70,
  discription_git_teamwork,
  1
);

let discription_thymeleaf = "Can build interfaces by Thymeleaf";

let skill_thymeleaf = new Skill(6, "Thymeleaf", 55, discription_thymeleaf, 1);

let discription_ajax_jquery = "Can build effects, CRUD using Ajax, Jquery";

let skill_ajax_jquery = new Skill(
  7,
  "Ajax/Jquery",
  45,
  discription_ajax_jquery,
  1
);

skills.push(
  skill_javaServlet,
  skill_javaSpringboot,
  skill_dataBase,
  skill_js_css_html,
  skill_git_teamwork,
  skill_thymeleaf,
  skill_ajax_jquery
);
person.skills = skills;

let knowleage_1 =
  "Build a website layout, There is a development of running images in new news. There is reponsive. Use Javascript to set up article search functionality (There is string standardization).";
let project_1 = new Project(
  1,
  "Sales management website, revenue, quantify a coffee shop",
  "15 days",
  "3 people",
  "JavaScript ES6",
  "Not used",
  "",
  "Spring Boot, Spring Security, Ajax, jQuery, Thymeleaf, JPA, Restful API",
  knowleage_1,
  "assets/img/portfolio/codeCoffee/image1.png",
  "assets/img/portfolio/codeCoffee/image2.png",
  "assets/img/portfolio/codeCoffee/image3.png",
  "assets/img/portfolio/codeCoffee/fullImage.png",
  "",
  "https://github.com/39domia/code-coffee-management-application.git",
  "",
  "",
  1
);

let knowleage_2 =
  "Validate information (front-end, back-end), database design analysis,CRUD 13 tables have relationship with each other, login to admin page, use summernote library to add and edit posts, paging with backend, decentralized with Security.";
let project_2 = new Project(
  2,
  "Sales information management website",
  "16 days",
  "1 people",
  "Java, Javascript ES6",
  "",
  "Spring MVC, HTML5/CSS3, Bootstrap 4, Thymeleaf, Template: Coll-Admin",
  "PostgreSQL",
  knowleage_2,
  "assets/img/portfolio/shopMe/image1.png",
  "assets/img/portfolio/shopMe/image2.png",
  "assets/img/portfolio/shopMe/image3.png",
  "assets/img/portfolio/shopMe/fullImage.png",
  "admin; Phuoc",
  "https://github.com/doquangphuoc9999/shop-me",
  "",
  "",
  1
);

let knowleage_3 =
  "Developing the technical layout of the project according to MVC model, database design analysis,Design the interface of a complete blog page, use Github to manage the source code while working, CRUD 4 tables with relationships, validate input information (front-end, back-end), login with decentralized Servlet Jstl";
let project_3 = new Project(
  3,
  "Blog website",
  "10 days",
  "1 people",
  "Java, Javascript ES6",
  "mot used",
  "Bootstrap 4, CSS3, HTML5, template Admin: Gentelella-master, template Login: Coll_Admin",
  "PostgreSQL",
  knowleage_3,
  "assets/img/portfolio/blog/image1.png",
  "assets/img/portfolio/blog/image2.png",
  "assets/img/portfolio/blog/image3.png",
  "assets/img/portfolio/blog/fullImage.png",
  "phuoc@gmail.com; 1234567",
  "https://github.com/doquangphuoc9999/case-module3.git",
  "",
  "",
  1
);
projects.push(project_3, project_2, project_1);
person.projects = projects;

let education_2 = new Education(
  2,
  "03/2019-12/2019",
  "Aptech Hue",
  "A part-time student of LTV International",
  1
);
let education_3 = new Education(
  3,
  "09/2020-04/2021",
  "Codegym Bootcamp Hue",
  "Graduated from Java C0920G2 class",
  1
);
educations.push(education_3, education_2);
person.educations = educations;

let experience3 = new Experience(
  3,
  "09/2020-04/2021",
  "Codegym Bootcamp Hue",
  "Student",
  "- Learn how to use HTML, CSS, and JavaScript to create basic website.<br>- Access Java language, database mySQL / PostgreSQL to build backend application with JSP / Servlet technology, Spring Framework (Spring MVC, Spring Boot, Spring Security).<br>- Improve skills of searching information, working in groups, managing Github source code.<br>- Know job management by Product Backlog, Scrum.<br>",
  1
);
// let experience2 = new Experience(
//   2,
//   "11/2018-04/2020",
//   "Tiệm Coffe Akay",
//   "Nhân viên phục vụ part-time",
//   "- Học được cách làm việc có tâm.<br>- Trau dồi được kỹ năng làm việc nhóm.<br>- Luyện tập thái độ làm việc chuyên nghiệp (Luôn vui vẻ, đúng quy tắc)",
//   1
// );
// add experience2 here
experiences.push(experience3);
person.experiences = experiences;

let certificate_1 = new Certificate(
  1,
  "Learn to learn",
  "09/2020",
  "Capable of self-study, self-questioning and problem solving",
  1
);
let certificate_2 = new Certificate(
  2,
  "Get everything done with Kanban",
  "11/2020",
  "Be able to plan and manage jobs with Kanban boards, limit current work to focus on completing one thing at a time, and set good short- and long-term goals.",
  1
);
let certificate_3 = new Certificate(
  3,
  "SCRUM Essence",
  "02/2021",
  "Create a Definition of Done for the current situation, Create and maintain Product Backlog, manage Sprint Backlog, track Sprint progress using burndown chart, track product progress using burndown chart.",
  1
);
certificates.push(certificate_3, certificate_2, certificate_1);
person.certificates = certificates;

let referencePerson_1 = new ReferencePerson(
  1,
  "Mr.Le Tuong Phuc",
  "assets/img/AnhPhuc.png",
  "Managing Director of CodeGym Hue Center",
  "Company CODEGYM VIETNAM JSC",
  "081-205-6246",
  "phuc.le@codegym.vn",
  1
);
let referencePerson_2 = new ReferencePerson(
  2,
  "Mr.Nguyen Huu Anh Khoa",
  "assets/img/AnhKhoa.png",
  "Training Director of CodeGym Hue",
  "Company CODEGYM VIETNAM JSC",
  "0935-216-417",
  "khoa.nguyen@codegym.vn",
  1
);
referencePersons.push(referencePerson_2, referencePerson_1);
person.referencePersons = referencePersons;
