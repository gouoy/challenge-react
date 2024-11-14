function getDiscountedMenus(menus) {
   const newPrice = menus.map((item)=> ({...item, price:item.price-500}) );
   console.log(newPrice)
  }
  
  const discountedMenus = getDiscountedMenus([
    { itemId: 1, name: "아메리카노", price: 3000 },
    { itemId: 2, name: "라떼", price: 3500 },
    { itemId: 3, name: "초콜릿 케이크", price: 5000 },
    { itemId: 4, name: "크로와상", price: 2800 },
  ]);
  
//   console.log(discountedMenus);

  // 출력 결과 :
  // { itemId: 1, name: '아메리카노', price: 3000, discountedPrice: 2500 },
  // { itemId: 2, name: '라떼', price: 3500, discountedPrice: 3000 },
  // { itemId: 3, name: '초콜릿 케이크', price: 5000, discountedPrice: 4500 },
  // { itemId: 4, name: '크로와상', price: 2800, discountedPrice: 2300 }