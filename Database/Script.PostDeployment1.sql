Use SimpleDB
-- Create a temporary table
CREATE TABLE #TempTable (
    id INT,
    gender BIT
);

-- Populate the temporary table with 100 records
DECLARE @Counter INT = 1;

WHILE @Counter <= 100
BEGIN
    INSERT INTO #TempTable (id, gender)
    VALUES (ABS(CHECKSUM(NEWID())) % 1000, CAST(ABS(CHECKSUM(NEWID())) % 2 AS BIT));

    SET @Counter = @Counter + 1;
END;

-- Insert users with unique IDs
INSERT INTO [User] ([Name], DisplayName, Email, [Password], Gender)
SELECT
  CONCAT('User', id) AS [Name],
  CONCAT('User ', id) AS DisplayName,
  CONCAT('user', id, '@example.com') AS Email,
  CONCAT('password', id) AS [Password],
  CASE WHEN id % 2 = 0 THEN 1 ELSE 0 END AS Gender
FROM #TempTable;

-- Drop the temporary table
DROP TABLE #TempTable;

-- delete from [dbo].[User]
-- select * from temp_ids