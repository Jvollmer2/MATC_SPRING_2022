/** 1 **/

SELECT ListPrice,
	CAST(ListPrice as decimal(18, 1)) as PriceFormat,
	CONVERT(int, ListPrice) as PriceConvert,
	CAST(ListPrice as Int) as PriceCast
FROM Products;

/** 2 **/

SELECT DateAdded,
	format(CAST(DateAdded as DATE), 'MM/dd/yyyy') as AddedDate,
	CAST(DateAdded as TIME(0)) as AddedTime,
	CAST(DateAdded as CHAR(7)) as AddedChar7
FROM Products;

/** 3 **/

SELECT OrderDate,
	CONVERT(varchar, OrderDate, 1) as OrderDateConvert,
	CONVERT(varchar, OrderDate) as AMPM,
	CONVERT(varchar, OrderDate, 8) as OrderTime
FROM Orders;

/** 4 **/

INSERT INTO Categories(CategoryID, CategoryName)
VALUES (0,'');

INSERT INTO Products(ProductID, CategoryID, ProductCode, ProductName, Description, ListPrice, DiscountPercent, DateAdded)
VALUES (0, 1000, '', '', '', '', '', '');

INSERT INTO Customers(CustomerID, EmailAddress, Password, FirstName, LastName, ShippingAddressID, BillingAddressID)
VALUES (0,'', '', '', '', '', '');

INSERT INTO Addresses(AddressID, CustomerID, Line1, Line2, City, State, ZipCode, Phone, Disabled)
VALUES (0, 1000, '', '', '', '', '', '', '');

INSERT INTO Orders(OrderID, CustomerID, OrderDate, ShipAmount, TaxAmount, ShipDate, ShipAddressID, CardType, CardNumber, CardExpires, BillingAddressID)
VALUES (0, 1000, '', '', '', '', '', '', '', '', '');

INSERT INTO OrderItems(ItemID, OrderID, ProductID, ItemPrice, DiscountAmount, Quantity)
VALUES (0, 1000, 100000, '', '', '');

INSERT INTO Administrators(AdminID, EmailAddress, Password, FirstName, LastName)
VALUES (0, '', '', '', '');
