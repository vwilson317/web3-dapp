CREATE TABLE [dbo].[ExternalPlayer]
(
    [Id] INT IDENTITY(1,1) NOT NULL,
    [CustomIdentifier] NVARCHAR(255) NOT NULL,
    [ContactType] TINYINT,
    [WasConvertedToAppUser] BIT,
    PRIMARY KEY ([Id]),
    FOREIGN KEY ([ContactType]) REFERENCES [dbo].[ContactType]([Id])
)
