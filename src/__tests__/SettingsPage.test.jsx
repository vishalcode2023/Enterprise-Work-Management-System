// __tests__/SettingsPage.test.jsx
import { render, screen,test,expect} from '@testing-library/react';
import SettingsPage from '../pages/SettingsPage';
import { AuthContext } from '../Auth/AuthContext';

test('renders settings page with email input', () => {
  const mockUser = { email: 'test@example.com' };

  render(
    <AuthContext.Provider value={{ user: mockUser }}>
      <SettingsPage />
    </AuthContext.Provider>
  );

  expect(screen.getByDisplayValue('test@example.com')).toBeInTheDocument();
});
