export type CategoriaMenu = 'clasicos' | 'especiales' | 'frios' | 'pasteleria';

export interface ItemMenu {
  id: string;
  nombre: string;
  descripcion: string;
  categoria: CategoriaMenu;
}

export const categorias: Record<CategoriaMenu, { label: string; descripcion: string }> = {
  clasicos: {
    label: 'Clásicos',
    descripcion: 'Espresso, cortado, flat white, latte y capuchino.',
  },
  especiales: {
    label: 'Especiales',
    descripcion: 'Combinaciones con sabores artesanales.',
  },
  frios: {
    label: 'Fríos',
    descripcion: 'Iced coffees, tónicos y cold brew.',
  },
  pasteleria: {
    label: 'Viennoiserie & Pastelería',
    descripcion: 'Horneado artesanal fresco cada mañana.',
  },
};

export const menuItems: ItemMenu[] = [
  // Clásicos
  { id: 'americano',  nombre: 'Americano',  descripcion: 'Espresso con agua caliente. Limpio y profundo.',          categoria: 'clasicos' },
  { id: 'cortado',    nombre: 'Cortado',    descripcion: 'Espresso con una nube de leche texturizada.',             categoria: 'clasicos' },
  { id: 'flat-white', nombre: 'Flat White', descripcion: 'Doble ristretto con leche microespumada sedosa.',         categoria: 'clasicos' },
  { id: 'latte',      nombre: 'Latte',      descripcion: 'Espresso con leche vaporizada y arte latte.',             categoria: 'clasicos' },
  { id: 'capuchino',  nombre: 'Capuchino',  descripcion: 'Equilibrio clásico entre espresso, leche y espuma.',     categoria: 'clasicos' },

  // Especiales
  { id: 'caramel-latte',  nombre: 'Caramel Latte',      descripcion: 'Espresso con caramelo artesanal y leche vaporizada.', categoria: 'especiales' },
  { id: 'pistacho-latte', nombre: 'Pistacho Latte',     descripcion: 'Especial de la casa. En caliente o frío con crema.',  categoria: 'especiales' },
  { id: 'avellana-latte', nombre: 'Avellana Latte',     descripcion: 'Latte con pasta de avellana y espuma suave.',         categoria: 'especiales' },
  { id: 'ddl-latte',      nombre: 'Dulce de Leche Latte', descripcion: 'Sabor argentino, preparación italiana.',           categoria: 'especiales' },
  { id: 'submarino',      nombre: 'Submarino',           descripcion: 'Chocolate caliente con espresso. Clásico invernal.', categoria: 'especiales' },

  // Fríos
  { id: 'iced-latte',      nombre: 'Iced Latte',      descripcion: 'Espresso sobre leche fría con hielo.',               categoria: 'frios' },
  { id: 'iced-pistacho',   nombre: 'Iced Pistacho',   descripcion: 'El clásico de la casa en versión helada con crema.',  categoria: 'frios' },
  { id: 'espresso-tonico', nombre: 'Espresso Tónico', descripcion: 'Espresso sobre agua tónica con twist de cítrico.',   categoria: 'frios' },
  { id: 'orange-coffee',   nombre: 'Orange Coffee',   descripcion: 'Espresso con jugo de naranja natural y hielo.',      categoria: 'frios' },
  { id: 'red-tonic',       nombre: 'Red Tonic',       descripcion: 'Tónica con frambuesa y espresso. Refrescante.',      categoria: 'frios' },

  // Viennoiserie & Pastelería
  { id: 'croissant',          nombre: 'Croissant Bicolor',    descripcion: 'Hojaldre fresco con manteca francesa, dorado perfecto.',     categoria: 'pasteleria' },
  { id: 'danesa-arandanos',   nombre: 'Danesa Crumble Arándanos', descripcion: 'Hojaldre con crumble y arándanos frescos.',             categoria: 'pasteleria' },
  { id: 'roll-canela',        nombre: 'Roll de Canela',       descripcion: 'Masa brioche, canela y glaseado de queso crema.',           categoria: 'pasteleria' },
  { id: 'pan-chocolate',      nombre: 'Pan de Chocolate',     descripcion: 'Hojaldre con chocolate belga de alta calidad.',             categoria: 'pasteleria' },
  { id: 'tarta-coco-ddl',     nombre: 'Tarta Coco y DDL',     descripcion: 'Tarta de coco con dulce de leche y base crocante.',        categoria: 'pasteleria' },
  { id: 'budin-limon',        nombre: 'Budín Limón y Amapola', descripcion: 'Húmedo, cítrico, con glaseado de limón y semillas.',       categoria: 'pasteleria' },
];
