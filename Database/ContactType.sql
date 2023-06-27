CREATE TABLE [dbo].[ContactType] 
(
  [Id] TINYINT PRIMARY KEY NOT NULL,
  [Label] NVARCHAR(30) NOT NULL
)
GO;
INSERT INTO [dbo].[ContactType] ([Id], [Label]) VALUES
    (0, 'Personal Phone Number'),
    (1, 'LinkedIn'),
    (2, 'Email'),
    (3, 'Work Phone Number'),
    (4, 'Instagram'),
    (5,'SnapChat'),
    (6,'Facebook'),
    (7,'FakeNumber'),
    (8,'Work Email'),
    (9,'SimpleApp DisplayName'),
    (10,'Other');