// "{이름}: {평균}" 형태로 출력합니다.
function printAvgScore(students) {
    for(let student in students){
        const score = students[student].scores.reduce((acc,cur)=>acc+cur,0) ; 
        const avgScore = score/students[student].scores.length
        
        console.log(`${student} : ${avgScore}`)
    }
}

printAvgScore({
  이정환: { hobby: "테니스", scores: [10, 20, 30, 40, 50] },
  김효빈: { hobby: "테니스", scores: [90, 80, 30, 70, 50] },
  홍길동: { hobby: "의적", scores: [100, 100, 20, 20, 50] },
});

// 출력 결과 :
// 이정환: 30
// 김효빈: 64
// 홍길동: 58