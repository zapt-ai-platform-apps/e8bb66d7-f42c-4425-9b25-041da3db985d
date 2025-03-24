import React from 'react';
import Card from '../common/Card';

const ActivityFeed = ({ activities }) => {
  if (!activities || activities.length === 0) {
    return (
      <Card className="p-6 text-center">
        <p className="text-vercel-gray-400">No recent activity.</p>
      </Card>
    );
  }

  return (
    <Card>
      <div className="divide-y divide-vercel-gray-800">
        {activities.map((activity) => (
          <div key={activity.id} className="p-4">
            <div className="flex">
              <div className="flex-shrink-0 mr-3">
                <div className="w-8 h-8 rounded-full bg-vercel-gray-700 flex items-center justify-center">
                  {activity.type === 'deployment' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vercel-blue" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                  {activity.type === 'commit' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vercel-purple" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1.323l-3.954 1.582A1 1 0 004 6.82V17a1 1 0 001 1h10a1 1 0 001-1V6.82a1 1 0 00-.6-.92L11 4.323V3a1 1 0 00-1-1zM6 7.9l4-1.6 4 1.6v8.1H6V7.9z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </div>
              <div>
                <p className="text-sm text-vercel-white">{activity.message}</p>
                <p className="text-xs text-vercel-gray-400 mt-1">{activity.timestamp}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ActivityFeed;