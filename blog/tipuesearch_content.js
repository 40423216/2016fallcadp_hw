var tipuesearch = {"pages":[{"url":"./pages/about/","title":"About","tags":"misc","text":"2016Fall 修課成員網誌"},{"url":"./2016fall-ji-jie-she-ji-zhu-ti-jiao-xue.html","title":"2016Fall 機械設計主題教學","tags":"Misc","text":"知識管理與最佳化應用實驗室試圖利用計算機程式、網際內容管理、電腦輔助設計實習與協同產品設計實習等課程, 進行與機械設計相關的主題式教學, 其中包含強化創造力的教學、令學員熟習六種工程表達方式, 並且俱備融入協同設計所需要的四大面向知識與技能. 機械設計主題教學 創造力三元素, 機械設計的六種表達, 協同設計的四大面向. 強化創造能力 - 自學力、程式力與想像力 (Creative Competencies) 熟習六種表達 - 口語、文字、2D、3D、理論與實體表達 (Six Presentation Methods) 融入協同設計 - 電腦、網路、軟硬體工具與協同專案 (Collaborative Designs) 2016 Fall CADP B 分組網頁: 第1組 : 40123252 40223128 40223130 40223215 40223233 第2組 : 40223205 40223206 40423225 40423231 40423240 40423250 第3組 : 40423201 40423202 40423203 40423211 40439221 42423223 第4組 : 40423204 40423221 40423228 40423243 40423253 40423254 第5組 : 40423205 40423227 40423235 40423236 40423237 40423238 第6組 : 40423206 40423214 40423216 40423224 40423226 40423229 第7組 : 40423207 40423210 40423219 40423220 40423241 40423246 第8組 : 40423208 40423213 40423232 40423233 第9組 : 40423209 40423212 40423217 40423218 40423239 40423255 第10組 : 40423222 40423245 40423248 40423251 第11組 : 40423234 40423242 40423244 40423247 40423249 40423252 以下為分組資料處理程式: content = open(\"2016fall_cadp_b_groups.txt\").read() #print(content) result = content.splitlines() #print(result) gno = 1 for i in range(len(result)): #print(result[i]) group = result[i].split(\":\") #列出組序 print(\"<a href='../g\"+str(gno)+\"'>第\"+str(gno)+\"組</a>:<br />\") #print(\"第\"+str(gno)+\"組:<br />\") #取 group 第2成員, 用逗點隔開納入數列後, 利用[:-1]去掉最後空白 #print(group[1].split(\",\")[:-1]) gmember = group[1].split(\",\")[:-1] for j in range(len(gmember)): #print(gmember[j]) print(\"<a href='../g\"+str(gno)+\"/\"+str(gmember[j])+\"'>\"+ \\ str(gmember[j])+\"</a> \") print(\"<br />\") gno = gno + 1"}]};