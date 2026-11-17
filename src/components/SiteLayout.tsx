import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function SiteLayout() {
  return (
    <>
      <AppBar position="static" elevation={0} color="default" className="topbar">
        <Container maxWidth="md">
          <Toolbar disableGutters className="toolbar">
            <Typography component={Link} to="/" className="brand">
              Filmes de Animação
            </Typography>

            <Box component="nav" className="nav">
              <NavLink to="/" end>Início</NavLink>
              <NavLink to="/sobre">Sobre</NavLink>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  )
}
