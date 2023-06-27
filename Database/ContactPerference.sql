CREATE TABLE [dbo].[ContactPerference]
(
    [Id] INT IDENTITY(1,1) NOT NULL,
    [Value] NVARCHAR(255) NOT NULL,
    [ContactType] TINYINT NOT NULL,
    [UserId] INT NOT NULL,
    PRIMARY KEY ([Id]),
    FOREIGN KEY ([UserId]) REFERENCES [dbo].[User]([Id]),
    FOREIGN KEY ([ContactType]) REFERENCES [dbo].[ContactType]([Id])
)
