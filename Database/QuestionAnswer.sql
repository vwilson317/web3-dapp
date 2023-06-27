CREATE TABLE [dbo].[QuestionAnswer]
(
    [QuestionId] INT NOT NULL,
    [AnswerId] INT NOT NULL,
    PRIMARY KEY ([QuestionId], [AnswerId]),
    FOREIGN KEY ([QuestionId]) REFERENCES [dbo].[Question]([Id]),
    FOREIGN KEY ([AnswerId]) REFERENCES [dbo].[Answer]([Id])
)