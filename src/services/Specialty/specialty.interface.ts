export interface IResponseSpecialty {
  specialties: Specialty[];
}

export interface Specialty {
  id:        number;
  name:      string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IResponseCreateSpecialty {
  message:   string;
  specialty: Specialty;
}
