const KEY_TMDB = "264e94206a227144b384499691e51dcd";
const URL_BASE_TMDB = "https://api.themoviedb.org/3";

export const login = async (user, navigate) => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/login`,
    {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    },
  )

  const data = await response.json()

  console.log("Respuesta Login:", data)

  if (!response.ok) {
    alert(data.error)
    return
  }
  localStorage.setItem("token", data.token)
  navigate(`/users/${data.user.id}`)
};

export const register = async (user, navigate) => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/register`,
    {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  const data = await response.json();
  if (!response.ok) {
    alert(data.error)
  }
  navigate("/")
}

export const userCheck = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/profile`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  )
  const data = await response.json();
  if (!response.ok) {
    return false;
  }
  return data;
};

export const getRantedMovies = async () => {
  const resp = await fetch(
    `${URL_BASE_TMDB}/movie/popular?api_key=${KEY_TMDB}&language=es-ES`,
  )
  if (resp.ok) {
    const data = await resp.json();
    return data.results;
  } else {
    alert(data.error)
  }
}

export const getUpcommigMovies = async () => {
  const resp = await fetch(
    `${URL_BASE_TMDB}/movie/upcoming?api_key=${KEY_TMDB}&language=es-ES`,
  )
  if (resp.ok) {
    const data = await resp.json();
    return data.results;
  } else {
    alert(data.error)
  }
}

export const getRantedTv = async () => {
  const resp = await fetch(
    `${URL_BASE_TMDB}/tv/popular?api_key=${KEY_TMDB}&language=es-ES`,
  )
  if (resp.ok) {
    const data = await resp.json();
    return data.results
  } else {
    alert(data.error)
  }
}