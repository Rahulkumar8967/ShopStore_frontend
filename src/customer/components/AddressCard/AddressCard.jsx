import React from 'react';

const AddressCard = ({ address }) => {
  return (
    <div>
      <div className="space-y-3">
        <p className="font-semibold">
          {address?.firstName && address?.lastName
            ? `${address.firstName} ${address.lastName}`
            : 'Name not provided'}
        </p>
        <p>
          {address?.state ? address.state : 'State not provided'}, 
          {address?.streetAddress ? address.streetAddress : 'Street Address not provided'}, 
          {address?.zipCode ? address.zipCode : 'Zip Code not provided'}
        </p>
        <div className="space-y-1">
          <p className="font-semibold">Phone Number</p>
          <p>{address?.mobile ? address.mobile : 'Phone number not provided'}</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
