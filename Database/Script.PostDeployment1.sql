USE SimpleDB

-- Create a temporary table
CREATE TABLE #TempTable (
    id INT,
    gender BIT
);

-- Populate the temporary table with 100 records
DECLARE @Counter INT = 1;

WHILE @Counter <= 20
BEGIN
    INSERT INTO #TempTable (id, gender)
    VALUES (ABS(CHECKSUM(NEWID())) % 1000, CAST(ABS(CHECKSUM(NEWID())) % 2 AS BIT));

    SET @Counter = @Counter + 1;
END;

-- Insert users with unique IDs
INSERT INTO [dbo].[User] ([Name], DisplayName, Email, [Password], Gender)
SELECT
    CONCAT('User', id) AS [Name],
    CONCAT('User ', id) AS DisplayName,
    CONCAT('user', id, '@example.com') AS Email,
    CONCAT('password', id) AS [Password],
    CASE WHEN id % 2 = 0 THEN 1 ELSE 0 END AS Gender
FROM #TempTable
WHERE CONCAT('User', id) NOT IN (SELECT [Name] FROM [User]);

-- Drop the temporary table
DROP TABLE #TempTable;

-- ContactType Static Data
INSERT INTO [dbo].[ContactType] ([Id], [Label]) VALUES
    (0, 'Personal Phone Number'),
    (1, 'LinkedIn'),
    (2, 'Email'),
    (3, 'Work Phone Number'),
    (4, 'Instagram'),
    (5,'SnapChat'),
    (6,'Facebook'),
    (7,'FakeNumber'),
    (8,'Work Email'),
    (9,'SimpleApp DisplayName'),
    (10,'Other');

-- QuestionType static data
INSERT INTO [dbo].[QuestionType] ([Id], [Label]) VALUES
    (0, 'Multiple Choice Single Answer'),
    (1, 'Multiple Choice Multi Answer'),
    (2, 'True False'),
    (3,'Summary'),
    (4,'Fill In The Blank');

DECLARE @MinGames INT = 1;
DECLARE @MaxGames INT = 10;
DECLARE @UserCount INT = 20;

-- Create a temporary table to hold user IDs
CREATE TABLE #UserIds (
    [UserId] INT
);

-- Insert user IDs into the temporary table
INSERT INTO #UserIds ([UserId])
SELECT [Id]
FROM [dbo].[User]

-- Variables for game details
DECLARE @UserId INT;
DECLARE @Title NVARCHAR(255);
DECLARE @CreatedUtc DATETIME2;
DECLARE @UpdatedUtc DATETIME2;

-- Loop through each user
WHILE @UserCount > 0
BEGIN
    -- Select a random number of games to create for the current user
    DECLARE @GamesCount INT = ABS(CHECKSUM(NEWID())) % (@MaxGames - @MinGames + 1) + @MinGames;
    
    -- Set the user ID for the current iteration
    SELECT TOP 1 @UserId = [UserId]
    FROM #UserIds;
    
    -- Generate and insert games for the current user
    WHILE @GamesCount > 0
    BEGIN
        SET @Title = 'Game ' + CAST(ABS(CHECKSUM(NEWID())) % 1000 AS NVARCHAR(255));
        SET @CreatedUtc = GETUTCDATE();
        SET @UpdatedUtc = GETUTCDATE();
        
        INSERT INTO [dbo].[Game] ([UserId], [Title], [CreatedUtc], [UpdatedUtc])
        VALUES (@UserId, @Title, @CreatedUtc, @UpdatedUtc);
        
        SET @GamesCount = @GamesCount - 1;
    END;
    
    -- Remove the processed user ID from the temporary table
    DELETE FROM #UserIds WHERE [UserId] = @UserId;
    
    SET @UserCount = @UserCount - 1;
END;

-- Drop the temporary table
DROP TABLE #UserIds;
