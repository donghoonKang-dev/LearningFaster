function getMiddle(mid) {
  return {
    id: mid.id,
    label: mid.name,
    value: mid.id,
  }
};

export default function getCategory(category) {
  return {
    id: category.id,
    label: category.name,
    value: category.id,
    middle: category.CategoryMiddles?.map(v => getMiddle(v)),
  }
};