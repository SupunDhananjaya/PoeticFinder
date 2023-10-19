import React, { useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import ResponsiveAppBar from '../components/appbar';
import styles from './home.style.css';
import axios from 'axios';

export default function AddPoemPage() {
  const [poem, setPoem] = useState('');
  const [poet, setPoet] = useState('');
  const [year, setYear] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [metaphoricTerm, setMetaphoricTerm] = useState('');
  const [sourceDomain, setSourceDomain] = useState('');
  const [objectDomain, setObjectDomain] = useState('');
  const [mood, setMood] = useState('Neutral');
  const [meaning, setMenaing] = useState('');
  const [error, setError] = useState({
    poem: false,
    poet: false,
    year: false,
    lyrics: false,
    metaphoricTerm: false,
    sourceDomain: false,
    objectDomain: false,
    meaning: false,
  });
  const [incomplete, setIncomplete] = useState(true);
  const [hideSuccess, sethideSuccess] = useState(true);
  const [hideWarning, sethideWarning] = useState(true);
  const [hideError, sethideError] = useState(true);

  const handleChange = (event) => {
    const id = event.target.id || event.target.name;
    const val_org = event.target.value;
    const val = val_org.trim();
    if (id === 'poem') {
      setPoem(val_org);
      const requ_fields =
        val === '' || poet === '' || year === '' || lyrics === '';
      const meta =
        (metaphoricTerm === '' ||
          sourceDomain === '' ||
          objectDomain === '' ||
          meaning === '') &&
        (metaphoricTerm !== '' ||
          sourceDomain !== '' ||
          objectDomain !== '' ||
          meaning !== '');
      setIncomplete(requ_fields || meta);
    } else if (id === 'poet') {
      setPoet(val_org);
      const requ_fields =
        poem === '' || val === '' || year === '' || lyrics === '';
      const meta =
        (metaphoricTerm === '' ||
          sourceDomain === '' ||
          objectDomain === '' ||
          meaning === '') &&
        (metaphoricTerm !== '' ||
          sourceDomain !== '' ||
          objectDomain !== '' ||
          meaning !== '');
      setIncomplete(requ_fields || meta);
    } else if (id === 'year') {
      setYear(val_org);
      const requ_fields =
        poem === '' || poet === '' || val === '' || lyrics === '';
      const meta =
        (metaphoricTerm === '' ||
          sourceDomain === '' ||
          objectDomain === '' ||
          meaning === '') &&
        (metaphoricTerm !== '' ||
          sourceDomain !== '' ||
          objectDomain !== '' ||
          meaning !== '');
      setIncomplete(requ_fields || meta);
    } else if (id === 'lyrics') {
      setLyrics(val_org);
      const requ_fields =
        poem === '' || poet === '' || year === '' || val === '';
      const meta =
        (metaphoricTerm === '' ||
          sourceDomain === '' ||
          objectDomain === '' ||
          meaning === '') &&
        (metaphoricTerm !== '' ||
          sourceDomain !== '' ||
          objectDomain !== '' ||
          meaning !== '');
      setIncomplete(requ_fields || meta);
    } else if (id === 'metaphoricTerm') {
      setMetaphoricTerm(val_org);
      const requ_fields =
        poem === '' || poet === '' || year === '' || lyrics === '';
      const meta =
        (val === '' ||
          sourceDomain === '' ||
          objectDomain === '' ||
          meaning === '') &&
        (val !== '' ||
          sourceDomain !== '' ||
          objectDomain !== '' ||
          meaning !== '');
      setIncomplete(requ_fields || meta);
    } else if (id === 'sourceDomain') {
      setSourceDomain(val_org);
      const requ_fields =
        poem === '' || poet === '' || year === '' || lyrics === '';
      const meta =
        (metaphoricTerm === '' ||
          val === '' ||
          objectDomain === '' ||
          meaning === '') &&
        (metaphoricTerm !== '' ||
          val !== '' ||
          objectDomain !== '' ||
          meaning !== '');
      setIncomplete(requ_fields || meta);
    } else if (id === 'objectDomain') {
      setObjectDomain(val_org);
      const requ_fields =
        poem === '' || poet === '' || year === '' || lyrics === '';
      const meta =
        (metaphoricTerm === '' ||
          sourceDomain === '' ||
          val === '' ||
          meaning === '') &&
        (metaphoricTerm !== '' ||
          sourceDomain !== '' ||
          val !== '' ||
          meaning !== '');
      setIncomplete(requ_fields || meta);
    } else if (id === 'meaning') {
      setMenaing(val_org);
      const requ_fields =
        poem === '' || poet === '' || year === '' || lyrics === '';
      const meta =
        (metaphoricTerm === '' ||
          sourceDomain === '' ||
          objectDomain === '' ||
          val === '') &&
        (metaphoricTerm !== '' ||
          sourceDomain !== '' ||
          objectDomain !== '' ||
          val !== '');
      setIncomplete(requ_fields || meta);
    } else if (id === 'mood') {
      setMood(val_org);
    }
  };

  const handleSubmit = async () => {
    try {
      sethideSuccess(true);
      sethideWarning(true);
      sethideError(true);
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}/api/elastic/add`,
        {
          poem: poem,
          poet: poet,
          year: year,
          lyrics: lyrics,
          'metaphorical terms': metaphoricTerm,
          source_domain: sourceDomain,
          target_domain: objectDomain,
          Meaning: meaning,
          mood: mood,
        }
      );

      if (res.data.success) {
        sethideSuccess(false);
      } else {
        sethideWarning(false);
      }

      setPoem('');
      setPoet('');
      setYear('');
      setLyrics('');
      setMetaphoricTerm('');
      setSourceDomain('');
      setObjectDomain('');
      setMood('Neutral');
      setMenaing('');
    } catch (error) {
      sethideError(false);
    }
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <ResponsiveAppBar />
      </Grid>
      <Grid item container xs={12} mt={5} ml={2}>
        <Grid item xs={12}>
          <Typography variant="h2">
            Add <span className="green-color">Poem</span>
          </Typography>
        </Grid>

        <Grid
          item
          container
          xs={12}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box xs={12} hidden={hideSuccess}>
            <Alert onClose={() => {}}>New poem added!</Alert>
          </Box>

          <Box xs={12} hidden={hideWarning}>
            <Alert onClose={() => {}}>Some thing went wrong!</Alert>
          </Box>

          <Box xs={12} hidden={hideError}>
            <Alert onClose={() => {}}>
              Error! check your inputs and try aggain!
            </Alert>
          </Box>
        </Grid>

        <Grid
          item
          container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          xs={12}
          mt={2}
        >
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '30ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                error={error.poem}
                id="poem"
                label="Poem"
                value={poem}
                onChange={handleChange}
              />
              <TextField
                error={error.poet}
                id="poet"
                label="Author"
                value={poet}
                onChange={handleChange}
              />
            </div>

            <div>
              <TextField
                error={error.year}
                id="year"
                label="Year"
                value={year}
                onChange={handleChange}
              />
              <TextField
                error={error.metaphoricTerm}
                id="metaphoricTerm"
                label="Metaphoric Term"
                value={metaphoricTerm}
                onChange={handleChange}
              />
            </div>

            <div>
              <TextField
                error={error.sourceDomain}
                id="sourceDomain"
                label="Source Domain"
                value={sourceDomain}
                onChange={handleChange}
              />
              <TextField
                error={error.objectDomain}
                id="objectDomain"
                label="Object Domain"
                value={objectDomain}
                onChange={handleChange}
              />
            </div>
          </Box>
        </Grid>

        <Grid
          item
          container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          xs={12}
        >
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '62ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                error={error.meaning}
                id="meaning"
                label="Meaning"
                value={meaning}
                onChange={handleChange}
              />
            </div>

            <div>
              <TextField
                error={error.lyrics}
                id="lyrics"
                label="Lyrics"
                value={lyrics}
                rows={4}
                multiline
                onChange={handleChange}
              />
            </div>
          </Box>
        </Grid>
        <Grid
          item
          container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          xs={12}
        >
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '62ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <Select
                labelId="demo-simple-select-label"
                id="mood"
                name="mood"
                value={mood}
                label="Mood"
                onChange={handleChange}
              >
                <MenuItem value={'Negative'}>Negative</MenuItem>
                <MenuItem value={'Neutral'}>Neutral</MenuItem>
                <MenuItem value={'Positive'}>Positive</MenuItem>
              </Select>
            </div>
          </Box>
        </Grid>

        <Grid
          item
          container
          xs={12}
          mt={3}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Button
              fullWidth
              disabled={incomplete}
              onClick={handleSubmit}
              variant="contained"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
