CREATE TABLE [dbo].[Config](
    [Id] INT IDENTITY(1,1),
    [TimeLimitSec] INT,
    [PassingGrade] FLOAT NOT NULL,
    [CustomGreetingMsgs] NVARCHAR(255),
    [CustomFailureMsgs] NVARCHAR(255),
    [IsRandomQuestions] BIT,
    [IsPredefinedQuestions] BIT,
    [QuestionCount] TINYINT, --question count (cal) will be number of answers in time frame
    [GameId] INT FOREIGN KEY REFERENCES [dbo].[Game]([Id])
    PRIMARY KEY ([Id])
)
