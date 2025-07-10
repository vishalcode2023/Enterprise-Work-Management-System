import React from "react";

const RecentActivityFeed = () => {
  const logs = JSON.parse(localStorage.getItem("activityLog")) || [];

  return (
    <div className="bg-white p-4 rounded-lg shadow border">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">📋 Recent Activity</h3>
      {logs.length === 0 ? (
        <p className="text-sm text-gray-500">No recent activity yet.</p>
      ) : (
        <ul className="text-sm space-y-2 text-gray-700">
          {logs.slice(0, 5).map((log, i) => (
            <li key={i} className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                {log.msg}{" "}
                <span className="text-xs text-gray-400 block">
                  {new Date(log.timestamp).toLocaleString()}
                </span>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecentActivityFeed;
