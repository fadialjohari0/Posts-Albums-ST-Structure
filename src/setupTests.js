import '@testing-library/jest-dom';

const mockedNavigate = jest.fn();
const mockedLocation = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate,
  useLocation: () => mockedLocation,
}));

jest.mock('axios');
