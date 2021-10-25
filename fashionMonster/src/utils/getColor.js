export default function getColor(color) {
  switch (color.name) {
    case '블랙':
      return { background: '#000', color: '#fff' };
    case '화이트':
      return { background: '#fff', color: '#000' };
    case '그레이':
      return { background: '#bcbdbf', color: '#fff' };
    case '다크그레이':
      return { background: '#777872', color: '#fff' };
    case '아이보리':
      return { background: '#faf3e9', color: '#000' };
    case '크림':
      return { background: '#fff9e1', color: '#000' };
    case '베이지':
      return { background: '#f1e9d5', color: '#000' };
    case '오트밀':
      return { background: '#e3d5c5', color: '#000' };
    case '레드':
      return { background: '#fd0a1e', color: '#fff' };
    case '오렌지':
      return { background: '#ff5f1f', color: '#fff' };
    case '옐로우':
      return { background: '#ffd600', color: '#000' };
    case '머스타드':
      return { background: '#ffdb58', color: '#fff' };
    case '그린':
      return { background: '#5bc236', color: '#fff' };
    case '소라':
      return { background: '#02cbfe', color: '#fff' };
    case '블루':
      return { background: '#007fff', color: '#fff' };
    case '네이비':
      return { background: '#142954', color: '#fff' };
    case '민트':
      return { background: '#cbfffa', color: '#000' };
    case '카키':
      return { background: '#9c8876', color: '#fff' };
    case '브라운':
      return { background: '#a57449', color: '#fff' };
    case '핑크':
      return { background: '#ffbad2', color: '#fff' };
    case '보라':
      return { background: '#685292', color: '#fff' };
    case '연청':
      return { background: 'https://i.ibb.co/K291GGK/lj.png', color: '#fff' };
    case '중청':
      return { background: 'https://i.ibb.co/8NpnSmx/j.png', color: '#fff' };
    case '진청':
      return { background: 'https://i.ibb.co/gdvDCXv/dj.png', color: '#fff' };
    case '회청':
      return { background: 'https://i.ibb.co/3v4yRWY/gj.png', color: '#fff' };
    case '흑청':
      return { background: 'https://i.ibb.co/fXNsYdm/bj.png', color: '#fff' };
  }
}