import './App.css'
import Welcome from './components/Welcome'

function App() {
   const member = [
        {
          id: 1,
          name: 'gayeong',
          isMember: false,
        },
        {
          id: 2,
          name: 'bori',
          isMember: true,
        },
        {
          id: 3, 
          name: 'cookie',
          isMember: true,
        },
      ]

  return (
    <>
    {member.map((item)=>(<Welcome key={item.id} isMember={item.isMember} name={item.name}/>))}
    </>
  )
}

export default App
