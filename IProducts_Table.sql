USE [Walkabout]
GO

INSERT INTO [dbo].[Products]
           ([ProductName]
           ,[Quantity]
           ,[Price]
           ,[ImagePath]
           ,[ProductDescription]
           ,[ProductRating]
           ,[ProductOfferPrice]
           ,[ProductCategory])
     VALUES
           ('Nike Sneakers',2,2000,'/assests/images/s1.jpg','Black and Red Sneakers',4.5,1800,'M'),
		   ('WoodLand Boots',4,3000,'/assests/images/b1.jpg','Brown boots',3.7,2999,'M'),
		   ('Puma Sports Shoes',6,2800,'/assests/images/ss1.jpg','White Sports Shoes',4.1,2500,'F'),
		   ('Gucci Loafers',10,2100,'/assests/images/l1.jpg','Olive Loafars',3.8,1400,'K'),
		   ('Adidas Sports Shoes',4,8000,'/assests/images/ss2.jpg','Black and White Sports Shoes',4.9,7600,'F')
GO

