CREATE TABLE [dbo].[ContactPerference]
(
    [Id] INT IDENTITY(1,1) NOT NULL,
    [Value] NVARCHAR(255) NOT NULL,
    [ContactType] [osf].[ContactType] NOT NULL,
    [UserId] INT NOT NULL,
    PRIMARY KEY ([Id]),
    FOREIGN KEY ([UserId]) REFERENCES [dbo].[User]([Id])
)
