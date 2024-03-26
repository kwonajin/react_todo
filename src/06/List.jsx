import './List.css'

export default function List(props){
  // const fruits = [{id:1, name:'apple', calories:95},
  //                 {id:2, name:'orange', calories:45},
  //                 {id:3, name:'banana', calories:105},
  //                 {id:4, name:'cocount', calories:159},
  //                 {id:5, name:'pineapple', calories:37}];

  //오름차순(문자열)
  // fruits.sort((a,b) => a.name.localeCompare(b.name))

  //내림차순(문자열)
  // fruits.sort((a,b) => b.name.localeCompare(a.name))
  // fruits.sort((a,b) => a.calories - b.calories)
  // fruits.sort((a,b) => b.calories - a.calories)
  // const listItem = fruits.map((fruit,index) => <li key={index}>{fruit.name} : {fruit.calories}</li>)

//   const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
//   const listItem = highCalFruits.map((fruit, index) =>
//                                                       <li key={index}>
//                                                         {fruit.name} : {fruit.calories}
//                                                       </li>
//   return(
//     <ul>
//       {listItem}
//     </ul>
//   )

const category = props.category;
const itemList = props.items;

const listItem = itemList.map(item => <li key={item.id}>
                                        {item.name}: &nbsp; 
                                        <b>{item.calories}</b>
                                      </li>);
return(
  <>
    <h3 className="list-category">{category}</h3>
    <ul className="list-items">{listItem}</ul>
  </>
)

}