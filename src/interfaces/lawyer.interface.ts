export interface ILawyer {
  id:          number;
  firstName:   string;
  lastName:    string;
  cityId:      number;
  phoneNumber: string;
  dni:         string;
  specialtyId: number;
  description: string;
  createdAt:   Date;
  updatedAt:   Date;
  City:        ICity;
  Specialty:   ICity;
}

export interface ICity {
  id:        number;
  name:      string;
  createdAt: Date;
  updatedAt: Date;
}