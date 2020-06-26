# vuepress 相关

## vuepress 自动生成侧边栏

自动生成侧边栏的函数
```
const path = require("path");
const rootpath = path.dirname(__dirname).replace(".vuepress", "");
const fs = require("fs");
// 排除检查的文件
var excludes = [".DS_Store"];

const utils = {
  genSidebar: function (
    title,
    path
  ) {
    let collapsable = true
    let sidebarDepth = 1
    let children = getFileName(path)
    let arr = new Array()
    console.log({
      title,
      children,
      collapsable,
      sidebarDepth,
      path
    })
    return {
      title,
      children,
      collapsable,
      sidebarDepth,
      path
    };
  },
  getFileName: function (path) {
    rpath = rootpath + path
    console.log(rpath)
    console.log(path)
    let filenames = [];
    let fileTypes = /\.md$/; //只匹配以md结尾的文件
    fs.readdirSync(rpath).forEach((file) => {
      if (excludes.indexOf(file) < 0) {
        fullpath = rpath + "/" + file;
        console.log(fullpath)
        var fileinfo = fs.statSync(fullpath);
        if (fileinfo.isFile() && fileTypes.test(file) > 0) {
          if (file === "README.md") {
            file = "";
          } else {
            file = file.replace(".md", "");
          }
          file = path + file
          filenames.push(file);
        }
      }
    });
    filenames.sort(); // 排序
    console.log(filenames)
    return filenames;
  }
};
function getFileName(path) {
  rpath = rootpath + path
  console.log(path)
  let filenames = [];
  let fileTypes = /\.md$/; //只匹配以md结尾的文件
  fs.readdirSync(rpath).forEach((file) => {
    if (excludes.indexOf(file) < 0) {
      fullpath = rpath + "/" + file;
      console.log(fullpath)
      var fileinfo = fs.statSync(fullpath);
      if (fileinfo.isFile() && fileTypes.test(file) > 0) {
        if (file === "README.md") {
          file = "";
        } else {
          file = file.replace(".md", "");
        }
        file = path + file
        filenames.push(file);
      }
    }
  });
  filenames.sort(); // 排序
  return filenames;
}
module.exports = utils;

```
使用（侧边栏会分组展示）
导航栏配置
```
  {
    text: "learn",
    link: "/learn/",
  }
```
侧边栏配置
```
  "/learn/": [
    utils.genSidebar("duan","/learn/duan/"),
    utils.genSidebar("lu","/learn/lu/")
  ]
```
目录结构如下
```
learn
    duan
        duan.md
        lu.md
        README.md
    lu
        lu.md
        yao.md
        README.md
    README.md
```