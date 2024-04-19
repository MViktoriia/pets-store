export interface Manufacturer {
  id: string;
  trade_brand: string;
  country: string;
  country_brand_registration: string;
}

export interface Image {
  id: string /*need to clarify the type */;
  image: string /*need to clarify the type */;
  product: string /*need to clarify the type */;
}

export interface TypeProductCharacteristics {
  productCharacteristics: string;
  typeCharacteristic: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  productCode: string;
  descriptionShort: string;
  price: string;
  priceDiscount: string;
  categories: string;
  discountPercentage: string;
  typesProduct: TypeProductCharacteristics[];
  image: string;
  rating: string;
}
