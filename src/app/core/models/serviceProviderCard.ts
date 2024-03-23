import { OnlineStatus } from "../enum/onlineStatus";

export interface CardData {
  imageUrl: string;
  altText: string;
  name: string;
  subtitle: string;
  online: OnlineStatus;
  starRating: number;
  city: string;
  cityRating: number;
  category: string;
  categoryRating: number;
  price: number;
}