--問題2-4
create table 都道府県
(
    コード integer,
    地域 varchar,
    都道府県名 varchar,
    県庁所在地 varchar,
    面積 integer
);
INSERT into 都道府県
    (コード,地域,都道府県名,面積)
VALUES
    (26, '近畿', '京都', 4613);
INSERT into 都道府県
    (コード,地域,都道府県名,県庁所在地,面積)
VALUES
    (37, '四国', '香川', '高松', 1876);
INSERT into 都道府県
    (コード,都道府県名,県庁所在地)
VALUES
    (40, '福岡', '福岡');
--問題2-5
UPDATE 都道府県
SET 県庁所在地 ='京都'
WHERE コード = 26
UPDATE 都道府県
SET 地域 ='九州'
WHERE 面積 = 4976
DELETE FROM 都道府県
WHERE コード IS NULL