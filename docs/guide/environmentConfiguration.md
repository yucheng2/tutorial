# 环境配置

## Node.js

### [fnm](./fnm安装.md)

### 单版本安装

在[node国内镜像](https://registry.npmmirror.com/-/binary/node/)中下载对应版本的node安装包，解压到指定目录，配置环境变量。

## ide

### vscode

#### 特点

- 轻量级
- 插件丰富

#### 安装

[【Visual Studio Code下载】2024年最新官方正式版Visual Studio Code 免费下载 - 腾讯软件中心官网 (qq.com)](https://pc.qq.com/detail/16/detail_22856.html)

#### 插件

[Vue.volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
::: tip
习惯用idea的可以下载快捷键映射插件:  
:::
[IntelliJ IDEA Keybindings](https://marketplace.visualstudio.com/items?itemName=k--kato.intellij-idea-keybindings)

### webstorm(Idea)
::: tip
如果使用idea,可以安装vue的插件, 支持vue的语法高亮\
https://plugins.jetbrains.com/plugin/9442-vue-js
:::

#### 特点

- 开箱即用

#### 安装

https://www.exception.site/essay/how-to-free-use-intellij-idea-2019-3

## npm

### 配置国内镜像

<script setup>
import { withBase, useData } from 'vitepress'
</script>

<a :href="withBase('/mirror-config.zip')">镜像配置文件</a> ,下载这两个文件，放到用户目录下。比如C:/Users/17835

<style module>
</style>



#### .npmrc

::: tip
npm, pnpm, 会自动读取用户目录下的.npmrc文件，yarn使用的是.yarnrc
:::

```powershell
registry=https://registry.npmmirror.com/
```

#### .yarnrc

```powershell
# THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
# yarn lockfile v1


registry "https://registry.npmmirror.com/"
bin-mirrors-prefix "https://npmmirror.com/mirrors"
canvas_binary_host_mirror "https://npmmirror.com/mirrors/canvas"
chromedriver-cdnurl "https://npmmirror.com/mirrors/chromedriver"
couchbase-binary-host-mirror "https://npmmirror.com/mirrors/couchbase/v{version}"
debug-binary-host-mirror "https://npmmirror.com/mirrors/node-inspector"
disturl "https://npmmirror.com/mirrors/node"
electron-mirror "https://npmmirror.com/mirrors/electron/"
electron_builder_binaries_mirror "https://registry.npmmirror.com/-/binary/electron-builder-binaries/"
electron_custom_dir "{{ version }}"
flow-bin-binary-host-mirror "https://npmmirror.com/mirrors/flow/v{version}"
fse-binary-host-mirror "https://npmmirror.com/mirrors/fsevents"
fuse-bindings-binary-host-mirror "https://npmmirror.com/mirrors/fuse-bindings/v{version}"
git4win-mirror "https://npmmirror.com/mirrors/git-for-windows"
gl-binary-host-mirror "https://npmmirror.com/mirrors/gl/v{version}"
grpc-node-binary-host-mirror "https://npmmirror.com/mirrors"
hackrf-binary-host-mirror "https://npmmirror.com/mirrors/hackrf/v{version}"
lastUpdateCheck 1722831137030
leveldown-binary-host-mirror "https://npmmirror.com/mirrors/leveldown/v{version}"
leveldown-hyper-binary-host-mirror "https://npmmirror.com/mirrors/leveldown-hyper/v{version}"
mknod-binary-host-mirror "https://npmmirror.com/mirrors/mknod/v{version}"
node-sqlite3-binary-host-mirror "https://npmmirror.com/mirrors"
node-tk5-binary-host-mirror "https://npmmirror.com/mirrors/node-tk5/v{version}"
nodegit-binary-host-mirror "https://npmmirror.com/mirrors/nodegit/v{version}/"
operadriver-cdnurl "https://npmmirror.com/mirrors/operadriver"
phantomjs-cdnurl "https://npmmirror.com/mirrors/phantomjs"
profiler-binary-host-mirror "https://npmmirror.com/mirrors/node-inspector/"
python-mirror "https://npmmirror.com/mirrors/python"
rabin-binary-host-mirror "https://npmmirror.com/mirrors/rabin/v{version}"
sass-binary-site "https://npmmirror.com/mirrors/node-sass"
sodium-prebuilt-binary-host-mirror "https://npmmirror.com/mirrors/sodium-prebuilt/v{version}"
sqlite3-binary-site "https://npmmirror.com/mirrors/sqlite3"
utf-8-validate-binary-host-mirror "https://npmmirror.com/mirrors/utf-8-validate/v{version}"
utp-native-binary-host-mirror "https://npmmirror.com/mirrors/utp-native/v{version}"
zmq-prebuilt-binary-host-mirror "https://npmmirror.com/mirrors/zmq-prebuilt/v{version}"
```