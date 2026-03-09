Insurance Policy Management API

A RESTful backend API built using Node.js, Express.js, and MongoDB to manage insurance policies. This API provides full CRUD functionality including creating, retrieving, updating, and deleting insurance policies.

⸻

Features
	•	Create a new insurance policy
	•	Get all insurance policies
	•	Get a policy by ID
	•	Update a policy
	•	Delete a policy
	•	Filter policies by policy type
	•	Retrieve only active policies
	•	Pagination support
	•	Request logging middleware
	•	Input validation using Mongoose

⸻

Tech Stack
	•	Node.js
	•	Express.js
	•	MongoDB
	•	Mongoose
	•	REST API

⸻
Project Structure
insurance-api
│
├── controllers
│   └── policyController.js
├── middleware
│   └── logger.js
├── models
│   └── Policy.js
├── routes
│   └── policyRoutes.js
├── server.js
├── package.json

API Endpoints
Method
Endpoint
Description
POST
/api/policies
Create a new policy
GET
/api/policies
Get all policies
GET
/api/policies/:id
Get policy by ID
PUT
/api/policies/:id
Update policy
DELETE
/api/policies/:id
Delete policy


Author

Pavithira S
B.Tech Computer Science Engineering
