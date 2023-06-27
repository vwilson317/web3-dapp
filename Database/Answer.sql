CREATE TABLE [dbo].[Answer]
(
    [Id] INT IDENTITY(1,1) NOT NULL,
    [Value] NVARCHAR(255),
    [TrueFalse] BIT,
    PRIMARY KEY ([Id]),

    CONSTRAINT CK_Answer_Value_TrueFalse_CheckNotNull
    CHECK ([Value] IS NOT NULL OR [TrueFalse] IS NOT NULL)
)
