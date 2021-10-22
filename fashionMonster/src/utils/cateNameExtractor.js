export default function extractMainCategory(categoryName) {
  const tempName = categoryName.split('/')[0];
  const mainName = tempName.substring(0, tempName.length - 1);
  return mainName;
};