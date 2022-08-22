import React from 'react'
import { getAllAttributesData } from "../../../services/data-files/AttributesData";
import ImageComponent from '../../shared/ImageComponent';

const attributesData = getAllAttributesData();

const AttributesTable = () => {
  return (
    <div className="w-full rounded-xl border-2 border-dotted  border-borderColor border-opacity-20 my-10">
    <table className="w-full">
      <thead className="">
        <tr className="flex flex-row items-center w-full">
          <th className=" w-[20%] attributes-header ">
            Property Value
          </th>
          <th className=" w-[16%] gap-2 attributes-header">
            Common
          </th>
          <th className="w-[16%] gap-2 attributes-header">
            Uncommon
          </th>
          <th className="w-[16%] gap-2 attributes-header">
            Rare
          </th>
          <th className="w-[16%] gap-2 attributes-header">
            Epic
          </th>
          <th className=" w-[16%] gap-2 attributes-header border-r-0">
            Legend
          </th>
        </tr>
      </thead>
      <tbody>
        {attributesData.map((e, i) => {
          return (
            <tr
              className="flex flex-row items-center w-full border-t-[1px] border-dashed border-borderColor border-opacity-20 text-[9px] md:text-sm text-[#797979]"
              key={i}
            >
              <td className=" w-[20%] flex flex-row justify-start items-center border-r-[1px] border-dashed border-borderColor border-opacity-20 md:px-6 md:h-[90px] h-[50px] ">
                <ImageComponent
                  src={
                    "assets/nft/attributes-table/" + e.valueImage
                  }
                  className="md:h-12 h-7"
                  alt={e.value}
                />
                {e.value}
              </td>
              <td className=" w-[16%] flex justify-center items-center border-r-[1px] border-dashed border-borderColor border-opacity-20 md:h-[90px] h-[50px] ">
                <p>{e.common}</p>
              </td>
              <td className="w-[16%] flex justify-center items-center border-r-[1px] border-dashed border-borderColor border-opacity-20 md:h-[90px] h-[50px]  ">
                <p>{e.uncommon}</p>
              </td>
              <td className="w-[16%] flex justify-center items-center border-r-[1px] border-dashed border-borderColor border-opacity-20 md:h-[90px] h-[50px]">
                <p>{e.rare}</p>
              </td>
              <td className="w-[16%] flex justify-center items-center border-r-[1px] border-dashed border-borderColor border-opacity-20 md:h-[90px] h-[50px]">
                <p>{e.epic}</p>
              </td>
              <td className="w-[16%] flex justify-center items-center border-dashed border-borderColor border-opacity-20 md:h-[90px] h-[47px]">
                <p>{e.legend}</p>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
  )
}

export default AttributesTable