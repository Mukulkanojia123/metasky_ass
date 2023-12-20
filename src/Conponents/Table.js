// Table.js
import React from 'react';
import DetailsCard from './DetailsCard';

const Table = ({ data }) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Username</th>
            <th className="p-2 border">Gender</th>
            <th className="p-2 border">Picture</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="p-2 border">{`${user.name.first} ${user.name.last}`}</td>
              <td className="p-2 border">{user.username}</td>
              <td className="p-2 border">{user.gender}</td>
              <td className="p-2 border">
                <img
                  src={user.picture.thumbnail}
                  alt="User Thumbnail"
                  className="w-8 h-8 object-cover rounded"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
