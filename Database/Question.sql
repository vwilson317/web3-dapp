CREATE TABLE [dbo].[Question]
(
    [Id] INT IDENTITY(1,1) NOT NULL,
    [QuestionType] TINYINT NOT NULL,
    [Value] NVARCHAR(255) NOT NULL,
    [GameId] INT,
    [UserId] INT NOT NULL,
    [TimeLimitSecs] INT,
    [OrderIndex] INT,
    PRIMARY KEY ([Id]),
    FOREIGN KEY ([GameId]) REFERENCES [dbo].[Game]([Id]),
    FOREIGN KEY ([UserId]) REFERENCES [dbo].[User]([Id]),
    FOREIGN KEY ([QuestionType]) REFERENCES [dbo].[QuestionType]([Id]),

    -- CONSTRAINT order_unqiue 
    -- UNIQUE ([OrderIndex], [GameId])

    -- CONSTRAINT CH_Question_OrderIndex_CheckIsNull
    -- CHECK ([OrderIndex] IS NOT NULL AND )
)
