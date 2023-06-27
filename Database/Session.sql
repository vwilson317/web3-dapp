CREATE TABLE [dbo].[Session]
(
    [Id] INT IDENTITY(1,1) NOT NULL,
    [GameId] INT NOT NULL,
    [ExternalPlayerId] INT,
    [Active] BIT,
    [StartUtc] DATETIME2 NOT NULL,
    [EndUtc] DATETIME2,
    [UserId] INT,
    [CorrectCount] INT,
    [WrongCount] INT,
    PRIMARY KEY ([Id]),
    FOREIGN KEY ([GameId]) REFERENCES [dbo].[Game]([Id]),
    FOREIGN KEY ([UserId]) REFERENCES [dbo].[User]([Id]),
    FOREIGN KEY ([ExternalPlayerId]) REFERENCES [dbo].[ExternalPlayer]([Id]),

    CONSTRAINT CK_Session_ExternalPlayerId_User_NoNullCheck
    CHECK([ExternalPlayerId] IS NOT NULL OR [UserId] IS NOT NULL)
)
