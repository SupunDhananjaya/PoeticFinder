import { Grid, TextField } from '@mui/material';
import Button from '@mui/material/Button';

export default function SearchBar({
  poemName,
  setPoemName,
  metaphor,
  lyrics,
  author,
  setMetaphor,
  setLyrics,
  setAuthor,
  handleSearch,
}) {
  const handleChange = (event) => {
    const id = event.target.id;
    const val = event.target.value;

    if (id === 'metaphor') {
      setMetaphor(val);
    } else if (id === 'lyrics') {
      setLyrics(val);
    } else if (id === 'author') {
      setAuthor(val);
    } else if (id === 'poem') {
      setPoemName(val);
    }
  };

  return (
    <Grid container spacing={1} alignItems="center">
      <Grid item xs={12} md={5} lg={2.5}>
        <TextField
          id="metaphor"
          value={metaphor}
          onChange={handleChange}
          label="Search by metaphors"
          color="primary"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={5} lg={2.5}>
        <TextField
          id="poem"
          value={poemName}
          onChange={handleChange}
          label="Search by poem name"
          color="primary"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={5} lg={2.5}>
        <TextField
          id="lyrics"
          value={lyrics}
          onChange={handleChange}
          label="Search by lyrics"
          color="primary"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={5} lg={2.5}>
        <TextField
          id="author"
          value={author}
          onChange={handleChange}
          label="Search by author"
          color="primary"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={5} lg={2}>
        <Button
          onClick={handleSearch}
          variant="contained"
          color="primary"
          fullWidth
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
}
