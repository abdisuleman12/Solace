Solace

A full-stack application that allows user's to make emergency request's all from a connected device.

## Built With

SEAN Stack
- Postgres
- Express.js
- Angular
- Node.js

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Install

- [Node.js](https://nodejs.org/en/)
- Postico 
- ``` run npm install at the project directory in the terminal ```
- Open the application in your code editor

### Installing

Steps to get the development environment running.

Create these tables in Postico.

```sql
CREATE TABLE "users" (
"id" serial primary key,
"username" varchar(20) not null UNIQUE,
"password" varchar(240) not null
);

CREATE TABLE "userprofileinformation" (
"id" serial primary key,
"user_id" integer references users not null,
"firstname" varchar(40) not null,
"lastname" varchar (40) not null,
"address" varchar(5000) not null UNIQUE,
longitude decimal (12,9) not null,
latitude  decimal (12,9) not null,
householdsize int not null,
phonenumber bigint UNIQUE
);

CREATE TABLE "userneeds" (
"id" serial primary key,
"user_id" integer references users not null,
"Need" varchar(100) not null,
"Groceries" varchar(1000),
"Clothing" varchar(1000),
"householdproducts" varchar (1000),
"medicine" varchar(1000)
);
```

## Documentation
Link to my scope document
- [Solace](https://docs.google.com/document/d/1XEgjlr63lMORVqTpCro4AFr8vVeHXvtWEQDNokEt_m4/edit?usp=sharing)


## Authors

* Abdi Suleman
