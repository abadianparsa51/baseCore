import { OnlineStatus } from "../enum/onlineStatus";

export interface ServiceProviderModel{
     id: string;
     name: string;
     lastName: string;
     imgProfile: string;
     onlineStatus: OnlineStatus
     ;
     speciality: string; // e.g., عکاس, فیلمبردار, ایدیتور
     jobInformation: {
       yearsOfExperience: number;
       hasAtelier: boolean;
       starRating: number;
     };
     workSamples: {
       images: string[]; // URLs of images
       videos: string[]; // URLs of videos
     };
}