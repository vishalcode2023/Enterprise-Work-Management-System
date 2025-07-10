// __tests__/DashboardStats.test.jsx
import { render, screen,expect,test} from '@testing-library/react';
import DashboardStats from '../DashComponents/DashBoardStarts';

test('displays project and task stats', () => {
  const projects = [{}, {}]; // 2 projects
  const tasks = [{}, {}, {}]; // 3 tasks

  render(<DashboardStats projects={projects} tasks={tasks} />);
  expect(screen.getByText(/2 Projects/i)).toBeInTheDocument();
  expect(screen.getByText(/3 Tasks/i)).toBeInTheDocument();
});
