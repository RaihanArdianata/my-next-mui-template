import React, { useState } from 'react';
import Layout from 'layouts/dashboard';
import { Box, Divider, FormControl, MenuItem, Select, Stack, Typography } from '@mui/material';

function Product() {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Layout>
      <Box minHeight={'100vh'} width='100%'>
        {/* header */}
        <Typography className='mb-5' variant="h4" fontWeight='bold'>Products and services</Typography>
        <Stack direction="row" spacing={2} className='mb-5' alignItems='center'>
          <Typography variant='subtitle2' className='text-gray-500'>Category:</Typography>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Divider />
        {/* product n service */}
        <Box className='mt-5'>
          <Typography className='mb-5' variant="body2" fontWeight='bold'>Products and services</Typography>
        </Box>
      </Box>

    </Layout>
  );
}

export default Product;