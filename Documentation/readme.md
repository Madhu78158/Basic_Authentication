This is a Basic Authentication and Authorization Project

Design/Steps to be followed to build this service:

Data Models:

User Model/Schema:

This Model Should contain the following fields : types

1. name : String
2. email : String (It should be unqiue)
3. password : String (Which is stored as hash code in the database after applying hashing algorithm)

APIs or EndPoints:

1. POST : api/register: 

    1. Accept request like this: (from the request body)

        Mock Data:
        {
        "name": "Madhu",
        "email": "madhu@gmail.com",
        "password": "plain_password"
        }

    Responsibilities:

    1. Validate input

    2. Check if email already exists

    3. Hash password (bcrypt / argon2)

    4. Store user in DB

    Responses
    1. 400 : { message: "User already exists" }
    2. 200 : { message: "User registered successfully" }

Rule: never store plain password

2. POST : api/login:

    1. Accept request like this : (from the request body)

    Mock Data:
    {
    "email": "madhu@gmail.com",
    "password": "plain_password"
    }

    Responsibilities:

    1. fetch user by email

    2. Compare password with hashed password 

    3. If valid -> Generate JWT

    4. Return JWT to Client

    Responses : 

    1. If user is not found or Password doesn't match:
       401 : { message: "Invalid credentials" }
    2. If the user is valid, then
       200 : {"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."}

3. GET : api/profile:

    Header Parameter : Authorization: Bearer <JWT>

    Responsibilities:

    1. Extract token from header

    2. Verify JWT signature

    3. Decode payload

    4. Get userId from token

    5. Fetch user from DB

    6. Return profile data

    JWT Actual Data:

    {
    "userId": "12345",
    "email": "madhu@gmail.com",
    "iat": 1710000000,
    "exp": 1710003600
    }

    Response : 

    Always Returns User Data:

    200:
    
    {
        "name":"Madhu",
        "email":"madhu@gmail.com",
        "password":"Madhu@123"
    }

Rules/Security : 

✔ Hash passwords
✔ Use HTTPS
✔ Set JWT expiration
✔ Use Authorization: Bearer header
✔ Never trust client data

IFS/Flow : 

Register → Store hashed password
Login → Verify password → Issue JWT
Client → Sends JWT in header
Server → Verifies JWT → Trusts user


Libraries (Installed):
1. express
2. mongoose
3. bcrypt
4. jsonwebtoken
5. dotenv
6. -D @types/express ts-node nodemon

JWT:
Header,Payload,Signature