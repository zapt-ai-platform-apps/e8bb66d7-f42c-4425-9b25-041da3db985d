import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../common/Card';
import Badge from '../common/Badge';

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/project/${project.id}`}>
      <Card className="hover:border-vercel-gray-700 transition-colors">
        <div className="p-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-medium text-vercel-white">{project.name}</h3>
              <p className="text-vercel-gray-400 text-sm mt-1">{project.url}</p>
            </div>
            <Badge variant={project.status === 'Ready' ? 'success' : project.status === 'Building' ? 'warning' : 'default'}>
              {project.status}
            </Badge>
          </div>
          <div className="mt-4 pt-4 border-t border-vercel-gray-800">
            <div className="flex justify-between items-center text-xs text-vercel-gray-400">
              <div>Updated {project.updatedAt}</div>
              <div>{project.framework}</div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProjectCard;