export async function getCommits(url: string) {
  const api = async () => {
    const response = await fetch(`${url}/commits`);
    const data = response.json();

    return data;
  };

  const api_data = await api();

  return api_data;
}

export async function getRepositories() {
  const api = async () => {
    const response = await fetch(
      'https://api.github.com/users/Chamoouske/repos'
    );
    const data = response.json();

    return data;
  };

  const api_data = await api();

  return api_data;
}
