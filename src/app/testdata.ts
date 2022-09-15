import { InMemoryDbService } from "angular-in-memory-web-api";

export class TestData implements InMemoryDbService{

createDb() {
    let bookDetails=[
        {id:1,name:'Asp.net',price:'300',description:'Aspt.net book'},
        {id:2,name:'Java',price:'600',description:'Java book'},
        {id:3,name:'Laravel',price:'30',description:'Laravel book'},
        {id:4,name:'Network',price:'200',description:'Network book'},
     ]

            return {books:bookDetails}
     
    
}


}