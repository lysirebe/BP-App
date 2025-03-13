# BP Tours - Sustainable Tourism Mobile App


## Overview

BP Tours is a Blackpool-based sustainable tourism mobile application built with React Native and Expo. The app allows users to explore eco-friendly travel experiences, book guided tours, and access real-time weather updates for their destination.

## Features

-  **Eco-Tourism Focus**: Browse sustainable travel experiences in Blackpool
-  **Tour Exploration**: View detailed information about various tours
-  **Seamless Booking**: Select dates, times, and group sizes for your tour
-  **Weather Updates**: Access real-time weather information for your destination
-  **Cross-Platform**: Works on both iOS and Android devices

## Screenshots
![image](https://github.com/user-attachments/assets/74f8f96a-e512-4881-afe9-42f324afe039)
![image](https://github.com/user-attachments/assets/fcff81ef-d745-408a-9dab-26ee17935091)
![image](https://github.com/user-attachments/assets/259350fc-f92d-4148-a1f9-2e96a1f07473)
![image](https://github.com/user-attachments/assets/5b7993cb-7898-412a-8bb8-6321a6aeb4d7)


## Technologies Used

- **React Native**: Cross-platform mobile development
- **Expo**: Development and testing environment
- **React Navigation**: Screen navigation
- **React Native Paper**: UI components
- **AsyncStorage**: Local data storage
- **OpenWeatherMap API**: Weather data integration
- **Jest**: Testing framework

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/lysirebe/bp-app.git
   cd bp-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Set up API key: Update the app.json file with your OpenWeatherMap API key:
   ```
   {
     "expo": {
       "name": "BP Tours",
       "slug": "bp-tours",
       // other expo configs...
       "extra": {
         "apiKey": "your_openweathermap_api_key_here"
    }
  }
}
   ```

4. **Start the development server**:
   ```bash
   npx expo start
   ```

5. **Run on device or emulator**:
   - Scan the QR code with the Expo Go app on your iOS or Android device
   - Press 'a' to run on Android emulator (must be installed)
   - Press 'i' to run on iOS simulator (Mac only)
```

## Testing

Run the test suite with:

```bash
npm test
```

The project includes:
- Unit tests for individual components
- Integration tests for data flow and navigation


## Future Improvements

- User authentication
- Offline functionality
- Community features for sustainable travelers
- Enhanced weather forecasting
- Expanded tour options

## License

This project is licensed under the MIT License - see the LICENSE file for details.
