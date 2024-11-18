function printClickEventLogs(logs) {
    // for(let log in logs){
    //   return logs[log].type === "click" ? console.log(`${logs[log].type} : : ${new Date(logs[log].date).toLocaleString()}`) : null ; 
    // }
    logs.forEach((item)=>{
        item.type === "click" ? 
        console.log(`${item.type} : : ${new Date(item.date).toLocaleString()}`) 
        : 
        null ; 
    })
  }
  // for In은 너무 지저분하기 때문에 forEach로 핸들하는 방법도 알기 
  printClickEventLogs([
    {
      type: "click",
      date: "2023-01-01T12:00:00Z",
    },
    {
      type: "hover",
      date: "2023-01-01T12:10:00Z",
    },
    {
      type: "scroll",
      date: "2023-01-01T12:15:00Z",
    },
    {
      type: "click",
      date: "2023-01-01T12:20:00Z",
    },
  ]);
  
  // 출력 결과
  // click :: 2023. 1. 1. 오후 9:00:00
  // click :: 2023. 1. 1. 오후 9:20:00