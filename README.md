# ShopForHome

## Overview
ShopForHome is a full-stack e-commerce web application that provides users with a seamless online shopping experience for home decor and related products. The application is designed as a Single Page Application (SPA) with separate frontend and backend components, communicating via RESTful APIs.

## Features
- **User Authentication:** Secure user registration and login using JWT authentication.
- **Product Catalog:** Browse and search for products with detailed descriptions and images.
- **Shopping Cart:** Add, update, or remove products from a persistent shopping cart.
- **Order Management:** Place orders and view order history.
- **Admin Panel:** Manage products, categories, and view user information.

## Technology Stack
### Backend
- Java 11
- Spring Boot
- Spring Security
- JWT Authentication
- Spring Data JPA
- Hibernate
- PostgreSQL
- Maven

### Frontend
- Angular
- Bootstrap
- TypeScript

## Database Schema
The application uses PostgreSQL as its database. To set up the database, create a PostgreSQL database named `eshop` and execute the SQL script provided in the `eshop.sql` file located in the root directory of the project.

## Setup and Installation
### 1. Clone the Repository
```bash
git clone https://github.com/Roshan-R-V/ShopForHome.git
cd ShopForHome
```

### 2. Backend Setup
- Ensure PostgreSQL is installed and running.
- Create a database named `eshop`.
- Navigate to the backend directory:
  ```bash
  cd backend
  ```
- Configure the datasource in `src/main/resources/application.yml` to match your PostgreSQL settings.
- Build and run the backend application:
  ```bash
  mvn install
  mvn spring-boot:run
  ```
- The backend server will start on `http://localhost:8080`.

### 3. Frontend Setup
- Navigate to the frontend directory:
  ```bash
  cd ../frontend
  ```
- Install the required npm packages:
  ```bash
  npm install
  ```
- Start the Angular development server:
  ```bash
  ng serve
  ```
- The frontend application will be accessible at `http://localhost:4200`.

## Usage
1. Register or log in to the platform.
2. Browse products and add items to your cart.
3. Proceed to checkout and place an order.
4. View order history and manage account settings.
5. (Admin) Manage products and user accounts from the admin panel.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Make your changes and commit them.
4. Push to your fork and submit a pull request.

## Acknowledgements
Special thanks to the open-source community for providing valuable resources and tools that made this project possible.

