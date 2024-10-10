export type TeamDto = {
    name: string;
    dayMatch: string;
    members: { userId: number }[];  // Usando objetos para definir a relação
}
