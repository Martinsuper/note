const utils = require("./index.js");

module.exports = {
  // "/learn/": utils.genSidebar("learn","/learn/")
  "/技术/基础/算法/": [
    utils.genSidebar("算法","/技术/基础/算法/")
  ],
  "/技术/基础/git/": [
    utils.genSidebar("git使用","/技术/基础/git/")
  ]
}


