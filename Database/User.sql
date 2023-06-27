CREATE TABLE [dbo].[User]
(
  [Id] int IDENTITY(1,1) PRIMARY KEY,
  [Name] NVARCHAR(255) NOT NULL,
  [DisplayName] NVARCHAR(255) Unique,
  [Email] VARCHAR(255) NOT NULL Unique,
  [Password] VARCHAR(255) NOT NULL,
  [Gender] TINYINT

  -- CONSTRAINT user_unique UNIQUE (DisplayName, Email)
)