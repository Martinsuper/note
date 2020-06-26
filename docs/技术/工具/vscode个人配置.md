# vscode 使用

## vscode makdown 配置

1. windows 下快捷键 <kbd>shift</kbd> + <kbd>Ctrl</kbd> 或者 mac 下快捷键 <kbd>Shift</kbd> + <kbd>Command</kbd>然后搜索 `首选项：打开设置`，新增如下配置
   ```json
       "[markdown]": {
   		// markdown格式化设置，保存的时候自动格式化
           "editor.formatOnSave": true,
           "editor.renderWhitespace": "all",
           "editor.quickSuggestions": {
           "other": true,
           "comments": true,
           "strings": true
           }
       }
   ```
2. 然后<kbd>shift</kbd> + <kbd>Ctrl</kbd> 或者 mac 下 <kbd>Shift</kbd> + <kbd>Command</kbd>然后搜索 `首选项：配置用户代码片段`，然后搜索 markdown（其他语言也可以类似配置，设置属于自己的快捷键）新增如下配置
   ````json
   {
     "Print to console": {
       "prefix": "himg",
       "body": ["{% asset_img $1.jpg $2 %}"],
       "description": "插入hexo图片"
     },
     "h1": {
       "prefix": "h1",
       "body": ["# "],
       "description": "h1标题"
     },
     "h2": {
       "prefix": "h2",
       "body": ["## "],
       "description": "h2标题"
     },
     "h3": {
       "prefix": "h3",
       "body": ["### "],
       "description": "h3标题"
     },
     "h4": {
       "prefix": "h4",
       "body": ["#### "],
       "description": "h4标题"
     },
     "h5": {
       "prefix": "h5",
       "body": ["##### "],
       "description": "h5标题"
     },
     "h6": {
       "prefix": "h6",
       "body": ["###### "],
       "description": "h6标题"
     },
     "cde": {
       "prefix": "cde",
       "body": ["```$1", "$2", "```", ""],
       "description": "h1标题"
     },
     "ine": {
       "prefix": "ine",
       "body": [" `$1` $2"],
       "description": "h1标题"
     },
     "vdo": {
       "prefix": "vdo",
       "body": [
         "<video width=\"480\" height=\"320\" controls>",
         "<source src=\"$1\">",
         "</video>"
       ],
       "description": "插入视频"
     },
     "bd": {
       "prefix": "bd",
       "body": ["<kbd>$1</kbd>"],
       "description": "插入按键"
     }
   }
   ````
## vscode 设置默认终端

```bash

```