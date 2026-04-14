// Is line ko ensure karein ki ye aisi hi ho:
if (isFav(song)) {
    favorites = favorites.filter(f => !(String(f.id) === String(song.id) && f.type === song.type));
}
