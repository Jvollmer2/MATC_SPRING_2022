/*Activity 1*/
SELECT COUNT(OrderID) as OrderCount, SUM(orders.TaxAmount) as TaxTotal
FROM Orders;

/*Activity 2*/
SELECT CategoryName, COUNT(ProductID) as ProductCount, MAX(ListPrice) as MostExpensiveProduct
FROM Categories
JOIN Products
	ON Categories.CategoryID = Products.CategoryID
GROUP BY CategoryName
ORDER BY COUNT(ProductID) DESC;

/*Activity 3*/
SELECT EmailAddress, SUM(ItemPrice*Quantity) as ItemPriceTotal, SUM(DiscountAmount*Quantity) as DiscountAmountTotal
FROM Customers
JOIN Orders
	ON Orders.CustomerID = Customers.CustomerID
INNER JOIN OrderItems
	ON OrderItems.OrderID = Orders.OrderID
GROUP BY EmailAddress
ORDER BY ItemPriceTotal DESC;

/*Activity 4*/
SELECT EmailAddress, COUNT(ItemID) as OrderCount, SUM((ItemPrice - DiscountAmount)*Quantity) as OrderTotal
FROM Customers
JOIN Orders
	ON Orders.CustomerID = Customers.CustomerID
INNER JOIN OrderItems
	ON OrderItems.OrderID = Orders.OrderID
GROUP BY EmailAddress
HAVING COUNT(EmailAddress) > 1
ORDER BY OrderTotal DESC;

/*Activity 5*/
SELECT EmailAddress, COUNT(ItemID) as OrderCount, SUM((ItemPrice - DiscountAmount)*Quantity) as OrderTotal
FROM Customers
JOIN Orders
	ON Orders.CustomerID = Customers.CustomerID
INNER JOIN OrderItems
	ON OrderItems.OrderID = Orders.OrderID
WHERE ItemPrice > 400
GROUP BY EmailAddress
HAVING COUNT(EmailAddress) > 1
ORDER BY OrderTotal DESC;

/*Activity 6*/
SELECT ProductName, SUM((ItemPrice - DiscountAmount)*Quantity) as ProductTotal
FROM Products
JOIN OrderItems
	ON OrderItems.ProductID = Products.ProductID
GROUP BY ROLLUP (ProductName);

/*Activity 7*/
SELECT c.EmailAddress, COUNT(Distinct p.ProductID) as NumberOfProducts
FROM Customers c, Orders o, OrderItems oi, Products p
WHERE c.CustomerId = o.CustomerID
and o.OrderID = oi.OrderID
and p.ProductID = oi.ProductID
GROUP BY c.EmailAddress
HAVING COUNT(Distinct p.ProductID)>1;

/*Activity 8*/
SELECT DISTINCT CategoryName
FROM Categories
WHERE CategoryID IN
     (SELECT DISTINCT CategoryID FROM Products)
ORDER BY CategoryName
/*
This subquery selects categoryID from individual products, no duplicates,
then selects distinct CategoryNames from categories, again no duplicate,
it then orders and prints the category nanmes alphabetically going down. 
*/


/*Activity 9*/
SELECT p.ProductName, p.ListPrice
FROM Products p
WHERE ListPrice > (SELECT AVG(ListPrice) as AP FROM Products)
ORDER BY ListPrice DESC;


/*Activity 10*/
SELECT c.CategoryName
FROM Categories c
WHERE NOT EXISTS 
	(SELECT * 
	FROM PRODUCTS p
	WHERE p.CategoryID = c.CategoryID);