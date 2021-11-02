import React from 'react'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import TextField from '@material-ui/core/TextField';
import { FormControlLabel, FormLabel, FormControl, makeStyles, Radio, RadioGroup } from '@material-ui/core';
import { useState } from 'react';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
  }
})


export default function Create() {
  const classes = useStyles();
  const history=useHistory();
  const [title, setTilte] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTilteError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('todos')

  const handleSubmit = (e) => {
    e.preventDefault()

    setTilteError(false)
    setDetailsError(false)

    if (title == '') {
      setTilteError(true)
    }
    if (details == '') {
      setDetailsError(true)
    }

    if (title && details) {
      fetch('http://localhost:8000/notes', { 
        method: 'POST',
        headers:{"Content-type": "application/json"},
        body:JSON.stringify({title,details,category})
      }).then(()=> history.push('/'))

    }
  }

  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTilte(e.target.value)}
          className={classes.field}
          label="Note Title"
          variant="outlined"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label="Details"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          required
          error={detailsError}
        />
        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="todos" />
            <FormControlLabel value="reminders" control={<Radio />} label="reminders" />
            <FormControlLabel value="work" control={<Radio />} label="work" />
          </RadioGroup>
        </FormControl>


        <Button
          className={classes.btn}
          variant='contained'
          type='submit'
          disableElevation
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>




    </Container>
  )
}
