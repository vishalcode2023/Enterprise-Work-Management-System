// __tests__/NotificationsPanel.test.jsx
import { render, screen ,test,expect} from '@testing-library/react';
import NotificationsPanel from '../DashComponents/NotificationsPanel';

test('renders notifications panel title', () => {
  render(<NotificationsPanel />);
  expect(screen.getByText(/Notifications/i)).toBeInTheDocument();
});
