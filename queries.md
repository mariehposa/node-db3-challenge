# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

select p.ProductName, c.CategoryName from products as p join Categories as c on p.CategoryId = c.CategoryID

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

select o.OrderID, s.ShipperName FROM Orders as o join Shippers as s on o.ShipperID = s.ShipperID where o.OrderDate < "1997-01-09"

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

select p.ProductName, od.quantity from OrderDetails as od join products as p on p.ProductID = od.ProductID where od.OrderId = 10251

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

select o.orderID, c.CustomerName as "Customer's Name", e.LastName as "Employee's Lastname" from ((orders as o join customers as c on o.customerID = c.customerID) join employees as e on o.employeeID = e.employeeID)

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

select catagoryName 

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 