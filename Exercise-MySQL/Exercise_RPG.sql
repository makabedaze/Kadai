--1
SELECT ID , 名称 , 職業コード, HP, MP, 状態コード
FROM パーティー;
--2
SELECT 名称 AS なまえ, HP AS 現在のHP, MP AS 現在のMP
FROM パーティー;
--3
SELECT *
FROM イベント;
--4
SELECT イベント番号 AS 番号, イベント名称 AS 場面
FROM イベント;
--5 SKIP
--6
SELECT *
FROM パーティー
WHERE ID = 'C02';
--7
UPDATE パーティー
SET HP = 120
WHERE ID = 'C02';
--8
SELECT ID, 名称, HP
FROM パーティー
WHERE HP < 100;
--9
SELECT ID, 名称, MP
FROM パーティー
WHERE MP >= 100;
--10
SELECT イベント番号, イベント名称, タイプ
FROM イベント
WHERE タイプ <> 3;
--11
SELECT イベント番号, イベント名称
FROM イベント
WHERE イベント番号 <= 5;
--12
SELECT イベント番号, イベント名称
FROM イベント
WHERE イベント番号 > 20;
--13
SELECT イベント番号, イベント名称
FROM イベント
WHERE 前提イベント番号 IS NULL;
--14
SELECT イベント番号, イベント名称, 後続イベント番号
FROM イベント
WHERE 後続イベント番号 IS NOT NULL;
--15
UPDATE パーティー
SET 状態コード = '01'
WHERE 名称 LIKE '%ミ%';
--16
SELECT ID, 名称, HP
FROM パーティー
WHERE HP BETWEEN 120 AND 160;
SELECT ID, 名称, HP
FROM パーティー
WHERE HP >= 120 AND HP <= 160;
--17
SELECT 名称, 職業コード
FROM パーティー
WHERE 職業コード IN('01','10','11');
SELECT 名称, 職業コード
FROM パーティー
WHERE 職業コード='01' OR 職業コード='10' OR 職業コード='11';
--18
SELECT 名称, 状態コード
FROM パーティー
WHERE 状態コード NOT IN('00','09');
--19
SELECT *
FROM パーティー
WHERE HP >100 AND MP > 100;
--20
SELECT *
FROM パーティー
WHERE ID LIKE 'A%' AND 職業コード LIKE '2%';
--21
SELECT *
FROM イベント
WHERE タイプ = 1 AND 前提イベント番号 IS NOT NULL AND 後続イベント番号 IS NOT NULL;
--22 SKIP
--23 
SELECT DISTINCT 状態コード
FROM パーティー
--24
SELECT ID, 名称
FROM パーティー
ORDER BY ID
--25
SELECT 名称, 職業コード
FROM パーティー
ORDER BY 名称 DESC
--26
SELECT 名称, HP, 状態コード
FROM パーティー
ORDER BY 状態コード,HP DESC
--27
SELECT *
FROM イベント
ORDER BY 3,1
--28
SELECT *
FROM パーティー
ORDER BY HP DESC
LIMIT 3
--29
SELECT * 
FROM パーティー
ORDER BY HP DESC
LIMIT 1 OFFSET 2
--30
SELECT (CASE WHEN 職業コード LIKE '1%' THEN 'S'
WHEN 職業コード LIKE '2%' THEN 'M'
ELSE 'A' END)
AS 職業区分 , 職業コード,ID,名称 
FROM パーティー
ORDER BY 職業コード
--31 SKIP
--32 SKIP
--33 
SELECT 名称 AS なまえ,HP,HP+50 AS 装備後のHP
FROM パーティー
WHERE 職業コード IN('11','21')
--34
UPDATE パーティー
SET MP = MP + 20
WHERE ID IN ("A01","A03")
--35
SELECT 名称 AS 名前,HP AS 現在のHP,HP*2 AS 予想されるダメージ
FROM パーティー
WHERE 職業コード = '11'
--36
SELECT 名称 AS 名前,CONCAT(HP,'/',MP) AS HPとMP ,状態コード AS ステータス
FROM パーティー
WHERE 状態コード <> '00'
--37
SELECT イベント番号,イベント名称,
(CASE WHEN タイプ = '1' THEN '強制'
WHEN タイプ = '2' THEN 'フリー'
ELSE '特殊' END)AS タイプ,
(CASE WHEN イベント番号 BETWEEN 1 AND 10 THEN '序盤'
WHEN イベント番号 BETWEEN 11 AND 17 THEN '中盤'
ELSE '終盤' END
) AS 発生時期
FROM イベント
--38
SELECT 名称  AS 名前,
HP AS 現在のHP,
CHAR_LENGTH(名称) * 10 AS 予想ダメージ
FROM パーティー
--39 SKIP
UPDATE パーティー
SET 状態異常 =
--40 SKIP
--41 SKIP
--42 
SELECT 名称 AS 名前,HP,
POW(HP,1) AS 攻撃1回目,
POW(HP,2) AS 攻撃2回目,
POW(HP,3) AS 攻撃3回目
FROM パーティー
WHERE 職業コード = '10'
--43 
SELECT 名称 AS なまえ,HP,状態コード,
(CASE WHEN HP <= 50 THEN 3
WHEN HP BETWEEN 51 AND 100 THEN 2
WHEN HP BETWEEN 101 AND 150 THEN 1
ELSE 0 END) AS リスク値
FROM パーティー
ORDER BY リスク値 DESC,HP
--44
SELECT CASE WHEN 前提イベント番号 IS NULL THEN '前提無し' 
ELSE 前提イベント番号 END
AS 前提イベント番号,
イベント番号, 
CASE WHEN 後続イベント番号 IS NULL THEN '後続無し'
ELSE 後続イベント番号 END
AS 後続イベント番号
FROM イベント
ORDER BY イベント番号
--45
SELECT MAX(HP),MIN(HP),AVG(HP),MAX(MP),MIN(MP),AVG(MP)
FROM パーティー
--46-----------------------------------------------
SELECT CASE タイプ WHEN '1' THEN '強制' 
WHEN '2' THEN 'フリー' 
ELSE '特殊' END AS タイプ,
COUNT(イベント番号) AS イベント数 
FROM イベント GROUP BY タイプ;
--47
SELECT クリア結果,
COUNT(クリア結果)
FROM 経験イベント
WHERE クリア結果 IS NOT NULL
GROUP BY クリア結果
ORDER BY クリア結果
--48
SELECT CASE WHEN SUM(MP) < 500 THEN '敵は見とれている'
WHEN SUM(MP) BETWEEN 500 AND 1000 THEN '敵は呆然としてる'
ELSE '敵はひれ伏している' END AS 小さな輝石
FROM パーティー
--49 
SELECT CASE WHEN クリア区分=0 THEN '参加したがクリアしてない'
ELSE 'クリアした' END AS クリア区分,
COUNT(*)
FROM 経験イベント
GROUP BY クリア区分
ORDER BY クリア区分
--50
SELECT
SUBSTRING(職業コード,1,1)
AS 職業タイプ,
MAX(HP),
MIN(HP),
AVG(HP),
MAX(MP),
MIN(MP),
AVG(MP)
FROM パーティー
GROUP BY SUBSTRING(職業コード,1,1)
--57
SELECT 
イベント番号,
イベント名称
FROM イベント
WHERE イベント番号 
NOT IN (SELECT イベント番号 FROM 経験イベント);
--58
--62
SELECT 
ルート番号,
イベント.イベント番号,
イベント名称,
クリア結果
FROM 経験イベント
JOIN イベント
ON イベント.イベント番号=経験イベント.イベント番号
