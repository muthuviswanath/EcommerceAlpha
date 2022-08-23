USE [Walkabout]
GO

INSERT INTO [dbo].[User]
           ([UserName]
           ,[Password]
           ,[Role]
           ,[EmailId]
           ,[Address])
     VALUES
           ('Himalaya','Himalaya','user','h@gmail.com','BLR'),
		   ('Sakshi','Sakshi','user','s@gmail.com','BLR'),
		   ('Kushal','Kushal','seller','k@gmail.com','JD'),
		   ('Devansh','Devansh','seller','d@gmail.com','DEL')
GO

