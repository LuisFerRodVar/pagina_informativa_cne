export class DirectoryDto {
  Id?: string;
  name: string;
  table: string;
  job: string;
  institution: string;
  mail: string;
  isActivate?: number;
}
export class TableDto {
  name: string;
  items: DirectoryDto[];
}
