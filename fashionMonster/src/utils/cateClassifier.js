import { clothesCategory, shoesCategory } from '../assets/data/category';

export default function cateClassifier(categoryName) {
  const tempName = categoryName.split('/')[0];
  const mainName = tempName.substring(0, tempName.length - 1);
  if (clothesCategory.includes(mainName)) return 'clothes';
  else if (shoesCategory.includes(mainName)) return 'shoes';
  else return 'others';
}