const useGenre = (selectedGenres) => {
  if (selectedGenres.length < 1) {
    return "";
  }

  const selectedGeneresIds = selectedGenres.map((sg) => sg.id);

  return selectedGeneresIds.filter((prev, curr) => prev + "," + curr);
};

export default useGenre;
