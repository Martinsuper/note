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
