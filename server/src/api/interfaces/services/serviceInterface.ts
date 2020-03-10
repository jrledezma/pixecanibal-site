export interface ServiceInterface {
  Create(objCreate: any): any;
  Modify(objModify: any): any
  GetAll(): any,
  GetByID(_id: string): any,
}