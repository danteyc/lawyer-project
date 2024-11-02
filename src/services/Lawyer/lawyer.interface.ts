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