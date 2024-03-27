import { OnlineStatus } from "../enum/onlineStatus";

export interface ServiceProviderCardModel {
  id: string;
  imageUrl: string;
  altText: string;
  name: string;
  subtitle: string;
  status: OnlineStatus;
  starRating: number;
  city: string;
  cityRating: number;
  category: string;
  categoryRating: number;
  price: number;
}