var tipuesearch = {"pages":[{"tags":"misc","url":"./pages/about/","text":"2016Fall 修課成員網誌","title":"About"},{"tags":"Misc","url":"./dadada.html","text":"window.onload=function(){ brython(1); }","title":"dadada"},{"tags":"Misc","url":"./w12-work.html","text":"window.onload=function(){ brython(1); } from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"chord1\"] ctx = canvas.getContext(\"2d\") def background(x, y, xinc, yinc, xnum, ynum, ctx): # 水平線 for i in range(ynum+1): ctx.beginPath() # 設定線的寬度為 1 個單位 if i == 0: ctx.lineWidth = 7 else: ctx.lineWidth = 1 ctx.moveTo(x-1, y+i*yinc) ctx.lineTo(x+xnum*xinc+1, y+i*yinc) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() # 垂直線 for i in range(xnum+1): ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 ctx.moveTo(x+i*xinc, y) ctx.lineTo(x+i*xinc, y+ynum*yinc) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() def canvasText(x, y, fontSize, string, sup, sub, color, ctx): # 標定各弦音符號, 以及把位編號 ctx.beginPath() ctx.fillStyle = color ctx.strokeStyle = color #ctx.font = \"20px Arial\" ctx.font = str(fontSize)+ \"px Arial\" ctx.fillText(string, x, y) ctx.font = str(fontSize-8)+ \"px Arial\" if sup != \"\": ctx.fillText(sup, x+fontSize/1.6, y-fontSize/2) if sub != \"\": ctx.fillText(sup, x+fontSize/1.6, y) ctx.fill() ctx.stroke() ctx.closePath() w = 20 h = 30 background(100, 100, w, h, 5, 5, ctx) mylist = [\"E\", \"A\", \"D\", \"G\", \"B\", \"E\"] num = 0 for s in mylist: #canvasText(100, 80, 20, \"A\", \"b\", \"\", \"black\", ctx) canvasText(100+num*w, 80, 20, s, \"\", \"\", \"black\", ctx) num = num + 1","title":"w12 work"},{"tags":"course","url":"./w10-brython.html","text":"Brython 绘图 繪圖流程, 導入程式庫, 啟動, 然後引用各種模組開始繪圖 window.onload=function(){ brython(1); } from browser import document as doc import math canvas = doc[\"guitarchord\"] ctx = canvas.getContext(\"2d\") ctx.beginPath() ctx.lineWidth = 1 inc = 5 for i in range(100): ctx.moveTo(500+i*inc, 500) ctx.lineTo(500+i*inc, 600) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() from browser import document as doc from browser import html import math import re # 準備繪圖畫布 canvas = doc[\"guitarchord\"] container = doc[\"container3\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 水平線 for i in range(5): ctx.beginPath() # 設定線的寬度為 1 個單位 if i == 0: ctx.lineWidth = 7 else: ctx.lineWidth = 1 ctx.moveTo(99, 100+i*30) ctx.lineTo(201, 100+i*30) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() # 垂直線 for i in range(6): ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 ctx.moveTo(100+i*20, 100) ctx.lineTo(100+i*20, 220) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() # 1 與 A7 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.font = \"30px Arial\" ctx.fillText(\"A7\", 100, 70) ctx.arc(50, 50, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"1\", 45, 55) ctx.fill() ctx.stroke() ctx.closePath() # 3 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(50, 80, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"3\", 45, 85) ctx.fill() ctx.stroke() ctx.closePath() # 4 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(50, 110, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"4\", 45, 115) ctx.fill() ctx.stroke() ctx.closePath() # o ctx.beginPath() ctx.arc(50, 140, 7, 0, 2*math.pi, False) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() # x ctx.beginPath() #ctx.arc(50, 170, 7, 0, 2*math.pi, False) ctx.moveTo(44, 164) ctx.lineTo(56, 176) ctx.moveTo(56, 164) ctx.lineTo(44, 176) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() # 以下將 canvas 畫布內容轉為 img tag, 並且顯示在 container 物件 img = canvas.toDataURL(\"image/png\") # 利用 re.sub, 將原本要直接開圖檔的 data:image 標頭, 改為 data:application/octet-stream, 可直接下載存檔 # 使用 re 模組之前必須先 import re img = re.sub(\"&#94;data:image\\/[&#94;;]\", \"data:application/octet-stream\", img) # 宣告 anchor markup attribute download, 可以指定下載儲存檔名 container <= html.A(\"save image\", href=img, download=\"guitar_chord.png\")","title":"w10 brython"},{"tags":"Misc","url":"./2016fall-cheng-shi-lian-xi-ti-12345.html","text":"1234已知截至第六週 2016fallcpa 的分組資料位於倉儲中的 w6_group.txt , 而從學校修課系統下載的修課人員名條則為 w6_list.txt , 請各組著手練習, 找出尚未納入分組的人員名單, 並研擬如何處置上課一個半月卻尚未進入情況的學員?","title":"2016Fall 程式練習題-12345"},{"tags":"Misc","url":"./2016fall-cheng-shi-lian-xi-ti-1234.html","text":"1234已知截至第六週 2016fallcpa 的分組資料位於倉儲中的 w6_group.txt , 而從學校修課系統下載的修課人員名條則為 w6_list.txt , 請各組著手練習, 找出尚未納入分組的人員名單, 並研擬如何處置上課一個半月卻尚未進入情況的學員? 以下利用 Brython 讀取位於倉儲中的 w6_list.txt 與 w6_group.txt 資料檔案. 表示學校教務系統中, 修 2016fallcpa 的學員名單為: window.onload=function(){ brython(1); } from browser import document, html container = document['container'] data = open(\"./../w6_list.txt\").read() container <= data 而截至 w6, 納入分組名單中的學員有: from browser import document, html container2 = document['container2'] data2 = open(\"./../w6_group.txt\").read() container2 <= data2 現在, 誰能夠幫我們找出至今尚未納入分組名單中的學員, 共有那些人？ from browser import document, html # 從 id=script1 程式區段取 data 變數 from script1 import data container3 = document['container3'] data3 = open(\"./../w6_group.txt\").read() group = data3.splitlines() # 希望將分組資料轉為學員數列, 令為變數名稱 result_g result_g = [] # 已經註冊者數列設為 registered registered = [] for line in group: # 去除每一行最後的空白成員 sline = line.split(\",\") # 再將各組拆成個別組員後, 串成 result_g for m in sline: result_g.append(m) #container3 <= len(sline) #container3 <= html.BR() #container3 <= len(result_g) registered = data.splitlines()[:-1] # 設法找出至今尚未分組的學員學號 not_in_group = [c for c in registered if c not in result_g] #container3 <= len(registered) -len(result_g) n = 1 for i in not_in_group: container3 <= \"第\"+str(n)+\"位: \"+ str(i) n = n + 1 container3 <= html.BR()","title":"2016Fall 程式練習題-1234"},{"tags":"Misc","url":"./2016fall-cheng-shi-lian-xi-ti.html","text":"已知截至第六週 2016fallcpa 的分組資料位於倉儲中的 w6_group.txt , 而從學校修課系統下載的修課人員名條則為 w6_list.txt , 請各組著手練習, 找出尚未納入分組的人員名單, 並研擬如何處置上課一個半月卻尚未進入情況的學員? 以下利用 Brython 讀取位於倉儲中的 w6_list.txt 與 w6_group.txt 資料檔案. 表示學校教務系統中, 修 2016fallcpa 的學員名單為: window.onload=function(){ brython(1); } from browser import document, html container = document['container'] data = open(\"./../w6_list.txt\").read() container <= data 而截至 w6, 納入分組名單中的學員有: from browser import document, html container2 = document['container2'] data2 = open(\"./../w6_group.txt\").read() container2 <= data2 現在, 誰能夠幫我們找出至今尚未納入分組名單中的學員, 共有那些人？ from browser import document, html # 從 id=script1 程式區段取 data 變數 from script1 import data container3 = document['container3'] data3 = open(\"./../w6_group.txt\").read() group = data3.splitlines() # 希望將分組資料轉為學員數列, 令為變數名稱 result_g result_g = [] # 已經註冊者數列設為 registered registered = [] for line in group: # 去除每一行最後的空白成員 sline = line.split(\",\") # 再將各組拆成個別組員後, 串成 result_g for m in sline: result_g.append(m) #container3 <= len(sline) #container3 <= html.BR() #container3 <= len(result_g) registered = data.splitlines()[:-1] # 設法找出至今尚未分組的學員學號 not_in_group = [c for c in registered if c not in result_g] #container3 <= len(registered) -len(result_g) n = 1 for i in not_in_group: container3 <= \"第\"+str(n)+\"位: \"+ str(i) n = n + 1 container3 <= html.BR()","title":"2016Fall 程式練習題"},{"tags":"Misc","url":"./2016fall-ji-jie-she-ji-zhu-ti-jiao-xue.html","text":"知識管理與最佳化應用實驗室試圖利用計算機程式、網際內容管理、電腦輔助設計實習與協同產品設計實習等課程, 進行與機械設計相關的主題式教學, 其中包含強化創造力的教學、令學員熟習六種工程表達方式, 並且俱備融入協同設計所需要的四大面向知識與技能. 機械設計主題教學 創造力三元素, 機械設計的六種表達, 協同設計的四大面向. 強化創造能力 - 自學力、程式力與想像力 (Creative Competencies) 熟習六種表達 - 口語、文字、2D、3D、理論與實體表達 (Six Presentation Methods) 融入協同設計 - 電腦、網路、軟硬體工具與協同專案 (Collaborative Designs) 計算機程式 從 Python3 的 print(), input(), 變數命名到關鍵字, 可以透過簡單的單位轉換問題進行練習: 首先我們舉 Python3 程式執行的三個地方: 在單機 Windows 10 操作系統環境下利用可攜程式系統執行 利用遠端桌面或 X-Windows, 在近端利用遠端的電腦硬體與操作系統執行 在近端利用瀏覽器執行 單機執行: 按下 start.bat 後, 系統就會配置好 git 與 Python3 的程式環境, 可以在命令列中直接用互動的方式執行 Python3 程式, 也可以在 SciTE 編輯器中, 透過設定按下 go 之後執行 所牽涉的問題: 可攜程式環境如何建立? Python3 執行環境如何配置? 執行的 Python3 是那一個版本? 希望在 SciTE 中直接執行 Python3 程式, 該如何設定? 能不能在 Leo Editor 中執行 Python3 程式, 為何要這樣做? 近端連到遠端執行: 以 Remote Desktop, 連接到遠端的電腦畫面中執行可攜程式系統中的 Python3 程式, 基本架構與流程與近端單機執行相同. 利用 putty 與 Xming, 連線到支援 X-Windows 協定的電腦, 將遠端的視窗搬到近端執行, 但仍使用遠端電腦的硬體與軟體支援. 在瀏覽器中執行: 由於網際瀏覽器環境所整合的工具愈來愈多, 就連原本只能在單機執行的 SolidWorks, 也已經有初步成型的 OnShape 可以取代部份的零組件設計分析工作, 因此本課程以 Brython 為例, 說明如何在瀏覽器中執行 Python3 程式. 所牽涉問題: 如何設置? Brython Console 所有近端能執行的程式都能利用瀏覽器執行? 以下使用 Brython 標準程式庫執行 Python3 繪圖程式: window.onload=function(){ brython(1); } # 導入 browser 模組中的 document, 並設為 doc 變數 from browser import document as doc # 導入數學模組 import math # 產生各小球的亂數速度用 import random # 導入 browser 中的計時器, 建立動畫用 import browser.timer # 準備繪圖畫布 canvas = doc[\"plotarea\"] ctx = canvas.getContext(\"2d\") # 取畫布的寬與高度 width = canvas.width height = canvas.height n = 20 # 已知數列內容個數, 先分別與 None 對應 x = [None]*n y = [None]*n vy = [None]*n vx = [None]*n # 重力加速度, Y 方向向下為正 g = 0.05 # 空氣的黏滯阻尼係數 cor = 0.7 # 球的彈力係數 fr = 0.95 # 球的半徑 r = 5 for i in range(n): x[i] = 300 y[i] = 100 # random.random() 將會產生介於 0 與 1 的浮點亂數 vx[i] = 2*(random.random()-.5) vy[i] = 2*(random.random()-.5) # 更新第 i 球 Y 座標的運算邏輯 def updateY(i): if ((y[i]+r) < height): #y = height vy[i] += g else: vy[i] = -vy[i]*cor vx[i] *= fr y[i] += vy[i] if ((y[i]+r) > height): y[i] = height-r # 更新第 i 球 X 座標的運算邏輯 def updateX(i): if ((x[i]+r) >= width or (x[i]-r) <= 0): vx[i] = -vx[i]*cor x[i] += vx[i] if ((x[i]+r) > width): x[i] = width-r elif ((x[i]-r) < 0): x[i] = r # 畫圓函式 def circle(x,y,r): ctx.beginPath() ctx.arc(x, y, r, 0, math.pi*2, True) ctx.fill() ctx.closePath() # 寫字函式 def text(s): ctx.fillStyle = \"#ff0000\" ctx.font = \"30px sans-serif\" ctx.textBaseline = \"bottom\" ctx.fillText(s,0,height) # 每隔特定時間, 進行動畫繪製 def animate(): # 刷新畫布 ctx.clearRect(0, 0, width, height) # 逐一重新繪製小球 ctx.fillStyle = \"#000000\" for i in range(n): updateY(i) updateX(i) circle(x[i],y[i],r) text(\"Click me!\") # 畫布點擊後執行的函式 def on_canvas_click(ev): browser.timer.set_interval(animate,0) # 只要使用者點擊在畫布上任何地方, 即執行 on_canvas_click 函式 canvas.bind('click', on_canvas_click, False) 上面小球自由落體的繪圖程式: <canvas id=\"plotarea\" width=\"600\" height=\"400\"></canvas> <script type=\"text/python3\"> # 導入 browser 模組中的 document, 並設為 doc 變數 from browser import document as doc # 導入數學模組 import math # 產生各小球的亂數速度用 import random # 導入 browser 中的計時器, 建立動畫用 import browser.timer # 準備繪圖畫布 canvas = doc[\"plotarea\"] ctx = canvas.getContext(\"2d\") # 取畫布的寬與高度 width = canvas.width height = canvas.height n = 20 # 已知數列內容個數, 先分別與 None 對應 x = [None]*n y = [None]*n vy = [None]*n vx = [None]*n # 重力加速度, Y 方向向下為正 g = 0.05 # 空氣的黏滯阻尼係數 cor = 0.7 # 球的彈力係數 fr = 0.95 # 球的半徑 r = 5 for i in range(n): x[i] = 300 y[i] = 100 # random.random() 將會產生介於 0 與 1 的浮點亂數 vx[i] = 2*(random.random()-.5) vy[i] = 2*(random.random()-.5) # 更新第 i 球 Y 座標的運算邏輯 def updateY(i): if ((y[i]+r) < height): #y = height vy[i] += g else: vy[i] = -vy[i]*cor vx[i] *= fr y[i] += vy[i] if ((y[i]+r) > height): y[i] = height-r # 更新第 i 球 X 座標的運算邏輯 def updateX(i): if ((x[i]+r) >= width or (x[i]-r) <= 0): vx[i] = -vx[i]*cor x[i] += vx[i] if ((x[i]+r) > width): x[i] = width-r elif ((x[i]-r) < 0): x[i] = r # 畫圓函式 def circle(x,y,r): ctx.beginPath() ctx.arc(x, y, r, 0, math.pi*2, True) ctx.fill() ctx.closePath() # 寫字函式 def text(s): ctx.fillStyle = \"#ff0000\" ctx.font = \"30px sans-serif\" ctx.textBaseline = \"bottom\" ctx.fillText(s,0,height) # 每隔特定時間, 進行動畫繪製 def animate(): # 刷新畫布 ctx.clearRect(0, 0, width, height) # 逐一重新繪製小球 ctx.fillStyle = \"#000000\" for i in range(n): updateY(i) updateX(i) circle(x[i],y[i],r) text(\"Click me!\") # 畫布點擊後執行的函式 def on_canvas_click(ev): browser.timer.set_interval(animate,0) # 只要使用者點擊在畫布上任何地方, 即執行 on_canvas_click 函式 canvas.bind('click', on_canvas_click, False) </script> 繪製日本國旗: 步驟1, 先能畫一條線: <canvas id=\"japanflag1\" width=\"600\" height=\"250\"></canvas> <script type=\"text/python3\"> from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag1\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (100, 100) 座標點 ctx.moveTo(100, 100) # 然後畫直線到 (150, 200) 座標點 ctx.lineTo(150, 200) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() </script> from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag1\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (100, 100) 座標點 ctx.moveTo(100, 100) # 然後畫直線到 (150, 200) 座標點 ctx.lineTo(150, 200) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() 接著畫四條直線: <canvas id=\"japanflag2\" width=\"600\" height=\"400\"></canvas> <script type=\"text/python\"> # 導入 doc from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag2\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 因為要畫四條直線, 這裡要將畫直線改寫為函式 # 定義畫直線的函式, 以 (x1, y1) 為起點, 畫到 (x2, y2) def draw_line(x1, y1, x2, y2): global ctx ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (x1, y1) 座標點 ctx.moveTo(x1, y1) # 然後畫直線到 (x2, y2) 座標點 ctx.lineTo(x2, y2) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() # 準備呼叫 draw_line() 四次以便畫出國旗外框四條線 # 假設從 (10, 10) 畫到 (410, 310) 的外框 # 先畫兩條水平線 draw_line(10, 10, 410, 10) draw_line(10, 310, 410, 310) # 再畫兩條垂直線 draw_line(10, 10, 10, 310) draw_line(410, 10, 410, 310) </script> # 導入 doc from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag2\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 因為要畫四條直線, 這裡要將畫直線改寫為函式 # 定義畫直線的函式, 以 (x1, y1) 為起點, 畫到 (x2, y2) def draw_line(x1, y1, x2, y2): global ctx ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (x1, y1) 座標點 ctx.moveTo(x1, y1) # 然後畫直線到 (x2, y2) 座標點 ctx.lineTo(x2, y2) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() # 準備呼叫 draw_line() 四次以便畫出國旗外框四條線 # 假設從 (10, 10) 畫到 (410, 310) 的外框 # 先畫兩條水平線 draw_line(10, 10, 410, 10) draw_line(10, 310, 410, 310) # 再畫兩條垂直線 draw_line(10, 10, 10, 310) draw_line(410, 10, 410, 310) 接著在四條直線中央畫一個圓: <canvas id=\"japanflag3\" width=\"650\" height=\"450\"></canvas> <script type=\"text/python\"> from browser import document import math # 準備繪圖畫布 canvas = document[\"japanflag3\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 因為要畫四條直線, 這裡要將畫直線改寫為函式 # 定義畫直線的函式, 以 (x1, y1) 為起點, 畫到 (x2, y2) def draw_line(x1, y1, x2, y2): global ctx ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (x1, y1) 座標點 ctx.moveTo(x1, y1) # 然後畫直線到 (x2, y2) 座標點 ctx.lineTo(x2, y2) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() # 準備呼叫 draw_line() 四次以便畫出國旗外框四條線 # 假設從 (10, 10) 畫到 (410, 310) 的外框 # 先畫兩條水平線 draw_line(10, 10, 410, 10) draw_line(10, 310, 410, 310) # 再畫兩條垂直線 draw_line(10, 10, 10, 310) draw_line(410, 10, 410, 310) # 以下要在框線中央畫一個圓, 設半徑為 80 # context.arc(x,y,r,sAngle,eAngle,counterclockwise) # arc(圓心 x, 圓心 y, 起始角, 終點角, 是否逆時鐘轉) circle_x = 10 + 400/2 circle_y = 10 + 300/2 ctx.beginPath() ctx.arc(circle_x, circle_y, 80, 0, math.pi*2, True) # 設線顏色為紅色 ctx.strokeStyle = 'rgb(255, 0, 0)' ctx.stroke() # 填色設為紅色 ctx.fillStyle = 'rgb(255, 0, 0)' ctx.fill() ctx.closePath() </script> from browser import document import math # 準備繪圖畫布 canvas = document[\"japanflag3\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 因為要畫四條直線, 這裡要將畫直線改寫為函式 # 定義畫直線的函式, 以 (x1, y1) 為起點, 畫到 (x2, y2) def draw_line(x1, y1, x2, y2): global ctx ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (x1, y1) 座標點 ctx.moveTo(x1, y1) # 然後畫直線到 (x2, y2) 座標點 ctx.lineTo(x2, y2) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() # 準備呼叫 draw_line() 四次以便畫出國旗外框四條線 # 假設從 (10, 10) 畫到 (410, 310) 的外框 # 先畫兩條水平線 draw_line(10, 10, 410, 10) draw_line(10, 310, 410, 310) # 再畫兩條垂直線 draw_line(10, 10, 10, 310) draw_line(410, 10, 410, 310) # 以下要在框線中央畫一個圓, 設半徑為 80 # context.arc(x,y,r,sAngle,eAngle,counterclockwise) # arc(圓心 x, 圓心 y, 起始角, 終點角, 是否逆時鐘轉) circle_x = 10 + 400/2 circle_y = 10 + 300/2 ctx.beginPath() ctx.arc(circle_x, circle_y, 80, 0, math.pi*2, True) # 設線顏色為紅色 ctx.strokeStyle = 'rgb(255, 0, 0)' ctx.stroke() # 填色設為紅色 ctx.fillStyle = 'rgb(255, 0, 0)' ctx.fill() ctx.closePath() 然後將各繪圖模組寫成函式: <canvas id=\"japanflag4\" width=\"650\" height=\"450\"></canvas> <script type=\"text/python\"> # 導入 doc from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag4\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 因為要畫四條直線, 這裡要將畫直線改寫為函式 # 定義畫直線的函式, 以 (x1, y1) 為起點, 畫到 (x2, y2) def draw_line(ctx, x1, y1, x2, y2): ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (x1, y1) 座標點 ctx.moveTo(x1, y1) # 然後畫直線到 (x2, y2) 座標點 ctx.lineTo(x2, y2) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() # 將外框線寫成函式, 寬為高的 3/2 倍 # 因為 draw_frame 函式呼叫 draw_line() 因此要在其後定義 def draw_frame(ctx, x, y, w): # 準備呼叫 draw_line() 四次以便畫出國旗外框四條線 # 假設從 (x, y) 畫到 (410, 310) 的外框 # 先畫兩條水平線 draw_line(ctx, x, y, w*3/2+x, y) draw_line(ctx, x, w+y, w*3/2+x, w+y) # 再畫兩條垂直線 draw_line(ctx, x, y, x, w+y) draw_line(ctx, w*3/2+x, y, w*3/2+x, w+y) def draw_circle(x, y, r, fill=None): global ctx ctx.beginPath() ctx.arc(x, y, r, 0, math.pi*2, True) if fill == None: ctx.fillStyle = 'rgb(255, 0, 0)' ctx.fill() else: ctx.strokeStyle = \"rgb(255, 0, 0)\" ctx.stroke() ctx.closePath() # 呼叫 draw_frame() width = 400 draw_frame(ctx, 10, 10, width) # 計算框的中心點座標 x_center = 10 + width*3/2/2 y_center = 10 + width/2 # 中間圓的直徑為寬的 3/5 radius = width*3/5/2 draw_circle(x_center, y_center, radius) </script> # 導入 doc from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag4\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 因為要畫四條直線, 這裡要將畫直線改寫為函式 # 定義畫直線的函式, 以 (x1, y1) 為起點, 畫到 (x2, y2) def draw_line(ctx, x1, y1, x2, y2): ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (x1, y1) 座標點 ctx.moveTo(x1, y1) # 然後畫直線到 (x2, y2) 座標點 ctx.lineTo(x2, y2) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() # 將外框線寫成函式, 寬為高的 3/2 倍 # 因為 draw_frame 函式呼叫 draw_line() 因此要在其後定義 def draw_frame(ctx, x, y, w): # 準備呼叫 draw_line() 四次以便畫出國旗外框四條線 # 假設從 (x, y) 畫到 (410, 310) 的外框 # 先畫兩條水平線 draw_line(ctx, x, y, w*3/2+x, y) draw_line(ctx, x, w+y, w*3/2+x, w+y) # 再畫兩條垂直線 draw_line(ctx, x, y, x, w+y) draw_line(ctx, w*3/2+x, y, w*3/2+x, w+y) def draw_circle(x, y, r, fill=None): global ctx ctx.beginPath() ctx.arc(x, y, r, 0, math.pi*2, True) if fill == None: ctx.fillStyle = 'rgb(255, 0, 0)' ctx.fill() else: ctx.strokeStyle = \"rgb(255, 0, 0)\" ctx.stroke() ctx.closePath() # 呼叫 draw_frame() width = 400 draw_frame(ctx, 10, 10, width) # 計算框的中心點座標 x_center = 10 + width*3/2/2 y_center = 10 + width/2 # 中間圓的直徑為寬的 3/5 radius = width*3/5/2 draw_circle(x_center, y_center, radius) 接下來畫中華民國國旗: # 導入 doc from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"rocflag\"] ctx = canvas.getContext(\"2d\") # 進行座標轉換, x 軸不變, y 軸反向且移動 canvas.height 單位光點 # ctx.setTransform(1, 0, 0, -1, 0, canvas.height) # 以下採用 canvas 原始座標繪圖 flag_w = canvas.width flag_h = canvas.height circle_x = flag_w/4 circle_y = flag_h/4 # 先畫滿地紅 ctx.fillStyle='rgb(255, 0, 0)' ctx.fillRect(0,0,flag_w,flag_h) # 再畫青天 ctx.fillStyle='rgb(0, 0, 150)' ctx.fillRect(0,0,flag_w/2,flag_h/2) # 畫十二道光芒白日 ctx.beginPath() star_radius = flag_w/8 angle = 0 for i in range(24): angle += 5*math.pi*2/12 toX = circle_x + math.cos(angle)*star_radius toY = circle_y + math.sin(angle)*star_radius # 只有 i 為 0 時移動到 toX, toY, 其餘都進行 lineTo if (i): ctx.lineTo(toX, toY) else: ctx.moveTo(toX, toY) ctx.closePath() # 將填色設為白色 ctx.fillStyle = '#fff' ctx.fill() # 白日:藍圈 ctx.beginPath() ctx.arc(circle_x, circle_y, flag_w*17/240, 0, math.pi*2, True) ctx.closePath() # 填色設為藍色 ctx.fillStyle = 'rgb(0, 0, 149)' ctx.fill() # 白日:白心 ctx.beginPath() ctx.arc(circle_x, circle_y, flag_w/16, 0, math.pi*2, True) ctx.closePath() # 填色設為白色 ctx.fillStyle = '#fff' ctx.fill() <canvas id=\"rocflag\" width=\"650\" height=\"450\"></canvas> <script type=\"text/python3\"> # 導入 doc from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"rocflag\"] ctx = canvas.getContext(\"2d\") # 進行座標轉換, x 軸不變, y 軸反向且移動 canvas.height 單位光點 # ctx.setTransform(1, 0, 0, -1, 0, canvas.height) # 以下採用 canvas 原始座標繪圖 flag_w = canvas.width flag_h = canvas.height circle_x = flag_w/4 circle_y = flag_h/4 # 先畫滿地紅 ctx.fillStyle='rgb(255, 0, 0)' ctx.fillRect(0,0,flag_w,flag_h) # 再畫青天 ctx.fillStyle='rgb(0, 0, 150)' ctx.fillRect(0,0,flag_w/2,flag_h/2) # 畫十二道光芒白日 ctx.beginPath() star_radius = flag_w/8 angle = 0 for i in range(24): angle += 5*math.pi*2/12 toX = circle_x + math.cos(angle)*star_radius toY = circle_y + math.sin(angle)*star_radius # 只有 i 為 0 時移動到 toX, toY, 其餘都進行 lineTo if (i): ctx.lineTo(toX, toY) else: ctx.moveTo(toX, toY) ctx.closePath() # 將填色設為白色 ctx.fillStyle = '#fff' ctx.fill() # 白日:藍圈 ctx.beginPath() ctx.arc(circle_x, circle_y, flag_w*17/240, 0, math.pi*2, True) ctx.closePath() # 填色設為藍色 ctx.fillStyle = 'rgb(0, 0, 149)' ctx.fill() # 白日:白心 ctx.beginPath() ctx.arc(circle_x, circle_y, flag_w/16, 0, math.pi*2, True) ctx.closePath() # 填色設為白色 ctx.fillStyle = '#fff' ctx.fill() </script>","title":"2016Fall 機械設計主題教學"}]};