student_grades = {
    "Alice": [88, 92, 100],
    "Bob": [75, 78, 80],
    "Charlie": [92, 90, 85],
    "Dana": [83, 88, 92],
    "Eli": [78, 80, 72]
}
#1. Calculate the average grade for each student and store the results in a new dictionary called student_averages.
student_averages = {}
from statistics import mean
for student in student_grades:
    student_averages[student] = round(mean(student_grades[student]))
print(student_averages)

#2. Assign each student a letter grade (A, B, C, D, F) based on their average grade according to the following scale, and store the results in a dictionary called student_letter_grades:

student_letter_grades = {}
from statistics import mean
for student in student_averages:
    avg = round(mean(student_grades[student]))
    letter = ""
    if avg >= 90:
        letter = "A"
    elif 80 <= avg <= 89:
        letter = "B"
    elif 70 <= avg <= 79:
        letter = "C"
    elif 60 <= avg <= 69:
        letter = "D"
    else:
        letter = "F"
    student_letter_grades[student] = letter
print(student_letter_grades)
#3. Calculate the class average (the average of all students’ averages) and print it.
grades = mean(list(student_averages.values()))
print(f"Class Average: {grades}")
#4. Print the name of each student, their average grade, and their letter grade.
for student in student_grades:
    print(f"{student} - {student_averages[student]}, {student_letter_grades[student]}")

#Exercise 2: Advanced Data Manipulation and Analysis
sales_data = [
    {"customer_id": 1, "product": "Smartphone", "price": 600, "quantity": 1, "date": "2023-04-03"},
    {"customer_id": 2, "product": "Laptop", "price": 1200, "quantity": 1, "date": "2023-04-04"},
    {"customer_id": 1, "product": "Laptop", "price": 1000, "quantity": 1, "date": "2023-04-05"},
    {"customer_id": 2, "product": "Smartphone", "price": 500, "quantity": 2, "date": "2023-04-06"},
    {"customer_id": 3, "product": "Headphones", "price": 150, "quantity": 4, "date": "2023-04-07"},
    {"customer_id": 3, "product": "Smartphone", "price": 550, "quantity": 1, "date": "2023-04-08"},
    {"customer_id": 1, "product": "Headphones", "price": 100, "quantity": 2, "date": "2023-04-09"},
]

#1. Total Sales calculation:
total_sales= 0
total_sales_per_product = {}

for customer in sales_data:
    sales = customer['price']*customer['quantity']
    total_sales_per_product[customer['product']] = sales
    total_sales += sales
# print(total_sales)
# print(total_sales_per_product)

#2. Customer Spending Profile
total_amount_per_customer = {}
for customer in sales_data:
    sales = customer['price']*customer['quantity']
    total_amount_per_customer[customer['customer_id']] = sales
# print(total_amount_per_customer)

#3. Sales Data Enhancement
for customer in sales_data:
    customer["total_price"] = customer['price']*customer['quantity']
# print(sales_data)

#4. High-Value Transactions
high_value_transactions = [transaction for transaction in sales_data if transaction['total_price'] >500]
# print(high_value_transactions)

#5. Customer Loyalty Identification:
customers = set()
loyal_customers = set()
for customer in sales_data:
    cid = customer['customer_id']
    if cid in customers:
        loyal_customers.add(cid)
    else: 
        customers.add(cid)
print(loyal_customers)

count_sales = {}
for customer in sales_data:
    customer_id =customer["customer_id"]
    if customer_id in count_sales:
        count_sales[customer_id] +=1
    else:
        count_sales[customer_id] = 1

loyal_customers_dict = [customer_id for customer_id, count in count_sales.items() if count >=2]
print(count_sales)
print(loyal_customers_dict)

#6. Bonus
