# [fnm](https://github.com/Schniz/fnm?tab=readme-ov-file)

::: tip
fnm 是一个 Node.js 版本管理工具，它可以让你在不同的项目中使用不同的 Node.js 版本。
:::

[推荐教程](https://www.cnblogs.com/yqbaowo/p/18318286)

## 安装包

<script setup>
import { withBase, useData } from 'vitepress'
</script>

<a :href="withBase('/fnm-windows.zip')">安装包</a>

<style module>
</style>

## 配置环境变量

```powershell
$FNM_DIR = "C:\Users\17835\.fnm"   # fnm 安装目录
$FNM_NODE_DIST_MIRROR = "https://registry.npmmirror.com/-/binary/node/"  # node 下载地址

$env:Path += ";$FNM_DIR\aliases\default" # 添加到环境变量
fnm env --use-on-cd | Out-String | Invoke-Expression #让 fnm 在每次 cd 到一个新目录时自动切换到正确的 Node.js 版本, 之后在配置 .node-version 文件的时候,可以自动切换版本
```

## 检测

```powershell
fnm --version
```

## 使用

```powershell
fnm ls-remote  # 查看所有可用版本
fnm install 16.13.0 # 安装指定版本
fnm use 16.13.0 # 使用指定版本
```

### 查看项目中的版本

```powershell
fnm current
```

### 查看所有已安装的版本

```powershell
fnm ls
```

### 删除指定版本

```powershell
fnm uninstall 16.13.0
```

### 删除所有版本

```powershell
fnm uninstall --all
```

### 删除 fnm


