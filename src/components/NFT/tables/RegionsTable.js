import React from 'react'
import ImageComponent from '../../shared/ImageComponent';
import { getAllRegionsData } from '../../../services/data-files/RegionsData';

const regionsData = getAllRegionsData();


const RegionsTable = () => {
  return (
    <div className="w-full rounded-xl border-2 border-dotted  border-white border-opacity-20 my-10 bg-white bg-opacity-10">
      <table className="w-full ">
        <thead className="">
          <tr className="flex flex-row items-center w-full">
            <th className=" w-[15%] attributes-header ">Region</th>
            <th className=" w-[14%] gap-2 attributes-header">Tree 1</th>
            <th className="w-[14%] gap-2 attributes-header">Tree 2</th>
            <th className="w-[13%] gap-2 attributes-header">Tree 3</th>
            <th className="w-[14%] gap-2 attributes-header">Tree 4</th>
            <th className=" w-[15%] gap-2 attributes-header">Tree 5</th>
            <th className=" w-[15%] gap-2 attributes-header border-r-0">
              Tree 6
            </th>
          </tr>
        </thead>
        <tbody>
          {regionsData.map((e, i) => {
            return (
              <tr
                className="flex flex-row items-center w-full border-t-[1px] border-dashed border-white border-opacity-20 text-[7px] md:text-sm text-white text-center 
              "
                key={i}
              >
                <td className=" w-[15%] flex flex-col regions-table border-r-[1px] px-2">
                  <ImageComponent
                    src={"assets/nft/regions/" + e.image}
                    className="md:h-16 h-8 object-contain"
                    alt={e.value}
                  />
                  <p className="py-1">{e.continent}</p>
                </td>
                <td className=" w-[14%] regions-table border-r-[1px] ">
                  <p>{e.tree1}</p>
                </td>
                <td className="w-[14%] regions-table border-r-[1px]">
                  <p>{e.tree2}</p>
                </td>
                <td className="w-[13%] regions-table border-r-[1px]">
                  <p>{e.tree3}</p>
                </td>
                <td className="w-[14%] regions-table border-r-[1px]">
                  <p>{e.tree4}</p>
                </td>
                <td className="w-[15%] regions-table border-r-[1px]">
                  <p>{e.tree5}</p>
                </td>
                <td className="w-[15%] regions-table break-all">
                  <p>{e.tree6}</p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default RegionsTable