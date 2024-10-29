import { Lawyer } from "../../interfaces/lawyer.interface";

export interface IPaginatedLawyers {
  total:       number;
  totalPages:  number;
  currentPage: number;
  lawyers:     Lawyer[];
}
