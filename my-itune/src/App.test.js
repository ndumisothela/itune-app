// App.test.js
jest.mock('axios'); // Example if you need to mock Axios

const { render, screen } = require('@testing-library/react');
const App = require('./App').default; // Use .default if you're exporting as default

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

