import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import LanguageIcon from '@mui/icons-material/Language';
import LoginIcon from '@mui/icons-material/Login';
import StarIcon from '@mui/icons-material/Star';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { Button, IconButton, Menu, MenuList, Stack } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LANGUAGE } from 'translation/i18n';
import './nav-bar.style.scss';

const LANGUAGE_OPTION = Object.values(LANGUAGE);

function NavigationBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { t, i18n } = useTranslation();
  const open = Boolean(anchorEl);
  const [currentLanguage, setCurrentLanguage] = useState<string>(LANGUAGE.en);

  const handleChangeLanguage = (language: string) => {
    if (language !== currentLanguage) {
      i18n.changeLanguage(language, () => {
        console.log('Cannot change language');
      });
      setCurrentLanguage(language);
    }

    handleClose();
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="transparent" className="app-bar">
      <Container maxWidth="xl" className="container">
        <Toolbar disableGutters className="toolbar">
          <Typography variant="h5" noWrap component="div" className="mr--MS">
            LOGO
          </Typography>

          <div className="nav-list">
            <Stack direction="row" spacing={2} className="left-list">
              <Button variant="text" size="large" className="nav-button">
                {t('nav.about_me')}
              </Button>

              <div className="register-test">
                <Button
                  aria-haspopup="true"
                  className="nav-button --arrow-icon"
                  variant="text"
                  size="large"
                  endIcon={<ArrowDropDownIcon />}
                >
                  {t('nav.why_onconnect.header')}
                </Button>

                <MenuList className="menu-list">
                  <MenuItem className="nav-menu-item">
                    <WidgetsIcon />

                    <div className="content">
                      <Typography variant="h6" className="title">
                        {t('nav.why_onconnect.title1')}
                      </Typography>
                      <Typography variant="body1" className="description">
                        {t('nav.why_onconnect.description1')}
                      </Typography>
                    </div>
                  </MenuItem>
                  <MenuItem className="nav-menu-item">
                    <DeveloperBoardIcon />

                    <div className="content">
                      <Typography variant="h6" className="title">
                        {t('nav.why_onconnect.title2')}
                      </Typography>
                      <Typography variant="body1" className="description">
                        {t('nav.why_onconnect.description2')}
                      </Typography>
                    </div>
                  </MenuItem>
                  <MenuItem className="nav-menu-item">
                    <StarIcon />

                    <div className="content">
                      <Typography variant="h6" className="title">
                        {t('nav.why_onconnect.title3')}
                      </Typography>
                      <Typography variant="body1" className="description">
                        {t('nav.why_onconnect.description3')}
                      </Typography>
                    </div>
                  </MenuItem>
                </MenuList>
              </div>

              <Button variant="text" size="large" className="nav-button">
                {t('nav.partners')}
              </Button>
            </Stack>

            <Stack className="right-list" direction="row" spacing={2}>
              <Button
                variant="text"
                size="large"
                className="nav-button"
                startIcon={<LoginIcon />}
              >
                {t('nav.login')}
              </Button>

              <Button variant="contained" className="on-connect-button">
                {t('nav.try_it_now')}
              </Button>

              <IconButton
                id="language-button"
                aria-haspopup="true"
                aria-controls={open ? 'language-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                className="nav-button"
                onClick={handleClick}
              >
                <LanguageIcon fontSize="medium" />
              </IconButton>

              <Menu
                id="language-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'language-button',
                }}
              >
                {LANGUAGE_OPTION.map((item) => (
                  <MenuItem
                    key={item}
                    selected={item === currentLanguage}
                    className="menu-item"
                    onClick={() => handleChangeLanguage(item)}
                  >
                    {t(`languages.${item}`)}
                  </MenuItem>
                ))}
              </Menu>
            </Stack>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavigationBar;
