# IsracardBooks

IsracardBooks is a React Native mobile application designed to provide users with an interactive experience for browsing books, managing favorites, and viewing detailed information about each book. The app supports both iOS and Android platforms and is built with a focus on performance, responsiveness, and usability.

## Key Features

- **Book Browsing**: Explore a list of books fetched from a remote API.
- **Search Functionality**: Filter books by title using a search bar.
- **Favorites Management**: Add or remove books from a favorites list.
- **Detailed Book Information**: View comprehensive details of each book, including title, release date, description, and number of pages.
- **Animated UI**: Smooth animations enhance the user experience for transitions and interactions.
- **Error Handling**: Robust error handling with redirection to an error screen for non-200 HTTP responses.

## Technologies Used

- **React Native**: Cross-platform mobile app framework.
- **Redux**: State management using `@reduxjs/toolkit`.
- **Redux Saga**: Side-effect management for asynchronous operations.
- **React Navigation**: Navigation between screens.
- **Axios**: HTTP client for API requests.
- **Async Storage**: Persistent storage for maintaining favorites.

## Project Structure

- **`/components`**: Contains all reusable UI components.

  - **`/book`**: Components related to book display, such as `BookCard`, `AddBookBtn`, and `RemoveBookBtn`.
  - **`/lists`**: `BooksList` component for rendering the list of books.
  - **`/appBackground`**: `AppBG` component for consistent screen backgrounds.
  - **`/banner`**: `Banner` component for showcasing books in a slider.
  - **`/loader`**: `Loader` component for indicating loading states.
  - **`/favorite`**: `FavoriteToggle` component for handling favorite interactions.

- **`/navigation`**: Configuration and helpers for React Navigation.
- **`/store`**: Redux store setup, slices, and sagas.
- **`/utils`**: Utility functions and constants, such as color schemes and string literals.

## Important Configuration

- **API Configuration**: Managed in `/api/urls.js`. Ensure `baseUrl` and endpoints are correctly set up for API access.

```javascript
export default {
  getBooks: 'https://potterapi-fedeperin.vercel.app/en/books',
  baseUrl: 'https://potterapi-fedeperin.vercel.app',
};
```
