# Day 10
### Welcome React App 만들기 


##### src/App.jsx 안에 다음 조건을 만족하는 Welcome 컴포넌트를 구현하세요
+ Welcome 컴포넌트는 App 컴포넌트의 자식 컴포넌트입니다.
+ Welcome 컴포넌트는 다음 2개의 Props를 받습니다.
> 사용자의 이름을 의미하는 `name`
> 사용자의 가입 여부를 의미하는 `isMember`

+ isMember 값에 따라 다음과 같이 조건부 렌더링을 수행합니다:
>   `true`일 경우:"${name}님 다시 오셨군요"를 렌더링.
>   `false`일 경우: "${name}님 가입하시겠어요?"를 렌더링.