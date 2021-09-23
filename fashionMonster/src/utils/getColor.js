export default function getColor(color) {
  switch (color) {
    case '블랙':
      return { background: '#000', color: '#fff' };
    case '화이트':
      return { background: '#fff', color: '#000' };
    case '그레이':
      return { background: '#ccc', color: '#fff' };
    case '다크그레이':
      return { background: '#888', color: '#fff' };
    case '보라':
      return { background: '#A03FCE', color: '#fff' };
    case '연청':
      return { background: '#A8C2D0', color: '#fff' };
    case '중청':
      return { background: '#3D5F73', color: '#fff' };
    case '진청':
      return { background: '#1B2849', color: '#fff' };
    case '회청':
      return { background: '#737E84', color: '#fff' };
    case '흑청':
      return { background: '#222', color: '#fff' };
    case '아이보리':
      return { background: '#DDD8C5', color: '#000' };
    case '크림':
      return { background: '#EEECDF', color: '#000' };
    case '베이지':
      return { background: '#CDB284', color: '#000' };
    case '오트밀':
      return { background: '#CEC6BD', color: '#000' };
    case '레드':
      return { background: '#D33139', color: '#fff' };
    case '오렌지':
      return { background: '#F56718', color: '#fff' };
    case '옐로우':
      return { background: '#F0EA1F', color: '#000' };
    case '머스타드':
      return { background: '#F1B12D', color: '#fff' };
    case '그린':
      return { background: '#4D826C', color: '#fff' };
    case '소라':
      return { background: '#C7CFE8', color: '#fff' };
    case '블루':
      return { background: '#2A71F1', color: '#fff' };
    case '네이비':
      return { background: '#163877', color: '#fff' };
    case '민트':
      return { background: '#26C5DA', color: '#fff' };
    case '카키':
      return { background: '#8F784B', color: '#fff' };
    case '브라운':
      return { background: '#6E5039', color: '#fff' };
    case '핑크':
      return { background: '#F36F92', color: '#fff' };
  }
};