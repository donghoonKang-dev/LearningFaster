export default function getCateSize(name) {
  switch (name) {
    case 'chest': return '가슴단면';
    case 'shoulder': return '어깨선';
    case 'arm': return '소매';
    case 'total': return '총장';
    case 'waist': return '허리단면';
    case 'rise': return '밑위';
    case 'thigh': return '허벅지단면';
    case 'hem': return '밑단';
    case 'heel': return '굽높이';
    case 'feet': return '발볼 넓이';
    default: return '실측 사이즈';
  }
}