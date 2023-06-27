CREATE TABLE [dbo].[Asset]
(
  [Id] INT IDENTITY(1,1) PRIMARY KEY,
  [UserId] INT NOT NULL,
  FOREIGN KEY (UserId) REFERENCES [dbo].[User](Id),
  [Type] TINYINT NOT NULL,
  [FileName] NVARCHAR(255) NOT NULL,
  [LocationUri] NVARCHAR(max) NOT NULL

  -- CONSTRAINT unique_asset UNIQUE ([FileName], [LocationUri], [Type], [UserId])
)