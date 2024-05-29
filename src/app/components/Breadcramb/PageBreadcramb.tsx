import React from 'react';
import Breadcramb from './Breadcramb';

function PageBredcramb() {
  const links = [
    { name: 'Коти', href: 'koti' },
    { name: 'Собаки', href: 'sobaki' },
    { name: 'Птахи', href: 'ptahi' },
    { name: 'Риби', href: 'ribi' },
    { name: 'Іграшки', href: 'igrashki' },
    { name: 'Сухий корм', href: 'suhij-korm' },
    { name: 'Політика конфіденційності', href: 'policy' },
    { name: 'Співпраця', href: 'cooperation' },
    { name: 'Категорії', href: 'categories' },
    { name: 'Публічна оферта', href: 'oferta' },
  ];
  return (
    <Breadcramb
      homeElement={<span className="pl-3">Головна</span>}
      separator={<span>/</span>}
      linksСorrespondence={links}
    />
  );
}

export default PageBredcramb;
