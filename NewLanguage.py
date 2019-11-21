#Using Python (This is how you comment in Python) I have never used Python tried to find examples and follow how you would solve each problem using Python
#1
name = input("What is your name? ") # displays the message on screen and stores the input from the user in a variable called name
print("Hi " + name)

#What it should look like when you run it.
#>>>
#What is your name? Bob
#Hi Bob
#>>>


#2
while True:
  output = ""
  num = int(input("enter a integer: "))

  if num == 0:
    exit()

  for i in range(1, num+1):
    output += "{}".format(i)
    if i != num:
      output += "+"
  output += " = {}".format(sum(range(num+1)))
  print (output)

#What it should look like when you run it.
#prints out the sum of integers and then the answer, then waits for the next input.
#$ python test.py
#enter a integer: 5
#1+2+3+4+5 = 15
#enter a integer: 4
#1+2+3+4 = 10
#enter a integer: 3
#1+2+3 = 6
#enter a integer: 2
#1+2 = 3
#enter a integer: 1
#1 = 1
#enter a integer: 0
#= 0


#3
if [check that item is in array]:
if item in my_list:

# Python code to demonstrate checking of element existence using loops and in 
# Initializing list  
test_list = [ 1, 6, 3, 5, 3, 4 ] 
  
print("Checking if 3 exists in list ( using loop ) : ") 
  
# Checking if 3 exists in list  
# using loop 
for i in test_list: 
    if(i == 3) : 
        print ("Element Exists") 
  
print("Checking if 3 exists in list ( using in ) : ") 
  
# Checking if 3 exists in list using in 
if (3 in test_list): 
    print ("Element Exists") 

#What it should look like when you run it.
#Output : 
#Checking if 3 exists in list ( using loop ) : 
#Element Exists
#Checking if 3 exists in list ( using in ) : 
#Element Exists