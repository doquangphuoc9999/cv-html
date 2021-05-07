let interests = [];
let skills = [];
let projects = [];
let experiences = [];
let educations = [];
let certificates = [];
let referencePersons = [];

let shortTarget =
  "Phải vượt qua được vòng phỏng vấn và trở thành nhân viên chính thức của công ty. Luyện anh văn thành thạo trong 6 tháng. Phải hoàn thành tốt các nhiệm vụ và trở thành Junior trong 1 năm gắng bó với Công Ty và rèn luyện các kỹ năng và kiến thức đầy đủ, vững vàng để trở thành Senior trong 4-5 năm tiếp theo.";
let longTarget =
  "Tham gia vào nhiều dự án tầm trung và lớn để phát triển thêm các kiến thức và kỹ năng lãnh đạo để trở thành Leader trong 4 năm gắn bó với công ty.";
let introduce =
  "Là một người có niềm đam mê lớn với lập trình, thích được tư duy để giải quyết bài toán. Có khả năng tự tìm kiếm và học tập khá cao. Là một người trung thực, ham học hỏi cái mới, có tính kiên trì.";

var person = {};

person.id = 1;
person.avatar = "assets/images/avtcv.jpeg";
person.name = "Đỗ Quang Phước";
person.dob = "15/12/2001";
person.phone = "037 9494 687";
person.email = "doquangphuoc9999@gmail.com";
person.address = "Hương Toàn - Hương Trà - Thừa Thiên Huế";
person.facebook = "https://www.facebook.com/profile.php?id=100026972359836";
person.instagram = "https://www.instagram.com/doquangphuoc1512/";
person.gitHub = "https://github.com/doquangphuoc9999";
person.qrCode = "assets/img/CVOffline.png";
person.cvOffline = "https://i.topcv.vn/doquangphuoc?ref=4091912";
person.shortTarget = shortTarget;
person.longTarget = longTarget;
person.introduce = introduce;

let interest_football = new Interest(
  1,
  "Football",
  "assets/img/football.png",
  1
);
let interest_lol = new Interest(
  2,
  "League Of Legends",
  "assets/img/lol.png",
  1
);
let interest_pes = new Interest(3, "PES", "assets/img/pes.png", 1);
interests.push(interest_football, interest_lol);
person.interests = interests;

let discription_javaServlet =
  "Biết sử dụng Java Servlet kết hợp JSP, JSTL cùng các công nghệ khác để viết trang Web Quản lý thí sinh đăng ký thi Hoa hậu Việt Nam.";
let skill_javaServlet = new Skill(
  1,
  "Java Servlet/JSP/JSTL",
  40,
  discription_javaServlet,
  1
);

let discription_javaSpringBoot =
  "Biết sử dụng Spring Freamwork cùng các công nghệ khách như ajax, jQuery để viết trang web quản lý bán hàng";
let skill_javaSpringboot = new Skill(
  2,
  "Spring Freamwork",
  40,
  discription_javaSpringBoot,
  1
);

let discription_db =
  "Biết sử dụng database để lưu trữ dữ liệu và đổ dữ liệu lên website. Có kiến thức cơ bản về các câu lệnh truy vấn.";
let skill_dataBase = new Skill(3, "Database", 45, discription_db, 1);

let discription_javaScript =
  "Biết dùng JavaScript, CSS, HTML kết hợp cùng Ajax, jQuery để tạo hiệu ứng, lấy dữ liệu, xử lý bất đồng bộ...";
let skill_js_css_html = new Skill(
  4,
  "HTML/CSS/JS",
  50,
  discription_javaScript,
  1
);

skills.push(
  skill_javaServlet,
  skill_javaSpringboot,
  skill_dataBase,
  skill_js_css_html
);
person.skills = skills;

let knowleage_1 =
  "Xây dựng được bố cục trang web, có phát triển thêm phần chạy ảnh trong tin mới. Có reponsive. Sử dụng Javascript để thiết lập chức năng tìm kiếm bài viết (Có chuẩn hóa chuỗi). Deploy dự án.";
let project_1 = new Project(
  1,
  "Trang web quản lý bán hàng, doanh thu, định lượng một tiệm coffee",
  "15 ngày",
  "3 người",
  "JavaScript ES6",
  "Không dùng",
  "",
  "Spring Boot, Spring Security, Ajax, jQuery, Thymeleaf, JPA, Restful API",
  knowleage_1,
  "assets/img/portfolio/codeCoffee/image1.png",
  "assets/img/portfolio/codeCoffee/image2.png",
  "assets/img/portfolio/codeCoffee/image3.png",
  "assets/img/portfolio/codeCoffee/fullImage.png",
  "",
  // "http://bit.ly/39OGbFY",
  // "Không có",
  // "http://bit.ly/36g1XkM",
  "https://github.com/39domia/code-coffee-management-application.git",
  "",
  "",
  1
);

let knowleage_2 =
  "Validate thông tin (front-end, back-end), phân tích thiết kế database, CRUD 13 bảng quan hệ với nhau, đăng nhập vào trang admin,  sử dụng thư viện summernote để thêm sửa bài viết, phân trang bằng backend, phân quyền bằng Security.";
