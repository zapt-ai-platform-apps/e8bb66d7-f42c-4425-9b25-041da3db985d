import React from 'react';
import Card from '../common/Card';
import Badge from '../common/Badge';

const DeploymentList = ({ deployments }) => {
  if (!deployments || deployments.length === 0) {
    return (
      <Card className="p-6 text-center">
        <p className="text-vercel-gray-400">No deployments yet.</p>
      </Card>
    );
  }

  return (
    <Card>
      <div className="divide-y divide-vercel-gray-800">
        {deployments.map((deployment) => (
          <div key={deployment.id} className="p-4 hover:bg-vercel-gray-800 transition-colors">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center space-x-2">
                  <Badge variant={deployment.status === 'Ready' ? 'success' : deployment.status === 'Building' ? 'warning' : deployment.status === 'Error' ? 'error' : 'default'}>
                    {deployment.status}
                  </Badge>
                  <span className="text-sm font-medium">{deployment.commit}</span>
                </div>
                <p className="text-vercel-gray-400 text-sm mt-1">
                  Deployed {deployment.deployedAt}
                </p>
              </div>
              <div className="text-xs text-vercel-gray-400">
                {deployment.branch}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default DeploymentList;