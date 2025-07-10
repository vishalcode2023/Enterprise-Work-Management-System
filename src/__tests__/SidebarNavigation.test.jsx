// __tests__/Sidebar.test.jsx
import { render, screen,test,expect } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import { AuthContext } from '../Auth/AuthContext';

test('displays sidebar links', () => {
  render(
    <AuthContext.Provider value={{ user: { role: 'Admin', email: 'admin@mail.com' }, logout: jest.fn() }}>
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </AuthContext.Provider>
  );

  expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
  expect(screen.getByText(/Projects/i)).toBeInTheDocument();
});
