import { ILawyer } from "../../interfaces/lawyer.interface";

export interface IPaginatedLawyers {
  total:       number;
  totalPages:  number;
  currentPage: number;
  lawyers:     ILawyer[];
}

export interface IResponseCreateLawyer {
  message: string;
  lawyer:  ILawyer;
}

export interface IDetailLawyer {
  lawyer: Lawyer;
}

export interface Lawyer {
  id:          number;
  firstName:   string;
  lastName:    string;
  cityId:      number;
  phoneNumber: string;
  dni:         string;
  specialtyId: number;
  description: string;
  image:       null;
  createdAt:   Date;
  updatedAt:   Date;
  City:        City;
  Specialty:   City;
}

export interface City {
  id:        number;
  name:      string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IQuery {
  cityId?:     number;
  specialtyId?:number;
}