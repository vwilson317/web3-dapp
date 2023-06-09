CREATE TABLE [dbo].[Game] (
    [Id] INT IDENTITY(1,1) PRIMARY KEY,
    [UserId] INT FOREIGN KEY REFERENCES [dbo].[User]([Id]) NOT NULL,
    [Title] NVARCHAR(255) NOT NULL,
    [CreatedUtc] DATETIME2 NOT NULL,
    [UpdatedUtc] DATETIME2 NOT NULL,
);