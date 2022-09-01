const allAttributesData = [
  {
      value: "Yield",
      valueImage: "yield.svg",
      common: "3-8",
      uncommon: "3-9",
      rare: "4-10",
      epic: "4-11",
      legend: "5-12"
  },
  {
    value: "Yield",
    valueImage: "yield-full-grade.svg",
    common: "124-263",
    uncommon: "136-289",
    rare: "149-316",
    epic: "161-342",
    legend: "186-395"
  },
  {
    value: "Tree Age",
    valueImage: "tree-age.svg",
    common: "80-120",
    uncommon: "80-120",
    rare: "80-120",
    epic: "80-120",
    legend: "80-120"
  },
  {
    value: "Drought Tolerance",
    valueImage: "drought.svg",
    common: "6-17",
    rare: "7-20",
    uncommon: "7-19",
    epic: "8-22",
    legend: "9-26"
  },
  {
    value: "Drought Tolerance",
    valueImage: "drought-full-grade.svg",
    common: "41-127",
    uncommon: "45-140",
    rare: "49-152",
    epic: "53-165",
    legend: "62-191"
  },
  {
    value: "Grade",
    valueImage: "grade.svg",
    common: "30-35",
    uncommon: "30-35",
    rare: "30-35",
    epic: "30-35",
    legend: "30-35"
  },
  {
    value: "Fertilizer Absorption",
    valueImage: "fertilizer.svg",
    common: "0.8-1.2",
    uncommon: "0.8-1.2",
    rare: "0.8-1.2",
    epic: "0.8-1.2",
    legend: "0.8-1.2"
  }
]
  
  export const getAllAttributesData = () => allAttributesData;


  const attributeSetData = [
    {
      image: "yield.svg",
      name: "Yield"
    },
    {
      image: "tree-age.svg",
      name: "Max Age"
    },
    {
      image: "fertilizer.svg",
      name: "Fertilizer Absorption"
    },
    {
      image: "drought.svg",
      name: "Drought Tolerance"
    },
    {
      image: "grade.svg",
      name: "Grade"
    }
  ]

  export const getAttributesSetData = () => attributeSetData;