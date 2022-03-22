export class Book {
    constructor(
        public id?: string,
        public title?: string,
        public author?: string,
        public rating?: number,
        public description?: string,
        public imageUrl?: string,
        public dateRead?: Date
    ) {}
}
