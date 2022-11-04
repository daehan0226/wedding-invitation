export interface IGenericRepository {
    findAll();
    deleteById(id: string);
    findById(id: string);
}