CREATE TABLE [dbo].[Asset]
(
  [Id] INT NOT NULL PRIMARY KEY,
  [UserId] INT,
  FOREIGN KEY (UserId) REFERENCES [User](Id),
  [Type] TINYINT NOT NULL,
  [FileName] NVARCHAR(255),
  [LocationUri] NVARCHAR(MAX)
)