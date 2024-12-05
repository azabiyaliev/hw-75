import { Box, Container, IconButton, TextField, } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import React, { useState } from 'react';
import { IPassword } from '../../types';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { fetchPostEncoded } from './thunks/thunks.ts';
import { passwordList } from './passwordSlice.ts';

const initialForm = {
  encodedMsg: "",
  decodedMsg: "",
  password: "",
};

const Password = () => {

  const [form, setForm] = useState<IPassword>({ ...initialForm });
  const dispatch = useAppDispatch();
  const encode = useAppSelector(passwordList);
  console.log(encode);

  const onChangeField = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitForm = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        await dispatch(fetchPostEncoded());
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={submitForm}>
      <Container maxWidth="xl">
        <Box
          sx={{
            mt: 5,
            py: 3,
            display: 'grid',
            gap: 2,
            flexWrap: 'wrap',
            width: '100%',
          }}
        >
          <TextField
            sx={{mx: 'auto', width: '30%' }}
            multiline
            rows={5}
            type="text"
            id="outlined-basic"
            label="Decoded message"
            name="encodedMsg"
            variant="outlined"
            value={form.encodedMsg}
            onChange={onChangeField}
          />
          <Grid container spacing={11} mx="auto" width="30%">
            <Grid>
              <TextField
                sx={{width: '130%' }}
                type="text"
                id="outlined-basic"
                label="Password"
                name="password"
                variant="outlined"
                value={form.password}
                onChange={onChangeField}
              />
            </Grid>
            <Grid>
              <IconButton type="submit">
                <ArrowDownwardOutlinedIcon sx={{ fontSize: 44 }} />
              </IconButton>
              <IconButton>
                <ArrowUpwardOutlinedIcon sx={{ fontSize: 44 }} />
              </IconButton>
            </Grid>
          </Grid>
          <TextField
            sx={{mx: 'auto', width: '30%' }}
            value={form.decodedMsg}
            type="text"
            multiline
            rows={5}
            id="outlined-basic"
            label="Encoded message"
            name="decodedMsg"
            variant="outlined"
            onChange={onChangeField}
          />
        </Box>
      </Container>
    </form>
  );
};

export default Password;