// GENERALS

export type GeneralsTypes = {
  address: string;
  addressIframe: string;
  addressUrl: string;
  branch: string;
  city: string;
  district: string;
  email: string;
  fullName: string;
  graduationYear: string;
  logo: string;
  phone: string;
  university: string;
  wpMessage: string;
  wpNumber: string;
} | null

// SOCIALS

export type SocialsTypes = {
  socialUrl: string;
  iconName: string;
  socialName: string;
}

// BANNERS

export type BannersTypes = {
  id: number;
  title: string;
  description: string;
  image: string;
  btnActive: boolean;
  btnText: string;
  btnUrl: string;
}

// BLOGS

export type BlogsTypes = {
  id: number;
  title: string;
  description: string;
  contentText: string;
  image: string;
  tags: string[];
  url: string;
  isRecipe: boolean;
  created_at: Date;
}