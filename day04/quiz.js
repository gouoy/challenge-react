const book = {
  title: "한 입 크기로 잘라먹는 리액트",
  author: "이정환",
  // publishedYear 속성은 이 객체에는 없습니다.
}; 


const book2 = {
    title: "한 입 크기로 잘라먹는 리액트2",
    author: "이정환",
    publishedYear: "1905"
    // publishedYear 속성은 이 객체에는 없습니다.
  }; 

function hasPublishedYear(item){
   return item.publishedYear ? `출판 연도는 ${item.publishedYear}입니다` : '출판연도 정보가 없습니다' ; 
}

console.log(hasPublishedYear(book))
console.log(hasPublishedYear(book2))
