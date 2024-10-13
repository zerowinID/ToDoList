import { ITask } from './task.interface';

export class Task implements ITask {
  id: number;
  name: string;
  validated: boolean;
  position: { x: number, y: number };

  constructor(name: string, position: { x: number, y: number }) {
    this.id = Date.now();
    this.name = name;
    this.validated = false;
    this.position = position;
  }


  toggleValidate(): void {
    this.validated = !this.validated;
  }


  updateName(newName: string): void {
    if (newName.trim()) {
      this.name = newName.trim();
    }
  }

}
