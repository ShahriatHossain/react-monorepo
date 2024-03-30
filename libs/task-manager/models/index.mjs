class s {
  constructor(i) {
    this.id = "", this.title = "", this.description = "", i && (this.id = i.id, this.title = i.title, this.description = i.description);
  }
}
class e {
  constructor(i) {
    this.id = "", this.title = "", this.description = "", i && (this.id = i.id, this.title = i.title, this.description = i.description);
  }
}
export {
  s as Task,
  e as TaskFormValues
};
