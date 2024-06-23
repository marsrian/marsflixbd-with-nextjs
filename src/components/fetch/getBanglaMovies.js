export async function getBanglaMovies() {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/bangla-movies`, {
      next: {
        revalidate: 10,
      },
    });
    if (!res.ok) {
      throw new Error("Fetch failed bangla movie data");
    }
    return await res.json();
  } catch (error) {
    console.log(error.message);
    return { banglaMovies: [] };
  }
}
