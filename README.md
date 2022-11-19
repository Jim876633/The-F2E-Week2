# The F2E Week 2 - 今晚，我想來點點簽

線上簽署 PDF 檔。

[💻 Live Demo]()

[🎨 Design provider](https://2022.thef2e.com/users/12061549261454740203)

## 作品說明

![](./public/cover.png)

1. 使用 `React-pdf` 將 file 文件轉成 `Canvas`。
2. `Canvas.toDataURL()` 轉成圖片。
3. 使用 `React-signature-canvas` 產出可以簽名的 `Canvas`。
4. 使用 `Konva` 將圖片匯入 `Canvas` 並能拖曳圖片進去。
5. 使用 `React-pdf/renderer` 轉成 PDF 並下載。

## 資料夾說明

```

src
 |_assets - 圖檔、字體、測試文件
 |_components - React 元件
 |_constants - 常數、文字 JSON
 |_context - FileContext、UIContext
 |_hook - customer hook
 |_lib - 第三方套件
 |_pages - 畫面
 |_shared - 共用樣式、圖片 src
 |_utils - 通用函數

```

## 使用技術

-   [React](https://reactjs.org/) - JS library.
-   [Styled Components](https://styled-components.com/) - For styles.
-   [React Transition Group](https://reactcommunity.org/react-transition-group/) - For component umount animate.

## 第三方服務

-   [React Signature Canvas](https://github.com/agilgur5/react-signature-canvas) - For singnature canvas.
-   [React PDF](https://github.com/wojtekmaj/react-pdf) - For preview pdf canvas.
-   [React konva](https://konvajs.org/docs/react/index.html) - For add signature to canvas.
-   [React PDF Renderer](https://react-pdf.org/) - For show and download pdf from image.

## 待新增

-   [ ] RWD.
-   [ ] LoginPage.
-   [ ] Add image file.
-   [ ] Signature with image and text.
