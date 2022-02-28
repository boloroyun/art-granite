import Social from '../components/Social';
import Layout from '../components/Layout';
import { Container, Grid, Typography, Avatar } from '@mui/material';
import classes from '../utils/classes';

const About = () => {
  // use your picture
  const avatar1 = '/images/Chandmani.jpg';
  return (
    <Layout title="About Us">
      <Container maxWidth="md">
        <Grid container direction="column" spacing={8}>
          <Grid item>
            <Typography variant="h1" align="center" gutterBottom>
              About Us
            </Typography>
            <Typography variant="h2" align="center">
              This is a Template using Next.js and Material-UI with Header and
              Footer.
            </Typography>
            <Typography variant="body1">
              <br />
              Pro Stone 𝗂𝗌 𝖼𝗈𝗆𝗆𝗂𝗍𝗍𝖾𝖽 𝗍𝗈 𝗉𝗋𝗈𝗏𝗂𝖽𝖾 𝗍𝗈𝗉 𝗊𝗎𝖺𝗅𝗂𝗍𝗒 𝗐𝗈𝗋𝗄 𝗈𝖿 𝖺𝗋𝖼𝗁𝗂𝗍𝖾𝖼𝗍𝗎𝗋𝖾
              𝗌𝗍𝗈𝗇𝖾 𝖺𝗇𝖽 𝗌𝗍𝗈𝗇𝖾 𝖼𝗈𝗎𝗇𝗍𝖾𝗋𝗍𝗈𝗉 𝖿𝖺𝖻𝗋𝗂𝖼𝖺𝗍𝗂𝗈𝗇 𝖺𝗇𝖽 𝗂𝗇𝗌𝗍𝖺𝗅𝗅𝖺𝗍𝗂𝗈𝗇. 𝖶𝖾 𝗌𝗍𝗈𝖼𝗄
              𝗆𝖺𝗇𝗒 𝖼𝗁𝗈𝗂𝖼𝖾𝗌 𝗈𝖿 𝖾𝗑𝗈𝗍𝗂𝖼 𝗌𝗍𝗈𝗇𝖾𝗌 𝖺𝗍 𝗈𝗎𝗋 𝗐𝖺𝗋𝖾𝗁𝗈𝗎𝗌𝖾 𝖺𝗇𝖽 𝗈𝗎𝗋 𝖽𝖾𝗌𝗂𝗀𝗇 /
              𝗌𝖺𝗅𝖾𝗌 𝗌𝗍𝖺𝖿𝖿 𝗐𝗂𝗅𝗅 𝖺𝗌𝗌𝗂𝗌𝗍 𝖾𝖺𝖼𝗁 𝖼𝗎𝗌𝗍𝗈𝗆𝖾𝗋 𝗐𝗂𝗍𝗁 𝗍𝗁𝖾𝗂𝗋 𝗌𝖾𝗅𝖾𝖼𝗍𝗂𝗈𝗇𝗌. 𝖶𝖾
              𝖺𝗅𝗌𝗈 𝗎𝗇𝖽𝖾𝗋𝗍𝖺𝗄𝖾 𝖾𝗑𝗍𝖾𝗇𝗌𝗂𝗏𝖾 𝗐𝗈𝗋𝗄 𝗐𝗂𝗍𝗁 𝖻𝗎𝗂𝗅𝖽𝖾𝗋𝗌 𝖺𝗇𝖽 𝖼𝗈𝗇𝗍𝗋𝖺𝖼𝗍𝗈𝗋𝗌 𝗈𝖿
              𝖼𝗎𝗌𝗍𝗈𝗆 𝖺𝗇𝖽 𝗌𝖾𝗆𝗂-𝖼𝗎𝗌𝗍𝗈𝗆 𝗁𝗈𝗆𝖾𝗌.𝖳𝗁𝖾 𝗊𝗎𝖺𝗅𝗂𝗍𝗒 𝖼𝗎𝗍𝗍𝗂𝗇𝗀 𝗆𝖺𝖼𝗁𝗂𝗇𝖾𝗌
              (𝖼𝗈𝗆𝗉𝗎𝗍𝖾𝗋 𝗇𝗎𝗆𝖾𝗋𝗂𝖼𝖺𝗅𝗅𝗒 𝖼𝗈𝗇𝗍𝗋𝗈𝗅𝗅𝖾𝖽) 𝖽𝗈 𝖺𝗅𝗅 𝗎𝗍𝗍𝗂𝗇𝗀, 𝖾𝖽𝗀𝗂𝗇𝗀, 𝗉𝗈𝗅𝗂𝗌𝗁𝗂𝗇𝗀
              𝖺𝗇𝖽 𝗈𝗍𝗁𝖾𝗋 𝖿𝗂𝗇𝗂𝗌𝗁𝗂𝗇𝗀 𝗉𝗋𝗈𝖼𝖾𝗌𝗌𝖾𝗌. 𝖳𝗁𝗂𝗌 𝗅𝗅𝗈𝗐𝗌 𝖿𝗈𝗋 𝖿𝖺𝗌𝗍𝖾𝗋 𝗉𝗋𝗈𝖽𝗎𝖼𝗍𝗂𝗈𝗇
              𝗍𝗂𝗆𝖾𝗌, 𝗌𝗍𝗋𝖺𝗂𝗀𝗁𝗍 𝗌𝗆𝗈𝗈𝗍𝗁 𝖾𝖽𝗀𝖾𝗌, 𝖺𝗇𝖽 𝖾𝖽𝗎𝖼𝖾𝖽 𝖼𝗈𝗌𝗍𝗌 𝗐𝗁𝗂𝖼𝗁 𝗐𝗂𝗅𝗅 𝖻𝖾
              𝗉𝖺𝗌𝗌𝖾𝖽 𝗈𝗇 𝗍𝗈 𝗈𝗎𝗋 𝗏𝖺𝗅𝗎𝖾𝖽 𝖽𝖾𝖺𝗅𝖾𝗋𝗌 𝖺𝗇𝖽 𝖼𝗎𝗌𝗍𝗈𝗆𝖾𝗋𝗌. 𝖬𝖺𝗇𝗒 𝗈𝖿 𝗍𝗁𝖾
              𝖼𝗈𝗆𝗉𝖺𝗇𝗒’𝗌 𝗉𝗋𝗈𝖽𝗎𝖼𝗍𝗌 𝖺𝗋𝖾 𝗐𝖾𝗅𝗅 𝗄𝗇𝗈𝗐𝗇 𝗂𝗇 𝗍𝗁𝖾 𝗇𝖽𝗎𝗌𝗍𝗋𝗒 𝖺𝗇𝖽 𝖺𝗋𝖾 𝗎𝗌𝖾𝖽 𝖿𝗈𝗋
              𝗄𝗂𝗍𝖼𝗁𝖾𝗇 𝖼𝗈𝗎𝗇𝗍𝖾𝗋 𝗍𝗈𝗉𝗌, 𝗉𝖺𝗋𝗍𝗂𝖺𝗅 𝗈𝗋 𝖿𝗎𝗅𝗅 𝖾𝗂𝗀𝗁𝗍 𝖻𝖺𝖼𝗄𝗌𝗉𝗅𝖺𝗌𝗁𝖾𝗌, 𝖻𝖺𝗍𝗁𝗋𝗈𝗈𝗆
              𝗏𝖺𝗇𝗂𝗍𝗒 𝗍𝗈𝗉𝗌, 𝗁𝗈𝗆𝖾 𝗈𝖿𝖿𝗂𝖼𝖾𝗌, 𝖻𝖺𝗋 𝗍𝗈𝗉𝗌, 𝖿𝗂𝗋𝖾𝗉𝗅𝖺𝖼𝖾 𝗌𝗎𝗋𝗋𝗈𝗎𝗇𝖽𝗌,
              𝗅𝗂𝖻𝗋𝖺𝗋𝗂𝖾𝗌, 𝖺𝗇𝖽 𝖼𝗋𝖾𝖺𝗍𝗂𝗏𝖾𝗅𝗒 - 𝗐𝗂𝗍𝗁𝗂𝗇 𝗈𝖿𝖿𝗂𝖼𝖾 𝖻𝗎𝗂𝗅𝖽𝗂𝗇𝗀𝗌.
            </Typography>
          </Grid>
          <Grid item container spacing={2} alignItems="center">
            <Grid
              item
              container
              md={4}
              direction="column"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                {/* use your picture */}
                <Avatar alt="avatar" src={avatar1} sx={classes.avator} />
              </Grid>
              <Grid item>
                <Typography variant="h6">Fabricator</Typography>
                <Typography variant="h6">Chandmani Erdene Oyodoo</Typography>
              </Grid>

              <Social />
            </Grid>
            <Grid item container md={8}>
              <Typography variant="body1">
                <br />
                Pro stone 𝗂𝗌 𝖼𝗈𝗆𝗆𝗂𝗍𝗍𝖾𝖽 𝗍𝗈 𝗉𝗋𝗈𝗏𝗂𝖽𝖾 𝗍𝗈𝗉 𝗊𝗎𝖺𝗅𝗂𝗍𝗒 𝗐𝗈𝗋𝗄 𝗈𝖿
                𝖺𝗋𝖼𝗁𝗂𝗍𝖾𝖼𝗍𝗎𝗋𝖾 𝗌𝗍𝗈𝗇𝖾 𝖺𝗇𝖽 𝗌𝗍𝗈𝗇𝖾 𝖼𝗈𝗎𝗇𝗍𝖾𝗋𝗍𝗈𝗉 𝖿𝖺𝖻𝗋𝗂𝖼𝖺𝗍𝗂𝗈𝗇 𝖺𝗇𝖽
                𝗂𝗇𝗌𝗍𝖺𝗅𝗅𝖺𝗍𝗂𝗈𝗇. 𝖶𝖾 𝗌𝗍𝗈𝖼𝗄 𝗆𝖺𝗇𝗒 𝖼𝗁𝗈𝗂𝖼𝖾𝗌 𝗈𝖿 𝖾𝗑𝗈𝗍𝗂𝖼 𝗌𝗍𝗈𝗇𝖾𝗌 𝖺𝗍 𝗈𝗎𝗋
                𝗐𝖺𝗋𝖾𝗁𝗈𝗎𝗌𝖾 𝖺𝗇𝖽 𝗈𝗎𝗋 𝖽𝖾𝗌𝗂𝗀𝗇 / 𝗌𝖺𝗅𝖾𝗌 𝗌𝗍𝖺𝖿𝖿 𝗐𝗂𝗅𝗅 𝖺𝗌𝗌𝗂𝗌𝗍 𝖾𝖺𝖼𝗁 𝖼𝗎𝗌𝗍𝗈𝗆𝖾𝗋
                𝗐𝗂𝗍𝗁 𝗍𝗁𝖾𝗂𝗋 𝗌𝖾𝗅𝖾𝖼𝗍𝗂𝗈𝗇𝗌. 𝖶𝖾 𝖺𝗅𝗌𝗈 𝗎𝗇𝖽𝖾𝗋𝗍𝖺𝗄𝖾 𝖾𝗑𝗍𝖾𝗇𝗌𝗂𝗏𝖾 𝗐𝗈𝗋𝗄 𝗐𝗂𝗍𝗁
                𝖻𝗎𝗂𝗅𝖽𝖾𝗋𝗌 𝖺𝗇𝖽 𝖼𝗈𝗇𝗍𝗋𝖺𝖼𝗍𝗈𝗋𝗌 𝗈𝖿 𝖼𝗎𝗌𝗍𝗈𝗆 𝖺𝗇𝖽 𝗌𝖾𝗆𝗂-𝖼𝗎𝗌𝗍𝗈𝗆 𝗁𝗈𝗆𝖾𝗌.𝖳𝗁𝖾
                𝗊𝗎𝖺𝗅𝗂𝗍𝗒 𝖼𝗎𝗍𝗍𝗂𝗇𝗀 𝗆𝖺𝖼𝗁𝗂𝗇𝖾𝗌 (𝖼𝗈𝗆𝗉𝗎𝗍𝖾𝗋 𝗇𝗎𝗆𝖾𝗋𝗂𝖼𝖺𝗅𝗅𝗒 𝖼𝗈𝗇𝗍𝗋𝗈𝗅𝗅𝖾𝖽) 𝖽𝗈
                𝖺𝗅𝗅 𝖼𝗎𝗍𝗍𝗂𝗇𝗀, 𝖾𝖽𝗀𝗂𝗇𝗀, 𝗉𝗈𝗅𝗂𝗌𝗁𝗂𝗇𝗀 𝖺𝗇𝖽 𝗈𝗍𝗁𝖾𝗋 𝖿𝗂𝗇𝗂𝗌𝗁𝗂𝗇𝗀 𝗉𝗋𝗈𝖼𝖾𝗌𝗌𝖾𝗌.
                𝖳𝗁𝗂𝗌 𝖺𝗅𝗅𝗈𝗐𝗌 𝖿𝗈𝗋 𝖿𝖺𝗌𝗍𝖾𝗋 𝗉𝗋𝗈𝖽𝗎𝖼𝗍𝗂𝗈𝗇 𝗍𝗂𝗆𝖾𝗌, 𝗌𝗍𝗋𝖺𝗂𝗀𝗁𝗍 𝗌𝗆𝗈𝗈𝗍𝗁 𝖾𝖽𝗀𝖾𝗌,
                𝖺𝗇𝖽 𝗋𝖾𝖽𝗎𝖼𝖾𝖽 𝖼𝗈𝗌𝗍𝗌 𝗐𝗁𝗂𝖼𝗁 𝗐𝗂𝗅𝗅 𝖻𝖾 𝗉𝖺𝗌𝗌𝖾𝖽 𝗈𝗇 𝗍𝗈 𝗈𝗎𝗋 𝗏𝖺𝗅𝗎𝖾𝖽 𝖽𝖾𝖺𝗅𝖾𝗋𝗌
                𝖺𝗇𝖽 𝖼𝗎𝗌𝗍𝗈𝗆𝖾𝗋𝗌. 𝖬𝖺𝗇𝗒 𝗈𝖿 𝗍𝗁𝖾 𝖼𝗈𝗆𝗉𝖺𝗇𝗒’𝗌 𝗉𝗋𝗈𝖽𝗎𝖼𝗍𝗌 𝖺𝗋𝖾 𝗐𝖾𝗅𝗅 𝗄𝗇𝗈𝗐𝗇 𝗂𝗇
                𝗍𝗁𝖾 𝗂𝗇𝖽𝗎𝗌𝗍𝗋𝗒 𝖺𝗇𝖽 𝖺𝗋𝖾 𝗎𝗌𝖾𝖽 𝖿𝗈𝗋 𝗄𝗂𝗍𝖼𝗁𝖾𝗇 𝖼𝗈𝗎𝗇𝗍𝖾𝗋 𝗍𝗈𝗉𝗌, 𝗉𝖺𝗋𝗍𝗂𝖺𝗅 𝗈𝗋
                𝖿𝗎𝗅𝗅 𝗁𝖾𝗂𝗀𝗁𝗍 𝖻𝖺𝖼𝗄𝗌𝗉𝗅𝖺𝗌𝗁𝖾𝗌, 𝖻𝖺𝗍𝗁𝗋𝗈𝗈𝗆 𝗏𝖺𝗇𝗂𝗍𝗒 𝗍𝗈𝗉𝗌, 𝗁𝗈𝗆𝖾 𝗈𝖿𝖿𝗂𝖼𝖾𝗌,
                𝖻𝖺𝗋 𝗍𝗈𝗉𝗌, 𝖿𝗂𝗋𝖾𝗉𝗅𝖺𝖼𝖾 𝗌𝗎𝗋𝗋𝗈𝗎𝗇𝖽𝗌, 𝗅𝗂𝖻𝗋𝖺𝗋𝗂𝖾𝗌, 𝖺𝗇𝖽 𝖼𝗋𝖾𝖺𝗍𝗂𝗏𝖾𝗅𝗒 -
                𝗐𝗂𝗍𝗁𝗂𝗇 𝗈𝖿𝖿𝗂𝖼𝖾 𝖻𝗎𝗂𝗅𝖽𝗂𝗇𝗀𝗌.
              </Typography>
            </Grid>
          </Grid>
          <Grid item container spacing={2} alignItems="center">
            <Grid
              item
              container
              md={4}
              direction="column"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                {/* use your picture */}
                <Avatar alt="avatar" src={avatar1} sx={classes.avator} />
              </Grid>
              <Grid item>
                <Typography variant="h6">Installer</Typography>
                <Typography variant="h6">Chandmani Erdene Oyodoo</Typography>
              </Grid>

              <Social />
            </Grid>
            <Grid item container md={8}>
              <Typography variant="body1">
                <br />
                𝖠𝗋𝗍 𝖦𝗋𝖺𝗇𝗂𝗍𝖾 𝗂𝗌 𝖼𝗈𝗆𝗆𝗂𝗍𝗍𝖾𝖽 𝗍𝗈 𝗉𝗋𝗈𝗏𝗂𝖽𝖾 𝗍𝗈𝗉 𝗊𝗎𝖺𝗅𝗂𝗍𝗒 𝗐𝗈𝗋𝗄 𝗈𝖿
                𝖺𝗋𝖼𝗁𝗂𝗍𝖾𝖼𝗍𝗎𝗋𝖾 𝗌𝗍𝗈𝗇𝖾 𝖺𝗇𝖽 𝗌𝗍𝗈𝗇𝖾 𝖼𝗈𝗎𝗇𝗍𝖾𝗋𝗍𝗈𝗉 𝖿𝖺𝖻𝗋𝗂𝖼𝖺𝗍𝗂𝗈𝗇 𝖺𝗇𝖽
                𝗂𝗇𝗌𝗍𝖺𝗅𝗅𝖺𝗍𝗂𝗈𝗇. 𝖶𝖾 𝗌𝗍𝗈𝖼𝗄 𝗆𝖺𝗇𝗒 𝖼𝗁𝗈𝗂𝖼𝖾𝗌 𝗈𝖿 𝖾𝗑𝗈𝗍𝗂𝖼 𝗌𝗍𝗈𝗇𝖾𝗌 𝖺𝗍 𝗈𝗎𝗋
                𝗐𝖺𝗋𝖾𝗁𝗈𝗎𝗌𝖾 𝖺𝗇𝖽 𝗈𝗎𝗋 𝖽𝖾𝗌𝗂𝗀𝗇 / 𝗌𝖺𝗅𝖾𝗌 𝗌𝗍𝖺𝖿𝖿 𝗐𝗂𝗅𝗅 𝖺𝗌𝗌𝗂𝗌𝗍 𝖾𝖺𝖼𝗁 𝖼𝗎𝗌𝗍𝗈𝗆𝖾𝗋
                𝗐𝗂𝗍𝗁 𝗍𝗁𝖾𝗂𝗋 𝗌𝖾𝗅𝖾𝖼𝗍𝗂𝗈𝗇𝗌. 𝖶𝖾 𝖺𝗅𝗌𝗈 𝗎𝗇𝖽𝖾𝗋𝗍𝖺𝗄𝖾 𝖾𝗑𝗍𝖾𝗇𝗌𝗂𝗏𝖾 𝗐𝗈𝗋𝗄 𝗐𝗂𝗍𝗁
                𝖻𝗎𝗂𝗅𝖽𝖾𝗋𝗌 𝖺𝗇𝖽 𝖼𝗈𝗇𝗍𝗋𝖺𝖼𝗍𝗈𝗋𝗌 𝗈𝖿 𝖼𝗎𝗌𝗍𝗈𝗆 𝖺𝗇𝖽 𝗌𝖾𝗆𝗂-𝖼𝗎𝗌𝗍𝗈𝗆 𝗁𝗈𝗆𝖾𝗌.𝖳𝗁𝖾
                𝗊𝗎𝖺𝗅𝗂𝗍𝗒 𝖼𝗎𝗍𝗍𝗂𝗇𝗀 𝗆𝖺𝖼𝗁𝗂𝗇𝖾𝗌 (𝖼𝗈𝗆𝗉𝗎𝗍𝖾𝗋 𝗇𝗎𝗆𝖾𝗋𝗂𝖼𝖺𝗅𝗅𝗒 𝖼𝗈𝗇𝗍𝗋𝗈𝗅𝗅𝖾𝖽) 𝖽𝗈
                𝖺𝗅𝗅 𝖼𝗎𝗍𝗍𝗂𝗇𝗀, 𝖾𝖽𝗀𝗂𝗇𝗀, 𝗉𝗈𝗅𝗂𝗌𝗁𝗂𝗇𝗀 𝖺𝗇𝖽 𝗈𝗍𝗁𝖾𝗋 𝖿𝗂𝗇𝗂𝗌𝗁𝗂𝗇𝗀 𝗉𝗋𝗈𝖼𝖾𝗌𝗌𝖾𝗌.
                𝖳𝗁𝗂𝗌 𝖺𝗅𝗅𝗈𝗐𝗌 𝖿𝗈𝗋 𝖿𝖺𝗌𝗍𝖾𝗋 𝗉𝗋𝗈𝖽𝗎𝖼𝗍𝗂𝗈𝗇 𝗍𝗂𝗆𝖾𝗌, 𝗌𝗍𝗋𝖺𝗂𝗀𝗁𝗍 𝗌𝗆𝗈𝗈𝗍𝗁 𝖾𝖽𝗀𝖾𝗌,
                𝖺𝗇𝖽 𝗋𝖾𝖽𝗎𝖼𝖾𝖽 𝖼𝗈𝗌𝗍𝗌 𝗐𝗁𝗂𝖼𝗁 𝗐𝗂𝗅𝗅 𝖻𝖾 𝗉𝖺𝗌𝗌𝖾𝖽 𝗈𝗇 𝗍𝗈 𝗈𝗎𝗋 𝗏𝖺𝗅𝗎𝖾𝖽 𝖽𝖾𝖺𝗅𝖾𝗋𝗌
                𝖺𝗇𝖽 𝖼𝗎𝗌𝗍𝗈𝗆𝖾𝗋𝗌. 𝖬𝖺𝗇𝗒 𝗈𝖿 𝗍𝗁𝖾 𝖼𝗈𝗆𝗉𝖺𝗇𝗒’𝗌 𝗉𝗋𝗈𝖽𝗎𝖼𝗍𝗌 𝖺𝗋𝖾 𝗐𝖾𝗅𝗅 𝗄𝗇𝗈𝗐𝗇 𝗂𝗇
                𝗍𝗁𝖾 𝗂𝗇𝖽𝗎𝗌𝗍𝗋𝗒 𝖺𝗇𝖽 𝖺𝗋𝖾 𝗎𝗌𝖾𝖽 𝖿𝗈𝗋 𝗄𝗂𝗍𝖼𝗁𝖾𝗇 𝖼𝗈𝗎𝗇𝗍𝖾𝗋 𝗍𝗈𝗉𝗌, 𝗉𝖺𝗋𝗍𝗂𝖺𝗅 𝗈𝗋
                𝖿𝗎𝗅𝗅 𝗁𝖾𝗂𝗀𝗁𝗍 𝖻𝖺𝖼𝗄𝗌𝗉𝗅𝖺𝗌𝗁𝖾𝗌, 𝖻𝖺𝗍𝗁𝗋𝗈𝗈𝗆 𝗏𝖺𝗇𝗂𝗍𝗒 𝗍𝗈𝗉𝗌, 𝗁𝗈𝗆𝖾 𝗈𝖿𝖿𝗂𝖼𝖾𝗌,
                𝖻𝖺𝗋 𝗍𝗈𝗉𝗌, 𝖿𝗂𝗋𝖾𝗉𝗅𝖺𝖼𝖾 𝗌𝗎𝗋𝗋𝗈𝗎𝗇𝖽𝗌, 𝗅𝗂𝖻𝗋𝖺𝗋𝗂𝖾𝗌, 𝖺𝗇𝖽 𝖼𝗋𝖾𝖺𝗍𝗂𝗏𝖾𝗅𝗒 -
                𝗐𝗂𝗍𝗁𝗂𝗇 𝗈𝖿𝖿𝗂𝖼𝖾 𝖻𝗎𝗂𝗅𝖽𝗂𝗇𝗀𝗌.
              </Typography>
            </Grid>
          </Grid>
          <Grid item container spacing={2} alignItems="center">
            <Grid
              item
              container
              md={4}
              direction="column"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                {/* use your picture */}
                <Avatar alt="avatar" src={avatar1} sx={classes.avator} />
              </Grid>
              <Grid item>
                <Typography variant="h6">Fabricator</Typography>
                <Typography variant="h6">Chandmani Erdene Oyodoo</Typography>
              </Grid>

              <Social />
            </Grid>
            <Grid item container md={8}>
              <Typography variant="body1">
                <br />
                Pro stone 𝗂𝗌 𝖼𝗈𝗆𝗆𝗂𝗍𝗍𝖾𝖽 𝗍𝗈 𝗉𝗋𝗈𝗏𝗂𝖽𝖾 𝗍𝗈𝗉 𝗊𝗎𝖺𝗅𝗂𝗍𝗒 𝗐𝗈𝗋𝗄 𝗈𝖿
                𝖺𝗋𝖼𝗁𝗂𝗍𝖾𝖼𝗍𝗎𝗋𝖾 𝗌𝗍𝗈𝗇𝖾 𝖺𝗇𝖽 𝗌𝗍𝗈𝗇𝖾 𝖼𝗈𝗎𝗇𝗍𝖾𝗋𝗍𝗈𝗉 𝖿𝖺𝖻𝗋𝗂𝖼𝖺𝗍𝗂𝗈𝗇 𝖺𝗇𝖽
                𝗂𝗇𝗌𝗍𝖺𝗅𝗅𝖺𝗍𝗂𝗈𝗇. 𝖶𝖾 𝗌𝗍𝗈𝖼𝗄 𝗆𝖺𝗇𝗒 𝖼𝗁𝗈𝗂𝖼𝖾𝗌 𝗈𝖿 𝖾𝗑𝗈𝗍𝗂𝖼 𝗌𝗍𝗈𝗇𝖾𝗌 𝖺𝗍 𝗈𝗎𝗋
                𝗐𝖺𝗋𝖾𝗁𝗈𝗎𝗌𝖾 𝖺𝗇𝖽 𝗈𝗎𝗋 𝖽𝖾𝗌𝗂𝗀𝗇 / 𝗌𝖺𝗅𝖾𝗌 𝗌𝗍𝖺𝖿𝖿 𝗐𝗂𝗅𝗅 𝖺𝗌𝗌𝗂𝗌𝗍 𝖾𝖺𝖼𝗁 𝖼𝗎𝗌𝗍𝗈𝗆𝖾𝗋
                𝗐𝗂𝗍𝗁 𝗍𝗁𝖾𝗂𝗋 𝗌𝖾𝗅𝖾𝖼𝗍𝗂𝗈𝗇𝗌. 𝖶𝖾 𝖺𝗅𝗌𝗈 𝗎𝗇𝖽𝖾𝗋𝗍𝖺𝗄𝖾 𝖾𝗑𝗍𝖾𝗇𝗌𝗂𝗏𝖾 𝗐𝗈𝗋𝗄 𝗐𝗂𝗍𝗁
                𝖻𝗎𝗂𝗅𝖽𝖾𝗋𝗌 𝖺𝗇𝖽 𝖼𝗈𝗇𝗍𝗋𝖺𝖼𝗍𝗈𝗋𝗌 𝗈𝖿 𝖼𝗎𝗌𝗍𝗈𝗆 𝖺𝗇𝖽 𝗌𝖾𝗆𝗂-𝖼𝗎𝗌𝗍𝗈𝗆 𝗁𝗈𝗆𝖾𝗌.𝖳𝗁𝖾
                𝗊𝗎𝖺𝗅𝗂𝗍𝗒 𝖼𝗎𝗍𝗍𝗂𝗇𝗀 𝗆𝖺𝖼𝗁𝗂𝗇𝖾𝗌 (𝖼𝗈𝗆𝗉𝗎𝗍𝖾𝗋 𝗇𝗎𝗆𝖾𝗋𝗂𝖼𝖺𝗅𝗅𝗒 𝖼𝗈𝗇𝗍𝗋𝗈𝗅𝗅𝖾𝖽) 𝖽𝗈
                𝖺𝗅𝗅 𝖼𝗎𝗍𝗍𝗂𝗇𝗀, 𝖾𝖽𝗀𝗂𝗇𝗀, 𝗉𝗈𝗅𝗂𝗌𝗁𝗂𝗇𝗀 𝖺𝗇𝖽 𝗈𝗍𝗁𝖾𝗋 𝖿𝗂𝗇𝗂𝗌𝗁𝗂𝗇𝗀 𝗉𝗋𝗈𝖼𝖾𝗌𝗌𝖾𝗌.
                𝖳𝗁𝗂𝗌 𝖺𝗅𝗅𝗈𝗐𝗌 𝖿𝗈𝗋 𝖿𝖺𝗌𝗍𝖾𝗋 𝗉𝗋𝗈𝖽𝗎𝖼𝗍𝗂𝗈𝗇 𝗍𝗂𝗆𝖾𝗌, 𝗌𝗍𝗋𝖺𝗂𝗀𝗁𝗍 𝗌𝗆𝗈𝗈𝗍𝗁 𝖾𝖽𝗀𝖾𝗌,
                𝖺𝗇𝖽 𝗋𝖾𝖽𝗎𝖼𝖾𝖽 𝖼𝗈𝗌𝗍𝗌 𝗐𝗁𝗂𝖼𝗁 𝗐𝗂𝗅𝗅 𝖻𝖾 𝗉𝖺𝗌𝗌𝖾𝖽 𝗈𝗇 𝗍𝗈 𝗈𝗎𝗋 𝗏𝖺𝗅𝗎𝖾𝖽 𝖽𝖾𝖺𝗅𝖾𝗋𝗌
                𝖺𝗇𝖽 𝖼𝗎𝗌𝗍𝗈𝗆𝖾𝗋𝗌. 𝖬𝖺𝗇𝗒 𝗈𝖿 𝗍𝗁𝖾 𝖼𝗈𝗆𝗉𝖺𝗇𝗒’𝗌 𝗉𝗋𝗈𝖽𝗎𝖼𝗍𝗌 𝖺𝗋𝖾 𝗐𝖾𝗅𝗅 𝗄𝗇𝗈𝗐𝗇 𝗂𝗇
                𝗍𝗁𝖾 𝗂𝗇𝖽𝗎𝗌𝗍𝗋𝗒 𝖺𝗇𝖽 𝖺𝗋𝖾 𝗎𝗌𝖾𝖽 𝖿𝗈𝗋 𝗄𝗂𝗍𝖼𝗁𝖾𝗇 𝖼𝗈𝗎𝗇𝗍𝖾𝗋 𝗍𝗈𝗉𝗌, 𝗉𝖺𝗋𝗍𝗂𝖺𝗅 𝗈𝗋
                𝖿𝗎𝗅𝗅 𝗁𝖾𝗂𝗀𝗁𝗍 𝖻𝖺𝖼𝗄𝗌𝗉𝗅𝖺𝗌𝗁𝖾𝗌, 𝖻𝖺𝗍𝗁𝗋𝗈𝗈𝗆 𝗏𝖺𝗇𝗂𝗍𝗒 𝗍𝗈𝗉𝗌, 𝗁𝗈𝗆𝖾 𝗈𝖿𝖿𝗂𝖼𝖾𝗌,
                𝖻𝖺𝗋 𝗍𝗈𝗉𝗌, 𝖿𝗂𝗋𝖾𝗉𝗅𝖺𝖼𝖾 𝗌𝗎𝗋𝗋𝗈𝗎𝗇𝖽𝗌, 𝗅𝗂𝖻𝗋𝖺𝗋𝗂𝖾𝗌, 𝖺𝗇𝖽 𝖼𝗋𝖾𝖺𝗍𝗂𝗏𝖾𝗅𝗒 -
                𝗐𝗂𝗍𝗁𝗂𝗇 𝗈𝖿𝖿𝗂𝖼𝖾 𝖻𝗎𝗂𝗅𝖽𝗂𝗇𝗀𝗌.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default About;
