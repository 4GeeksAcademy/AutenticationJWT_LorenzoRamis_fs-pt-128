export const login = async (user, navigate) => {
  const responde = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/login`,
    {
      method: "POST",
      body: JSON.stringify(user),
      headers:{
        'Content-Type': 'application/json'
      }
    }
  )

  const data = await responde.json()
  if(!responde.ok){
    alert(data.error)
  }
  localStorage.setItem('token', data.token)
  navigate('/users/')
};

export const register = async (user, navigate) => {
  const responde = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/register`,
    {
      method: "POST",
      body: JSON.stringify(user),
      headers:{
        'Content-Type': 'application/json'
      }
    }
  )
  
  const data = await responde.json()
  if(!responde.ok){
    alert(data.error)
  }
  navigate('/')
}
