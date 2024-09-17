export class CreatePerifericoDto {
    name: string;
  }

export class CreateComputerDto {
    name:string;
    color:string;
    dataFabricacao:number;
    perifericos: CreatePerifericoDto[];
}
