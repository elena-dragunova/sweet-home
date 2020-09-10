export function truncateText (text) {
  const arr = text.split(' ');
  const shortened = arr.slice(0, 20);
  return shortened.join(' ') + '...';
}

export function chooseCatalogImage(title) {
  switch (title) {
    case 'sofas':
      return 'https://cdn.pixabay.com/photo/2017/07/24/17/18/sofa-2535448_960_720.png';
    case 'chairs':
      return 'https://cdn.pixabay.com/photo/2019/03/21/03/29/chair-4070161_960_720.png';
    case 'cupboards':
      return 'https://cdn.pixabay.com/photo/2014/12/21/23/51/cupboard-576195_960_720.png';
    case 'vases':
      return 'https://cdn.pixabay.com/photo/2019/12/01/23/39/flowers-4666664_960_720.png';
    default:
      return 'https://cdn.pixabay.com/photo/2017/08/19/02/58/sofa-2657172_960_720.png';
  }
}
