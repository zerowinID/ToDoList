export interface ITask {
  id: number;
  name: string;
  validated: boolean;
  position: { x: number, y: number };
}
