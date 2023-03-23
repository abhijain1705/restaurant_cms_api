# Reastaurant CMS Backend

This project is a backend implementation for user authentication and password reset functionality. The API is built with Node.js, Express, MongoDB, and Nodemailer.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install and run this project locally, follow these steps:

1. Clone the repository
2. Run `npm install` to install dependencies
4. Run `npm run start` to start the server

## Usage

This project provides endpoints for user signup, login functionality. Users can create an account, log in with their credentials, and reset their password if necessary.

To use this API, make HTTP requests to the appropriate endpoints using a tool like Postman or a similar application.

## API Endpoints

- `POST /cms/restaurant/signup`: Create a new user account. Send a JSON object with the following fields in the request body:

```json
{
    "restaurantName": "The Latin Place",
    "address": "Street 21",
    "city": "New York",
    "state": "New York",
    "country": "USA",
    "name": "Sam Martin",
    "email": "same.martion22@gmail.com",
    "password": "******",
    "uniqueId": "3412r4fewr324dcdscw"
}```


- `POST /cms/restaurant/login`: Log in to an existing user account. Send a JSON object with the following fields in the request body:
```json
{
  "email": "jamesbond007@gmail.com",
  "password": "yourpassword",
  "remember": true
}```


- `POST /cms/restaurant/remove`: Remove Item from Menu:
```json
{
  "restaurantId": "3412r4fewr324dcdscw",
  "foodId": "fqerbgwrbvr435",
}```


- `GET /cms/restaurant/restaurantMenu/:restaurantId/`: get menus from restaurant by it's id:
```json
{
  "restaurantId": "3412r4fewr324dcdscw",
}```

- `POST /cms/restaurant/addOrUpdate`: Add Item from Menu:
```json
{
  "restaurantId": "3412r4fewr324dcdscw",
    "items": [{
        name: "pizza",
        description: "super delicious",
        price: 212,
        image: "image-link",
        category: "fast food",
        flavour: "Marghenta",
        foodId: "fqerbgwrbvr435",
        parent: "pizza",
    }]
}```

## Technologies Used

This project uses the following technologies:

- Node.js
- Express
- MongoDB
- Mongoose
- Nodemailer
- JSON Web Tokens
- firebase

## Contributing

If you would like to contribute to this project, feel free to submit a pull request.

## License

This project is licensed under the Abhi Jain




