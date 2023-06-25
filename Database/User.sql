CREATE TABLE [dbo].[User]
(
  [Id] int NOT NULL PRIMARY KEY,
  [Name] NVARCHAR(255) NOT NULL,
  [DisplayName] NVARCHAR(255),
  [Email] VARCHAR(255) NOT NULL,
  [Password] VARCHAR(255) NOT NULL,
  [Gender] TINYINT
)