# Dcard Web Backend Intern HW - Dcard 前端實習作業

### 專案要求

本專案為申請 2021 Dcard 前端實習之作業，完成其作業要求含

- 串接交通部觀光景點 API 實作全部景點列表
  - route 必須要是/scenicSpot
  - 第一次僅能載入 30 個景點
  - 列表滾到底部要自動載入額外 30 個景點直到沒有更多景點
- 串接交通部觀光景點 API 實作縣市景點列表
  - route 必須要是/scenicSpot/{city}
  - 第一次僅能載入 30 個景點
  - 列表滾到底部要自動載入額外 30 個景點直到沒有更多景點
- 切換頁面按鈕
  - 要有切換去全部景點列表及不同縣市景點列表的功能
  - 所有頁面皆要有這個功能

---

### 專案架構與說明

本專案主要採用 React JS 作為實作框架，並使用包括 redux、redux-thunk、immutable、antd、axios、styled-component 等相關庫，下方為本專案之大致結構

- **apis: API 相關封裝資料夾**
  - tourism.js: 封裝 https://ptx.transportdata.tw/MOTC/v2/Tourism 下相關接口之功能
- **components: 組件資料夾**
  - common: 共用組件資料夾
    - container: 左右縮進
  - header: 網頁頭部
  - scenicSpot: scenicSpot URL 下使用之組件資料夾
    - card: 列表內容組件
  - filter: 篩選切換組件
  - list: 列表組件
- **configs: 配置文件資料夾**
  - PTXConfig.js: PTX API 相關配置
- **pages: 頁面資料夾**
  - scenicSpot: scenicSpot 頁面
- **stores: redux 配置相關資料夾**
  - scenicSpot: scenicSpot 頁面使用到之 state 管理
- **utils: 工具資料夾**
  - HMACSHA1Helper.js: HMAC-SHA1 加密功能封裝
- App.js: 路由配置
- index.js: 應用程式起點

---

### 路由配置

路由部分使用 react-router-dom 相關庫，配置部分代碼可見於./src/App.js 中

```
<BrowserRouter>
	<Switch>
		<Route path="/scenicSpot/:city?" exact component={ScenicSpot} />
		<Redirect to="/scenicSpot"/>
	</Switch>
</BrowserRouter>
```

---

### 組件配置

每個組件及頁面資料夾下皆包含 index.jsx 以及 style.js，前者包括 react 相關邏輯代碼，後者包括 styled-components 相關邏輯代碼。下方為本次作業使用到的相關頁面以及組件。

- scenicSpot 頁面 (./src/pages/scenicSpot): 包含 API 呼叫、捲動監聽及該頁面基本排版
  - card 組件 (./src/components/scenicSpot/card): 頁面右方列表中的內容組件
  - filter 組件 (./src/components/scenicSpot/filter): 頁面左方控制組件，包含網址參數與組件同步功能
  - list 組件 (./src/components/scenicSpot/list): 頁面右方列表組件

---

### Redux 配置

redux 部分使用 react-redux、react-thunk 以及 immutable 相關庫，除根配置外，每個資料夾中皆包含 actionCreators.js、actionTypes、reducer.js 以及 index.js

- actionCreators: 該 state 階層下之 action 相關產生 function
- actionTypes: 該 state 階層下之相關 action 類型
- reducer: 該 state 階層下之 reducer
- index: 統整上述三項向外暴露

根 reducer 配置

```
import { combineReducers } from "redux-immutable";

import { reducer as scenicSpotReducer } from "./scenicSpot/index";

export default combineReducers({
  scenicSpot: scenicSpotReducer,
});
```

---

### 運行專案

```
# clone 專案至本地
git clone https://github.com/CH-Chang/DcardWebFrontendIntern.git
# 切換至專案目錄
cd (project dir)
# 修改API配置資料
修改./src/configs/PTXConfig.js中的PTX API接口配置
# 安裝專案依賴庫
yarn install
# 啟動專案
yarn start

# 專案啟動網址 http://localhost:3000 (會自動導向/scenicSpot)
```

---
