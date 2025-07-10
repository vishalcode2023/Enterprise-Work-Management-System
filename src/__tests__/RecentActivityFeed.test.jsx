// __tests__/RecentActivityFeed.test.jsx
import { render, screen,test ,expect} from '@testing-library/react';
import RecentActivityFeed from '../DashComponents/RecentActivityFeed';

test('renders recent activity header', () => {
  render(<RecentActivityFeed />);
  expect(screen.getByText(/Recent Activity/i)).toBeInTheDocument();
});
