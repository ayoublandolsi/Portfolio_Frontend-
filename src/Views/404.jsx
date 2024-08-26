import { Navigate, Link as RouterLink, useNavigate } from 'react-router-dom';
import logo from '../assets/illustrations/illustration_404.svg'
// @mui
import { styled } from '@mui/material/styles';
import { Button, Typography, Container, Box } from '@mui/material';
import { useStateContext } from '../Contexts/ContextProvider';

// ----------------------------------------------------------------------

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function NotFoundPage() {
    const {user}=useStateContext();

  return (
    <>
      <Container>
        <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
          <Typography variant="h3" paragraph>
            Sorry, page not found!
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your
            spelling.
          </Typography>

          <Box
            component="img"
            src={logo}
            sx={{ height: 200, mx: 'auto', my: { xs: 5, sm: 6 } }}
          />
          {user ?(  <Button  to='/dashboard' size="large" variant="contained" component={RouterLink}>
              Go to Home
          </Button>):(  <Button  to='/' size="large" variant="contained" component={RouterLink}>
              Go to Home
          </Button>)}

        </StyledContent>
      </Container>
    </>
  );
}




