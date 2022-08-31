import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import DefaultImage from '../assets/house.jpg';
const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    area,
    agency,
    isVerified,
    externalID,
    beds,
    baths,
  },
}) => {
  return (
    <Link href={`/property/${externalID}`} passHref>
      <div className="flex flex-col shadow-md rounded-md    p-5   justify-start cursor-pointer">
        <div>
          <Image
            src={coverPhoto ? coverPhoto.url : DefaultImage}
            alt="house"
            className="object-cover"
            width={500}
            height={260}
          />
        </div>
        <div className=" pt-2 items-center  flex  ">
          <div className="flex items-center justify-between w-full">
            <div className="pr-3 ">{isVerified && <GoVerified />}</div>

            <h3 className="font-bold text-lg flex-1">
              AED {millify(price)}
              {rentFrequency && `/${rentFrequency}`}
            </h3>
            <Image
              src={agency?.logo?.url}
              className="object-cover"
              alt="agency logo"
              width={50}
              height={40}
            />
          </div>
        </div>
        <div className="flex items-center p-1 space-x-3 text-blue-400 ">
          {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
        </div>
        <h3 className="text-sm mt-2 font-normal">
          {title.length > 30 ? `${title.substring(0, 30)}....` : title}
        </h3>
      </div>
    </Link>
  );
};

export default Property;
