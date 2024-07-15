# Weather App

## Description

This Node.js application fetches weather data from an external API based on user input (city name) and displays current weather information.

## Prerequisites

Before running this application, ensure you have the following installed:

- Node.js (version 14.x or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kabutoshinki/msc_interview.git
   cd part_4_bonus
   cd problem_6_custom_api_request
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

1. Create a .env file in the root directory of the project:
   ```bash
   WEATHER_API_KEY=6f6a51c2f190fcfdb9520a8b1b79aeba
   PORT=8080
   Replace your_api_key_here with your API key obtained from the weather service provider.
   ```

## Usage

To start the server and run the application:

```bash
npm start
The application will start at http://localhost:8080 by default (or the port specified in your .env file).
```

## API Endpoint

### Get Weather Data

- Endpoint: /weathers
- Method: GET
- Query Parameters:
  - city: Name of the city for which weather information is requested (required).

### Example

```bash
http://localhost:8080/api/weathers?city=VietNam
```

### Result

```bash
{
    "city": "Vietnam",
    "country": "VN",
    "latitude": 16.1667,
    "longitude": 107.8333,
    "temperature": 19.98,
    "humidity": 98,
    "weatherDescription": "broken clouds"
}
```