let project_2 = new Project(
  2,
  "Trang web quản lý thông tin bán hàng",
  "16 ngày",
  "1 người",
  "Java, Javascript ES6",
  "",
  "Spring MVC, HTML5/CSS3, Bootstrap 4, Thymeleaf, Template: Coll-Admin",
  "PostgreSQL",
  knowleage_2,
  "assets/img/portfolio/shopMe/image1.png",
  "assets/img/portfolio/shopMe/image2.png",
  "assets/img/portfolio/shopMe/image3.png",
  "assets/img/portfolio/shopMe/fullImage.png",
  // "admin; Password@123",
  "admin; Phuoc",
  // "http://bit.ly/3t0H6vO",
  // "http://bit.ly/3a4rsXv",
  // "http://bit.ly/3cdCYCt",
  "",
  "",
  "",
  1
);

let knowleage_3 =
  "Xây dựng bố cục kỹ thuật dự án theo mô hình MVC, phân tích thiết kế database, thiết kế giao diện một trang blog hoàn thiện, dùng Github để quản lý mã nguồn khi làm việc, CRUD 4 bảng với quan hệ với nhau, validate thông tin nhập vào (front-end, back-end), đăng nhập phân quyền bằng Servlet Jstl";
let project_3 = new Project(
  3,
  "Trang web Blog",
  "10 ngày",
  "1 người",
  "Java, Javascript ES6",
  "Không có",
  "Bootstrap 4, CSS3, HTML5, template Admin: Gentelella-master, template Login: Coll_Admin",
  "PostgreSQL",
  knowleage_3,
  "assets/img/portfolio/blog/image1.png",
  "assets/img/portfolio/blog/image2.png",
  "assets/img/portfolio/blog/image3.png",
  "assets/img/portfolio/blog/fullImage.png",
  "phuoc@gmail.com; 1234567",
  // "https://bit.ly/3ogD1jm",
  // "http://bit.ly/36gnLNa",
  // "http://bit.ly/2KR4Eln",
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
  "Aptech Huế",
  "Học viên part-time LTV Quốc Tế",
  1
);
let education_3 = new Education(
  3,
  "09/2020-04/2021",
  "Codegym Bootcamp Huế",
  "Tốt nghiệp lớp Java C0920G2",
  1
);
educations.push(education_3, education_2);
person.educations = educations;

let experience3 = new Experience(
  3,
  "09/2020-04/2021",
  "Codegym Bootcamp Huế",
  "Học viên",
  "- Học cách sử dụng HTML, CSS, JavaScript để tạo website cơ bản.<br>- Tiếp cận ngôn ngữ Java, database mySQL/PostgreSQL để xây dựng ứng dụng backend với công nghệ JSP/Servlet, Spring Framework (Spring MVC, Spring Boot, Spring Security).<br>- Nâng cao kĩ năng tìm kiếm thông tin, làm việc nhóm, quản lí mã nguồn Github.<br>- Biết quản lí công việc bằng Product Backlog, Scrum.<br>",
  1
);
let experience2 = new Experience(
  2,
  "11/2018-04/2020",
  "Tiệm Coffe Akay",
  "Nhân viên phục vụ part-time",
  "- Học được cách làm việc có tâm.<br>- Trau dồi được kỹ năng làm việc nhóm.<br>- Luyện tập thái độ làm việc chuyên nghiệp (Luôn vui vẻ, đúng quy tắc)",
  1
);

experiences.push(experience3, experience2);
person.experiences = experiences;

let certificate_1 = new Certificate(
  1,
  "Anh văn B1",
  "04/2016",
  "Có thể đọc hiểu được tài liệu tiếng Anh",
  1
);
let certificate_2 = new Certificate(
  2,
  "Hoàn thành mọi việc với Kanban",
  "07/2020",
  "Có thể lên kế hoạch và quản lý công việc với bảng Kanban, giới hạn công việc đang làm để tập trung hoàn thành từng việc một, đặt mục tiêu tốt cho ngắn hạn và dài hạn.",
  1
);
let certificate_3 = new Certificate(
  3,
  "SCRUM Essence",
  "12/2020",
  "Tạo được Định nghĩa Hoàn thành phù hợp với tình huống hiện tại, tạo và duy trì được Product Backlog, quản lý được Sprint Backlog, theo dõi được tiến độ của Sprint sử dụng biểu đồ burndown, theo dõi được tiến độ của sản phẩm sử dụng biểu đồ burndown.",
  1
);
certificates.push(certificate_3, certificate_2, certificate_1);
person.certificates = certificates;

let referencePerson_1 = new ReferencePerson(
  1,
  "Mr.Lê Tường Phúc",
  "assets/img/AnhPhuc.png",
  "Giám đốc điều hành trung tâm CodeGym Huế",
  "Công ty CODEGYM VIETNAM JSC",
  "0983.339.720",
  "phuc.le@codegym.vn",
  1
);
let referencePerson_2 = new ReferencePerson(
  2,
  "Mr.Nguyễn Hữu Anh Khoa",
  "assets/img/AnhKhoa.png",
  "Giám đốc đào tạo CodeGym Huế",
  "Công ty CODEGYM VIETNAM JSC",
  "0935216417",
  "khoa.nguyen@codegym.vn",
  1
);
referencePersons.push(referencePerson_2, referencePerson_1);
person.referencePersons = referencePersons;
