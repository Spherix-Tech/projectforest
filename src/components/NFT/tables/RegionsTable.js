import React from 'react'
import ImageComponent from '../../shared/ImageComponent';
import { getAllRegionsData } from '../../../services/data-files/RegionsData';

const regionsData = getAllRegionsData();


const RegionsTable = () => {
  return (
    <div className="w-full rounded-xl border-2 border-dotted  border-borderColor border-opacity-20 my-10 ">
    <table className="w-full ">
      <thead className="">
        <tr className="flex flex-row items-center w-full">
          <th className=" w-[16%] attributes-header ">
            Continent
          </th>
          <th className=" w-[14%] gap-2 attributes-header">
            Tree 1
          </th>
          <th className="w-[14%] gap-2 attributes-header">
            Tree 2
          </th>
          <th className="w-[14%] gap-2 attributes-header">
            Tree 3
          </th>
          <th className="w-[14%] gap-2 attributes-header">
            Tree 4
          </th>
          <th className=" w-[14%] gap-2 attributes-header">
            Tree 5
          </th>
          <th className=" w-[14%] gap-2 attributes-header border-r-0">
            Tree 6
          </th>
        </tr>
      </thead>
      <tbody>
        {regionsData.map((e, i) => {
          return (
            <tr
              className="flex flex-row items-center w-full border-t-[1px] border-dashed border-borderColor border-opacity-20 text-[9px] md:text-sm text-[#797979] text-center 
              "
              key={i}
            >
              <td className=" w-[16%] flex flex-col justify-center items-center border-r-[1px] border-dashed border-borderColor border-opacity-20 px-3 md:px-6 md:h-[90px] h-[47px]">
                <ImageComponent
                  src={"assets/nft/regions/" + e.image}
                  className="md:h-16 h-8 object-contain"
                  alt={e.value}
                />
              </td>
              <td className=" w-[14%] flex justify-center items-center border-r-[1px] border-dashed border-borderColor border-opacity-20 md:h-[90px] h-[47px] break-all px-2 ">
                <p>{e.tree1}</p>
              </td>
              <td className="w-[14%] flex justify-center items-center border-r-[1px] border-dashed border-borderColor border-opacity-20 md:h-[90px] h-[47px] break-all px-2  ">
                <p>{e.tree2}</p>
              </td>
              <td className="w-[14%] flex justify-center items-center border-r-[1px] border-dashed border-borderColor border-opacity-20 md:h-[90px] h-[47px] break-all px-2">
                <p>{e.tree3}</p>
              </td>
              <td className="w-[14%] flex justify-center items-center border-r-[1px] border-dashed border-borderColor border-opacity-20 md:h-[90px] h-[47px] break-all px-2">
                <p>{e.tree4}</p>
              </td>
              <td className="w-[14%] flex justify-center items-center border-r-[1px]  border-dashed border-borderColor border-opacity-20 md:h-[90px] h-[47px] break-all px-2">
                <p>{e.tree5}</p>
              </td>
              <td className="w-[14%] flex justify-center items-center border-dashed border-borderColor border-opacity-20 md:h-[90px] h-[47px] break-all px-2">
                <p>{e.tree6}</p>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
  )
}

export default RegionsTable