import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import DeploymentList from '../components/dashboard/DeploymentList';

// Mock data
const getProjectById = (id) => ({
  id,
  name: 'next-app',
  url: 'next-app.vercel.app',
  status: 'Ready',
  updatedAt: '2 hours ago',
  framework: 'Next.js',
  git: 'github.com/user/next-app',
  branch: 'main',
});

const deployments = [
  {
    id: 1,
    commit: 'Add authentication',
    status: 'Ready',
    deployedAt: '2 hours ago',
    branch: 'main',
  },
  {
    id: 2,
    commit: 'Update API endpoints',
    status: 'Building',
    deployedAt: '4 hours ago',
    branch: 'feature/api',
  },
  {
    id: 3,
    commit: 'Fix CSS issues',
    status: 'Error',
    deployedAt: '1 day ago',
    branch: 'hotfix/styles',
  },
];

const Project = () => {
  const { id } = useParams();
  const project = getProjectById(id);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">{project.name}</h1>
        <div className="flex space-x-2">
          <Button variant="ghost">Visit</Button>
          <Button>Deploy</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <Card className="p-4">
          <h3 className="text-sm font-medium text-vercel-gray-400 mb-2">Status</h3>
          <p className="text-vercel-white font-medium">{project.status}</p>
        </Card>
        <Card className="p-4">
          <h3 className="text-sm font-medium text-vercel-gray-400 mb-2">Domain</h3>
          <p className="text-vercel-white font-medium">{project.url}</p>
        </Card>
        <Card className="p-4">
          <h3 className="text-sm font-medium text-vercel-gray-400 mb-2">Framework</h3>
          <p className="text-vercel-white font-medium">{project.framework}</p>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-medium mb-4">Deployments</h2>
        <DeploymentList deployments={deployments} />
      </div>

      <div>
        <h2 className="text-lg font-medium mb-4">Project Settings</h2>
        <Card className="p-6">
          <div className="mb-6">
            <h3 className="text-sm font-medium text-vercel-gray-400 mb-2">Git Repository</h3>
            <p className="text-vercel-white font-medium">{project.git}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-vercel-gray-400 mb-2">Production Branch</h3>
            <p className="text-vercel-white font-medium">{project.branch}</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Project;