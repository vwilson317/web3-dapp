CREATE TABLE [dbo].[ContactProfile]
(
    [Id] INT IDENTITY(1,1),
    [UserId] INT NOT NULL,
    [Label] NVARCHAR(255) NOT NULL,
    PRIMARY KEY ([Id]),
    FOREIGN KEY ([UserId]) REFERENCES [dbo].[User]([Id])
)
