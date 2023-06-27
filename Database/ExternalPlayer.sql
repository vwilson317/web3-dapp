CREATE TABLE [osf].[ExternalPlayer]
(
    [Id] INT IDENTITY(1,1) NOT NULL,
    [CustomIdentifier] NVARCHAR(255) NOT NULL,
    [ContactType] [dbo].[ContactType],
    [WasConvertedToAppUser] BIT,
    PRIMARY KEY ([Id])
)
