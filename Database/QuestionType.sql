CREATE TABLE [dbo].[QuestionType]
(
  [Id] TINYINT PRIMARY KEY NOT NULL,
  [Label] NVARCHAR(30)
)
GO;
INSERT INTO [dbo].[QuestionType] ([Id], [Label]) VALUES
    (0, 'Multiple Choice Single Answer'),
    (1, 'Multiple Choice Multi Answer'),
    (2, 'True False'),
    (3,'Summary'),
    (4,'Fill In The Blank');