import React from 'react';

const DetailsCard = ({data})=>{
    console.log(data)

    return(
       <div className="flex items-center  border-b py-2">
      <div className="w-16 h-16 mr-4">
        <img
          src={data.picture.thumbnail}
          alt="User Thumbnail"
          className="w-full h-full object-cover rounded"
        />
      </div>
      <div>
        <p className="text-lg font-semibold">{`${data.name.first} ${data.name.first} ${data.name.last}`}</p>
        <p className="text-gray-600">{data.email}</p>
        <p className="text-gray-600">{data.gender}</p>
      </div>
      </div>
    )
}
export default DetailsCard;