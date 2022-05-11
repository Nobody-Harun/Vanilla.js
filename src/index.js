import "./styles.css";

const app_title = "Unblock Engine",
  app_info = "Web Application for Unblock on Chromebook",
  readme_text =
    "<h3>Start Guidebook</h3><span title='2022/05/11 13:44'>最終更新日: 2022/05/11 13:44</span>";

document.title = app_title;

document.getElementById("app").innerHTML =
  `<h2>` +
  app_title +
  `</h2><div>` +
  app_info +
  `</div><hr>` +
  readme_text +
  `
`;
