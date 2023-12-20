import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ApiFetch from '../CustomHook/ApiFetch';
import DetailsCard from '../Conponents/DetailsCard';
import Table from '../Conponents/Table';
import { useSelector } from 'react-redux';

const FrontPage = () => {
    const [userData, setUserData] = useState([]);
    const[filter , setFilter] = useState([]);
        let searchItem =  useSelector((store) => store.search.searchtext);
        console.log(searchItem);
    

    const { data, loading, error } = ApiFetch();
    
        useEffect(()=>{
                let newData = userData.filter((user) =>
                user.name.first.toLowerCase().includes(searchItem.toLowerCase())
              );
              setFilter(newData);

        },[searchItem]);

    useEffect(() => {
        // Access the data, loading, and error variables here
        setUserData(data)
        setFilter(data);
        console.log(data);
    }, [data]);

    return (
        <div>
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
        {filter && filter?.map((user, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="p-2 border">{`${user.name.title} ${user.name.first} ${user.name.last}`}</td>
              <td className="p-2 border">{user.email}</td>
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

            

        </div>
    )
}
export default FrontPage;