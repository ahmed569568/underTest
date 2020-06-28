import { Component, OnInit } from '@angular/core';
import { GetPostService } from '../services/get-post.service';
import { map } from 'rxjs/operators';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  // listsPosts:any ;

  testing = new Set (['DDa','dDA','ahmed','ali'])
  gyms = new Set (['3lmashy','kopra','jofnia','subZaero'])

  testingF = ['one','two','three','four']
  testings = ['fifi','six','seven','eight']


name = {1:'ahmed'}
name2 = {2:'ezzat'}
 name3 = {3:'ali'}
  myMap = new Map();
  

constructor( private postsServices : GetPostService){

  const myNames = {...this.name , ...this.name2 , ...this.name3}
  // console.log(myNames)

  delete this.name
  console.log(this.name)

//   console.log(this.testing.add('rewan')) 
//   this.testing.delete('ahmed')
// console.log(this.testing)


// const gym = this.gyms.values(); 
// const gym2 = this.gyms.keys(); 
//   const gym3 = this.gyms.entries(); 
//   console.log(gym)
//   console.log(gym2)
//   console.log(gym3)


// this.testingF.push(...this.testings)
}

ngOnInit(){
  // this.getPosts();

}

// getPosts(){
//   this.postsServices.getPosts().subscribe(res =>{
//     this.listsPosts = res;
//     console.log(res.length)
// })
// }

}
