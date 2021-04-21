# tent-house-rental

Steps to download and make API running.
--------------------------------------
Step 1: Download the zip and extract.
Step 2: Navigate to the backend directory using cmd.
Step 3: In the cmd, enter 'npm install'
Step 4: Enter 'node server/server.js' in the cmd.

Routes present are:
-----------------
  1.http://localhost:3000/api/users/addUser
    Request type: POST
      body params: 'email','name','password'
      
  2.http://localhost:3000/api/users/signIn
    Request type: POST
      body params: 'email','password'
      
  3.http://localhost:3000/api/products/
    Request type: GET
      body params: not required
      
  4.http://localhost:3000/api/products/newProducts
    Request type: POST
      body params: 'product_title','quantity_total','price'
      
  5.http://localhost:3000/api/customers/
    Request type: GET
      body params: not required
      
  6.http://localhost:3000/api/customers/newCustomers
    Request type: POST
      body params: 'customer_name'
      
  7.http://localhost:3000/api/transactions/
    Request type: GET
      body params: not required
      
  8.http://localhost:3000/api/transactions/newTransactions
    Request type: POST
      body params: 'customer_id','product_id','transaction_type','quantity'
      
  9.http://localhost:3000/api/transactions/reverseTransactions
    Request type: POST
      body params: 'customer_id','product_id','transaction_type','quantity','transaction_id_parent'
      
  10.http://localhost:3000/api/reports/summaryReport
    Request type: GET
      body params: not required
      
  11.http://localhost:3000/api/reports/detailedReport
    Request type: GET
      body params: not required
      
 All responses come with a success value which is either true or false. If it is true, everything going well else recheck the request.
 
 Thank You!
