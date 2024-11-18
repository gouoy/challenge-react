function delay(ms) {

    return promise = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },ms)
    })
  }
  
  async function main() {
    console.log("3초 후 결과를 공개하겠습니다!");
    await delay(3000); // 이 부분이 넘어가요 저 함수로... 
    console.log("승자는 이정환!");
  }
  
  main();
  // 출력 결과 :
  // 3초 후 결과를 공개하겠습니다!
  // 승자는 이정환!