import { useEffect, useState } from 'react';
const NotificationsPanel = () => {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      const msg = `🔔 Update at ${new Date().toLocaleTimeString()}`;
      setNotifications(prev => [msg, ...prev]);
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-bold mb-2">Notifications</h3>
      <ul className="text-sm space-y-1">
        {notifications.slice(0, 5).map((note, i) => <li key={i}>{note}</li>)}
      </ul>
    </div>
  );
};


export default NotificationsPanel;