import React from 'react';
import ProjectCard from '../components/dashboard/ProjectCard';
import DeploymentList from '../components/dashboard/DeploymentList';
import ActivityFeed from '../components/dashboard/ActivityFeed';
import Button from '../components/common/Button';

// Mock data
const projects = [
  {
    id: 1,
    name: 'next-app',
    url: 'next-app.vercel.app',
    status: 'Ready',
    updatedAt: '2 hours ago',
    framework: 'Next.js',
  },
  {
    id: 2,
    name: 'react-portfolio',
    url: 'react-portfolio.vercel.app',
    status: 'Building',
    updatedAt: '4 hours ago',
    framework: 'React',
  },
  {
    id: 3,
    name: 'api-service',
    url: 'api-service.vercel.app',
    status: 'Ready',
    updatedAt: '1 day ago',
    framework: 'Node.js',
  },
];

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

const activities = [
  {
    id: 1,
    type: 'deployment',
    message: 'Deployment completed for next-app',
    timestamp: '2 hours ago',
  },
  {
    id: 2,
    type: 'commit',
    message: 'New commit pushed to react-portfolio',
    timestamp: '4 hours ago',
  },
  {
    id: 3,
    type: 'deployment',
    message: 'Deployment failed for api-service',
    timestamp: '1 day ago',
  },
];

const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button>New Project</Button>
      </div>

      <div className="mb-10">
        <h2 className="text-lg font-medium mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-lg font-medium mb-4">Recent Deployments</h2>
          <DeploymentList deployments={deployments} />
        </div>
        <div>
          <h2 className="text-lg font-medium mb-4">Activity</h2>
          <ActivityFeed activities={activities} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;