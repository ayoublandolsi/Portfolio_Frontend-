// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Iconify from '../Components/iconify';
import { Icon } from '@iconify/react';
// sections
import {
  AppTasks,
  AppTrafficBySite,
  AppWidgetSummary,
} from '../sections/@dashboard/app';
import { useStateContext } from '../Contexts/ContextProvider';
import VerifyEmail from './auth/verify-email';

// ----------------------------------------------------------------------

export default function Dashbord() {
  const theme = useTheme();
  const {user}=useStateContext();

  return (
    <>


      <Container maxWidth="xl">
        <Typography className=' text-slate-600' variant="h4" sx={{ mb: 5 }}>
        {!user.email_verified_at&&(<VerifyEmail/>)}
         {/*Hi, Welcome {user?.name}*/}
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite
              title="Traffic by Site"
              list={[
                {
                  name: 'FaceBook',
                  value: 3234,
                  icon: <Iconify icon={'eva:facebook-fill'} color="#1877F2" width={32} />,
                },
                {
                  name: 'Google',
                  value: 1212,
                  icon: <Iconify icon={'eva:google-fill'} color="#DF3E30" width={32} />,
                },
                {
                  name: 'Linkedin',
                  value: 1213,
                  icon: <Iconify icon={'eva:linkedin-fill'} color="#006097" width={32} />,
                },
                {
                  name: 'Youtube',
                  value: 100232,
                  icon: <Icon icon="ant-design:youtube-filled" color="red" width={32} />,
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
  <AppTasks
    title="How to Create Your Project"
    list={[
      { id: '2', label: 'Create your account' },
      { id: '1', label: 'Contact me with a message or email' },
      { id: '3', label: 'Accept the project' },
      { id: '4', label: 'Create and test the project' },
      { id: '5', label: 'Pay for and deploy the project' },
    ]}
  />
</Grid>
        </Grid>
      </Container>
    </>
  );
}
