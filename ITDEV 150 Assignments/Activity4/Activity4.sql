/*1*/
SELECT 
Categories.CategoryName,
Products.ProductName, Products.ListPrice
FROM Products
INNER JOIN Categories
	ON Products.CategoryID = Categories.CategoryID
ORDER BY CategoryName, ProductName;

/*2*/
SELECT
Customers.FirstName, Customers.LastName, 
Addresses.Line1, Addresses.City, Addresses.State, Addresses.ZipCode
FROM Customers
RIGHT JOIN Addresses
	ON Addresses.CustomerID = Customers.CustomerID
WHERE Customers.EmailAddress = 'allan.sherwood@yahoo.com';

/*3*/
SELECT
Customers.FirstName, Customers.LastName, 
Addresses.Line1, Addresses.City, Addresses.State, Addresses.ZipCode
FROM Customers
RIGHT JOIN Addresses
	ON Addresses.CustomerID = Customers.CustomerID
WHERE Customers.ShippingAddressID = Addresses.AddressID;

/*4*/
SELECT
Customers.LastName AS LastName, Customers.FirstName AS FirstName,
Orders.OrderDate AS OrderDate,
Products.ProductName AS ProductName, 
OrderItems.ItemPrice AS ItemPrice, OrderItems.DiscountAmount AS DiscountAmount, OrderItems.Quantity AS Quantity
FROM Customers
INNER JOIN Orders
	ON Orders.CustomerID = Customers.CustomerID
INNER JOIN OrderItems
	ON OrderItems.OrderID = Orders.OrderID
INNER JOIN Products
	ON Products.ProductID = OrderItems.ProductID
ORDER BY Customers.LastName, Orders.OrderDate, Products.ProductName;

/*6*/
SELECT
Categories.CategoryName,
Products.ProductID
FROM Categories
LEFT JOIN Products
	ON Categories.CategoryID = Products.CategoryID
WHERE Products.ProductID IS NULL;

/*7*/
SELECT 
'SHIPPED' as ShipStatus, OrderID, OrderDate
FROM Orders
WHERE ShipDate IS NOT NULL
UNION
SELECT 'NOT SHIPPED' as ShipStatus, OrderID, OrderDate
FROM Orders
WHERE ShipDate IS NULL
ORDER BY OrderDate;