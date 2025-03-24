import React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const Settings = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Settings</h1>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-medium mb-4">General</h2>
          <Card className="p-6">
            <div className="mb-6">
              <label className="block text-sm font-medium text-vercel-gray-400 mb-2">Team Name</label>
              <input
                type="text"
                className="bg-vercel-gray-800 border border-vercel-gray-700 rounded-md w-full px-4 py-2 text-vercel-white focus:outline-none focus:ring-2 focus:ring-vercel-blue focus:border-transparent box-border"
                defaultValue="My Team"
              />
            </div>
            <Button>Save</Button>
          </Card>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-4">Members</h2>
          <Card className="p-6">
            <div className="mb-6">
              <div className="flex justify-between mb-4">
                <label className="block text-sm font-medium text-vercel-gray-400">Team Members</label>
                <Button size="sm">Invite</Button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-vercel-gray-800">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-vercel-gray-700 flex items-center justify-center mr-3">
                      U
                    </div>
                    <div>
                      <p className="text-vercel-white font-medium">User 1</p>
                      <p className="text-vercel-gray-400 text-sm">user1@example.com</p>
                    </div>
                  </div>
                  <div className="text-vercel-gray-400 text-sm">Owner</div>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-vercel-gray-800">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-vercel-gray-700 flex items-center justify-center mr-3">
                      U
                    </div>
                    <div>
                      <p className="text-vercel-white font-medium">User 2</p>
                      <p className="text-vercel-gray-400 text-sm">user2@example.com</p>
                    </div>
                  </div>
                  <div className="text-vercel-gray-400 text-sm">Member</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-4">Danger Zone</h2>
          <Card className="p-6 border-red-500">
            <h3 className="text-red-500 font-medium mb-2">Delete Team</h3>
            <p className="text-vercel-gray-400 text-sm mb-4">
              Once you delete a team, there is no going back. Please be certain.
            </p>
            <Button variant="ghost" className="border border-red-500 text-red-500 hover:bg-red-500 hover:bg-opacity-10">
              Delete Team
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;