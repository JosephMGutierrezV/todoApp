export class Todo {
  public id: number;
  public text: string;
  public completed: boolean;

  constructor(texto: string) {
    this.text = texto;
    this.id = new Date().getTime();
    this.completed = false;
  }
}
